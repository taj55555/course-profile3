import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {


  const [isShown, setIsShown] = useState(false);
  const buttonRef = useRef();

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsShown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <section>
     
        <div className="w-full shadow-md border-b-2 px-[15px] fixed z-[9999] bg-white xl:px-[20px] py-[15px] flex justify-between items-center ">
          <div className=" md:w-[20%]">
            <Link
              to=""
              className=" text-[14px] flex items-center  text-[#e50914] bg-transparent "
            >
              <img
                src={logo}
                alt=""
                className=" w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center"
              />

              <span className=" w-full border-l-[2px] border-[#a56868] font-[500] md:font-[700] ml-[10px] pl-[15px] text-[#db6f6f] text-[0.8rem] md:text-[1rem] flex items-center ">
                <span className="team-name">PROJECT PROFILE</span>
              </span>
            </Link>
          </div>

          <div className=" md:w-[80%]">
            <ul className="flex items-center text-[0.8rem] md:text-[1rem] md:gap-4 text-center ">
             
              <li className=" hidden md:block my-[4px] mx-[12px]">
                <Link
                  to=''
                >
                  PEERING WITH OPEN CONNECT
                </Link>
              </li>

              <li className=" hidden md:block my-[4px] mx-[12px]">
                <Link to=''
                  
                >
                  OPEN CONNECT APPLIANCES
                </Link>
              </li>

              <li className=" hidden md:block my-[4px] mx-[12px]">
                <Link
                  to=''
                >
                  DEPLOYING EMBEDDED APPLIANCES
                </Link>
              </li>

              <li className=" hidden md:block my-[4px] mx-[12px]">
                <Link
                  to=''
                >
                  PARTNER PORTAL
                </Link>
              </li>



              <li className="block my-[4px] mx-[12px]">
                {/* ______________________________________DeskTop Search_______________________________ */}

                <input
                  className=" hidden m-0 p-1 fixed top-[60px] sm:top-[70px] right-[1px] md:right-[20px] bg-gradient-to-r from-cyan-500 to-blue-500 md:w-[20%] w-full text-white pl-[10px] outline-none"
                />

                {/* ______________________________________DeskTop Search End_______________________________ */}
               
                <label className=" hidden md:block text-[1.2rem] text-[#3e3f3e]">
                  SUPPORT
                </label>
              

                <div className="hidden md:block w-full absolute sm:top-[190px] md:top-[80px] left-0 z-0">
                  <ul className=" z-[400] p-3 w-full m-0 flex gap-8 items-center bg-[#141414] text-white justify-center">
                    <li>
                      <Link to=''
                       className=""
                      >
                        FREQUENTLY ASKED QUESTIONS
                      </Link>
                    </li>

                    <li>
                      <Link
                        to=''
                      >
                        CONTACT US
                      </Link>
                    </li>

                    <li>
                      <Link
                        to=''
                      >
                        JOBS
                      </Link>
                    </li>

                    <li>
                      <Link
                        to=''
                      >
                        PARTNER HELP CENTRE
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>



              <li>
                <ul className=" flex items-center gap-[20px] md:gap-[30px] xl:gap-[40px] text-[#3e3f3e]">
                  <li className=" flex items-center">
                    <Link to="" className="">
                      <svg
                      className="md:w-[25px] md:h-[25px]"
                        height="20"
                        viewBox="0 0 24 24"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path>
                      </svg>
                    </Link>
                  </li>

                  {/* <li className="">
                    <select className=" bg-red-200 border-none outline-none flex">
                      <option value="ar_eg">العربية</option>

                      <option value="de_de">Deutsch</option>

                      <option value="el_gr">ελληνικά</option>

                      <option value="en">English</option>

                      <option value="en_au">English (AU)</option>

                      <option value="en_gb">English (GB)</option>

                      <option value="es_mx">Español</option>

                      <option value="fr_ca">Français Canadien</option>

                      <option value="fr_fr">Français</option>

                      <option value="it_it">Italiano</option>

                      <option value="ja_jp">日本語</option>

                      <option value="ko_kr">한국어</option>

                      <option value="no_no">Bokmål</option>

                      <option value="pt_br">Português (Brasil)</option>

                      <option value="pt_pt">Português (Portugal)</option>

                      <option value="sv_se">Svenska</option>

                      <option value="th_th">ไทย</option>

                      <option value="zh_cn">简体中文</option>

                      <option value="zh_tw">繁體中文</option>
                    </select>
                  </li> */}

                  <li className=" hidden items-center">
                    <Link to="" className="search-button]">
                      <svg
                     
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </Link>

                    <form className="">
                      <input
                        id="search-input"
                        name="q"
                        placeholder="Search"
                        type="text"
                      />
                      <input className="search" type="submit" value="Search" />
                    </form>
                  </li>

                  <li className="mobile-search">
                    <Link to="" className=" text-[400px]">
                      <svg
                       className="md:w-[25px] md:h-[25px]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </Link>
                  </li>

                  <li className="menu md:hidden">
                    <Link to="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-list"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                        />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>


 {/* ----------------------------language manu-------------------------------------- */}
            <div className=" hidden text-white md:max-w-[550px] w-full pl-10 py-5 bg-slate-900 absolute top-[80px] right-[15px] sm:top-[90px]">


             
              <h4 className=" text-[20px] font-bold ">Choose your language:</h4>
              <ul className="grid sm:grid-cols-2 gap-3 w-full mt-8">
                <li className="hover:text-red-500">
                  <Link to=''
                  >
                    العربية
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link to=''
                  >
                    Deutsch
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link to=''
                    
                  >
                    ελληνικά
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    English
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link to=''
                   
                  >
                    English (AU)
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                   to=''
                  >
                    English (GB)
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    Español
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link to=''
                   
                  >
                    Français Canadien
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                   to=''
                  >
                    Français
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    Italiano
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    日本語
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    한국어
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    Bokmål
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link to=''
                  >
                    Português (Brasil)
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    Português (Portugal)
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    Svenska
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    ไทย
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    简体中文
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    繁體中文
                  </Link>
                </li>
              </ul>
              
            </div>




            <div className=" hidden text-white md:max-w-[550px] w-full px-10 py-5 bg-slate-900 absolute top-[80px] right-[15px] sm:top-[90px]">
              <h4 className=" text-[1.5rem] font-bold mb-[30px]">Menu</h4>
              <ul className=" grid grid-cols-2 gap-5 pb-[20px] border-b-[1px]">
                <li className="hover:text-red-500">
                  <Link to=''
                   
                  >
                    PEERING WITH OPEN CONNECT
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link to=''
                  >
                    OPEN CONNECT APPLIANCES
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link to=''
                  >
                    DEPLOYING EMBEDDED APPLIANCES
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    PARTNER PORTAL
                  </Link>
                </li>
              </ul>


              <h4 className=" mt-5 text-[1.5rem] font-bold mb-[30px]">Support</h4>
              <ul className="grid grid-cols-2 gap-5 pb-[20px]">
                <li className="hover:text-red-500">
                  <Link
                    to=''
                  >
                    FREQUENTLY ASKED QUESTIONS
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                   to=''
                  >
                    CONTACT US
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                   to=''
                  >
                    JOBS
                  </Link>
                </li>

                <li className="hover:text-red-500">
                  <Link
                   to=''
                  >
                    PARTNER HELP CENTRE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Navbar;
