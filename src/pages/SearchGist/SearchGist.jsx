import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InputField, ButtonCmp, Alert } from "../../components";
import { SearchGistsAction } from "../../store/actions/gistActions";
import styles from "./SearchGist.module.css";

const SearchGist = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchValue === "") {
      Alert("warning", "Search field are empty!");
      return;
    }
    navigate(`/gistlist/${searchValue}`);
  };

  return (
    <div className={styles.searchGistWrapper}>
      <form onSubmit={submitHandler} className={styles.searchWrapper}>
        <InputField
          placeholder={"Search..."}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className={styles.searchBtnWrapper}>
          <ButtonCmp text={"Search"} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default SearchGist;
