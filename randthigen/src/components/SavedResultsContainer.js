import styles from './SavedResultsContainer.module.css';
import { useSelector } from 'react-redux';

const SavedResultsContainer = ({ results }) => {
	const selection = useSelector((state) => state.selection); 
	const savedResultsStyle = selection.genre === 'Sci-Fi' ? styles.scifisavedresultscontainer : '';
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
			<h1 className={styles.savedResults}>To Download</h1>
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
							<div className={styles.savedsinglecontainer}>{result}</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default SavedResultsContainer;
