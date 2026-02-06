type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
type JsonObject = { [key: string]: JsonValue };
type JsonArray = JsonValue[];

type MessageHandler = (data: JsonObject) => void;

interface WebSocketService {
  connect: (url: string) => void;
  disconnect: () => void;
  send: (event: string, data?: JsonObject) => void;
  on: (event: string, handler: MessageHandler) => void;
  off: (event: string, handler: MessageHandler) => void;
}

class WebSocketClient implements WebSocketService {
  private socket: WebSocket | null = null;
  private listeners: Map<string, Set<MessageHandler>> = new Map();
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private reconnectDelay = 1000;
  private url: string = "";

  connect(url: string): void {
    this.url = url;
    this.createConnection();
  }

  private createConnection(): void {
    if (this.socket?.readyState === WebSocket.OPEN) {
      return;
    }

    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.log("WebSocket connected");
      this.reconnectAttempts = 0;
      this.emit("connected", {});
    };

    this.socket.onmessage = (event: MessageEvent<string>) => {
      try {
        const message = JSON.parse(event.data) as JsonObject;
        const type = message.type as string;
        this.emit(type, message);
      } catch (error) {
        console.error("Failed to parse WebSocket message:", error);
      }
    };

    this.socket.onclose = () => {
      console.log("WebSocket disconnected");
      this.emit("disconnected", {});
      this.attemptReconnect();
    };

    this.socket.onerror = (error: Event) => {
      console.error("WebSocket error:", error);
      this.emit("error", {});
    };
  }

  private attemptReconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(
        `Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`,
      );
      setTimeout(
        () => this.createConnection(),
        this.reconnectDelay * this.reconnectAttempts,
      );
    }
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  send(event: string, data?: JsonObject): void {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ type: event, data }));
    } else {
      console.warn("WebSocket is not connected. Message not sent.");
    }
  }

  on(event: string, handler: MessageHandler): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(handler);
  }

  off(event: string, handler: MessageHandler): void {
    this.listeners.get(event)?.delete(handler);
  }

  private emit(event: string, data: JsonObject): void {
    this.listeners.get(event)?.forEach((handler) => handler(data));
  }
}

// Export a singleton instance
export const wsClient = new WebSocketClient();
