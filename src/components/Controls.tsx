import { twMerge } from "tailwind-merge";
import { useCoreValuesStore } from "../utils/hooks/useCoreValuesStore";

type ControlsProps = {
  className?: string;
};

function Controls({ className }: ControlsProps) {
  const acceptValue = useCoreValuesStore((state) => state.acceptValue);
  const skipValue = useCoreValuesStore((state) => state.skipValue);
  const rejectValue = useCoreValuesStore((state) => state.rejectValue);

  return (
    <>
      <div className={twMerge("flex gap-4", className)}>
        <button onClick={acceptValue}>Yes</button>
        <button onClick={rejectValue}>No</button>
      </div>
      <button onClick={skipValue}>Skip For Now</button>
    </>
  );
}

export default Controls;
