import styles from "./SideNavbar.module.css";
import { useEffect, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleDoubleDown } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log('Navigation: ', location.pathname)
  // Submenu content
  useEffect(()=> {
    setHoveredItem(null)
    setSelectedMenu(null)
  }, [location.pathname]);
  
  const subMenuContent = {
    dashboard: ["overview", "reports", "analytics", "settings"],
    inventory: ["stock", "orders", "suppliers", "warehouses"],
    "user-management": ["users", "roles", "permissions", "activity-log"],
  };

  return (
    <div className={styles.sidebarContainer}>
      {/* Sidebar */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        {/* Toggle Button */}
        <button className={styles.toggleButton} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
        </button>

        {isOpen && (
          <>
            <div className={styles.header}>
              <img src="/images/logo.png" alt="Company Logo" className={styles.logo} />
            </div>

            <div className={styles.menu}>
              {Object.keys(subMenuContent).map((key) => (
                <div 
                  key={key} 
                  className={styles.menuItem}
                  onMouseEnter={() => setHoveredItem(key)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => setSelectedMenu(key)} // Set the selected menu
                >
                  <span style={{ textTransform: "capitalize" }}>{key.replace("-", " ")}</span>
                  <span className={styles.icon}>
                    {hoveredItem === key || selectedMenu === key ? <FaAngleDoubleRight /> : <FaAngleDoubleDown />}
                  </span>

                  {/* Show submenu when hovering OR when a menu is selected */}
                  {(hoveredItem === key || selectedMenu === key) && (
                    <div className={styles.submenuContainer}>
                      <ul>
                        {subMenuContent[key]?.map((item, index) => (
                          <li key={index} onClick={() => {
                            navigate(`/${key}/${item}`);
                            // setSelectedMenu(key); // Keep submenu open after clicking
                          }}>
                            {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideNavbar;
