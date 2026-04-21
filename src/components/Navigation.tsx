import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const handleHomeClick = () => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={handleHomeClick}
            className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            MF
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={handleHomeClick}
              className="text-foreground-secondary hover:text-foreground transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollTo("projects")}
              className="text-foreground-secondary hover:text-foreground transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollTo("skills")}
              className="text-foreground-secondary hover:text-foreground transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => handleScrollTo("about")}
              className="text-foreground-secondary hover:text-foreground transition-colors font-medium"
            >
              About
            </button>
            
            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-full w-9 h-9 hover:bg-accent transition-all"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="icon"
              className="rounded-full w-9 h-9"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
            
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="ghost"
              size="icon"
              className="rounded-full w-9 h-9"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-in slide-in-from-top-2">
            <button
              onClick={handleHomeClick}
              className="block w-full text-left py-2 text-foreground-secondary hover:text-foreground transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleScrollTo("projects")}
              className="block w-full text-left py-2 text-foreground-secondary hover:text-foreground transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollTo("skills")}
              className="block w-full text-left py-2 text-foreground-secondary hover:text-foreground transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => handleScrollTo("about")}
              className="block w-full text-left py-2 text-foreground-secondary hover:text-foreground transition-colors font-medium"
            >
              About
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}