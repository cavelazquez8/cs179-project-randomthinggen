import styles from "./GenerateContainer.module.css";
const GenerateContainer = () => {
  return (
    <div className={styles.singlegeneratecontainer}>
      <div className={styles.generatecontainer}>
        <p className={styles.generatecontainer1}>GenerateContainer</p>
      </div>
      <button className={styles.saveParent}>
        <div className={styles.save}>Save</div>
        <img
          className={styles.materialSymbolssaveIcon}
          alt=""
          src="/materialsymbolssave.svg"
        />
      </button>
    </div>
  );
};

export default GenerateContainer;
