import React from "react";
import { useState } from "react";

const ProbForm2D = ({ n, m, getProba2D, calculationType, getProbXY }) => {
  const [isSumEqualToOne, setIsSumEqualToOne] = useState(true);
  const inputs = [];
  for (let i = 0; i < n; i++) {
    const innerInputs = [];
    for (let j = 0; j < m; j++) {
      innerInputs.push(
        <div key={`${i}-${j}`}>
          <label>
            Px{i + 1}y{j + 1}
          </label>
          <input
            className="inputxy m-2 w-28"
            type="number"
            onInput={verifySum}
            name={`Px${i + 1}y${j + 1}`}
            required
            step={0.001}
          />
        </div>
      );
    }
    inputs.push(
      <div className="flex gap-4" key={i}>
        {innerInputs}
      </div>
    );
  }

  console.log(inputs);
  function verifySum() {
    const sum = calculateSum();
    setIsSumEqualToOne(sum == 1);
  }

  function calculateSum() {
    let sum = 0;
    document.querySelectorAll(".inputxy").forEach((input) => {
      sum += parseFloat(input.value) || 0;
    });
    console.log(sum.toFixed(3));
    return sum.toFixed(3);
  }

  return (
    <div>
      <form
        onSubmit={
          calculationType == "hx_y" ||
          calculationType == "ixy" ||
          calculationType == "hy_x"
            ? getProbXY
            : getProba2D
        }
      >
        <h1 className="text-xl flex justify-center">
          Insérez les probabilités
        </h1>
        <div>{inputs}</div>
        <input type="submit" value={"Calculer"} disabled={!isSumEqualToOne} />
        {!isSumEqualToOne && <p>Sum must be equal to 1</p>}
      </form>
    </div>
  );
};

export default ProbForm2D;
