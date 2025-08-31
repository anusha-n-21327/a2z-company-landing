import { A2ZLogo } from "./A2ZLogo";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <A2ZLogo className="h-6 w-auto" />
          <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500">
            A2Z Company
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} A2Z Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;