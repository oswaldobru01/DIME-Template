"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ButtonPrimary2 from "@/components/shared/buttons/ButtonPrimary2";
import { useHeaderContext } from "@/context_api/HeaderContext";
import getNavItems from "@/libs/getNavItems";
import indexingAndActiveLink from "@/libs/indexingAndActiveLink";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = ({ isActiveMobileMenu, setIsActiveMobileMenu, isSticky }) => {
  const { isIndexPage, isInnerPage, isResumeBtn } = useHeaderContext();
  const navItems = getNavItems();
  useEffect(() => {
    // mobileMenuController();
    indexingAndActiveLink();
  }, []);
  return (
    <nav>
      <ul className="nav flex items-center gap-x-5 xl:gap-x-30px 2xl:gap-x-45px">
        {navItems?.length
          ? navItems?.map(({ name, path, path2 }, idx) => (
              <li key={idx} className="nav_item group relative hidden lg:block">
                <Link
                  href={isIndexPage ? path : path2}
                  className={`text-size-15 font-medium ${
                    isInnerPage && !isSticky
                      ? "text-white-color"
                      : "text-seondary-color dark:text-white-color"
                  }  capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full`}
                >
                  {name}
                </Link>
              </li>
            ))
          : ""}

        {/* <!-- action button --> */}
        <li>
          {isResumeBtn ? (
            <ButtonPrimary2 url={"#"}>Resume</ButtonPrimary2>
          ) : (
            <ButtonPrimary url={isIndexPage ? "#contact" : "/#contact"}>
              Hire Me!
            </ButtonPrimary>
          )}
        </li>
        {/* <!-- open mobile menu button --> */}
        <li className="menu-bar lg:hidden">
          <div className="menu-bar">
            <button
              className={isActiveMobileMenu ? `active` : ""}
              onClick={() => setIsActiveMobileMenu(!isActiveMobileMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
