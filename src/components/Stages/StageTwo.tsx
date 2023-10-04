import Layout from "../Layout";
import { useCoreValuesStore } from "../../utils/hooks/useCoreValuesStore";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

function StageTwo({ className }: Props) {
  const advance = useCoreValuesStore((state) => state.advance);

  return (
    <Layout className={twMerge("max-w-prose text-center", className)}>
      <h1>Core Values Sort</h1>
      <p>Excellent! You've found the values that resonate the most with you.</p>
      <p>
        Now, look through the values you chose, and select the ones you think
        are the most important.
      </p>
      <button onClick={advance}>Continue</button>
    </Layout>
  );
}

export default StageTwo;
