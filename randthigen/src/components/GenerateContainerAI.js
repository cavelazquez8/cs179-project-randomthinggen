import React, { useState } from 'react';
import styles from './GenerateContainer.module.css';

const GenerateContainerAI = (props) => {
	const boxCont = props.text;

	const [content, setContent] = useState(boxCont); // Default content
	const handleSave = () => {
		props.onSave(boxCont);
	};
	const handleDelete = () => {
		//deletion code here
		console.log('delete attempt');
	};
	console.log(content);
	return (
		<div className={styles.singlegeneratecontainer}>
			<div className={styles.generatecontainer}>{boxCont}</div>
			<button className={styles.savegeneratebutton} onClick={handleSave}>
				<div className={styles.save}>Save</div>
				<img
					className={styles.materialSymbolssaveIcon}
					alt=''
					src='/materialsymbolssave.svg'
				/>
			</button>
			<button className={styles.deletebutton} onClick={handleDelete}>
				<img className={styles.typcndeleteIcon} alt='' src='/typcndelete.svg' />
			</button>
		</div>
	);
};

export default GenerateContainerAI;