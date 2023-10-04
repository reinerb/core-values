import Controls from "./components/Controls";
import ValueCard from "./components/ValueCard";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Value Cards</h1>
      <ValueCard />
      <Controls />
    </main>
  );
}

export default App;
