import Layout from "../Layout";
import { useCoreValuesStore } from "../../utils/hooks/useCoreValuesStore";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

function StageTwo({ className }: Props) {
  const topFive = useCoreValuesStore((state) => state.topFive);
  const otherFive = useCoreValuesStore((state) =>
    state.topTen.filter((value) => !topFive.includes(value)),
  );

  return (
    <Layout className={twMerge("max-w-prose text-center", className)}>
      <h1>Core Values Sort</h1>
      <p>
        Congratulations! You've narrowed your values down. Here's are the values
        that resonated the most with you:
      </p>
      <h2>Your Top Five</h2>
      <ul className="flex flex-wrap gap-4">
        {topFive.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <h2>Your Top Ten</h2>
      <ul className="flex flex-wrap gap-4">
        {otherFive.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export default StageTwo;
