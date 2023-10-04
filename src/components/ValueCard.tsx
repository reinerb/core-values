import { twMerge } from "tailwind-merge";
import { useCoreValuesStore } from "../utils/hooks/useCoreValuesStore";

type ValueCardProps = {
  className?: string;
};

function ValueCard({ className }: ValueCardProps) {
  const value = useCoreValuesStore((state) => state.values[state.index]);

  return (
    <div
      className={twMerge(
        "flex flex-col items-center gap-4 border border-black px-8 py-4",
        className,
      )}
    >
      <h2 className="text-xl font-semibold">{value.name}</h2>
      <p>{value.description}</p>
    </div>
  );
}

export default ValueCard;
