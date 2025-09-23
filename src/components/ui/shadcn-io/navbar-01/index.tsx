
// import * as React from "react"
// import { useEffect, useState, useRef } from "react"
// import { Button } from "@/components/ui/button"
// import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { cn } from "@/lib/utils"

// // -------------------- Logo --------------------
// const Logo = (props: React.SVGAttributes<SVGElement>) => {
//   return (
//     <svg
//       width="1em"
//       height="1em"
//       viewBox="0 0 324 323"
//       fill="currentColor"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <rect
//         x="88.1023"
//         y="144.792"
//         width="151.802"
//         height="36.5788"
//         rx="18.2894"
//         transform="rotate(-38.5799 88.1023 144.792)"
//         fill="currentColor"
//       />
//       <rect
//         x="85.3459"
//         y="244.537"
//         width="151.802"
//         height="36.5788"
//         rx="18.2894"
//         transform="rotate(-38.5799 85.3459 244.537)"
//         fill="currentColor"
//       />
//     </svg>
//   )
// }

// // -------------------- Hamburger Icon --------------------
// const HamburgerIcon = ({
//   className,
//   ...props
// }: React.SVGAttributes<SVGElement>) => (
//   <svg
//     className={cn("pointer-events-none", className)}
//     width={16}
//     height={16}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     xmlns="http://www.w3.org/2000/svg"
//     {...props}
//   >
//     <path
//       d="M4 12L20 12"
//       className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
//     />
//     <path
//       d="M4 12H20"
//       className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
//     />
//     <path
//       d="M4 12H20"
//       className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
//     />
//   </svg>
// )

// // -------------------- Types --------------------
// export interface Navbar01NavLink {
//   href: string
//   label: string
//   active?: boolean
// }

// export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
//   logo?: React.ReactNode
//   logoHref?: string
//   navigationLinks?: Navbar01NavLink[]
//   signInText?: string
//   signInHref?: string
//   ctaText?: string
//   ctaHref?: string
//   onSignInClick?: () => void
//   onCtaClick?: () => void
// }

// // -------------------- Default Links --------------------
// const defaultNavigationLinks: Navbar01NavLink[] = [
//   { href: "/about", label: "ABOUT", active: true },
//   { href: "/Experience", label: "EXPERIENCE" },
//   { href: "/Skill", label: "SKILLS" },
//   { href: "/Education", label: "EDUCATION" },
//   { href: "#Education", label: "BLOGS" },
//   { href: "/projects", label: "PROJECTS" },

// ]

// // -------------------- Navbar --------------------
// export const Navbar01 = React.forwardRef<HTMLElement, Navbar01Props>(
//   (
//     {
//       className,
//       logo = <p></p>,
      
//       logoHref = "#",
//       navigationLinks = defaultNavigationLinks,
//       signInText =<p></p>,
//       ctaText = <a  href="#">GitHub Profile</a>,
//       onSignInClick,
//       onCtaClick,
//       ...props
//     },
//     ref
//   ) => {
//     const [isMobile, setIsMobile] = useState(false)
//     const containerRef = useRef<HTMLElement>(null)

//     useEffect(() => {
//       if (typeof window === "undefined") return

//       const checkWidth = () => {
//         if (containerRef.current) {
//           const width = containerRef.current.offsetWidth
//           setIsMobile(width < 768)
//         }
//       }

//       checkWidth()
//       const resizeObserver = new ResizeObserver(checkWidth)
//       if (containerRef.current) resizeObserver.observe(containerRef.current)

//       return () => resizeObserver.disconnect()
//     }, [])

//     // Combine refs
//     const combinedRef = React.useCallback(
//       (node: HTMLElement | null) => {
//         containerRef.current = node
//         if (typeof ref === "function") {
//           ref(node)
//         } else if (ref) {
//           ref.current = node
//         }
//       },
//       [ref]
//     )

