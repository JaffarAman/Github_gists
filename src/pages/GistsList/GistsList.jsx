import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Alert, InputField } from "../../components";
import { SearchGistsAction } from "../../store/actions/gistActions";
import styles from "./GistsList.module.css";
import { HashLoader } from "react-spinners";

const GistsList = () => {
  const { user } = useParams();
  const dispatch = useDispatch();
  const { getGistLoading, getGistData } = useSelector(
    (state) => state.SearchGistsReducer
  );
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (user) {
      dispatch(SearchGistsAction(user));
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchValue === "") {
      Alert("warning", "Search field are empty!");
      return;
    }
    navigate(`/gistlist/${searchValue}`);
  };

  return (
    <div className={styles.gistslistWrapper}>
      <form onSubmit={submitHandler} className={styles.searchBar}>
        <InputField
          placeholder={user}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {!getGistLoading && (
          <small> {getGistData?.length} records found.</small>
        )}
      </form>

      {getGistLoading ? (
        <div className={styles.loaderWrapper}>
          <HashLoader color="#fff" />
        </div>
      ) : (
        <section>
          {getGistData.length ? (
            getGistData.map((gist, index) => {
              return <Gist gist={gist} key={gist.id} />;
            })
          ) : (
            <h2 className={styles.noFound}>NO RECORD FOUND...</h2>
          )}
        </section>
      )}
    </div>
  );
};

const Gist = ({ gist }) => {
  const { description, files, id } = gist || {};
  return (
    <div className={styles.gistWrapper}>
      <NavLink className={styles.gistName} to={`/gistdetail/${id}`}>
        <h3>{description || "No Description."}</h3>
      </NavLink>
      <section>
        {files &&
          Object.values(files).map((file, index) => (
            <button key={index}>{file.language}</button>
          ))}
      </section>
    </div>
  );
};

export default GistsList;
