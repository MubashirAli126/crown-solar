import React from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./NavDropdown";

const menuItems = [
  {
    title: "Products",
    children: [
      {
        title: "P-Type Mono",
        route: "/pType",
      },
      {
        title: "N-Type Mono",
        route: "/nTypeMono",
      },
      {
        title: "N-Type Bifacial",
        route: "/nTypeBifacial",
      },
    ],
  },
];

export default function NavMenu() {
  return (
      <span>
        {menuItems.map((item) => {
          return item.hasOwnProperty("children") ? (
            <Dropdown item={item} />
          ) : (
            <Link className="px-6 font-extrabold text-gray-900 hover:text-green-600" href={item?.route || ""}>
              {item.title}
            </Link>
          );
        })}
      </span>
  );
}
