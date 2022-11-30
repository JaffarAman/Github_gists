import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AvatarCmp } from "../../components";
import { GistDetailAction } from "../../store/actions/gistActions";
import styles from "./GistDetail.module.css";
import { HashLoader } from "react-spinners";

const GistDetail = () => {
  const { gistId } = useParams();
  const dispatch = useDispatch();
  const { gistDetailLoading, gistDetailData } = useSelector(
    (state) => state.GistsDetailReducer
  );

  useEffect(() => {
    if (gistId) {
      dispatch(GistDetailAction(gistId));
    }
  }, []);

  return (
    <div className={styles.gistdetailWrapper}>
      {gistDetailLoading ? (
        <div className={styles.loaderWrapper}>
          <HashLoader color="#fff" />
        </div>
      ) : (
        <section className={styles.detailCard}>
          <UserInfo
            user={gistDetailData?.owner}
            files={gistDetailData?.files}
          />
          <GistInfo
            description={gistDetailData?.description}
            files={gistDetailData?.files}
            forks={gistDetailData?.forks}
          />
        </section>
      )}
    </div>
  );
};

const UserInfo = ({ user, files }) => {
  const { login, avatar_url, html_url } = user || {};
  return (
    <div className={styles.UserWrapper}>
      <div className={styles.userInfo}>
        <a href={html_url} target={"_blank"}>
          <AvatarCmp img={avatar_url} />
        </a>
        <h3 className={styles.UserName}>{login}</h3>
      </div>
      <section>
        {files &&
          Object.values(files).map((file, index) => (
            <button key={index}>{file.language}</button>
          ))}
      </section>
    </div>
  );
};

const GistInfo = ({ description, files, forks }) => {
  return (
    <section className={styles.gistsInfoWrapper}>
      <div>
        <div className={styles.gistDesc}>
          <p>Description: {description || "No Description."}</p>
        </div>

        <div className={styles.gistFiles}>
          <p>File:</p>
          {files ? (
            Object.values(files)?.map((file, index) => (
              <a href={file?.raw_url} key={index} target={"_blank"}>
                <p>{file?.filename}</p>
              </a>
            ))
          ) : (
            <p>No File.</p>
          )}
        </div>

        <div className={styles.gistForks}>
          <p>Forks:</p>
          {forks?.length ? (
            forks?.map((fork) => (
              <div key={fork.id} className={styles.forkWrapper}>
                <a target={"_blank"} href={fork?.user?.html_url}>
                  <AvatarCmp img={fork?.user?.avatar_url} />
                </a>
                <p>{fork?.user?.login}</p>
              </div>
            ))
          ) : (
            <p>No Fork.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GistDetail;
