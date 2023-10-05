import { twMerge } from "tailwind-merge";
import { useCoreValuesStore } from "../../../utils/hooks/useCoreValuesStore";
import Controls from "./Controls";
import Layout from "../../Layout";
import ValueCard from "../../ValueCard";

type StageOneProps = {
  className?: string;
};

function StageOne({ className }: StageOneProps) {
  const currentValue = useCoreValuesStore((state) => state.values[state.index]);

  return (
    <Layout className={twMerge("gap-4", className)}>
      <h1>Does this resonate with you?</h1>
      <ValueCard value={currentValue} />
      <Controls />
    </Layout>
  );
}

export default StageOne;
