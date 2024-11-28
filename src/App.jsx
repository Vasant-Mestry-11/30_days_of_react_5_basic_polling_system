// import "./App.css";
import PollComponent from "./components/PollComponent";

const QUESTIONS_WITH_OPTIONS = [
  {
    id: 1,
    question: "Sample question 1 ?",
    options: [
      { option: "A", count: 0 },
      { option: "B", count: 0 },
      { option: "C", count: 0 },
      { option: "D", count: 0 },
    ],
  },
  {
    id: 2,
    question: "Sample question 2 ?",
    options: [
      { option: "A", count: 0 },
      { option: "B", count: 0 },
      { option: "C", count: 0 },
      { option: "D", count: 0 },
    ],
  },
];

function App() {
  return (
    <div className="bg-primary h-screen">
      <PollComponent questions={QUESTIONS_WITH_OPTIONS} />
    </div>
  );
}

export default App;
