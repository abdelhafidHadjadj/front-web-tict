import React from "react";
import { useState } from "react";
const ProbaForm = ({
  nbrProb,
  getProba,
  type = "x",
  calculationType,
  handleDisplay,
  className,
  getProbX,
  getProbY,
}) => {
  const inputs = [];
  const [isSumEqualToOne, setIsSumEqualToOne] = useState(true);
  for (let i = 0; i < nbrProb; i++) {
    inputs.push(
      <div className="flex items-center gap-4">
        <label htmlFor={`px-${i}`}>Probabilité {i + 1}</label>
        <input
          key={i}
          type="number"
          step={0.01}
          name={`${type == "y" ? "py" : "px"}-${i}`}
          id={`input-${i}`}
          onInput={verifySum}
          className={`input${type == "x" ? "X" : "Y"}`}
          required
        />
      </div>
    );
  }

  function verifySum() {
    const sum = calculateSum();
    setIsSumEqualToOne(sum == 1);
  }

  function calculateSum() {
    let sum = 0;
    let inputClass = type == "x" ? ".inputX" : ".inputY";
    document.querySelectorAll(inputClass).forEach((input) => {
      sum += parseFloat(input.value) || 0;
    });
    console.log(sum.toFixed(2));
    return sum.toFixed(2);
  }

  return (
    <div className={`${className} flex justify-center flex-col gap-4`}>
      <h1 className="text-xl flex justify-center">
        Insérez les probabilités de {type}
      </h1>
      <form
        onSubmit={
          calculationType == "hx_y"
            ? getProbY
            : calculationType == "hy_x"
            ? getProbX
            : calculationType == "ixy" && type == "x"
            ? getProbX
            : calculationType == "ixy" && type == "y"
            ? getProbY
            : getProba
        }
        className="flex flex-col gap-4"
      >
        {inputs}
        {calculationType == "ixy" ||
        calculationType == "hx_y" ||
        calculationType == "hy_x" ? (
          <button disabled={!isSumEqualToOne} type="submit">
            Next
          </button>
        ) : (
          <input type="submit" value={"Calculer"} disabled={!isSumEqualToOne} />
        )}
        {!isSumEqualToOne && <p>Sum must be equal to 1</p>}
      </form>
    </div>
  );
};

export default ProbaForm;
