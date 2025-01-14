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

const LeftSideBar = () => {
  const [showDocs, setShowDocs] = useState(true);
  const [showComponents, setShowComponents] = useState(true);
  const [showTheme, setShowTheme] = useState(true);

  return (
    <div className="bg-[#121C22] backdrop-blur-lg  text-gray-400">
      <div className="flex flex-col min-h-screen px-6 py-5 ">
        {/* Docs Section */}
        <div>
          <h2
            className="text-2xl font-bold cursor-pointer"
            onClick={() => setShowDocs(!showDocs)}
          >
            Docs
          </h2>
          {showDocs && (
            // <h3 className="pl-4 mt-2">
            //   <li>Home</li>
            //   <li>Installation</li>
            //   <li>API Reference</li>
            //   <li>Examples</li>
            // </h3>

            <div className="pl-4 mt-2 border-l-[1px] border-gray-700">
              {/* Action */}

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-semibold flex items-center  ${
                    isActive
                      ? "bg-red-500 text-white my-2 rounded-lg justify-center font-bold"
                      : ""
                  }`
                }
              >
                <h3>Home</h3>
              </NavLink>

              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  `font-semibold flex items-center  ${
                    isActive
                      ? "bg-red-500 text-white my-2 rounded-lg justify-center font-bold"
                      : ""
                  }`
                }
              >
                Installation
              </NavLink>

              <NavLink
                to="/project-create"
                className={({ isActive }) =>
                  `font-semibold flex items-center  ${
                    isActive
                      ? "bg-red-500 text-white my-2 rounded-lg justify-center font-bold"
                      : ""
                  }`
                }
              >
                Project Create
              </NavLink>

              <NavLink
                to="/examples"
                className={({ isActive }) =>
                  `font-semibold flex items-center  ${
                    isActive
                      ? "bg-red-500 text-white my-2 rounded-lg justify-center font-bold"
                      : ""
                  }`
                }
              >
                React 
              </NavLink>
            </div>
          )}
        </div>

        {/* Components Section */}
        <div>
          <h2
            className="text-2xl font-bold cursor-pointer"
            onClick={() => setShowComponents(!showComponents)}
          >
            Components
          </h2>
          {showComponents && (
            <div className="pl-4 mt-2  border-l-[1px] border-gray-700">
              {/* Action */}
              <h3 className="font-bold flex items-center">
                {" "}
                <span className="text-2xl">
                  <TbClick />
                </span>{" "}
                <span className="ml-2">Actions</span>
              </h3>
              <div className="mx-6 my-2 px-2 border-l-[1px] border-gray-600">
                <Link to={""}>
                  <p>Button</p>
                </Link>
                <Link to={""}>
                  <p>Dropdown</p>
                </Link>
                <Link to={""}>
                  <p>Modal</p>
                </Link>
                <Link to={""}>
                  <p>Swap</p>
                </Link>
                <Link to={""}>
                  <p>Theme Controlled</p>
                </Link>
              </div>
              {/* Data */}
              <h3 className="font-bold flex items-center">
                <span className="text-lg">
                  <ImDisplay />
                </span>{" "}
                <span className="ml-2">Data display</span>
              </h3>
              <div className="mx-6 my-2 px-2 border-l-[1px] border-gray-600">
                <Link to={""}>
                  <p>Button</p>
                </Link>
                <Link to={""}>
                  <p>Dropdown</p>
                </Link>
                <Link to={""}>
                  <p>Modal</p>
                </Link>
                <Link to={""}>
                  <p>Swap</p>
                </Link>
                <Link to={""}>
                  <p>Theme Controlled</p>
                </Link>
              </div>
              {/* Navigation */}
              <h3 className="font-bold flex items-center">
                {" "}
                <span className="text-2xl">
                  <TbLayersLinked />
                </span>{" "}
                <span className="ml-2">Navigation</span>
              </h3>
              <div className="mx-6 my-2 px-2 border-l-[1px] border-gray-600">
                <Link to={""}>
                  <p>Button</p>
                </Link>
                <Link to={""}>
                  <p>Dropdown</p>
                </Link>
                <Link to={""}>
                  <p>Modal</p>
                </Link>
                <Link to={""}>
                  <p>Swap</p>
                </Link>
                <Link to={""}>
                  <p>Theme Controlled</p>
                </Link>
              </div>
              {/* Feedback */}
              <h3 className="font-bold flex items-center">
                {" "}
                <span className="text-2xl">
                  <MdOutlineFeedback />
                </span>{" "}
                <span className="ml-2">Feedback</span>
              </h3>
              <div className="mx-6 my-2 px-2 border-l-[1px] border-gray-600">
                <Link to={""}>
                  <p>Alert</p>
                </Link>
                <Link to={""}>
                  <p>Loading</p>
                </Link>
                <Link to={""}>
                  <p>Progress</p>
                </Link>
                <Link to={""}>
                  <p>Radial progress</p>
                </Link>
                <Link to={""}>
                  <p>Skelaton</p>
                </Link>
                <Link to={""}>
                  <p>Toast</p>
                </Link>
                <Link to={""}>
                  <p>Tooltip</p>
                </Link>
              </div>
              {/* input */}
              <h3 className="font-bold flex items-center">
                {" "}
                <span className="text-2xl">
                  <FcMultipleInputs />
                </span>
                <span className="ml-2">Data input</span>
              </h3>
              <div className="mx-6 my-2 px-2 border-l-[1px] border-gray-600">
                <Link to={""}>
                  <p>Checkbox</p>
                </Link>
                <Link to={""}>
                  <p>File Input</p>
                </Link>
                <Link to={""}>
                  <p>Radio</p>
                </Link>
                <Link to={""}>
                  <p>Range</p>
                </Link>
                <Link to={""}>
                  <p>Rating</p>
                </Link>
                <Link to={""}>
                  <p>Select</p>
                </Link>
                <Link to={""}>
                  <p>Text Input</p>
                </Link>
                <Link to={""}>
                  <p>Textarea</p>
                </Link>
                <Link to={""}>
                  <p>Toggle</p>
                </Link>
              </div>
              {/* Layout */}
              <h3 className="font-bold flex items-center">
                {" "}
                <span className="text-2xl">
                  <RiLayout5Fill />
                </span>
                <span className="ml-2">Layout</span>
              </h3>
              <div className="mx-6 my-2 px-2 border-l-[1px] border-gray-600">
                <Link to={""}>
                  <p>Artbord</p>
                </Link>
                <Link to={""}>
                  <p>Divider</p>
                </Link>
                <Link to={""}>
                  <p>Drawer</p>
                </Link>
                <Link to={""}>
                  <p>Footer</p>
                </Link>
                <Link to={""}>
                  <p>Hero</p>
                </Link>
                <Link to={""}>
                  <p>Indicator</p>
                </Link>
                <Link to={""}>
                  <p>Join</p>
                </Link>
                <Link to={""}>
                  <p>Mask</p>
                </Link>
                <Link to={""}>
                  <p>Stack</p>
                </Link>
              </div>
              {/* Mockup */}
              <h3 className="font-bold flex items-center">
                {" "}
                <span className="text-2xl">
                  <PiDevicesBold />
                </span>{" "}
                <span className="ml-2">Mockup</span>
              </h3>
              <div className="mx-6 my-2 px-2 border-l-[1px] border-gray-600">
                <Link to={""}>
                  <p>Browser</p>
                </Link>
                <Link to={""}>
                  <p>Code</p>
                </Link>
                <Link to={""}>
                  <p>Phone</p>
                </Link>
                <Link to={""}>
                  <p>Window</p>
                </Link>
              </div>
              {/* end */}
            </div>
          )}
        </div>

        {/* Theme Section */}
        <div>
          <h2
            className="text-2xl font-bold cursor-pointer"
            onClick={() => setShowTheme(!showTheme)}
          >
            Theme
          </h2>
          {showTheme && (
            <ul className="pl-4 mt-2">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <li>Installation</li>
              <li>API Reference</li>
              <li>Examples</li>
            </ul>
          )}
        </div>

        {/* Support Section */}
        <div className="mt-4">
          <h3 className="flex items-center  text-sm font-semibold">
            <span className="mr-1">
              <FaGithub />
            </span>{" "}
            GitHub
          </h3>
          <h3 className="flex items-center  text-sm font-semibold">
            <span className="mr-1">
              <GiLifeSupport />
            </span>{" "}
            Support BrightCSS
          </h3>
          <h3 className="flex items-center  text-sm font-semibold">
            <span className="mr-1">
              <GiLifeSupport />
            </span>{" "}
            Support BrightCSS
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
