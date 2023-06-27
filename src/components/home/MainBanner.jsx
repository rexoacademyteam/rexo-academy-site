import Banner from "../../assets/images/main_section_banner.png";

const MainBanner = () => {
  return (
    <div className="container mx-auto pt-10 px-4">
      <div className="flex flex-col-reverse md:flex-row gap-4 justify-around">
        <div className="flex-col justify-around align-middle mt-9">
          <p className="text-3xl font-bold mb-4 text-center md:text-start">
            برنامه نویسی رو آسون یاد بگیر!
          </p>
          <p className="text-slate-500 m-auto text-center md:text-start">
            ما کنارتون هستیم تا زمانی که به رویاهاتون برسید
          </p>
          <p className="mb-3 text-slate-500 m-auto text-center md:text-start">
            با ما همراه باشید
          </p>
          <div className="flex justify-between items-center align-middle px-2">
            <button className=" bg-indigo-500 w-full rounded-3xl text-white text-center font-bold flex justify-center align-middle text-xl p-2 ml-2">
              بزن بریم!
            </button>
            <button className=" bg-white w-full rounded-3xl border-2 border-indigo-500 ring-2 ring-indigo-300 text-indigo-500 text-center font-bold flex justify-center align-middle text-xl p-2">
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
                  d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
              </svg>
              <span>مشاوره</span>
            </button>
          </div>
        </div>
        <div>
          <img src={Banner} className="w-[400px] m-auto" alt="main-banner" />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
