import Layout from "./components/Layout";
import StageOne from "./components/Stages/StageOne/StageOne";
import StageZero from "./components/Stages/StageZero";
import { useCoreValuesStore } from "./utils/hooks/useCoreValuesStore";

function App() {
  const stage = useCoreValuesStore((state) => state.stage);

  switch (stage) {
    case 0:
      return <StageZero />;
    case 1:
      return <StageOne />;
    default:
      return (
        <Layout>
          <p>You're not supposed to be here. How did you get here?</p>
        </Layout>
      );
  }
}

export default App;
