import styles from "./SideNavbar.module.css";
import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {FaAngleDoubleDown } from "react-icons/fa";
const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className={styles.sidebarContainer}>
      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        {/* Toggle Button Always Sticks to Top Right */}
        <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
        </button>

        {isOpen && (
          <>
            <div className={styles.header}>
              <img src="/images/logo.png" alt="Company Logo" className={styles.logo} />
            </div>

            <div className={styles.menu}>
              <div className={styles.menuItem} onClick={() => navigate("/dashboard")}>
                <span>Dashboard</span>
                <FaAngleDoubleDown />

              </div>

              <div className={styles.menuItem} onClick={() => navigate("/inventory")}>
                <span>Inventory</span>
                <FaAngleDoubleDown />

              </div>

              <div className={styles.menuItem} onClick={() => navigate("/user-management")}>
                <span>User Management</span>
                <FaAngleDoubleDown />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideNavbar;
