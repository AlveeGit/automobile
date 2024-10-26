// Sidebar.js
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import * as Icons from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import sidebarItems from "../../cms/sidebarItems.json";

function Sidebar() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [openMenus, setOpenMenus] = useState({});

  // Toggle submenu visibility
  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  // Recursive function to render menu items
  const renderMenuItems = (items, depth = 0) =>
    items.map((item) => {
      const Icon = Icons[item.icon];
      const isOpen = openMenus[item.label];
      const hasChildren = item.children && item.children.length > 0;

      return (
        <div key={item.label} className={`ml-${depth + 1}`}>
          <button
            onClick={() =>
              hasChildren ? toggleMenu(item.label) : navigate(item.route)
            }
            className="flex items-center justify-between w-full font-semibold mb-2"
          >
            <span className="flex items-center gap-2">
              {Icon && <Icon color="var(--secondary)" />}
              {t(`sidebar.${item.label}`)}
            </span>
            {hasChildren && (
              <FaChevronDown
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            )}
          </button>
          {hasChildren && isOpen && (
            <div className="ml-4">
              {renderMenuItems(item.children, depth + 1)}
            </div>
          )}
        </div>
      );
    });

  return (
    <aside className="h-screen bg-background p-4">
      {renderMenuItems(sidebarItems)}
    </aside>
  );
}

export default Sidebar;
