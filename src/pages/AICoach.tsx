import React, { useEffect, useState } from "react";

const goals = ["Muscle Gain", "Fat Loss", "Endurance", "Mobility"];

const AICoach: React.FC = () => {
  const [goal, setGoal] = useState(localStorage.getItem("ironform-goal") || "");
  const [quote, setQuote] = useState("");
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    const quotes = [
      "Discipline beats motivation every single time.",
      "You don’t have to be extreme — just consistent.",
      "Every rep counts toward progress.",
      "Small progress is still progress.",
      "You only fail when you stop trying.",
    ];
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    const tips: Record<string, string[]> = {
      "Muscle Gain": [
        "Increase protein intake to 1.6–2.2 g/kg body weight.",
        "Focus on compound lifts — bench, squat, and deadlift.",
        "Progressive overload is your best friend.",
      ],
      "Fat Loss": [
        "Keep a moderate calorie deficit — not starvation.",
        "Prioritize resistance training to preserve muscle.",
        "Add 2–3 sessions of low-intensity cardio weekly.",
      ],
      "Endurance": [
        "Alternate long steady runs with interval work.",
        "Hydrate before, during, and after training.",
        "Don’t ignore recovery — sleep fuels stamina.",
      ],
      "Mobility": [
        "Include dynamic stretches before workouts.",
        "Yoga or flow sessions 3× a week boost posture.",
        "Consistency matters more than duration here.",
      ],
    };

    if (goal && tips[goal]) {
      setSuggestion(tips[goal][Math.floor(Math.random() * tips[goal].length)]);
    }
  }, [goal]);

  const saveGoal = (g: string) => {
    setGoal(g);
    localStorage.setItem("ironform-goal", g);
  };

  return (
    <section className="relative min-h-screen px-6 py-20 flex flex-col items-center justify-start text-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#06070a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.2),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.15),transparent_70%)] blur-3xl" />

      <div className="relative z-10 max-w-3xl w-full space-y-8">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(99,102,241,0.25)]">
          AI Coach
        </h1>
        <p className="text-gray-400">
          Your personal smart assistant for training strategy, goal setting, and motivation.
        </p>

        {/* Goal Selection */}
        <div className="glass-card p-6 border border-indigo-500/30 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-3">Select Your Goal</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {goals.map((g) => (
              <button
                key={g}
                onClick={() => saveGoal(g)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  goal === g
                    ? "bg-indigo-600 text-white"
                    : "bg-white/10 hover:bg-white/20 text-gray-300"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
          {goal && (
            <p className="text-indigo-400 mt-3 text-sm">
              Goal set to <span className="font-semibold">{goal}</span>
            </p>
          )}
        </div>

        {/* Dynamic Tip */}
        {goal && (
          <div className="glass-card p-6 border border-indigo-500/30 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Today’s Tip</h3>
            <p className="text-gray-300 text-lg">{suggestion}</p>
          </div>
        )}

        {/* Motivation */}
        <div className="glass-card p-6 border border-indigo-500/30 shadow-lg text-center">
          <p className="text-indigo-300 text-lg italic">“{quote}”</p>
        </div>
      </div>
    </section>
  );
};

export default AICoach;
