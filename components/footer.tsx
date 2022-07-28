
import useTranslation from "next-translate/useTranslation";
import Script from "next/script";
import React from "react";

export default function Footer(props) {
    let { t } = useTranslation();

    return (<footer className="text-center bg-gray-900 text-white">

            <Script  src="https://kit.fontawesome.com/89e40544c2.js" crossOrigin="anonymous"/>
            <div className="container px-6 pt-6">
                <div className="flex justify-center mb-6">
                    <a href="https://www.facebook.com/rapidmobil.md" type="button"
                       className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <svg aria-hidden="true"
                             focusable="false"
                             data-prefix="fab"
                             data-icon="facebook-f"
                             className="w-2 h-full mx-auto"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 320 512"
                        >
                            <path
                                fill="currentColor"
                                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                            ></path>
                        </svg>
                    </a>




                    <a href="https://www.instagram.com/rapidmobil.md/" type="button"
                       className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                        <svg aria-hidden="true"
                             focusable="false"
                             data-prefix="fab"
                             data-icon="instagram"
                             className="w-3 h-full mx-auto"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            ></path>

                        </svg>
                    </a>

                    <a href="https://ok.ru/profile/554841433706" type="button"
                       className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">

                            <i className="fab fa-odnoklassniki" style={{marginTop:'8px'}}></i>

                    </a>


                </div>

                <div>
                    <form action="">
                        <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
                            <div className="md:ml-auto md:mb-6">
                                <p className="">
                                    <strong>Sign up for our newsletter </strong>
                                </p>
                            </div>

                            <div className="md:mb-6">
                                <input
                                    type="text"
                                    className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                                    id="exampleFormControlInput1"
                                    placeholder="Email address"/>
                            </div>

                            <div className="md:mr-auto mb-6">
                                <button type="submit"
                                        className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="mb-6">
                    <p>
                        RapidMobile va asteapta cu bratele deschise , cu idei noi propuneri si sugestii.
                    </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">RapidMobil</h5>

                        <ul className="list-none mb-0">
                            <p>RapidMobil este companie de mobila la comanda , care este la curent cu nevoile pietii muncii si poate propune consumatorilor un produs excelent.</p>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Produse</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-white">Dormitoare</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Bucatarii</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Antreuri & Living</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Dulapuri</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Pagini</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-white">Home</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">About Us</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Projects</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Donate</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5">Contacte</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-white">Telefon 1: xxx-xxx-xxx</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Telefon 2: xxx-xxx-xxx</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Mail: expemple@gmail.com</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Adresa : eemplu 12/9</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2021 Toate drepturile reservate:
                <a className="text-white" href="https://RapidMobil.md/"> RapidMobil</a>
            </div>
        </footer>
    );
}
