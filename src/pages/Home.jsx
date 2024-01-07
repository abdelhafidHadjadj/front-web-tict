import React, { useEffect, useState } from "react";
import axios from "axios";
import { TbWorldWww } from "react-icons/tb";
import { IoLogoLinkedin } from "react-icons/io5";

const Home = () => {
  return (
    <div className="flex justify-center items-center shadow-lg shadow-cyan-500/50 border rounded-lg w-full h-full p-4">
      <div className="w-[60%]">
        <h1 className="text-xl">Nom: Hadjadj</h1>
        <h1 className="text-xl">Prénom: Abdelhafid</h1>
        <p className="text-xl">
          Etudiant en Licence 3 Génie de Télécommunication et Réseaux
          informatique
        </p>
        <p className="text-xl">Email: hadjadj.abdelhafidh@gmail.com</p>
        <p className="text-xl">Group 1</p>
        <p className="text-xl">Mat°: 191931076688</p>
        <div className="flex gap-4 mt-4">
          <a href="https://abdelhafidhadjadj.netlify.app/">
            <TbWorldWww size={28} />
          </a>
          <a href="https://www.linkedin.com/in/abdelhafidh-hadjadj-3ba602229/">
            <IoLogoLinkedin size={28} />
          </a>
        </div>
      </div>
      <div className="">
        <img
          src="https://res.cloudinary.com/gestionprojet/image/upload/v1677525587/1677525406943_yp8sbz.jpg"
          alt=""
          width={300}
          className="rounded-full shadow-xl"
        />
      </div>
    </div>
  );
};

export default Home;
