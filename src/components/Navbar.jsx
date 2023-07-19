import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <section>
      <header>
        <div className=" border-b-2 px-[15px] py-[20px] flex justify-between items-center ">
          <div>
            <Link
              to=""
              className=" text-[14px] flex  text-[#e50914] bg-transparent "
            >
              <img
                src={logo}
                alt=""
                className=" w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] flex items-center"
              />

              <span className="details border-l-[2px] font-[500] ml-[10px] pl-[15px] text-[#aaa] text-[1.2rem] ">
                <span className="team-name  mb-[2px] ">Open Connect</span>
              </span>
            </Link>
          </div>

          <div className="">
            <ul className="site-navigation flex items-center text-[0.8rem] text-center ">
              {/* <li className="hide-on-resize my-[4px] mx-[12px]">
                <a
                  data-cms-original-href="/peering/"
                  data-i18n="peering-with-open-connect"
                  href="/en_gb/peering/"
                >
                  PEERING WITH OPEN CONNECT
                </a>
              </li>

              <li className="hide-on-resize my-[4px] mx-[12px]">
                <a
                  data-cms-original-href="/appliances/"
                  data-i18n="open-connect-appliances"
                  href="/en_gb/appliances/"
                >
                  OPEN CONNECT APPLIANCES
                </a>
              </li>

              <li className="hide-on-resize my-[4px] mx-[12px]">
                <a
                  data-cms-original-href="/deployment-guide/"
                  data-i18n="deploying-embedded-appliances"
                  href="/en_gb/deployment-guide/"
                >
                  DEPLOYING EMBEDDED APPLIANCES
                </a>
              </li>

              <li className="hide-on-resize my-[4px] mx-[12px]">
                <a
                  data-cms-original-href="/partner-portal/"
                  data-i18n="partner-portal"
                  href="/en_gb/partner-portal/"
                >
                  PARTNER PORTAL
                </a>
              </li> */}

              {/* <li className="submenu-container hide-on-resize my-[4px] mx-[12px]">
                <input
                  id="support-checkbox "
                  className=" m-0 p-0 fixed top-[-5px] left-0"
                />
                <label data-i18n="support" for="support-checkbox" className=" text-[.9rem] text-[#3e3f3e]">
                  SUPPORT
                </label>
              

                <div className="submenu block w-full h-0 mt-[70px] pr-[100px] text-center bg-[#E50914] fixed top-0 left-0 shadow-md ">
                  <ul className=" w-full m-0">
                    <li>
                      <Link to=''
                       className=""
                      >
                        FREQUENTLY ASKED QUESTIONS
                      </Link>
                    </li>

                    <li>
                      <a
                        data-cms-original-href="/contact/"
                        data-i18n="contact-us"
                        href="/en_gb/contact/"
                      >
                        CONTACT US
                      </a>
                    </li>

                    <li>
                      <a
                        data-cms-original-href="/jobs/"
                        data-i18n="jobs"
                        href="/en_gb/jobs/"
                      >
                        JOBS
                      </a>
                    </li>

                    <li>
                      <a
                        data-i18n="partner-help-center"
                        href="https://openconnect.zendesk.com/"
                        target="_blank"
                      >
                        PARTNER HELP CENTRE
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}

              <li>
                <ul className=" flex items-center gap-[20px] text-[#3e3f3e]">
                  <li className=" flex items-center">
                    <Link to="" className="">
                      <svg
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
                    <Link to="" className="search-button">
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
                    <Link to="" className="">
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
                  </li>

                  <li className="menu">
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

            <div className=" hidden text-white md:max-w-[550px] w-full pl-10 py-5 bg-slate-900 absolute top-[80px] right-[15px] sm:top-[90px]">
              <h4 className=" text-[20px] font-bold ">Choose your language:</h4>
              <ul className="grid sm:grid-cols-2 gap-3 w-full mt-8">
                <li>
                  <Link to=''
                  >
                    العربية
                  </Link>
                </li>

                <li>
                  <Link to=''
                  >
                    Deutsch
                  </Link>
                </li>

                <li>
                  <Link to=''
                    
                  >
                    ελληνικά
                  </Link>
                </li>

                <li>
                  <Link
                    to=''
                  >
                    English
                  </Link>
                </li>

                <li>
                  <Link to=''
                   
                  >
                    English (AU)
                  </Link>
                </li>

                <li>
                  <Link
                   to=''
                  >
                    English (GB)
                  </Link>
                </li>

                <li>
                  <Link
                    to=''
                  >
                    Español
                  </Link>
                </li>

                <li>
                  <Link to=''
                   
                  >
                    Français Canadien
                  </Link>
                </li>

                <li>
                  <Link
                   to=''
                  >
                    Français
                  </Link>
                </li>

                <li>
                  <Link
                    to=''
                  >
                    Italiano
                  </Link>
                </li>

                <li>
                  <Link
                    to=''
                  >
                    日本語
                  </Link>
                </li>

                <li>
                  <Link
                    to=''
                  >
                    한국어
                  </Link>
                </li>

                <li>
                  <Link
                    to=''
                  >
                    Bokmål
                  </Link>
                </li>

                <li>
                  <Link to=''
                  >
                    Português (Brasil)
                  </Link>
                </li>

                <li>
                  <Link
                    to=''
                  >
                    Português (Portugal)
                  </Link>
                </li>

                <li>
                  <Link
                    to=''
                  >
                    Svenska
                  </Link>
                </li>

                <li>
                  <Link
                    to=''
                  >
                    ไทย
                  </Link>
                </li>

                <li>
                  <Link
                    to=''
                  >
                    简体中文
                  </Link>
                </li>

                <li>
                  <Link
                    to=''
                  >
                    繁體中文
                  </Link>
                </li>
              </ul>
            </div>

            <div className="menu-dropdown" id="menu-dropdown">
              <h4 data-i18n="menu">Menu</h4>
              <ul className="browse">
                <li>
                  <a
                    data-cms-original-href="/peering/"
                    data-i18n="peering-with-open-connect"
                    href="/en_gb/peering/"
                  >
                    PEERING WITH OPEN CONNECT
                  </a>
                </li>

                <li>
                  <a
                    data-cms-original-href="/appliances/"
                    data-i18n="open-connect-appliances"
                    href="/en_gb/appliances/"
                  >
                    OPEN CONNECT APPLIANCES
                  </a>
                </li>

                <li>
                  <a
                    data-cms-original-href="/deployment-guide/"
                    data-i18n="deploying-embedded-appliances"
                    href="/en_gb/deployment-guide/"
                  >
                    DEPLOYING EMBEDDED APPLIANCES
                  </a>
                </li>

                <li>
                  <a
                    data-cms-original-href="/partner-portal/"
                    data-i18n="partner-portal"
                    href="/en_gb/partner-portal/"
                  >
                    PARTNER PORTAL
                  </a>
                </li>
              </ul>

              <h4>Support</h4>
              <ul className="browse">
                <li>
                  <a
                    data-cms-original-href="/faq/"
                    data-i18n="frequently-asked-questions"
                    href="/en_gb/faq/"
                  >
                    FREQUENTLY ASKED QUESTIONS
                  </a>
                </li>

                <li>
                  <a
                    data-cms-original-href="/contact/"
                    data-i18n="contact-us"
                    href="/en_gb/contact/"
                  >
                    CONTACT US
                  </a>
                </li>

                <li>
                  <a
                    data-cms-original-href="/jobs/"
                    data-i18n="jobs"
                    href="/en_gb/jobs/"
                  >
                    JOBS
                  </a>
                </li>

                <li>
                  <a
                    data-i18n="partner-help-center"
                    href="https://openconnect.zendesk.com/"
                    target="_blank"
                  >
                    PARTNER HELP CENTRE
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
