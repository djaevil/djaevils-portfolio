import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import { timelineEvents } from "@/features/timeline/data/timeline";

const AboutPage: React.FC = () => {
  const [showTimeline, setShowTimeline] = useState(false);

  const favoriteArtists = [
    "Dave",
    "Eve",
    "datfootdive",
    "Kendrick Lamar",
    "Nujabes",
    "James Blake",
    "21 Savage",
    "J. Cole",
    "Kenshi Yonezu",
    "Joey Bada$$",
  ];

  const favoriteGames = [
    "Resident Evil Series",
    "League of Legends",
    "The Elder Scrolls V: Skyrim",
    "Baldur's Gate 3",
    "Counter-Strike 2",
    "Portal 2",
    "Cyberpunk 2077",
    "Uncharted: A Thief's End",
    "Dark Souls III",
    "Dying Light",
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="From Curious Kid to Fullstack Developer"
        description="Get to know me, my journey, and what makes me tick."
        badge="About Me"
      />

      {/* Section 1: Professional Introduction */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who am I?</h2>
          <div className="prose prose-lg text-gray-900 space-y-4">
            <p>
              Hi! I'm <span className="font-semibold">Sigge Kingborg</span>,
              otherwise known as <span className="font-semibold">djaevil</span>{" "}
              in many parts of the internet. I'm 23 years old and currently live
              in Sweden, although I was born Switzerland. I love IT and
              technology, and I've been passionate about it since I was a kid.
            </p>
            <p>
              I tend to spend most of my time in front of a computer, so I
              wouldn't call myself very outdoorsy. Despite that, there are few
              things in this world that beat a breath of fresh air and feeling
              the sun reach across your face. If I'm not working on a project or
              learning about new technologies, you can probably find me blasting
              music through my headphones, gaming with some friends, or spending
              quality time with my family.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Timeline (Collapsible) */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              My Timeline
            </h2>
            <p className="text-gray-600 mb-6">
              Key moments that shaped my journey as a developer (what I can
              remember).
            </p>
            <button
              onClick={() => setShowTimeline(!showTimeline)}
              className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors inline-flex items-center gap-2"
            >
              {showTimeline ? (
                <>
                  <span>Hide Timeline</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <span>Show Timeline</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>

          {/* Timeline Content */}
          {showTimeline && (
            <div className="relative mt-12">
              {/* Timeline line - centered */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-green-400 via-gray-300 to-green-400 transform md:-translate-x-1/2"></div>

              {/* Timeline events */}
              <div className="space-y-10">
                {timelineEvents.map((event, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <div key={index} className="relative">
                      {/* Desktop Layout - Alternating sides */}
                      <div className="hidden md:grid md:grid-cols-2 md:gap-12 items-center">
                        {isLeft ? (
                          <>
                            <div className="text-right pr-8">
                              <div className="inline-block mb-2">
                                <div className="text-sm text-green-600 font-mono mb-1">
                                  {event.age}
                                </div>
                                <div className="text-3xl font-bold text-gray-900">
                                  {event.year}
                                </div>
                              </div>
                              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 ml-auto max-w-md hover:shadow-xl transition-shadow">
                                <h3 className="text-gray-900 font-semibold mb-3">
                                  {event.title}
                                </h3>
                                <p className="text-gray-800 text-sm leading-relaxed">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-start items-center"></div>
                          </>
                        ) : (
                          <>
                            <div className="flex justify-end items-center"></div>
                            <div className="pl-8">
                              <div className="inline-block mb-2">
                                <div className="text-sm text-green-600 font-mono mb-1">
                                  {event.age}
                                </div>
                                <div className="text-3xl font-bold text-gray-900">
                                  {event.year}
                                </div>
                              </div>
                              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 max-w-md hover:shadow-xl transition-shadow">
                                <h3 className="text-gray-900 font-semibold mb-3">
                                  {event.title}
                                </h3>
                                <p className="text-gray-800 text-sm leading-relaxed">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      {/* Mobile Layout */}
                      <div className="md:hidden flex gap-6">
                        <div className="flex flex-col items-center shrink-0">
                          <div className="w-14 h-14 mt-1"></div>
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="mb-2">
                            <div className="text-xs text-green-600 font-mono mb-1">
                              {event.age}
                            </div>
                            <div className="text-2xl font-bold text-gray-900">
                              {event.year}
                            </div>
                          </div>
                          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-5 hover:shadow-xl transition-shadow">
                            <h3 className="text-gray-900 mb-3">
                              {event.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Personal Introduction */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            About this website
          </h2>
          <div className="prose prose-lg text-gray-900 space-y-4">
            <p>
              This website is my certainly my developer portfolio, but I want
              and plan for it to become much more than just that. I want it to
              be a unique and engaging space where you interact with my
              projects, not only read about them.
            </p>
            <p>
              I don't want this to be a static site that just sits there. I want
              to keep adding new features, projects, and content over time to
              make it a living, breathing representation of who I am as a
              developer and person.
            </p>
            <p>
              <span className="font-semibold">So stay tuned!</span> There's much
              more to come in the future.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Favorites (Artists & Games) */}
      <section className="py-16 px-8 bg-linear-to-br from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-10">
            Bored already..? Check these out!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Favorite Artists */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                Favorite Artists
              </h3>
              <div className="space-y-1.5">
                {favoriteArtists.map((artist, index) => (
                  <div
                    key={index}
                    className="bg-green-400 text-gray-900 py-1.5 px-3 rounded text-sm font-medium"
                  >
                    {artist}
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Games */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 text-center">
                Favorite Games
              </h3>
              <div className="space-y-1.5">
                {favoriteGames.map((game, index) => (
                  <div
                    key={index}
                    className="bg-green-400 text-gray-900 py-1.5 px-3 rounded text-sm font-medium"
                  >
                    {game}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
