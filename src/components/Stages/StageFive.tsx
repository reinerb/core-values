import { twMerge } from "tailwind-merge";
import { useCoreValuesStore } from "../../utils/hooks/useCoreValuesStore";
import Layout from "../Layout";
import ValueCard from "../ValueCard";
import { Value } from "../../utils/Values";

type StageThreeProps = {
  className?: string;
};

function StageThree({ className }: StageThreeProps) {
  const values = useCoreValuesStore((state) => state.topTen);
  const topFive = useCoreValuesStore((state) => state.topFive);
  const toggleTopFive = useCoreValuesStore((state) => state.toggleTopFive);
  const advance = useCoreValuesStore((state) => state.advance);

  const handleChecked = (e: React.ChangeEvent, value: Value) => {
    e.preventDefault;
    toggleTopFive(value);
  };

  return (
    <Layout
      className={twMerge(
        "grid w-fit grid-cols-1 justify-center gap-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",
        className,
      )}
    >
      <p className="col-span-full">Select your five most important values.</p>
      {values.map((value) => (
        <div key={value.name} className="group">
          <input
            type="checkbox"
            id={value.name}
            name={value.name}
            className="peer sr-only"
            disabled={topFive.length >= 5 && !topFive.includes(value)}
            checked={topFive.includes(value)}
            onChange={(e) => handleChecked(e, value)}
          />
          <ValueCard
            as="label"
            htmlFor={value.name}
            value={value}
            className="cursor-pointer peer-checked:border-2 peer-disabled:bg-pink-500"
          />
        </div>
      ))}
      <button
        disabled={topFive.length !== 5}
        onClick={advance}
        className="col-start-3 self-end justify-self-end disabled:bg-pink-500"
      >
        Continue
      </button>
    </Layout>
  );
}

export default StageThree;
