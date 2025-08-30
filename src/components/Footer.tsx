import { Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Rocket className="h-6 w-6" />
          <span className="font-bold text-lg">InnovateX</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} InnovateX. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">Twitter</a>
          <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">LinkedIn</a>
          <a href="#" className="text-gray-500 hover:text-primary dark:text-gray-400">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;