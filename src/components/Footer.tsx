import { A2ZLogo } from "./A2ZLogo";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-transparent">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <A2ZLogo className="h-6 w-auto" />
          <span className="font-bold text-lg text-slate-100">
            A2Z Company
          </span>
        </div>
        <p className="text-sm text-slate-500">
          All Rights Reserved By A2Z Company
        </p>
      </div>
    </footer>
  );
};

export default Footer;