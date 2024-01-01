import React, { useEffect, useState } from "react";
import PopUp from "../components/PopUp";
import axios from "axios";

const Home = () => {
  const [srcLength, setSrcLength] = useState(null);
  const [open, setOpen] = useState(false);
  const [proba, setProba] = useState([]);
  const getProba = async (e) => {
    e.preventDefault();
    let arr = [];
    for (let i = 0; i < srcLength; i++) {
      arr.push(e.target.elements["px-" + i].value * 1);
      console.log("====================================");
      console.log(arr);
      console.log("====================================");
    }

    if (arr) {
      let data = await sendData("http://127.0.0.1:5000/calcul-entropie", arr);
      console.log("====================================");
      console.log(data);
      console.log("====================================");
    }
  };

  const sendData = async (url, data) => {
    await axios
      .post(url, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const getLengthSrc = (e) => {
    e.preventDefault();
    let length = e.target.nbrSymb.value;
    setSrcLength(length);
    setOpen(true);
  };
  return (
    <div className="shadow-lg shadow-cyan-500/50 flex flex-col border rounded-lg w-full h-full p-4">
      <h1>Hi, I'm Abdelhafid Hadjadj, Junior Web Developer</h1>
      <p> Student in Networks and Telecommunications engineering</p>
    </div>
  );
};

export default Home;
