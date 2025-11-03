import React, { useEffect, useState } from "react";

interface Plan {
  title: string;
  description: string;
  frequency: string;
  workouts: string[];
}

interface Exercise {
  name: string;
  muscle: string;
  equipment: string;
  sets: string;
  reps: string;
  image: string;
}

const STORAGE_KEY = "ironform-plan";
const PROGRESS_KEY = "ironform-progress";

const exerciseLibrary: Record<string, Exercise[]> = {
  Push: [
    {
      name: "Barbell Bench Press",
      muscle: "Chest",
      equipment: "Barbell",
      sets: "4",
      reps: "8–10",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/barbell-bench-press.jpg",
    },
    {
      name: "Incline Dumbbell Press",
      muscle: "Upper Chest",
      equipment: "Dumbbell",
      sets: "3",
      reps: "10–12",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-incline-bench-press.jpg",
    },
    {
      name: "Overhead Shoulder Press",
      muscle: "Shoulders",
      equipment: "Dumbbell",
      sets: "3",
      reps: "10–12",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-standing-overhead-press.jpg",
    },
    {
      name: "Lateral Raise",
      muscle: "Shoulders",
      equipment: "Dumbbell",
      sets: "3",
      reps: "12–15",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-lateral-raise.jpg",
    },
    {
      name: "Triceps Dips",
      muscle: "Triceps",
      equipment: "Bodyweight / Parallel Bars",
      sets: "3",
      reps: "12–15",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/weighted-tricep-dips.jpg",
    },
  ],
  Pull: [
    {
      name: "Barbell Deadlift",
      muscle: "Back, Glutes",
      equipment: "Barbell",
      sets: "4",
      reps: "6–8",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/barbell-deadlift.jpg",
    },
    {
      name: "Pull-Up",
      muscle: "Lats, Biceps",
      equipment: "Bodyweight (Bar)",
      sets: "3",
      reps: "Max",
      image: "https://liftmanual.com/wp-content/uploads/2023/04/pull-up.jpg",
    },
    {
      name: "Barbell Row",
      muscle: "Lats, Rhomboids",
      equipment: "Barbell",
      sets: "3",
      reps: "8–10",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/barbell-bent-over-row.jpg",
    },
    {
      name: "Seated Cable Row",
      muscle: "Mid Back",
      equipment: "Cable",
      sets: "3",
      reps: "10–12",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/seated-cable-row.jpg",
    },
    {
      name: "Barbell Bicep Curl",
      muscle: "Biceps",
      equipment: "Barbell",
      sets: "3",
      reps: "10–12",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/barbell-bicep-curl.jpg",
    },
  ],
  Legs: [
    {
      name: "Back Squat",
      muscle: "Quads, Glutes",
      equipment: "Barbell",
      sets: "4",
      reps: "8–10",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/barbell-back-squat.jpg",
    },
    {
      name: "Leg Press",
      muscle: "Quads, Glutes",
      equipment: "Machine",
      sets: "4",
      reps: "10–12",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/leg-press-machine.jpg",
    },
    {
      name: "Lunges",
      muscle: "Quads, Glutes, Core",
      equipment: "Dumbbell",
      sets: "3",
      reps: "12 each leg",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-lunge.jpg",
    },
    {
      name: "Romanian Deadlift",
      muscle: "Hamstrings",
      equipment: "Barbell",
      sets: "3",
      reps: "10–12",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/romanian-deadlift.jpg",
    },
    {
      name: "Standing Calf Raise",
      muscle: "Calves",
      equipment: "Machine",
      sets: "4",
      reps: "15–20",
      image:
        "https://liftmanual.com/wp-content/uploads/2023/04/standing-calf-raise.jpg",
    },
  ],
};

const plans: Plan[] = [
  {
    title: "Push Pull Legs (PPL)",
    description: "Balanced 6-day split for strength & hypertrophy.",
    frequency: "6 days/week",
    workouts: ["Push", "Pull", "Legs"],
  },
];

