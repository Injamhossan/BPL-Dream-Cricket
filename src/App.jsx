import "./App.css";

function App() {
  return (
    <>
      {/* Navbar Section  */}

      <div className="navbar justify-between mx-auto max-w-[1600px] mt-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="">
            <img src="/src/assets/logo.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex gap-[20px]">
          <ul className="menu menu-horizontal px-1 text-[#131313b3] text-[16px] gap-[20px]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a href="">Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
          <div className="shadow-sm rounded-[10px] px-[20px] py-[14px] border-gray-300 border-1">
            <p className="text-black flex items-center gap-1">
              <span>600000000</span> Coin
              <img src="/src/assets/dollar.png" alt="" className="w-4 h-4" />
            </p>
          </div>
        </div>
      </div>

      {/* Banner Section */}

      <div className="relative bg-black mx-auto max-w-[1600px] rounded-[40px] overflow-hidden">
        <img
          src="/src/assets/bg-shadow.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <img
            src="/src/assets/banner-main.png"
            alt="Banner"
            className="mb-6 w-[220px]"
          />
          <h1 className="text-white text-[24px] md:text-[40px] font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mt-3">
            Beyond Boundaries Beyond Limits
          </p>

          <button className="mt-6 btn btn-outline outline-[#E7FE29] btn-secondary text-black bg-[#E7FE29] px-6 py-2 rounded-lg font-semibold">
            Claim Free Credit
          </button>
        </div>
      </div>


      {/* Available player */}

      <div className="flex justify-between mx-auto max-w-[1600px] mt-[100px] items-center">
        <h1 className="text-black text-[28px] font-bold">
          Available Players
        </h1>
        <div className="flex gap-5 border-2 border-gray-300 rounded-[10px] px-2 py-2 shadow-sm">
        <h1 className="text-black">Available</h1>
        <h1 className="text-black">Selected (<span>0</span>)</h1>
          </div>
      </div>
    </>
  );
}

export default App;
