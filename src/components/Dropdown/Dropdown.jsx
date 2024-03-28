import {useState} from "react";
import {DropdownList} from "../DropdownList/DropdownList";
import styles from "./Dropdown.module.css";

const items = [
  "Profile Information",
  "Change Password",
  "Become PRO",
  "Help",
  "Log Out",
];

export const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button onClick={() => setOpen(!isOpen)} className={styles.btn}>
        <span>Account Settings</span>
        <i className='material-icons'>public</i>
      </button>
      <DropdownList
        items={items}
        className={`${isOpen ? styles.active : ""}`}
      />
    </div>
  );
};
