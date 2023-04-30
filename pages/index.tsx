import { useEffect, useState } from "react";

const buttonTitles = {
  IDLE: "Idle",
  SUBMITTING: "Submitting...",
  SUBMITTED: "Clicked",
};

const HomePage = () => {
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [buttonState, setButtonState] = useState<
    "IDLE" | "SUBMITTING" | "SUBMITTED"
  >("IDLE");

  useEffect(() => {
    if (buttonState === "SUBMITTING") {
      const timeOut = setTimeout(() => {
        setButtonState("SUBMITTED");
        setButtonClickCount((count) => count + 1);
      }, 2000);
      return () => clearTimeout(timeOut);
    }
  }, [buttonState]);

  return (
    <main className={`flex min-h-screen items-center justify-center p-24`}>
      <div className="max-w-xl mx-auto px-4 w-full">
        <h2>{buttonTitles[buttonState]}</h2>
        <button
          onClick={() => setButtonState("SUBMITTING")}
          disabled={buttonState === "SUBMITTING"}
          className="mt-4 px-8 py-2 text-xl bg-blue-100 text-blue-700 font-bold rounded disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-wait"
        >
          Click Me
        </button>
        <p className="mt-4">Button clicks: {buttonClickCount}</p>
      </div>
    </main>
  );
};

export default HomePage;
