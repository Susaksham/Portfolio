import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

function Footer() {
  function sendEmail() {
    window.location = "mailto:sakshamyogesh@gmail.com";
  }
  return (
    <div className="flex w-full items-center justify-between laptop:flex-row laptop:px-4 mobile:gap-4 text-slate-50 mobile:flex-col-reverse">
      <div>@ Susaksham Jain</div>
      <div>
        <ul className="flex items-center laptop:gap-4 mobile:gap-2">
          <li className="rounded-full hover:bg-gray-700 p-2">
            <a
              target="_blank"
              href="https://github.com/Susaksham"
              alt="not visible"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.6rem"
                height="1.6rem"
                fill="white"
                className="w-[1.6rem] h-[1.6rem] "
              >
                <title>github</title>
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
            </a>
          </li>
          <li className="rounded-full hover:bg-[#2e3a558b] hover:opacity-1 p-[0.4rem]">
            <a
              target="_blank"
              href="https://twitter.com/Susaksham08"
              alt="not visible"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgb(14 116 144)"
                className="w-[1.6rem] h-[1.6rem]"
              >
                <title>twitter</title>
                <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
              </svg>
            </a>
          </li>
          <li className="rounded-full hover:bg-[#0e749061] hover:opacity-1 p-[0.4rem]">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/susaksham-jain/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgb(14 116 144)"
                className="w-[1.6rem] h-[1.6rem]"
              >
                <title>linkedin</title>
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </a>
          </li>
          <li
            className="rounded-full hover:bg-[#f0a9aa62] hover:opacity-1 p-[0.4rem]"
            onClick={sendEmail}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgb(240,169,170)"
              className="w-[1.6rem] h-[1.6rem]"
            >
              <title>email</title>
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
          </li>
          {/* <li className="rounded-full hover:bg-[#794a299e] hover:opacity-1 p-[0.4rem]">
            <a
              target="_blank"
              href="https://stackoverflow.com/users/21454288/susaksham-jain"
              alt="not visible"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgb(244,128,36)"
                className="w-[1.6rem] h-[1.6rem]"
              >
                <title>stack-overflow</title>
                <path d="M17.36,20.2V14.82H19.15V22H3V14.82H4.8V20.2H17.36M6.77,14.32L7.14,12.56L15.93,14.41L15.56,16.17L6.77,14.32M7.93,10.11L8.69,8.5L16.83,12.28L16.07,13.9L7.93,10.11M10.19,6.12L11.34,4.74L18.24,10.5L17.09,11.87L10.19,6.12M14.64,1.87L20,9.08L18.56,10.15L13.2,2.94L14.64,1.87M6.59,18.41V16.61H15.57V18.41H6.59Z" />
              </svg>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
