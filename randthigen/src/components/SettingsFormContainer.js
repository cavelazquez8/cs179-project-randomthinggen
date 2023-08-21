import { FormControlLabel, Radio } from "@mui/material";
import styles from "./SettingsFormContainer.module.css";
const SettingsFormContainer = ({onGenerateButtonClick}) => {
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
          label="Fantasy"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
        />
        <FormControlLabel
          label="Sci-Fi"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
        />
      </div>
      <h2 className={styles.generate1}>Generate:</h2>
      <div className={styles.generateradiobuttons}>
        <FormControlLabel
          label="Person"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
        />
        <FormControlLabel
          label="Place"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
        />
      </div>
      <FormControlLabel
        className={styles.generateradiobuttons1}
        label="Thing"
        labelPlacement="end"
        control={<Radio color="primary" size="medium" />}
      />
      <h2 className={styles.ai}>AI:</h2>
      <div className={styles.airadiobuttons}>
        <FormControlLabel
          label="On"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
        />
        <FormControlLabel
          label="Off"
          labelPlacement="end"
          control={<Radio color="primary" size="medium" />}
        />
      </div>
      <div className={styles.aisettings}>
        <div className={styles.aiinput}>
          Height:
         <input className={styles.aisettingtextbox} type="text"/>
        </div>
        <div className={styles.aiinput}>
          Build:
         <input className={styles.aisettingtextbox} type="text"/>
        </div>
        <div className={styles.aiinput}>
          Job:
         <input className={styles.aisettingtextbox} type="text"/>
        </div>
        <div className={styles.aiinput}>
          Hobbies:
         <input className={styles.aisettingtextbox} type="text"/>
        </div>
      </div>
    </div>
  );
};

export default SettingsFormContainer;
