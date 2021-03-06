import React from "react";
import styles from "../videosList.css";
import VideosListTemplate from "../videosListTemplate";

const videosRelated = props => {
  return (
    <div className={styles.realtedWrapper}>
      <VideosListTemplate data={props.data} teams={props.teams} />
    </div>
  );
};

export default videosRelated;
