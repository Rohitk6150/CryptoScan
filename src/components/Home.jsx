import React from "react";
import "./homestyle.css";
import image from "./Firefly A wallet surrounded by various icons, illustrating the importance of financial security._A w.jpg";
import coinbase from "./coinbase.jpg";
const Home = () => {
  return (
    <>
      <main className=" h-fit  flex justify-center w-full flex-col items-center ">
        <section
          id="sec1"
          className=" border-solid border-3 border-sky-900  rounded-2xl shadow-2xl flex justify-around items-center w-full flex-wrap
      p-9"
        >
          <div id="intro-left" className=" ">
            <h1 id="intro-h1" className="text-6xl font-bold w-[360px]">
              Jump start your crypto Analysis
            </h1>
            <p
              id="intro-fet"
              className="mt-5  tracking-wider text-xl font-semibold w-[400px]"
            >
              Cointrend is the easiest place to buy and sell cryptocurrency.
              Sign up and get started today.
            </p>

            <input
              placeholder="Enter your email"
              className="max-w-[190px] p-[15px] text-[17px] text-black rounded-tl-[.5em] rounded-bl-[.5em] border-2 border-solid border-slate-200 mr-[1px] mt-6 border-right-none"
              name="email"
              type="email"
            />
            <button className="bg-[#30589c] p-[15px] pd-[17px] text-[17px] text-white rounded-tr-[.5em] rounded-br-[.5em] cursor-pointer mt-6 ">
              Subscribe
            </button>
          </div>

          <div id="intro-right">
            <svg
              id="intro-svg"
              width="680"
              height="956"
              viewBox="0 0 680 956"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="HeroVariant__HeroIndiaImage-sc-1o7093z-7 efRURj"
            >
              <circle cx="340" cy="428" r="340" fill="#F1F5FE"></circle>
              <g filter="url(#prefix__filter0_dd)">
                <path
                  d="M481 10H198c-32.032 0-58 25.968-58 58v720c0 32.032 25.968 58 58 58h283c32.032 0 58-25.968 58-58V68c0-32.032-25.968-58-58-58z"
                  fill="url(#prefix__paint0_linear)"
                ></path>
                <path
                  d="M472.489 22H206.511C176.406 22 152 47.222 152 78.335v699.33C152 808.778 176.406 834 206.511 834h265.978C502.594 834 527 808.778 527 777.665V78.335C527 47.222 502.594 22 472.489 22z"
                  fill="url(#prefix__img1)"
                ></path>
              </g>
              <defs>
                <filter
                  id="prefix__filter0_dd"
                  x="48"
                  y="0"
                  width="519"
                  height="956"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dx="-32" dy="50"></feOffset>
                  <feGaussianBlur stdDeviation="30"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0 0.321569 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  ></feBlend>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dy="15"></feOffset>
                  <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0 0.320833 0 0 0 0.1 0"></feColorMatrix>
                  <feBlend
                    in2="effect1_dropShadow"
                    result="effect2_dropShadow"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow"
                    result="shape"
                  ></feBlend>
                </filter>
                <pattern
                  id="prefix__img1"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                  viewBox="0 0 385 812"
                >
                  <image
                    href="https://assets.coinbase.com/assets/india-mobile-app.7c033942591b51e85148b214c3163647.svg"
                    width="375"
                    height="812"
                  ></image>
                </pattern>
              </defs>
            </svg>
          </div>
        </section>

        {/* <section id='sec2' className='w-full bg-slate-950 mt-7'>
        <div className='p-5 flex flex-row justify-center items-center  '>
          <img id='sec2-img'  src={image} width="12%" height="12%" alt="yoo" className='rounded-2xl w-[15%]'/>
          <div className='ml-6 flex w-max flex-col'>
            <h1 className="text-5xl text-white pl-5 ">Explore web3 profiles, and claim one for free</h1>
            <p className='font-bold text-white font-sans mt-8 text-xl pl-5'>Create and customize your web3 profile, check out other profiles, and explore popular NFT collections and tokens.</p>

          </div>
        </div>

      </section> */}

        <section id="sec2" className="w-full bg-slate-950 mt-7 flex-wrap">
          <div className="p-5 flex flex-col justify-center items-center sm:flex-row">
            <img
              id="sec2-img"
              src={image}
              width="12%"
              height="12%"
              alt="yoo"
              className="rounded-2xl   sm:h-auto "
            />

            <div className="mt-5 sm:mt-0 text-center sm:text-left">
              <h1 className="text-3xl sm:text-5xl text-white pl-5">
                Explore web3 profiles, and claim one for free
              </h1>
              <p className="font-bold text-white font-sans mt-4 text-lg sm:text-xl pl-5">
                Create and customize your web3 profile, check out other
                profiles, and explore popular NFT collections and tokens.
              </p>
            </div>
          </div>
        </section>
<div className="h-20"></div>
        <section
          id="sec3"
          className="w-full flex justify-center items-center p-7"
        >
          <div className="w-full">
            <h1 id="sec3_h1" className="font-bold text-5xl mb-4 mt-6 flex flex-wrap justify-center items-center">
              Create your cryptocurrency portfolio today
            </h1>
            <p id="sec3_p" className="font-bold text-xl  flex justify-center items-center flex-wrap">
              Coinbase has a variety of features that make it the best place to
              start trading
            </p>

            <div
              id="contain-img-3feat"
              className="w-full flex justify-center item-center mt-10"
            >
              <div className="flex flex-row justify-center items-center w-[70%]">
                <div>
                  <div>
                    <div>
                      <div className="flex flex-row w-full mb-9">
                        <div className="mr-8">
                          <svg
                            width="40"
                            height="40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M40 5.667a1 1 0 0 0-1-1h-6.667a2.213 2.213 0 0 0-1.588.808l-1.352 1.858H7.667A1.667 1.667 0 0 0 6 9v23.667h34v-27Z"
                              fill="#CED2DB"
                            ></path>
                            <path
                              d="m39.5 31.075-5-16.15a2.411 2.411 0 0 0-2.167-1.592H1.667c-.917 0-1.445.717-1.167 1.592L6 32.667h32.333c.917 0 1.445-.717 1.167-1.592Z"
                              fill="#5DE2F8"
                            ></path>
                            <path
                              d="m40 32.667-5.5-17.742a2.411 2.411 0 0 0-2.167-1.592H6v19.334h34ZM18.667 13.333l7.071-7.071a9.64 9.64 0 0 1 2.929 7.071h-10Z"
                              fill="#0052FF"
                            ></path>
                            <path
                              d="M18.667 3.333a9.64 9.64 0 0 0-7.072 2.929 9.64 9.64 0 0 0-2.928 7.071h10l7.071-7.071a9.64 9.64 0 0 0-7.071-2.929Z"
                              fill="#FFD200"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M10.833 13.333a7.833 7.833 0 0 1 15.667 0H10.833Zm-.333 0a8.167 8.167 0 1 1 16.333 0h1.834a9.64 9.64 0 0 1-2.929 7.072 9.64 9.64 0 0 1-7.071 2.928 9.64 9.64 0 0 1-7.072-2.928 9.64 9.64 0 0 1-2.928-7.072H10.5Z"
                              fill="#0A0B0D"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h2 className="font-bold mb-4">
                            Manage your portfolio
                          </h2>
                          <p className=" mr-0">
                            Buy and sell popular digital currencies, keep track
                            of them in the one place.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-row mb-9">
                        <div className="mr-8">
                          <svg
                            width="40"
                            height="33"
                            viewBox="0 0 30 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.9994 0C9.10658 0 4.28516 4.64062 4.28516 11.3438V25.7812H25.7137V11.3438C25.7137 4.64062 20.8923 0 14.9994 0Z"
                              fill="#D4EEFF"
                            ></path>
                            <path
                              d="M30 12.375H0V33H30V12.375Z"
                              fill="#56B4FC"
                            ></path>
                            <path
                              d="M25.7137 12.375H4.28516V28.875H25.7137V12.375Z"
                              fill="#1652F0"
                            ></path>
                            <path
                              d="M14.9999 18.5625L17.8392 24.75H12.1606L14.9999 18.5625Z"
                              fill="white"
                            ></path>
                            <path
                              d="M15.0003 20.625C16.1837 20.625 17.1431 19.7016 17.1431 18.5625C17.1431 17.4234 16.1837 16.5 15.0003 16.5C13.8168 16.5 12.8574 17.4234 12.8574 18.5625C12.8574 19.7016 13.8168 20.625 15.0003 20.625Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h2 className="font-bold mb-4">Vault protection</h2>
                          <p className="mr-0">
                            For added security, store your funds in a vault with
                            time delayed withdrawals.
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-row mb-9 box-border">
                        <div className="mr-8">
                          <svg
                            width="40"
                            height="40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.333 6c0-.368.299-.667.667-.667h17.333c.369 0 .667.299.667.667v28a.667.667 0 0 1-.667.667H6A.667.667 0 0 1 5.333 34V6Z"
                              fill="#CED2DB"
                            ></path>
                            <path
                              d="M24 9.333H5.333v21.334H24V9.333Z"
                              fill="#0052FF"
                            ></path>
                            <path
                              d="M12.667 32.667c0-.369.298-.667.666-.667H16a.667.667 0 0 1 0 1.333h-2.667a.667.667 0 0 1-.666-.666ZM15.333 7.333a.667.667 0 1 1-1.333 0 .667.667 0 0 1 1.333 0Z"
                              fill="#0A0B0D"
                            ></path>
                            <circle
                              cx="25.333"
                              cy="20"
                              r="9.333"
                              fill="#0A0B0D"
                            ></circle>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M24 29.239a9.333 9.333 0 1 0 0-18.478V29.24Z"
                              fill="#CED2DB"
                            ></path>
                            <circle
                              cx="25.333"
                              cy="20"
                              fill="#fff"
                              r="8"
                            ></circle>
                            <path
                              d="m25.333 16 1.113 2.812 2.887.244-2.2 1.981.672 2.963-2.472-1.588L22.861 24l.672-2.963-2.2-1.981 2.888-.244L25.333 16Z"
                              fill="#0052FF"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <h2 className="font-bold mb-4">Mobile apps</h2>
                          <p className="Overview__FeatureText-hj28j1-7 hCzVRF">
                            Stay on top of the markets with the Coinbase app for{" "}
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://play.google.com/store/apps/details?id=com.coinbase.android"
                              className="cursor-pointer"
                            >
                              Android
                            </a>{" "}
                            or{" "}
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://itunes.apple.com/us/app/coinbase-buy-sell-bitcoin/id886427730"
                            >
                              iOS
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={coinbase} height="1112px" width="980px" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 w-full">
          <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <img src="#" className="mr-5 h-6 sm:h-9" alt="logo" />
                <p className="max-w-xs mt-4 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, accusantium.
                </p>
                <div className="flex mt-8 space-x-6 text-gray-600">
                  <a
                    className="hover:opacity-75"
                    href
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Facebook </span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    className="hover:opacity-75"
                    href
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Instagram </span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    className="hover:opacity-75"
                    href
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Twitter </span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    className="hover:opacity-75"
                    href
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> GitHub </span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    className="hover:opacity-75"
                    href
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only"> Dribbble </span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="font-medium">Company</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <a className="hover:opacity-75" href>
                      {" "}
                      About{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Meet the Team{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      History{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Careers{" "}
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">Services</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <a className="hover:opacity-75" href>
                      {" "}
                      1on1 Coaching{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Company Review{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Accounts Review{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      HR Consulting{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      SEO Optimisation{" "}
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">Helpful Links</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <a className="hover:opacity-75" href>
                      {" "}
                      Contact{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      FAQs{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Live Chat{" "}
                    </a>
                  </nav>
                </div>
                <div>
                  <p className="font-medium">Legal</p>
                  <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                    <a className="hover:opacity-75" href>
                      {" "}
                      Privacy Policy{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Terms &amp; Conditions{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Returns Policy{" "}
                    </a>
                    <a className="hover:opacity-75" href>
                      {" "}
                      Accessibility{" "}
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <p className="mt-8 text-xs text-gray-800">© 2022 Comany Name</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
