import useTranslation from "next-translate/useTranslation";
import React from "react";


export default function Navbar() {

    const style = {
        background: 'linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)',
    }
    let { t } = useTranslation();

    return (
        <nav>
            <div className="container mx-auto">
                <ul className="nav-list">
                    <li className="nav-logo">
                        <div className="logo">
                            <p>LOGO</p>
                        </div>
                        <button className="btn" id="nav-toggle">
                            <i className="fa fa-bars"></i>
                        </button>
                    </li>

                    <li className="nav-link">About<i className="fa fa-chevron-up"></i>
                        <ul className="nav-drop">
                            <li>Our Team</li>
                            <li>Our Process</li>
                            <li>History</li>
                        </ul>
                    </li>

                    <li className="nav-link">Work<i className="fa fa-chevron-up"></i>
                        <ul className="nav-drop">
                            <li>Portfolio</li>
                            <li>Showcase</li>
                        </ul>
                    </li>

                    <li className="nav-link">Contact</li>
                    <li className="nav-item">
                        <button className="btn">Sign in</button>
                    </li>

                </ul>
            </div>
        </nav>
    );
}




































//
//
//
//
//
//
// <nav id="header" className="fixed w-full z-10 top-0">
//     <div id="progress" className="h-1 z-20 top-0" style={style}/>
//
//     <div className="w-full md:max-w-5xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
//
//         <div className="pl-4">
//             <Link href="/">
//                 {/*<Image src="/img.png" width="100px" height="70px"/>*/}
//                 <a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl">“NOI”</a>
//             </Link>
//         </div>
//
//         <div className="block lg:hidden pr-4">
//             <button id="nav-toggle"
//                     className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
//                 <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                     <title>Menu</title>
//                     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
//                 </svg>
//             </button>
//         </div>
//
//         <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
//              id="nav-content">
//             <ul className="list-reset lg:flex justify-end flex-1 items-center">
//                 <li className="mr-3" >
//                     <Link href="/home">
//                         <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline">{t("common:menu-home")}</a>
//                     </Link>
//                 </li>
//                 <li className="mr-3" >
//                     <Link href="/about-us">
//                         <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline">{t("common:menu-about-us")}</a>
//                     </Link>
//                 </li>
//                 <li className="mr-3" >
//                     <Link href="/projects">
//                         <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline">{t("common:menu-projects")}</a>
//                     </Link>
//                 </li>
//                 <li className="mr-3">
//                     <Link href="/Dormitoare">
//                         <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline">{t("common:menu-donate")}</a>
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>
