import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Wedding Logo - Centered above links on mobile, to the left on desktop */}
        <div className="text-3xl font-bold font-serif mb-4 md:mb-0 text-rose-600">
          Wedding
        </div>
        
        {/* Navigation Links - Centered */}
        <div className="flex space-x-6 md:space-x-8">
          <Link 
            to="/" 
            onClick={() => scrollToSection('home')} 
            className="hover:text-rose-500 transition-colors font-medium"
          >
            HOME
          </Link>
          <Link 
            to="/" 
            onClick={() => scrollToSection('schedule')} 
            className="hover:text-rose-500 transition-colors font-medium"
          >
            SCHEDULES
          </Link>
          <Link 
            to="/" 
            onClick={() => scrollToSection('rsvp')} 
            className="hover:text-rose-500 transition-colors font-medium"
          >
            RSVP
          </Link>
          <Link 
            to="/" 
            onClick={() => scrollToSection('gallery')} 
            className="hover:text-rose-500 transition-colors font-medium"
          >
            GALLERY
          </Link>
          <Link 
            to="/" 
            onClick={() => scrollToSection('gift')} 
            className="hover:text-rose-500 transition-colors font-medium"
          >
            GIFT REGISTRY
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;