"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../../../utils/cn";


const Navbar = () => {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50")}
    >
      <Menu setActive={setActive}>
        <Link href={"#"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
        </Link> 
        <Link href={"#about"}>   
            <MenuItem setActive={setActive} active={active} item="About">
            </MenuItem>
        </Link>
        <Link href={"#projects"}>
            <MenuItem setActive={setActive} active={active} item="Projects">
            </MenuItem>
        </Link>
        <Link href={"#contact"}>
            <MenuItem setActive={setActive} active={active} item="Contacts">
            </MenuItem>
        </Link>
        
      </Menu>
    </div>
  )
}
export default Navbar;