const WorkoutPlanner: React.FC = () => {
  const [savedPlan, setSavedPlan] = useState<{ title: string; schedule: string[] } | null>(null);
  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const [progress, setProgress] = useState<boolean[]>(Array(7).fill(false));

  useEffect(() => {
    const planRaw = localStorage.getItem(STORAGE_KEY);
    if (planRaw) setSavedPlan(JSON.parse(planRaw));

    const progRaw = localStorage.getItem(PROGRESS_KEY);
    if (progRaw) setProgress(JSON.parse(progRaw));
  }, []);

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }, [progress]);

  const createPlan = (plan: Plan) => {
    const schedule = [
      "Mon – Push",
      "Tue – Pull",
      "Wed – Legs",
      "Thu – Push",
      "Fri – Pull",
      "Sat – Legs",
      "Sun – Rest / Recovery",
    ];
    const newPlan = { title: plan.title, schedule };
    setSavedPlan(newPlan);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPlan));
  };

  const toggleProgress = (index: number) => {
    const updated = [...progress];
    updated[index] = !updated[index];
    setProgress(updated);
  };

  const resetProgress = () => {
    setProgress(Array(7).fill(false));
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(Array(7).fill(false)));
  };

  const clearAll = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PROGRESS_KEY);
    setSavedPlan(null);
    setProgress(Array(7).fill(false));
  };

  const renderExercises = (type: string) => {
    const list = exerciseLibrary[type];
    if (!list) return <p className="text-gray-500 mt-2">Rest / Recovery</p>;
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {list.map((ex, i) => (
          <div
            key={`${type}-${i}`}
            className="bg-white/[0.05] border border-white/[0.08] rounded-xl p-4 hover:bg-indigo-500/20 transition-all"
          >
            <img
              src={ex.image}
              alt={ex.name}
              className="rounded-lg w-full h-40 object-cover mb-3 border border-indigo-400/20"
            />
            <h4 className="text-white font-semibold text-lg">{ex.name}</h4>
            <p className="text-indigo-300 text-sm">{ex.muscle}</p>
            <p className="text-gray-400 text-sm">Equipment: {ex.equipment}</p>
            <p className="text-gray-400 text-sm">
              {ex.sets} sets × {ex.reps}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const completion = Math.round(
    (progress.filter(Boolean).length / 7) * 100
  );

  return (
    <div className="section space-y-10">
      <header className="text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4">Workout Planner</h1>
        <p className="text-gray-400">
          Track your weekly completion, clear data, or replace plans anytime.
        </p>
      </header>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40">
        <button
          onClick={() => createPlan(plans[0])}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-indigo-500/30 transition-all"
        >
          Create / Replace Plan
        </button>
        <button
          onClick={clearAll}
          className="bg-white/10 hover:bg-white/20 text-gray-200 font-medium px-6 py-3 rounded-full border border-white/20 transition-all"
        >
          Clear All Data
        </button>
      </div>

      {/* Progress Tracker */}
      {savedPlan && (
        <div className="glass-card p-6 border border-indigo-400/30 shadow-lg space-y-4">
          <h3 className="text-2xl font-bold text-white">{savedPlan.title}</h3>
          <div className="w-full bg-white/10 rounded-full h-4 mt-2">
            <div
              className="bg-indigo-500 h-4 rounded-full transition-all"
              style={{ width: `${completion}%` }}
            ></div>
          </div>
          <p className="text-gray-300 text-sm mt-2">
            Weekly completion: <span className="text-indigo-400">{completion}%</span>
          </p>
          <button
            onClick={resetProgress}
            className="text-sm text-gray-400 hover:text-indigo-400 mt-2"
          >
            Reset Progress
          </button>

          {/* Schedule */}
          {savedPlan.schedule.map((day, i) => {
            const [weekday, workout] = day.split(" – ");
            return (
              <div key={i} className="border-b border-white/10 pb-3">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setExpandedDay(expandedDay === i ? null : i)}
                    className="text-left text-gray-200 hover:text-white flex-1"
                  >
                    {day}
                  </button>
                  <input
                    type="checkbox"
                    checked={progress[i]}
                    onChange={() => toggleProgress(i)}
                    className="w-5 h-5 accent-indigo-500 cursor-pointer"
                  />
                </div>
                {expandedDay === i && <div className="mt-4">{renderExercises(workout)}</div>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WorkoutPlanner;