//     return (
//       <div className="xl:w-[1200px] mx-auto mt-5">
//             <header
//               ref={combinedRef}
//               className={cn(
//                 "sticky top-0 z-50 w-full bg-[#1A173C]/95 backdrop-blur-sm  px-4 md:px-6",
//                 className
//               )}
//               {...props}
//             >
//               <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
//                 {/* Left side */}
//                 <div className="flex items-center gap-2">
//                   {/* Mobile menu trigger */}
//                   {isMobile && (
//                     <Popover>
//                       <PopoverTrigger asChild>
//                         <Button
//                           className="group  h-9 w-9 text-white bg-black"
//                           variant="ghost"
//                           size="icon"
//                         >
//                           <HamburgerIcon />
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent align="start" className="w-48 p-2 bg-[#1B183D] text-white">
//                         <NavigationMenu className="max-w-none">
//                           <NavigationMenuList className="flex-col items-start gap-1">
//                             {navigationLinks.map((link, index) => (
//                               <NavigationMenuItem key={index} className="w-full">
//                                 <NavigationMenuLink asChild>
//                                   <a
//                                     to={link.href}
//                                     className={cn(
//                                       "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium cursor-pointer no-underline",
//                                       link.active
//                                         ? "text-white bg-[#1B183D]"
//                                         : "text-white hover:bg-sky-400"
//                                     )}
//                                   >
//                                     {link.label}
//                                   </a>
//                                 </NavigationMenuLink>
//                               </NavigationMenuItem>
//                             ))}
//                           </NavigationMenuList>
//                         </NavigationMenu>
//                       </PopoverContent>
//                     </Popover>
//                   )}
//                   {/* Logo + Desktop menu */}
//                   <div className="flex items-center gap-6">
//                     <a
//                       href={logoHref}
//                       className="flex items-center space-x-5  text-[#C35EB9] cursor-pointer"
//                     >
//                       <div className="text-2xl">{logo}</div>
//                       <span className="hidden font-bold text-3xl sm:inline-block pr-12">
//                       Golam Easin 
//                       </span>
//                     </a>
//                     {!isMobile && (
//                       <NavigationMenu className="flex">
//                         <NavigationMenuList className="gap-1">
//                           {navigationLinks.map((link, index) => (
//                             <NavigationMenuItem key={index}>
//                               <NavigationMenuLink asChild>
//                                 <a
//                                   to={link.href}
//                                   className={cn(
//                                     "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white cursor-pointer no-underline hover:text-white hover:bg-transparent",
//                                     link.active
//                                       ? "text-white" 
//                                       : "text-white"
//                                   )}
//                                 >
//                                   {link.label}
//                                 </a>
//                               </NavigationMenuLink>
//                             </NavigationMenuItem>
//                           ))}
//                         </NavigationMenuList>
//                       </NavigationMenu>
//                     )}
//                   </div>
//                 </div>
//                 {/* Right side */}
//                 <div className="flex items-center gap-3">
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className="text-sm font-medium px-4 h-9 rounded-md shadow-sm hover:bg-transparent hover:text-white"
//                     onClick={(e) => {
//                       e.preventDefault()
//                       if (onSignInClick) onSignInClick()
//                     }}
//                   >
//                     {signInText}
//                   </Button>
//                   <Button
//                     size="sm"
//                     className="border rounded-2xl border-[#8E00FF] text-sm font-medium px-4 h-9  shadow-sm bg-[#1A173C] hover:bg-[#1A1B3E]"
//                     onClick={(e) => {
//                       e.preventDefault()
//                       if (onCtaClick) onCtaClick()
//                     }}
//                   >
//                     {ctaText}
//                   </Button>
//                 </div>
//               </div>
//             </header>
//       </div>
//     )
//   }
// )

// Navbar01.displayName = "Navbar01"

// export { Logo, HamburgerIcon }












import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import About from "@/components/ReactRowter/About";

// -------------------- Logo --------------------
const Logo = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 324 323"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="88.1023"
      y="144.792"
      width="151.802"
      height="36.5788"
      rx="18.2894"
      transform="rotate(-38.5799 88.1023 144.792)"
      fill="currentColor"
    />
    <rect
      x="85.3459"
      y="244.537"
      width="151.802"
      height="36.5788"
      rx="18.2894"
      transform="rotate(-38.5799 85.3459 244.537)"
      fill="currentColor"
    />
  </svg>
);

