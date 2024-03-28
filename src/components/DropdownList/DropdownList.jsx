import {DropdownItem} from "../DropdownItem/DropdownItem";
import styles from "./DropdownList.module.css";

export const DropdownList = ({items, className}) => {
  return (
    <ul className={`${styles.dropdown} ${className}`}>
      {items.map((item) => (
        <li className={styles.item} key={item}>
          <DropdownItem item={item} />
        </li>
      ))}
    </ul>
  );
};
