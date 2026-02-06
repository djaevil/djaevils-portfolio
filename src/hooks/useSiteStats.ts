import { useState, useEffect, useCallback } from "react";
import { wsClient } from "@/services/websocket";

interface SiteStats {
  totalVisits: number;
  clicks: number;
  isConnected: boolean;
}

const WS_URL = import.meta.env.VITE_WS_URL || "ws://localhost:3001";

export function useSiteStats(): SiteStats & { incrementClicks: () => void } {
  const [totalVisits, setTotalVisits] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    wsClient.connect(WS_URL);

    const handleConnected = () => {
      setIsConnected(true);
      // Register a visit when connected
      wsClient.send("visit");
    };

    const handleDisconnected = () => {
      setIsConnected(false);
    };

    // Handle stats updates from your backend
    const handleStats = (data: {
      totalVisits?: number;
      totalClicks?: number;
    }) => {
      if (data.totalVisits !== undefined) {
        setTotalVisits(data.totalVisits);
      }
      if (data.totalClicks !== undefined) {
        setClicks(data.totalClicks);
      }
    };

    wsClient.on("connected", handleConnected);
    wsClient.on("disconnected", handleDisconnected);
    wsClient.on("stats", handleStats);

    return () => {
      wsClient.off("connected", handleConnected);
      wsClient.off("disconnected", handleDisconnected);
      wsClient.off("stats", handleStats);
      wsClient.disconnect();
    };
  }, []);

  const incrementClicks = useCallback(() => {
    wsClient.send("click");
  }, []);

  return {
    totalVisits,
    clicks,
    isConnected,
    incrementClicks,
  };
}