// -------------------- Hamburger Icon --------------------
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn("pointer-events-none", className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

// -------------------- Types --------------------
export interface Navbar01NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar01NavLink[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// -------------------- Default Links --------------------
const defaultNavigationLinks: Navbar01NavLink[] = [
  { href: "/", label: "Home", active: true },
  { href: "/about", label: "About" },
   
  { href: "/experience", label: "EXPERIENCE" },
  { href: "/skill", label: "SKILLS" },
  { href: "/education", label: "EDUCATION" },
  { href: "/project", label: "PROJECTS" },
  { href: "#blog", label: "BLOGS" },
];

// -------------------- Navbar --------------------
export const Navbar01 = React.forwardRef<HTMLElement, Navbar01Props>(
  (
    {
      className,
      logo = <p></p>,
      logoHref = "/about",
      navigationLinks = defaultNavigationLinks,
      signInText = "",
      ctaText = "GitHub Profile",
      onSignInClick,
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;

      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768);
        }
      };

      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) resizeObserver.observe(containerRef.current);

      return () => resizeObserver.disconnect();
    }, []);

    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    return (
      <div className="xl:w-[1200px] mx-auto mt-5">
        <header
          ref={combinedRef}
          className={cn(
            "sticky top-0 z-50 w-full bg-[#1A173C]/95 backdrop-blur-sm px-4 md:px-6",
            className
          )}
          {...props}
        >
          <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
            {/* Left side */}
            <div className="flex items-center gap-2">
              {/* Mobile menu trigger */}
              {isMobile && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      className="group h-9 w-9 text-white bg-black"
                      variant="ghost"
                      size="icon"
                    >
                      <HamburgerIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    className="w-48 p-2 bg-[#1B183D] text-white"
                  >
                    <NavigationMenu className="max-w-none">
                      <NavigationMenuList className="flex-col items-start gap-1">
                        {navigationLinks.map((link, index) => (
                          <NavigationMenuItem key={index} className="w-full">
                            <NavigationMenuLink asChild>
                              <Link
                                to={link.href}
                                className={cn(
                                  "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium cursor-pointer no-underline",
                                  link.active
                                    ? "text-white bg-[#1B183D]"
                                    : "text-white hover:bg-sky-400"
                                )}
                              >
                                {link.label}
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </PopoverContent>
                </Popover>
              )}
              {/* Logo + Desktop menu */}
              <div className="flex items-center gap-6">
                <Link
                  to={logoHref}
                  className="flex items-center space-x-5 text-[#C35EB9] cursor-pointer"
                >
                  <div className="text-2xl">{logo}</div>
                  <span className="hidden font-bold text-3xl sm:inline-block pr-12">
                    Golam Easin
                  </span>
                </Link>
                {!isMobile && (
                  <NavigationMenu className="flex">
                    <NavigationMenuList className="gap-1">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem key={index}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={link.href}
                              className={cn(
                                "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white cursor-pointer no-underline hover:text-white hover:bg-transparent",
                                link.active ? "text-white" : "text-white"
                              )}
                            >
                              {link.label}
                            </Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                )}
              </div>
            </div>
            {/* Right side */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-medium px-4 h-9 rounded-md shadow-sm hover:bg-transparent hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  if (onSignInClick) onSignInClick();
                }}
              >
                {signInText}
              </Button>
              <Button
                size="sm"
                className="border rounded-2xl text-white border-[#8E00FF] text-md font-medium px-4 h-9 shadow-sm bg-[#1A173C] hover:bg-[#1A1B3E]"
                onClick={(e) => {
                  e.preventDefault();
                  if (onCtaClick) onCtaClick();
                }}
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </header>
                <Outlet />
                <About/>
      </div>
    );
  }
);

Navbar01.displayName = "Navbar01";

export { Logo, HamburgerIcon };

