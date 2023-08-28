import React, { useState } from 'react';
import axios from 'axios';
import styles from './GenerateContainer.module.css';
import { useSelector } from 'react-redux';

const HistoryContainer = ({ content, id, onDelete }) => {
  const user = useSelector((state) => state.user);  // Get the current user
  const handleDelete = () => {
    onDelete(id);  // Pass the id back to the parent component for deletion
  };
const handleSave = () => {
    if (user && user.uid) {
      axios.post('/api/user/saved', {
        userId: user.uid,
        content: content
      })
      .then(response => {
        console.log("Content saved to user saved:", response.data);
      })
      .catch(error => {
        console.error("Error saving content to user saved:", error);
      });
    }
  };
  return (
    <div className={styles.singlegeneratecontainer}>
      <div className={styles.generatecontainer}>
        {content}
      </div>
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

export default HistoryContainer;