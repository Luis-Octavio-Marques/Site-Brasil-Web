import { useNavigate, useLocation } from "react-router-dom";
import "./RightNav.css";

function RightNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { label: "AU", path: "/australia" },
    { label: "BR", path: "/brazil" },
    { label: "EG", path: "/egypt" },
    { label: "FR", path: "/france" },
    { label: "JP", path: "/japan" },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="right-nav">
      {pages.map((page, index) => {
        const isSelected = location.pathname === page.path;
        const showTopLine = isSelected && index !== 0;
        const showBottomLine = isSelected && index !== pages.length - 1;

        return (
          <div key={page.label} className="right-nav-item-wrapper">
            {showTopLine && <div className="right-line" />}
            <div
              className={`right-nav-item ${isSelected ? "selected" : ""}`}
              onClick={() => handleNavigate(page.path)}
            >
              <span className="line-number">{page.label}</span>
            </div>
            {showBottomLine && <div className="right-line" />}
          </div>
        );
      })}
    </div>
  );
}

export default RightNav;
