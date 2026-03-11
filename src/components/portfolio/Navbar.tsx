import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects', hasDropdown: true },
  { name: 'Experience', href: '#experience' },
  // { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const [mobileProjectsExpanded, setMobileProjectsExpanded] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
      );
    }
  }, []);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen) {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        );
      }
    }
  }, [isOpen]);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
    setProjectsDropdown(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setProjectsDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProjectsDropdown(false);
    }, 150);
  };

  const handleAllProjects = () => {
    navigate('/projects');
    setIsOpen(false);
    setProjectsDropdown(false);
    setMobileProjectsExpanded(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-effect py-4' : 'py-6'
        }`}
    >
      <div className="container-custom flex items-center justify-between">
        <button
          onClick={handleLogoClick}
          aria-label="Go to homepage"
          className="font-display text-2xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          AJ<span className="text-primary">.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  onClick={() => scrollToSection(link.href)}
                  aria-label={`Navigate to ${link.name} section`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group flex items-center gap-1"
                >
                  {link.name}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${projectsDropdown ? 'rotate-180' : ''}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>

                {projectsDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 glass-effect rounded-xl border border-border/50 p-2 shadow-xl">
                    <button
                      onClick={() => scrollToSection('#projects')}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                    >
                      Featured Projects
                    </button>
                    <button
                      onClick={handleAllProjects}
                      className="w-full text-left px-3 py-2 text-sm rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                    >
                      All Projects
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                aria-label={`Navigate to ${link.name} section`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            )
          )}
          <ThemeToggle />
          <Button
            onClick={() => scrollToSection('#contact')}
            className="magnetic-button"
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden glass-effect mt-4 mx-4 rounded-2xl p-6"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => setMobileProjectsExpanded(!mobileProjectsExpanded)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left w-full flex items-center justify-between"
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProjectsExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileProjectsExpanded && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      <button
                        onClick={() => scrollToSection('#projects')}
                        className="text-base text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        Featured Projects
                      </button>
                      <button
                        onClick={handleAllProjects}
                        className="text-base text-muted-foreground hover:text-primary transition-colors text-left"
                      >
                        All Projects
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  aria-label={`Navigate to ${link.name} section`}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                >
                  {link.name}
                </button>
              )
            )}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="mt-4 w-full"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
