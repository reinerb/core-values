import Layout from "../Layout";
import { useCoreValuesStore } from "../../utils/hooks/useCoreValuesStore";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

function StageZero({ className }: Props) {
  const advance = useCoreValuesStore((state) => state.advance);

  return (
    <Layout className={twMerge("max-w-prose gap-4 text-center", className)}>
      <h1>Core Values Sort</h1>
      <p>
        This activity is designed to help you uncover and prioritize your core
        values. It's a meaningful exercise that can provide clarity about what
        truly matters to you.
      </p>
      <p>
        Here, you'll be presented with a set of 100 cards, each representing a
        different core value. As you go through these cards, you have three
        options for each: "Yes," "No," or "Skip." Choose "Yes" if a value
        resonates with you, "No" if it doesn't, and "Skip" if you're unsure or
        want to come back to it later. Take your time to consider each value,
        and go through all 100 of them.
      </p>
      <button onClick={advance}>Continue</button>
    </Layout>
  );
}

export default StageZero;
