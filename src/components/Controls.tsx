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
    <div className={twMerge("flex gap-2", className)}>
      <button onClick={rejectValue}>No</button>
      <button onClick={skipValue}>Skip</button>
      <button onClick={acceptValue}>Yes</button>
    </div>
  );
}

export default Controls;
