import React from "react";

const Home: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Background glow layers */}
      <div className="absolute inset-0 bg-[#06070a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.2),transparent_60%)] blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-white mb-6 drop-shadow-[0_0_20px_rgba(99,102,241,0.25)]">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            IronForm
          </span>
          <br />
          <span className="text-gray-200">Train Smarter, Live Stronger</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-10">
          Discover a science-backed, data-driven approach to training, nutrition,
          and recovery. The ultimate digital space for modern fitness learners.
        </p>

        <button className="btn-primary text-lg px-8 py-4 shadow-lg">
          Start Your Journey
        </button>
      </div>

      {/* Bottom subtle overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#06070a] via-transparent to-transparent" />
    </section>
  );
};

export default Home;
