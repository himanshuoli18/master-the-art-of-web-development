"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <>
            <div className="fixed top-10 inset-x-0 max-w-2xl mx-auto z-50">
                <Menu setActive={setActive}>
                    <Link href={"/"}>
                        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                    </Link>
                    <MenuItem setActive={setActive} active={active} item="Roadmap">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/roadmap/front-end">Frontend</HoveredLink>
                            <HoveredLink href="/roadmap/back-end">Backend</HoveredLink>
                            <HoveredLink href="/roadmap/devOps">DevOps</HoveredLink>
                        </div>
                    </MenuItem>
                    <Link href={"/courses"}>
                        <MenuItem setActive={setActive} active={active} item="Courses"></MenuItem>
                    </Link>
                    <Link href={"/contact"}>
                        <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
                    </Link>
                </Menu>
            </div>
        </>
    )
}

export default Navbar
