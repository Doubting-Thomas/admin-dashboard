import React from "react";
import css from "./Topbar.module.css";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLightMode } from "react-icons/md";

const Topbar = () => {
  return (
    <div className={css.topbar}>
      <div className={css.topbar__search}>
        <input
          type="text"
          className={css.topbar__input}
          placeholder="Search for anything..."
        />

        <BiSearch size={20} />
      </div>

      <div className={css.topbar__icon}>
        <MdOutlineLightMode size={20} />
      </div>
    </div>
  );
};
export default Topbar;
