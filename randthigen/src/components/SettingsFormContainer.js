import React, { useState } from "react";
import { FormControlLabel, Radio } from "@mui/material";
import styles from "./SettingsFormContainer.module.css";
const SettingsFormContainer = ({ onGenerateButtonClick }) => {
  const [selectedGenre, setSelectedGenre] = useState("Fantasy"); //ADDED (Default genre "Fantasy")

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const [selectedGenerateType, setSelectedGenerateType] = useState("Person"); // ADDED (Default value "Person")

  const handleGenerateTypeChange = (event) => {
    setSelectedGenerateType(event.target.value);
  };

  const [selectedAI, setSelectedAI] = useState("On"); // ADDED (Default value "On")

  const handleAIChange = (event) => {
    setSelectedAI(event.target.value);
  };

  return (
    <div className={styles.settingscontainer}>
      <h1 className={styles.settings}>Settings</h1>
      <button className={styles.generatebutton} onClick = {onGenerateButtonClick}>
        <div className={styles.generate}>Generate</div>
        <img className={styles.mdimagicIcon} alt="" src="/mdimagic.svg" />
      </button>
      <h2 className={styles.genre}>Genre:</h2>
      <div className={styles.genreradiobuttons}>
        <FormControlLabel
          value="Fantasy" //ADDED
          label="Fantasy"
          labelPlacement="end"
          control={<Radio
            color="primary"
            size="medium"
            checked={selectedGenre === "Fantasy"} //ADDED
            onChange={handleGenreChange} />} //ADDED
        />
        <FormControlLabel
          value="Sci-Fi"
          label="Sci-Fi"
          labelPlacement="end"
          control={<Radio
            color="primary"
            size="medium"
            checked={selectedGenre === "Sci-Fi"} //ADDED
            onChange={handleGenreChange} //ADDED
          />}
        />
      </div>
      <h2 className={styles.generate1}>Generate:</h2>
      <div className={styles.generateradiobuttons}>
        <FormControlLabel
          value="Person" //ADDED
          label="Person"
          labelPlacement="end"
          control={
            <Radio
              color="primary"
              size="medium"
              checked={selectedGenerateType === "Person"} //ADDED
              onChange={handleGenerateTypeChange} //ADDED
            />}
        />
        <FormControlLabel
          value="Place" //ADDED
          label="Place"
          labelPlacement="end"
          control={
            <Radio color="primary"
              size="medium"
              checked={selectedGenerateType === "Place"} //ADDED
              onChange={handleGenerateTypeChange} //ADDED
            />}
        />
      </div>
      <FormControlLabel
        className={styles.generateradiobuttons1}
        value="Thing" //ADDED
        label="Thing"
        labelPlacement="end"
        control={
          <Radio
            color="primary"
            size="medium"
            checked={selectedGenerateType === "Thing"} //ADDED
            onChange={handleGenerateTypeChange} //ADDED
          />}
      />
      <h2 className={styles.ai}>AI:</h2>
      <div className={styles.airadiobuttons}>
        <FormControlLabel
          value="On" //ADDED
          label="On"
          labelPlacement="end"
          control={
            <Radio
              color="primary"
              size="medium"
              checked={selectedAI === "On"} //ADDED
              onChange={handleAIChange} //ADDED
            />}
        />
        <FormControlLabel
          value="Off"//ADDED
          label="Off"
          labelPlacement="end"
          control={<Radio
            color="primary"
            size="medium"
            checked={selectedAI === "Off"} //ADDED
            onChange={handleAIChange} />} //ADDED
        />
      </div>
      <div className={styles.aisettings}>
        <div className={styles.aiinput}>
          Height:
          <div className={styles.aisettingtextbox}>
            Tall
          </div>
        </div>
        <div className={styles.aiinput}>
          Build:
          <div className={styles.aisettingtextbox}>
            Thin
          </div>
        </div>
        <div className={styles.aiinput}>
          Job:
          <div className={styles.aisettingtextbox}>
            Welder
          </div>
        </div>
        <div className={styles.aiinput}>
          Hobbies:
          <div className={styles.aisettingtextbox}>
            Reading, Writing
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsFormContainer;
