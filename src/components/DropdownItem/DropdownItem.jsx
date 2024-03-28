import styles from "./DropdownItem.module.css";

export const DropdownItem = ({item}) => {
  return (
    <a href='#' className={styles.link}>
      {item}
    </a>
  );
};
