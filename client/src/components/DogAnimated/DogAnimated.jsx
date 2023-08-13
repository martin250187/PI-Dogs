import React from "react";
import style from "./DogAnimated.module.css";

import { motion } from "framer-motion";
import dogImage from "../../assets/dogWalking.gif";

const Dog = () => {
  return (
    <div className={style.dogContainer}>
      <motion.div
        className={style.dog}
        initial={{ x: 0 }}
        animate={{ x: "100vw" }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        <img src={dogImage} alt="Dog" className={style.image} />
      </motion.div>
    </div>
  );
};

export default Dog;
