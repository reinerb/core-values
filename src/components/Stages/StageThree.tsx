import { twMerge } from "tailwind-merge";
import { useCoreValuesStore } from "../../utils/hooks/useCoreValuesStore";
import Layout from "../Layout";
import ValueCard from "../ValueCard";
import { Value } from "../../utils/Values";

type StageThreeProps = {
  className?: string;
};

function StageThree({ className }: StageThreeProps) {
  const values = useCoreValuesStore((state) =>
    state.yesValues.length === 0 ? state.values : state.yesValues,
  );
  const topTen = useCoreValuesStore((state) => state.topTen);
  const toggleTopTen = useCoreValuesStore((state) => state.toggleTopTen);
  const advance = useCoreValuesStore((state) => state.advance);

  const handleChecked = (e: React.ChangeEvent, value: Value) => {
    e.preventDefault;
    toggleTopTen(value);
  };

  return (
    <Layout
      className={twMerge(
        "grid w-fit grid-cols-1 justify-center gap-1 md:grid-cols-2 xl:grid-cols-3",
        className,
      )}
    >
      <p className="col-span-full">Select your 10 most important values.</p>
      {values.map((value) => (
        <div key={value.name} className="group">
          <input
            type="checkbox"
            id={value.name}
            name={value.name}
            className="peer sr-only"
            disabled={topTen.length >= 10 && !topTen.includes(value)}
            checked={topTen.includes(value)}
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
        disabled={topTen.length !== 10}
        onClick={advance}
        className="col-span-full justify-self-end disabled:bg-pink-500"
      >
        Continue
      </button>
    </Layout>
  );
}

export default StageThree;
