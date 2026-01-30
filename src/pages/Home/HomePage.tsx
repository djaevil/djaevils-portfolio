import React from "react";


const HomePage: React.FC = () => {
    return (
        <section className="bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-24">
                {/* Hero */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold mb-6">
                        Build faster with a clean architecture
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        A modern React setup with React Router, TypeScript, and Tailwind CSS.
                        Designed for scalability, code splitting, and long-term maintainability.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                            Get Started
                        </button>
                        <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                            Learn More
                        </button>
                    </div>
                </div>


                {/* Feature highlights */}
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">Modular</h3>
                        <p className="text-gray-600 text-sm">
                            Feature-based folder structure that keeps concerns isolated and easy to maintain.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">Scalable</h3>
                        <p className="text-gray-600 text-sm">
                            Built with lazy-loaded routes and layouts so your app grows without slowing down.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-lg font-semibold mb-2">Production-ready</h3>
                        <p className="text-gray-600 text-sm">
                            Type-safe, predictable, and easy to onboard new developers into.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default HomePage;