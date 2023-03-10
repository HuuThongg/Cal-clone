import { CalIcon, ToggleMenuIcon } from "../../assets/icons";
import { useRef, useEffect, useState } from "react";
const navLinks = [
  {
    name: "PRICING",
    href: "#",
    current: true,
  },
  {
    name: "PRODUCTS",
    href: "#",
    current: true,
  },
  {
    name: "APPs",
    href: "#",
    current: true,
  },
  {
    name: "DOCS",
    href: "#",
    current: true,
  },
  {
    name: "BLOG",
    href: "#",
    current: true,
  },
  {
    name: "BLOG",
    href: "#",
    current: true,
  },
];
const navLinksMeta = [
  {
    name:"individuals",
    href:"#",
    content:"Everything you need, forever free. Unlimited bookings,unlimited calendars, unlimited integrations. Upgrade atany time.",
    logo:<ToggleMenuIcon/>,
    svg: <svg>.......</svg>
  },
];

export const Navbar = () => {
  const [isHoverNavbar, setIsHoverNavbar] = useState(true);
  const [styleLinkHover, setStyleLinkHover] = useState({
    left: `111px`,
    width: `146px`,
    height: `54px`,
  });
  const navLinksRef = useRef([]);
  let  offsetLeft=0, offsetWidth=0, offsetHeight=0;
  const handleMouseEnter = (index) => {
    ({offsetLeft, offsetWidth, offsetHeight} = navLinksRef.current.at(index));
    setStyleLinkHover({ left: `${offsetLeft}px`, width: `${offsetWidth}px`, height: `${offsetHeight}px` });
    setIsHoverNavbar(true);
  }
  const handleMouseLeave = (index) => {
    setIsHoverNavbar(false); 
  }
  
  return (
    <div className="sticky top-0 z-50 lg:relative lg:py-0">
      <div className="bg-primary-50 relative z-50 mx-auto flex w-full max-w-[1440px] place-items-center px-4 py-6 md:px-[34px]">
        <div className="flex">
          <a href="#">
            <CalIcon />
          </a>
        </div>
        <nav className="hidden lg:block">
          <div className="font-matter  text-lg relative  z-20 rounded-[2.25rem] border-2 border-[#141414] bg-white uppercase leading-[22px] lg:absolute lg:left-10 lg:top-[23px] lg:right-0 lg:mx-auto  lg:w-min xl:left-0 ">
            <div className="relative">
              <ul className="flex font-bold">
                {navLinks.map((link, index) => (
                  <li
                    ref={(el) => (navLinksRef.current[index] = el)}
                    key={index}
                    className={`${
                      index !== 5
                        ? "relative -mx-2 [&:first-child]:ml-0 [&:nth-child(5)]:mr-0"
                        : " border-primary-50  absolute -z-10 h-full w-full rounded-[32px] border-2 bg-[#141414] opacity-0 transition-all duration-200 ease-in-out"
                    }
                    ${index === 5 && isHoverNavbar ? `opacity-100` : ""} `}
                    style={index === 5 ? styleLinkHover : {}}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {index !== 5 && (
                      <a
                        className="header_blend-layer__nJ6Ff block py-4 px-7 text-white mix-blend-difference"
                        href={link.href}
                      >
                        {link.name}
                      </a>
                    )}
                    <div></div>
                  </li>
                ))}
              </ul>
            </div>
            {/* open meta navbar link */}
            <div className="absolute w-full pt-4">
              <ul class="bg-primary-50 border-primary-700 animate-fade-in w-full overflow-hidden rounded-[36px] border-2">
                <li class="hover:[>a]:text-primary-700 group capitalize transition-all [&:first-child>a]:pt-6 [&:last-child>a]:pb-6">
                  <a
                    class="text-primary-700 m-1 flex gap-5 rounded-[28px] px-6 py-4 hover:bg-gray-200"
                    href="/signup"
                  >
                    <span class="mt-1 block group-hover:text-black [&>svg]:h-8 [&>svg]:w-8">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </span>
                    <span class="flex flex-col gap-1">
                      <div class="flex font-sans font-semibold tracking-wider">
                        Individuals
                        <div class="m-1.5 opacity-0 transition-all delay-100 ease-in-out  group-hover:opacity-100">
                          <svg
                            class="stroke-black stroke-2"
                            fill="none"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            aria-hidden="true"
                          >
                            <path
                              class="opacity-0 transition group-hover:opacity-100"
                              d="M0 5h7"
                            ></path>
                            <path
                              class="transition group-hover:translate-x-[3px]"
                              d="M1 1l4 4-4 4"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span class="normal-case text-neutral-500 transition-all group-hover:text-black">
                        Everything you need, forever free. Unlimited bookings,
                        unlimited calendars, unlimited integrations. Upgrade at
                        any time.
                      </span>
                    </span>
                  </a>
                </li>
                <li class="hover:[>a]:text-primary-700 group  capitalize transition-all [&:first-child>a]:pt-6 [&:last-child>a]:pb-6">
                  <a
                    class="text-primary-700 m-1 flex gap-5 rounded-[28px] px-6 py-4 hover:bg-gray-200"
                    href="/signup"
                  >
                    <span class="mt-1 block group-hover:text-black [&>svg]:h-8 [&>svg]:w-8">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </span>
                    <span class="flex flex-col gap-1">
                      <div class="flex font-sans font-semibold tracking-wider">
                        Teams
                        <div class="m-1.5 opacity-0 transition-all delay-100 ease-in-out  group-hover:opacity-100">
                          <svg
                            class="stroke-black stroke-2"
                            fill="none"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            aria-hidden="true"
                          >
                            <path
                              class="opacity-0 transition group-hover:opacity-100"
                              d="M0 5h7"
                            ></path>
                            <path
                              class="transition group-hover:translate-x-[3px]"
                              d="M1 1l4 4-4 4"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span class="normal-case text-neutral-500 transition-all group-hover:text-black">
                        We work better in teams. Extend your workflows with
                        round-robin and collective events and make advanced
                        routing forms.
                      </span>
                    </span>
                  </a>
                </li>
                <li class="hover:[>a]:text-primary-700 group  capitalize transition-all [&:first-child>a]:pt-6 [&:last-child>a]:pb-6">
                  <a
                    class="text-primary-700 m-1 flex gap-5 rounded-[28px] px-6 py-4 hover:bg-gray-200"
                    href="/ultimate"
                  >
                    <span class="mt-1 block group-hover:text-black [&>svg]:h-8 [&>svg]:w-8">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </span>
                    <span class="flex flex-col gap-1">
                      <div class="flex font-sans font-semibold tracking-wider">
                        Ultimate
                        <div class="m-1.5 opacity-0 transition-all delay-100 ease-in-out  group-hover:opacity-100">
                          <svg
                            class="stroke-black stroke-2"
                            fill="none"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            aria-hidden="true"
                          >
                            <path
                              class="opacity-0 transition group-hover:opacity-100"
                              d="M0 5h7"
                            ></path>
                            <path
                              class="transition group-hover:translate-x-[3px]"
                              d="M1 1l4 4-4 4"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span class="normal-case text-neutral-500 transition-all group-hover:text-black">
                        Looking for the best compliant scheduling tool? Ultimate
                        is perfect for enterprise businesses that focus on
                        control and security.
                      </span>
                    </span>
                  </a>
                </li>
                <li class="hover:[>a]:text-primary-700 group  capitalize transition-all [&:first-child>a]:pt-6 [&:last-child>a]:pb-6">
                  <a
                    class="text-primary-700 m-1 flex gap-5 rounded-[28px] px-6 py-4 hover:bg-gray-200"
                    href="/platform"
                  >
                    <span class="[[&>svg]:h-8 mt-1 block group-hover:text-black [&>svg]:w-8">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                        <polyline points="2 17 12 22 22 17"></polyline>
                        <polyline points="2 12 12 17 22 12"></polyline>
                      </svg>
                    </span>
                    <span class="flex flex-col gap-1">
                      <div class="flex font-sans font-semibold tracking-wider">
                        Platform
                        <div class="m-1.5 opacity-0 transition-all delay-100 ease-in-out  group-hover:opacity-100">
                          <svg
                            class="stroke-black stroke-2"
                            fill="none"
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            aria-hidden="true"
                          >
                            <path
                              class="opacity-0 transition group-hover:opacity-100"
                              d="M0 5h7"
                            ></path>
                            <path
                              class="transition group-hover:translate-x-[3px]"
                              d="M1 1l4 4-4 4"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span class="normal-case text-neutral-500 transition-all group-hover:text-black">
                        If you want to build something on top of Cal.com like a
                        Telehealth platform or hiring marketplace to change any
                        line of code.
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <button
          className="-m-2 ml-auto p-2 hover:cursor-pointer lg:hidden"
          aria-label="Open menu"
        >
          <ToggleMenuIcon />
        </button>
        <a
          href="#"
          className="font-matter leading-non text ml-auto hidden h-[54px] items-center justify-center rounded-[2.5rem] bg-[rgb(20_20_20)]  px-[2rem] py-[1rem] text-md font-semibold  uppercase text-white lg:ml-auto lg:flex"
        >
          LOGIN
        </a>
      </div>
    </div>
  );
}
