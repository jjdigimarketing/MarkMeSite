import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-background border-b border-primary/10">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="font-heading text-xl font-bold text-primary italic">M</span>
            </div>
            <span className="font-heading text-2xl font-bold text-primary">Mark Me</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/packages" 
              className={`font-paragraph text-base transition-colors ${
                isActive('/packages') ? 'text-primary' : 'text-softgraytext hover:text-primary'
              }`}
            >
              Packages
            </Link>
            <Link 
              to="/process" 
              className={`font-paragraph text-base transition-colors ${
                isActive('/process') ? 'text-primary' : 'text-softgraytext hover:text-primary'
              }`}
            >
              Process
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-2 border border-primary text-primary font-paragraph text-base hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
