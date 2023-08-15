import { FormControlLabel, Radio } from "@mui/material";
import styles from "./SettingsFormContainer.module.css";
const SettingsFormContainer = () => {
  return (
    <div className={styles.settingscontainer}>
      <h1 className={styles.settings}>Settings</h1>
      <button className={styles.generatebutton}>
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
          <div className={styles.height}>Height:</div>
          <div className={styles.aisettingtextbox}>
            <div className={styles.tall}>Tall</div>
          </div>
        </div>
        <div className={styles.aiinput}>
          <div className={styles.height}>Build:</div>
          <div className={styles.aisettingtextbox}>
            <div className={styles.tall}>Thin</div>
          </div>
        </div>
        <div className={styles.aiinput}>
          <div className={styles.height}>Job:</div>
          <div className={styles.aisettingtextbox}>
            <div className={styles.tall}>Welder</div>
          </div>
        </div>
        <div className={styles.aiinput}>
          <div className={styles.height}>Hobbies:</div>
          <div className={styles.aisettingtextbox}>
            <div className={styles.tall}>
              <p className={styles.reading}>Reading</p>
              <p className={styles.reading}>Writing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsFormContainer;
