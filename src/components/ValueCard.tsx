import { twMerge } from "tailwind-merge";
import { Value } from "../utils/Values";

type ValueCardProps = {
  value: Value;
  className?: string;
};

function ValueCard({ value, className }: ValueCardProps) {
  return value ? (
    <div
      className={twMerge(
        "flex flex-col items-center gap-4 border border-black px-8 py-4",
        className,
      )}
    >
      <h2 className="text-xl font-semibold">{value.name}</h2>
      <p>{value.description}</p>
    </div>
  ) : (
    <div>No values left. Sorry!</div>
  );
}

export default ValueCard;
