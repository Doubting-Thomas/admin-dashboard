import React from "react";
import css from "./Topbar.module.css";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLightMode } from "react-icons/md";

const Topbar = () => {
  return (
    <div className={css.topbar}>
      <div className={css.search}>
        <input
          type="text"
          className={css.input}
          placeholder="Search for anything..."
        />

        <BiSearch size={20} />
      </div>

      <div className={css.icon}>
        <MdOutlineLightMode size={20} />
      </div>
    </div>
  );
};
export default Topbar;
