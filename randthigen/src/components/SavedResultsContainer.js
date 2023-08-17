import styles from "./SavedResultsContainer.module.css";
const SavedResultsContainer = ({results}) => {
  return (
    <div className={styles.savedresultscontainer}>
      <h1 className={styles.savedResults}>Saved Results</h1>
      <button className={styles.downloadbutton}>
        <div className={styles.download}>{`Download `}</div>
        <img
          className={styles.materialSymbolsdownloadIcon}
          alt=""
          src="/materialsymbolsdownload.svg"
        />
      </button>
     {results.map((result, index) => (
        <div key={index} className={styles.savedsinglegeneratecontainer}>
          <div className={styles.savedsinglegenerate}>{result}</div>
        </div>
      ))}
    </div>
  );
};

export default SavedResultsContainer;
