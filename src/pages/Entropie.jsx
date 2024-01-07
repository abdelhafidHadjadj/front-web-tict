import React, { useEffect, useState } from "react";
import PopUp from "../components/PopUp";
import axios from "axios";
import ProbFrom2D from "../components/ProbForm2D";

const Entropie = () => {
  const [srcLengthX, setSrcLengthX] = useState(null);
  const [srcLengthY, setSrcLengthY] = useState(null);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [probX, setProbX] = useState(null);
  const [probY, setProbY] = useState(null);
  const [probXY, setProbXY] = useState(null);
  const [dataInputs, setDataInputs] = useState({});
  const [calculationType, setCalculationType] = useState(null);
  const [openFirstForm, setOpenFirstForm] = useState(true);
  const [openSecForm, setOpenSecForm] = useState(false);
  const [openThirForm, setOpenThirForm] = useState(false);
  const getProba = async (e) => {
    e.preventDefault();
    let arr = [];
    for (let i = 0; i < srcLengthX; i++) {
      arr.push(e.target.elements["px-" + i].value * 1);
    }

    if (arr && calculationType) {
      await sendData(
        `http://abdelhafiddev.pythonanywhere.com/calcul-${calculationType.toLowerCase()}`,
        arr
      );
    }
  };

  const getProba2D = async (e) => {
    e.preventDefault();
    let matrix = [];
    let row = [];
    for (let i = 0; i < srcLengthX; i++) {
      row = [];
      for (let j = 0; j < srcLengthY; j++) {
        row.push(e.target.elements[`Px${i + 1}y${j + 1}`].value * 1);
      }
      matrix.push(row);
    }

    if (matrix && calculationType) {
      await sendData(
        `http://abdelhafiddev.pythonanywhere.com/calcul-${calculationType.toLowerCase()}`,
        matrix
      );
    }
  };

  function getProbX(e) {
    if (openFirstForm) {
      setOpenSecForm(true);
      setOpenFirstForm(false);
    }
    e.preventDefault();
    let arr = [];
    for (let i = 0; i < srcLengthX; i++) {
      arr.push(e.target.elements["px-" + i].value * 1);
    }
    return setProbX(arr);
  }
  function getProbY(e) {
    if (openSecForm && calculationType == "ixy") {
      setOpenSecForm(false);
      setOpenThirForm(true);
    }
    if (openFirstForm && calculationType == "hx_y") {
      setOpenFirstForm(false);
      setOpenSecForm(true);
    }
    e.preventDefault();
    let arr = [];
    for (let i = 0; i < srcLengthY; i++) {
      arr.push(e.target.elements["py-" + i].value * 1);
    }
    return setProbY(arr);
  }
  function getProbXY(e) {
    e.preventDefault();
    let matrix = [];
    let row = [];
    for (let i = 0; i < srcLengthX; i++) {
      row = [];
      for (let j = 0; j < srcLengthY; j++) {
        row.push(e.target.elements[`Px${i + 1}y${j + 1}`].value * 1);
      }
      matrix.push(row);
    }
    setProbXY(matrix);
    return getAllproba(matrix);
  }

  const getAllproba = async (matrix) => {
    console.log({ probY, matrix });
    if (calculationType == "hx_y") {
      sendData(
        `http://abdelhafiddev.pythonanywhere.com/calcul-${calculationType.toLowerCase()}`,
        { probY: probY, probXY: matrix }
      );
    }
    if (calculationType == "hy_x") {
      sendData(
        `http://abdelhafiddev.pythonanywhere.com/calcul-${calculationType.toLowerCase()}`,
        { probX: probX, probXY: matrix }
      );
    }
    if (calculationType == "ixy") {
      sendData(
        `http://abdelhafiddev.pythonanywhere.com/calcul-${calculationType.toLowerCase()}`,
        { probX: probX, probY: probY, probXY: matrix }
      );
    }
  };

  const sendData = async (url, data) => {
    await axios
      .post(url, data)
      .then((res) => {
        return setData(res.data);
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <section className="shadow-lg shadow-cyan-500/50 flex flex-col border rounded-lg w-full h-screen p-10">
      <h1 className="text-3xl font-semibold mb-6">Entropie</h1>
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl mb-4">Donnez la taille de la source X</h1>
          <input
            type="number"
            name="nbrSymb"
            id=""
            onInput={(e) => setSrcLengthX(e.target.value)}
            required
          />
        </div>
        <div>
          <h1 className="text-xl mb-4">Donnez la taille de la source Y</h1>
          <input
            type="number"
            name="nbrSymb"
            id=""
            onInput={(e) => setSrcLengthY(e.target.value)}
            required
          />
        </div>
      </div>
      <nav className="flex justify-between my-6">
        <button
          className="border px-10 py-3"
          onClick={() => {
            if (srcLengthX) {
              setOpen(!open);
            } else {
              alert("Donnez la taille de la source X");
            }
            setData(null);
            setCalculationType("hx");
          }}
        >
          H(X)
        </button>
        <button
          className="border px-10 py-3"
          onClick={() => {
            if (srcLengthX) {
              setOpen(!open);
            } else {
              alert("Donnez la taille de la source X");
            }
            setData(null);
            setCalculationType("ix");
          }}
        >
          I(X)
        </button>
        <button
          className="border px-10 py-3"
          onClick={() => {
            if (srcLengthY) {
              setOpen(!open);
            } else {
              alert("Donnez la taille de la source Y");
            }
            setData(null);
            setCalculationType("hy");
          }}
        >
          H(Y)
        </button>
        <button
          className="border px-10 py-3"
          onClick={() => {
            if (srcLengthX && srcLengthY) {
              setOpen(!open);
            } else {
              alert("Donnez la taille de la source X et Y");
            }
            setData(null);
            setCalculationType("ixy");
          }}
        >
          I(X,Y)
        </button>
        <button
          className="border px-10 py-3"
          onClick={() => {
            if (srcLengthX && srcLengthY) {
              setOpen(!open);
            } else {
              alert("Donnez la taille de la source X et Y");
            }
            setData(null);
            setCalculationType("hxy");
          }}
        >
          H(X,Y)
        </button>
        <button
          className="border px-10 py-3"
          onClick={() => {
            if (srcLengthX && srcLengthY) {
              setOpen(!open);
            } else {
              alert("Donnez la taille de la source X et Y");
            }
            setData(null);
            setCalculationType("hx_y");
          }}
        >
          H(X/Y)
        </button>
        <button
          className="border px-10 py-3"
          onClick={() => {
            setCalculationType("hy_x");
            setData(null);
            if (srcLengthX && srcLengthY) {
              setOpen(!open);
            } else {
              alert("Donnez la taille de la source X et Y");
            }
          }}
        >
          H(Y/X)
        </button>
      </nav>
      {open && (
        <PopUp
          srcLength={srcLengthX}
          getProba={getProba}
          getProba2D={getProba2D}
          setOpen={setOpen}
          calculationType={calculationType}
          n={srcLengthX}
          m={srcLengthY}
          getProbX={getProbX}
          getProbY={getProbY}
          getProbXY={getProbXY}
          openFirstForm={openFirstForm}
          setOpenFirstForm={setOpenFirstForm}
          openSecForm={openSecForm}
          setOpenSecForm={setOpenSecForm}
          openThirForm={openThirForm}
          setOpenThirForm={setOpenThirForm}
        />
      )}
      <div className="flex gap-4">
        {data && (
          <>
            {(calculationType == "hx" ||
              calculationType == "hy" ||
              calculationType == "hxy" ||
              calculationType == "hx_y" ||
              calculationType == "hy_x") && (
              <>
                <p className="text-2xl">Entropie = </p>
                <span className="text-2xl font-semibold">
                  {data.toFixed(2)} Bits/Symbole
                </span>
              </>
            )}
          </>
        )}
      </div>
      <div className="flex gap-4">
        {data && (
          <>
            {(calculationType == "ix" || calculationType == "ixy") && (
              <>
                <p className="text-2xl">Quantité d'informations = </p>
                <span className="text-2xl font-semibold">
                  {data.toFixed(2)} Bits/Symbole
                </span>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Entropie;
