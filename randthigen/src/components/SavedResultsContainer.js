import styles from "./SavedResultsContainer.module.css";
const SavedResultsContainer = ({results}) => {
  const downloadResults = () => {

    const txtString = results.map((result, index) => `${index + 1}. ${result}`).join('\n');
    const blob = new Blob([txtString], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = 'saved_results.txt';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className={styles.savedresultscontainer}>
      <h1 className={styles.savedResults}>Saved Results</h1>
      <button className={styles.downloadbutton} onClick = {downloadResults}>
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
