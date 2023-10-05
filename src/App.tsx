import Layout from "./components/Layout";
import StageFive from "./components/Stages/StageFive";
import StageFour from "./components/Stages/StageFour";
import StageOne from "./components/Stages/StageOne/StageOne";
import StageSix from "./components/Stages/StageSix";
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
    case 4:
      return <StageFour />;
    case 5:
      return <StageFive />;
    case 6:
      return <StageSix />;
    default:
      return (
        <Layout>
          <p>You're not supposed to be here. How did you get here?</p>
        </Layout>
      );
  }
}

export default App;
