import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcMultipleInputs } from "react-icons/fc";
import { GiLifeSupport } from "react-icons/gi";
import { ImDisplay } from "react-icons/im";
import { MdOutlineFeedback } from "react-icons/md";
import { PiDevicesBold } from "react-icons/pi";
import { RiLayout5Fill } from "react-icons/ri";
import { TbClick, TbLayersLinked } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const sections = [
  {
    title: "Docs",
    stateKey: "showDocs",
    links: [
      { name: "Home", path: "/" },
      { name: "Installation", path: "/installation" },
      { name: "GitHub", path: "/GitHub-git" },
      { name: "Npm", path: "/npmList" },
    ],
  },
  {
    title: "Components",
    stateKey: "showComponents",
    categories: [
      {
        title: "Actions",
        icon: <TbClick />, 
        links: ["Button", "Dropdown", "Modal", "Swap", "Theme Controlled"],
      },
      {
        title: "Data display",
        icon: <ImDisplay />, 
        links: ["Button", "Dropdown", "Modal", "Swap", "Theme Controlled"],
      },
      {
        title: "Navigation",
        icon: <TbLayersLinked />, 
        links: ["Button", "Dropdown", "Modal", "Swap", "Theme Controlled"],
      },
      {
        title: "Feedback",
        icon: <MdOutlineFeedback />, 
        links: ["Alert", "Loading", "Progress", "Radial Progress", "Skeleton", "Toast", "Tooltip"],
      },
      {
        title: "Data input",
        icon: <FcMultipleInputs />, 
        links: ["Checkbox", "File Input", "Radio", "Range", "Rating", "Select", "Text Input", "Textarea", "Toggle"],
      },
      {
        title: "Layout",
        icon: <RiLayout5Fill />, 
        links: ["Artboard", "Divider", "Drawer", "Footer", "Hero", "Indicator", "Join", "Mask", "Stack"],
      },
      {
        title: "Mockup",
        icon: <PiDevicesBold />, 
        links: ["Browser", "Code", "Phone", "Window"],
      },
    ],
  },
  {
    title: "Theme",
    stateKey: "showTheme",
    links: [
      { name: "Home", path: "/" },
      { name: "Installation", path: "/installation" },
      { name: "API Reference", path: "/api-reference" },
      { name: "Examples", path: "/examples" },
    ],
  },
];

const LeftSideBar = () => {
  const [toggleSections, setToggleSections] = useState({
    showDocs: true,
    showComponents: true,
    showTheme: true,
  });

  const toggleSection = (key) => {
    setToggleSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#121C22] backdrop-blur-lg text-gray-400">
      <div className="flex flex-col min-h-screen px-6 py-5">
        {sections.map(({ title, stateKey, links, categories }) => (
          <div key={title}>
            <h2
              className="text-2xl font-bold cursor-pointer"
              onClick={() => toggleSection(stateKey)}
            >
              {title}
            </h2>
            {toggleSections[stateKey] && (
              <div className="pl-4 mt-2 border-l-[1px] border-gray-700">
                {links &&
                  links.map(({ name, path }) => (
                    <NavLink
                      key={name}
                      to={path}
                      className={({ isActive }) =>
                        `font-semibold flex items-center ${
                          isActive ? "bg-red-500 text-white my-2 rounded-lg justify-center font-bold" : ""
                        }`
                      }
                    >
                      {name}
                    </NavLink>
                  ))}
                {categories &&
                  categories.map(({ title, icon, links }) => (
                    <div key={title}>
                      <h3 className="font-bold flex items-center">
                        <span className="text-2xl">{icon}</span>
                        <span className="ml-2">{title}</span>
                      </h3>
                      <div className="mx-6 my-2 px-2 border-l-[1px] border-gray-600">
                        {links.map((link) => (
                          <Link key={link} to={""}>
                            <p>{link}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}

        {/* Support Section */}
        <div className="mt-4">
          <h3 className="flex items-center text-sm font-semibold">
            <FaGithub className="mr-1" /> GitHub
          </h3>
          <h3 className="flex items-center text-sm font-semibold">
            <GiLifeSupport className="mr-1" /> Support BrightCSS
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
