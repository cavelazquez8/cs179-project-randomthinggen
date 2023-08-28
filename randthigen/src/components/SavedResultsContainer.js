import styles from './SavedResultsContainer.module.css';
import { useSelector } from 'react-redux';

const SavedResultsContainer = ({ results }) => {
	const selection = useSelector((state) => state.selection); 
	const savedResultsStyle = selection.genre === 'Sci-Fi' ? styles.scifisavedresultscontainer : '';
	const downloadResults = () => {
		const jsonString = JSON.stringify(results, null, 2);
		const blob = new Blob([jsonString], { type: 'application/json' });
		const url = URL.createObjectURL(blob);

		const downloadLink = document.createElement('a');
		downloadLink.href = url;
		downloadLink.download = 'saved_results.json';
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	};
	
	return (
<div className={selection.genre === 'Sci-Fi' ? styles.scifisavedresultscontainer : styles.savedresultscontainer}>
			<h1 className={styles.savedResults}>Saved Results</h1>
			<button className={styles.downloadbutton} onClick={downloadResults}>
				<div className={styles.download}>{`Download `}</div>
				<img
					className={styles.materialSymbolsdownloadIcon}
					alt=''
					src='/materialsymbolsdownload.svg'
				/>
			</button>
			<div className={styles.resultListContainer}>
				{results &&
					results.map((result, index) => (
						<div key={index} className={styles.savedsinglegeneratecontainer}>
							<div className={selection.genre === 'Sci-Fi' ? styles.scifisavedresultscontainer : styles.savedresultscontainer}>{result}</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default SavedResultsContainer;