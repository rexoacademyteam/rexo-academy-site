import { useState } from "react";
import logo from "../../assets/images/brand_logo.png";
import logo2 from "../../assets/images/brand_purelogo.png";
import { BookOpenIcon, LinkIcon, QuestionMarkCircleIcon, ArrowDownOnSquareIcon, XMarkIcon, Bars3Icon, ArrowRightOnRectangleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const links = [
  { name: "دوره های آموزشی", href: "#", logo: (<BookOpenIcon className="w-6 h-6" />) },
  { name: "چرا رکسو؟", href: "#", logo: (<QuestionMarkCircleIcon className="w-6 h-6" />) },
  { name: "ارتباط با ما", href: "#", logo: (<LinkIcon className="w-6 h-6" />) },
  { name: "ثبت سفارش", href: "#", logo: (<ArrowDownOnSquareIcon className="w-6 h-6" />) },
]

const MobileNav = () => {
  return (
    <div className="w-full py-4 md:hidden">
      <div className="flex flex-col items-center gap-4">
        {
          links ? links.map((link, i) => (
            <a key={i} href={link.href} className="ml-5 rounded-xl p-1 hover:text-[#6b36cc] cursor-pointer inline-flex">
              {link.logo}
              <span className="mr-1">{link.name}</span>
            </a>
          )) : null
        }
      </div>
    </div>
  )
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 start-0 end-0 px-3 py-2 bg-slate-100 shadow-sm bg-base-100 z-30">
      <div className="flex justify-between items-center align-center max-w-6xl mx-auto">
        <div className={`flex justify-around ${isOpen ? "block" : ""}`}>
          <button>
            <ShoppingCartIcon className="w-6 h-6" />
          </button>
          <button className="mr-5 h-10 bg-indigo-500 rounded-3xl text-white text-center font-bold flex justify-center align-middle text-sm p-2">
            <ArrowRightOnRectangleIcon className="w-6 h-6" />
            <span>ورود</span>
          </button>
        </div>

        <div
          className={`md:flex justify-around ${isOpen ? "flex" : "hidden"
            } w-auto`}
        >
          <nav className="hidden md:block">
            <div className="flex justify-around">
              {
                links?.map((link, i) => (
                  <a key={i} href={link.href} className="ml-5 rounded-xl p-1 hover:text-[#6b36cc]  cursor-pointer flex">
                    {link.logo}
                    <span className="mr-1">{link.name}</span>
                  </a>
                ))
              }
            </div>
          </nav>
        </div>

        {/* <div className="cursor-pointer flex">
          <img src={logo} className="hidden w-[80px] md:block" alt="logo" />
          <img
            src={logo2}
            className="md:hidden w-[50px] h-[30px]"
            alt="logo2"
          />
          <div className="space-y-2 md:hidden mr-2" onClick={handleMenuClick}>
            <span className="block w-5 h-0.5 bg-gray-600"></span>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-5 h-0.5 bg-gray-600"></span>
          </div>
        </div> */}

        <div className="cursor-pointer flex items-center">
          <img src={logo} className="hidden w-[80px] md:block" alt="logo" />
          <img
            src={logo2}
            className="md:hidden w-[50px] h-[30px]"
            alt="logo2"
          />
          <div className="md:hidden ps-4 pt-1">
            <button onClick={handleMenuClick}>
              {isOpen ? <XMarkIcon className="w-10 h-10" /> : <Bars3Icon className="w-10 h-10" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen ? <MobileNav /> : null}
    </header>
  );
};

export default Navigation;
