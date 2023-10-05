import Layout from "./components/Layout";
import StageOne from "./components/Stages/StageOne/StageOne";
import StageThree from "./components/Stages/StageThree";
import StageTwo from "./components/Stages/StageTwo";
import StageZero from "./components/Stages/StageZero";
import { useCoreValuesStore } from "./utils/hooks/useCoreValuesStore";

function App() {
  const stage = useCoreValuesStore((state) => state.stage);

  switch (stage) {
    case 0:
      return <StageZero />;
    case 1:
      return <StageOne />;
    case 2:
      return <StageTwo />;
    case 3:
      return <StageThree />;
    default:
      return (
        <Layout>
          <p>You're not supposed to be here. How did you get here?</p>
        </Layout>
      );
  }
}

export default App;
