// import React, { useState, useEffect } from 'react';
// import { Menu, X, Search, Globe } from 'lucide-react';
// import { Link } from './ui/Link';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
//         }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center gap-2">
//               <Globe className="h-8 w-8 text-blue-500" />
//               <span className="text-xl font-bold text-white">EsportsTracker</span>
//             </Link>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-4">
//               <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 Home
//               </Link>
//               {/* <Link to="/tournaments" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 Tournaments
//               </Link> */}
//               <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 About
//               </Link>
//               <Link to="/teams" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 Teams
//               </Link>
//               {/* <Link to="/stats" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 Stats
//               </Link> */}
//               <div className="relative ml-4">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Search className="h-4 w-4 text-gray-400" />
//                 </div>
//                 <input
//                   className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200"
//                   placeholder="Search..."
//                   type="search"
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
//           <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//             Home
//           </Link>
//           {/* <Link to="/tournaments" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//             Tournaments
//           </Link> */}
//           <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//             About
//           </Link>
//           <Link to="/teams" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//             Teams
//           </Link>
//           {/* <Link to="/stats" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//             Stats
//           </Link> */}
//           <div className="relative mt-3 px-3">
//             <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
//               <Search className="h-4 w-4 text-gray-400" />
//             </div>
//             <input
//               className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200"
//               placeholder="Search..."
//               type="search"
//             />
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const teams = ['Pain Esports', 'Load', 'Team Solid', 'Team Alpha', 'Team Gamma'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="navbar-container">
        <div className="navbar-inner">
          <div className="navbar-left">
            <Link to="/" className="navbar-logo-link">
              <Globe className="h-8 w-8 text-blue-500" />
              <span className="navbar-logo-text">EsportsTracker</span>
            </Link>
          </div>
          <div className="navbar-menu-desktop">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="navbar-link">
                Home
              </Link>
              <Link to="/about" className="navbar-link">
                About
              </Link>

              {/* Teams Dropdown (Desktop) */}
              <div className="navbar-teams-dropdown">
                <button className="navbar-teams-button">
                  Teams
                </button>
                <div className="navbar-teams-dropdown-content">
                  {teams.map((team, idx) => (
                    <Link
                      key={idx}
                      to={`/teams/${team.toLowerCase().replace(/ /g, '-')}`}
                      className="navbar-teams-link"
                    >
                      {team}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="navbar-search-container">
                <div className="navbar-search-icon">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  className="navbar-search-input"
                  placeholder="Search..."
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="navbar-menu-mobile">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-menu-mobile-button"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
          <Link to="/" className="navbar-link block text-base font-medium">
            Home
          </Link>
          <Link to="/about" className="navbar-link block text-base font-medium">
            About
          </Link>

          {/* Teams Dropdown (Mobile) */}
          <div>
            <div className="text-gray-300 px-3 py-2 text-base font-medium">Teams</div>
            <div className="pl-6">
              {teams.map((team, idx) => (
                <Link
                  key={idx}
                  to={`/teams/${team.toLowerCase().replace(/ /g, '-')}`}
                  className="navbar-teams-link"
                >
                  {team}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative mt-3 px-3">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              className="navbar-search-input"
              placeholder="Search..."
              type="search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
