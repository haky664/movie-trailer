// @flow
import {useState, useEffect} from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink } from "flowbite-react";

import { TextInput } from "flowbite-react";
import { CiSearch } from "react-icons/ci";
export function Header({onSearch}) {
    const [inputValue, setInputValue] = useState("");
    return (
        <Navbar fluid rounded>
            <NavbarBrand href="https://flowbite-react.com">
                <span
                    className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Movie</span>
            </NavbarBrand>
            <NavbarCollapse>
                <NavbarLink href="#" active onClick={() => window.location.reload()}>Home</NavbarLink>
                <NavbarLink href="#">About</NavbarLink>
                <NavbarLink href="#">Services</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
            <div className="relative flex justify-end items-center gap-4 pt-1">
                <TextInput id="searchMovie" type="text" placeholder="Hit Man" required className="w-80" onChange={e => setInputValue(e.target.value)} value={inputValue} />
                <CiSearch className="w-9 h-7 absolute end-2.5 hover:cursor-pointer" onClick={() => onSearch(inputValue) && setInputValue("")} />
            </div>
        </Navbar>
    );
};