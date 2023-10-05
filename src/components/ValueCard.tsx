import { twMerge } from "tailwind-merge";
import { Value } from "../utils/Values";

type ValueCardOwnProps<C extends React.ElementType> = {
  value: Value;
  as?: C;
};

type ValueCardProps<C extends React.ElementType> = ValueCardOwnProps<C> &
  Omit<React.ComponentProps<C>, keyof ValueCardOwnProps<C>>;

function ValueCard<C extends React.ElementType = "div">({
  value,
  as,
  className,
  ...props
}: ValueCardProps<C>) {
  const Component = as || "div";

  return (
    <Component
      className={twMerge(
        "grid h-36 max-w-md grid-rows-2 justify-items-center gap-4 border border-black px-2 py-1 text-center sm:px-8 sm:py-4",
        className,
      )}
      {...props}
    >
      <h2 className="self-end text-xl font-semibold">{value.name}</h2>
      <p className="self-start">{value.description}</p>
    </Component>
  );
}

export default ValueCard;
