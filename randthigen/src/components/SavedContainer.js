import React, { useState } from 'react';
import styles from './GenerateContainer.module.css';


const SavedContainer = ({ content, id, onDelete }) => {

  const handleDelete = () => {
    onDelete(id);  // Pass the id back to the parent component for deletion
  };

  return (
    <div className={styles.singlegeneratecontainer}>
      <div className={styles.generatecontainer}>
        {content}
      </div>
      <button className={styles.deletebutton} onClick={handleDelete}>
        <img className={styles.typcndeleteIcon} alt='' src='/typcndelete.svg' />
      </button>
    </div>
  );
};

export default SavedContainer;