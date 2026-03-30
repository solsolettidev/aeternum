import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, User, Users, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Gallery", path: "/gallery" },
  { label: "Albums", path: "/albums" },
  { label: "Friends", path: "/friends" },
  { label: "Profile", path: "/profile" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Camera className="w-5 h-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-serif text-xl tracking-wide text-foreground">Mémoira</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-sans tracking-wide transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="h-px bg-primary mt-1"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Sign in
          </Link>
          <Link
            to="/login"
            className="text-sm font-sans bg-primary text-primary-foreground px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            Get started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-sans bg-primary text-primary-foreground px-5 py-2 rounded-full text-center hover:opacity-90 transition-opacity mt-2"
            >
              Get started
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
