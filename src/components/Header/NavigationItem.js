import styles from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const NavigationItem = ({ path, description }) => {
  return (
    <li className={styles.item}>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? styles.active : "")}
        end
      >
        {description}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
