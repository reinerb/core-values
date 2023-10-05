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
      <p>
        Now that you've narrowed your core values down, it's time to narrow them
        further. Choose five of the values you chose previously that you believe
        are the most important to you.
      </p>
      <button onClick={advance}>Continue</button>
    </Layout>
  );
}

export default StageTwo;
