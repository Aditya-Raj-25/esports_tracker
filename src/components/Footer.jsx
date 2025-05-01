import React from 'react';
import { Link } from './ui/Link';
import { Globe, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Globe className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">EsportsTracker</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your ultimate esports companion for tracking tournaments, matches, teams, and player statistics in real-time.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/aditya-raj-srivastava-a4b911336/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/Aditya-Raj-25" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Games</h3>
            <ul className="space-y-2">
              <li><Link to="/games/valorant" className="hover:text-white transition-colors">Valorant</Link></li>
              <li><Link to="/games/cs2" className="hover:text-white transition-colors">CS2</Link></li>
              <li><Link to="/games/lol" className="hover:text-white transition-colors">League of Legends</Link></li>
              <li><Link to="/games/dota2" className="hover:text-white transition-colors">Dota 2</Link></li>
              <li><Link to="/games/rl" className="hover:text-white transition-colors">Rocket League</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/tournaments" className="hover:text-white transition-colors">Tournaments</Link></li>
              <li><Link to="/matches" className="hover:text-white transition-colors">Matches</Link></li>
              <li><Link to="/teams" className="hover:text-white transition-colors">Teams</Link></li>
              <li><Link to="/players" className="hover:text-white transition-colors">Players</Link></li>
              <li><Link to="/stats" className="hover:text-white transition-colors">Statistics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 EsportsTracker. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <select
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;