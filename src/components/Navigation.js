import { useState } from "react";
import logo from "../assets/images/Asset 3.png";
import logo2 from "../assets/images/seyed 2 (1).png"
const Navigation = () => {
    const [isOPen , setIsOpen] = useState(false);
    const handleMenuClick = () => {
        setIsOpen(!isOPen);
    }   


  return (
    <header className="p-3">
      <div className="flex justify-between align-center max-w-6xl mx-auto">
        <div className={`flex justify-around ${isOPen? "block" : ""}`}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>
          <button className="mr-5 h-10 bg-indigo-500 rounded-3xl text-white text-center font-bold flex justify-center align-middle text-sm p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            <span>ورود</span>
          </button>

        </div>
       
                <div className={`md:flex justify-around ${isOPen? "flex" : "hidden"} w-auto`}>
          <nav>
            <ul className="flex justify-around">
              <li className="ml-5 rounded-xl p-1 hover:text-[#6b36cc]  cursor-pointer flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <span className="mr-1">دوره های آموزشی</span>
              </li>
              <li className="ml-5 rounded-xl p-1 hover:text-[#6b36cc]  cursor-pointer flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
                <span className="mr-1">چرا رکسو؟</span>
              </li>
              <li className="ml-5 rounded-xl p-1 hover:text-[#6b36cc]  cursor-pointer flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
                <span className="mr-1">ارتباط با ما</span>
              </li>
              <li className=" rounded-xl p-1 hover:text-[#6b36cc]  cursor-pointer flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                  />
                </svg>
                <span className="mr-1">ثبت سفارش</span>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="cursor-pointer flex">
          <img src={logo} className="hidden w-[80px] md:block" alt="logo" />
          <img src={logo2} className="md:hidden w-[50px] h-[30px]" alt="logo2" />
        <div class="space-y-2 md:hidden mr-2" onClick={handleMenuClick}>
          <span class="block w-5 h-0.5 bg-gray-600"></span>
          <span class="block w-8 h-0.5 bg-gray-600"></span>
          <span class="block w-5 h-0.5 bg-gray-600"></span>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
