import React, { useEffect, useState } from "react";
import ProbaForm from "./ProbaForm";
import ProbForm2D from "./ProbForm2D";
const PopUp = ({
  srcLength,
  getProba,
  setOpen,
  calculationType,
  n,
  m,
  getProba2D,
  getProbX,
  getProbY,
  getProbXY,
  openFirstForm,
  openSecForm,
  openThirForm,
  setOpenFirstForm,
  setOpenSecForm,
  setOpenThirForm,
}) => {
  console.log(calculationType);

  return (
    <div className="absolute h-fit bottom-0 left-[20%] right-[20%] top-[40%]  rounded-md bg-[--second-color] z-10 border w-fit shadow-lg shadow-cyan-500/50 px-20 py-10">
      <span
        className="opacity-50 hover:opacity-70 cursor-pointer flex justify-end mt-[-30px] mr-[-60px]"
        onClick={() => {
          setOpen(false);
          setOpenFirstForm(true);
          setOpenSecForm(false);
          setOpenThirForm(false);
        }}
      >
        X
      </span>
      {calculationType === "hx" ||
      calculationType === "hy" ||
      calculationType === "ix" ? (
        <ProbaForm
          nbrProb={srcLength}
          getProba={getProba}
          type={calculationType == "hy" ? "y" : "x"}
        />
      ) : calculationType === "hxy" ? (
        <ProbForm2D n={n} m={m} getProba2D={getProba2D} />
      ) : calculationType === "ixy" ? (
        <div>
          {openFirstForm && (
            <ProbaForm
              nbrProb={n}
              calculationType={calculationType}
              className={"form1"}
              getProbX={getProbX}
              openFirstForm={openFirstForm}
              openSecForm={openSecForm}
              setOpenFirstForm={setOpenFirstForm}
              setOpenSecForm={setOpenSecForm}
            />
          )}
          {openSecForm && (
            <ProbaForm
              nbrProb={m}
              type="y"
              getProbY={getProbY}
              className={"form2"}
              calculationType={calculationType}
              openSecForm={openSecForm}
              setOpenSecForm={setOpenSecForm}
              openThirForm={openThirForm}
              setOpenThirForm={setOpenThirForm}
            />
          )}
          {openThirForm && (
            <ProbForm2D
              n={n}
              m={m}
              calculationType={calculationType}
              getProbXY={getProbXY}
            />
          )}
        </div>
      ) : calculationType === "hx_y" ? (
        <div>
          {openFirstForm && (
            <ProbaForm
              nbrProb={m}
              type="y"
              calculationType={calculationType}
              getProbY={getProbY}
            />
          )}
          {openSecForm && (
            <ProbForm2D
              n={n}
              m={m}
              calculationType={calculationType}
              getProbXY={getProbXY}
            />
          )}
        </div>
      ) : (
        <div>
          {openFirstForm && (
            <ProbaForm
              nbrProb={n}
              calculationType={calculationType}
              getProbX={getProbX}
            />
          )}
          {openSecForm && (
            <ProbForm2D
              n={n}
              m={m}
              calculationType={calculationType}
              getProbXY={getProbXY}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default PopUp;

// function handleProbX(e) {
//   e.preventDefault();
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(e.target.elements["px-" + i].value * 1);
//   }
//   console.log(arr);
//   return setProbX(arr);
// }
// function handleProbY(e) {
//   e.preventDefault();
//   let arr = [];
//   for (let i = 0; i < m; i++) {
//     arr.push(e.target.elements["py-" + i].value * 1);
//   }
//   console.log(probY);
//   return setProbY(arr);
// }
// function handleProbXY(e) {
//   e.preventDefault();
//   let matrix = [];
//   let row = [];
//   for (let i = 0; i < n; i++) {
//     row = [];
//     for (let j = 0; j < m; j++) {
//       row.push(e.target.elements[`Px${i + 1}y${j + 1}`].value * 1);
//     }
//     matrix.push(row);
//   }
//   setProbXY(matrix);
//   if (calculationType == "hx_y") {
//     console.log("hx_y : ", probX, probXY);
//     return getAllProba(probY, probXY);
//   }
//   if (calculationType == "hy_x") {
//     return getAllProba(probX, probXY);
//   }
// }
