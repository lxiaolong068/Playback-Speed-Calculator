import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link to="/" className="text-xl font-bold text-gray-900">
                Playback Speed Calculator
              </Link>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`${
                  isActive('/') ? 'text-indigo-600' : 'text-gray-600'
                } hover:text-indigo-600 font-medium`}
              >
                Speed Calculator
              </Link>
              <Link
                to="/percentage"
                className={`${
                  isActive('/percentage') ? 'text-indigo-600' : 'text-gray-600'
                } hover:text-indigo-600 font-medium`}
              >
                Percentage Calculator
              </Link>
              <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </nav>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-3 pt-3">
                <Link
                  to="/"
                  className={`${
                    isActive('/') ? 'text-indigo-600' : 'text-gray-600'
                  } hover:text-indigo-600 font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Speed Calculator
                </Link>
                <Link
                  to="/percentage"
                  className={`${
                    isActive('/percentage') ? 'text-indigo-600' : 'text-gray-600'
                  } hover:text-indigo-600 font-medium`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Percentage Calculator
                </Link>
                <a href="#" className="text-gray-600 hover:text-indigo-600">About</a>
                <a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default Layout;