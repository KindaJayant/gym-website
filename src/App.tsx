import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WorkoutPlanner from "./pages/WorkoutPlanner";
import ExerciseLibrary from "./pages/ExerciseLibrary";
import Nutrition from "./pages/Nutrition";
import Articles from "./pages/Articles";
import BeginnersGuide from "./pages/BeginnersGuide";
import AICoach from "./pages/AICoach"; // 👈 new import

export type Page =
  | "home"
  | "planner"
  | "library"
  | "nutrition"
  | "articles"
  | "guide"
  | "coach"; // 👈 added AI Coach page type

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "planner":
        return <WorkoutPlanner />;
      case "library":
        return <ExerciseLibrary />;
      case "nutrition":
        return <Nutrition />;
      case "articles":
        return <Articles />;
      case "guide":
        return <BeginnersGuide />;
      case "coach":
        return <AICoach />; // 👈 new AI Coach page render
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow pt-24">{renderPage()}</main>
    </div>
  );
};

export default App;
