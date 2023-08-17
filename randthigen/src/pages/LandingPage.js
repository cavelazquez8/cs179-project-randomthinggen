import React, { useState } from "react";
import SavedResultsContainer from "../components/SavedResultsContainer";
import SettingsFormContainer from "../components/SettingsFormContainer";
import GenerateContainer from "../components/GenerateContainer";
import ContainerFooter from "../components/ContainerFooter";
import styles from "./LandingPage.module.css";
import generatecontainer from "../components/GenerateContainer.module.css";
const LandingPage = () => {
  const [generatedContainers, setGeneratedContainers] = useState([]);
  const [savedResults, setSavedResults] = useState([]);
  const handleSave = (content) => {
    setSavedResults(prevResults => [...prevResults, content]);
  };
  const handleGenerateButtonClick = () => {
    setGeneratedContainers((prevContainers) => [
      ...prevContainers,
      <GenerateContainer 
      key={prevContainers.length} 
      className={generatecontainer.generatecontainer}
      onSave={handleSave}
      />,
    ]);
  };

  return (
    <div className={styles.landingPage}>
      <div className={styles.fantasy}>
        <div className={styles.tabcontainer}>
          <div className={styles.selectionmenu}>
            <div className={styles.randomthinggen}>RandomThingGen</div>
            <div className={styles.selectionmenuChild} />
            Saved
            <div className={styles.selectionmenuChild} />
            History
            <div className={styles.selectionmenuChild} />
            Chat
            <div className={styles.selectionmenuChild} />
            Analytics
            <div className={styles.selectionmenuChild} />
            Profile
          </div>
          <button className={styles.loginbutton}>
            <div className={styles.login}>Login</div>
            <img
              className={styles.materialSymbolsloginIcon}
              alt=""
              src="/materialsymbolslogin.svg"
            />
          </button>
        </div>
        <SavedResultsContainer results = {savedResults}/>
        <SettingsFormContainer onGenerateButtonClick={handleGenerateButtonClick} />
        <div className={styles.generationscontainer} style = {{ overflowY: "scroll", height: "100vh"}}>
          {generatedContainers}
        </div>
      </div>
      <ContainerFooter />
      <footer className={styles.copyright}>
        <div className={styles.privacyPolicyParent}>
          <div className={styles.saved}>Privacy Policy</div>
          <div className={styles.saved}>Terms of use</div>
        </div>
        <div className={styles.saved}>Test</div>
      </footer>
    </div>
  );
};

export default LandingPage;
