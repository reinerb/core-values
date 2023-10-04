import React from "react";
import Layout from "../Layout";
import { useCoreValuesStore } from "../../utils/hooks/useCoreValuesStore";

type Props = {
  className?: string;
};

function StageZero({ className }: Props) {
  const advance = useCoreValuesStore((state) => state.advance);

  return (
    <Layout className={className}>
      <h1>Core Values Card Sort</h1>
      <p></p>
      <p>
        Based off of an exercise from psychologists at the University of New
        Mexico. More information and a printable set of cards is available{" "}
        <a
          href="https://www.guilford.com/add/miller11_old/pers_val.pdf"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <button onClick={advance}>Continue</button>
    </Layout>
  );
}

export default StageZero;
