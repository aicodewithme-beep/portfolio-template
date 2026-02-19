import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { profile } from "../../../data/profile"; // ✅ import profile data

const Navbar = () => {
  const { github, linkedin } = profile.contact; // ✅ destructure links

  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />

      <div className="wrapper">
        {/* Name Animation */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {profile.name}
        </motion.span>

        {/* Social Links */}
        <div className="social">
          {/* GitHub */}
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <img src="/github.png" alt="GitHub" />
            </a>
          )}

          {/* LinkedIn */}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
