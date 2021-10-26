import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  Summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  Winter: {
    text: "Burr, it is chilly",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (lat > 0) {
    return month < 3 || month > 8 ? "Winter" : "Summer";
  }
  return month < 3 || month > 8 ? "Summer" : "Winter";
};

const SeasonDisplay = (props) => {
  const Season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[Season];
  return (
    <div className={`season-display ${Season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
