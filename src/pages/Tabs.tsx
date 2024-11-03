import { Link, useLocation } from "react-router-dom";
import "../Tabs.css";

const Tabs: React.FC = () => {
  const location = useLocation();
  const handleTabClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="tabs">
        {location.pathname !== "/" && (
          <Link
            to="/"
            className="tab-button home-button"
            onClick={handleTabClick}
          >
            Home
          </Link>
        )}
        <Link
          to="/vratamDetails"
          className={`tab-button ${
            location.pathname === "/vratamDetails" ? "active" : ""
          }`}
          onClick={handleTabClick}
        >
          Sai Baba Vratam Details
        </Link>
        <Link
          to="/astottaram"
          className={`tab-button ${
            location.pathname === "/astottaram" ? "active" : ""
          }`}
          onClick={handleTabClick}
        >
          Ashtottaram (108 names)
        </Link>
        <Link
          to="/saiBabaVrataKatha"
          className={`tab-button ${
            location.pathname === "/saiBabaVrataKatha" ? "active" : ""
          }`}
          onClick={handleTabClick}
        >
          Vratakatha (Short Stories)
        </Link>
        <Link
          to="/aarti"
          className={`tab-button ${
            location.pathname === "/aarti" ? "active" : ""
          }`}
          onClick={handleTabClick}
        >
          Mangala Aarti
        </Link>
        <Link
          to="/saiBabaBhajans"
          className={`tab-button ${
            location.pathname === "/saiBabaBhajans" ? "active" : ""
          }`}
          onClick={handleTabClick}
        >
          Sai Baba Bhajans
        </Link>
      </div>

      <div className="footer-container">
        <footer>
          <p>
            Copyright © 2024 Venkata Lakshmi Narasimha, Devulapalli. All rights
            reserved.
          </p>
          <p>
            Contact:{" "}
            <a href="mailto:baludevulapalli@gmail.com">
              baludevulapalli@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Tabs;
