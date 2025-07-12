import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import SearchBar from './ui/search';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const Navbar = () => {
    return (
        <nav className='bg-[#008080] text-white w-full h-22 flex justify-between items-center gap-x-4 p-4'>
            <div className="logo">
                <div className="icon">
                    <Image src="/FlipaZon-logo-text.png" height={45} width={300} alt='flipazon-slogan-logo' />
                </div>
            </div>
            <div className="searchbar flex items-center justify-center bg-white text-black rounded-lg">
                <SearchBar />
            </div>
            <div className="navigators">
                <ul className='flex items-center justify-center pr-15 gap-x-6 text-lg'>
                    <li><DropdownMenu>
                        <DropdownMenuTrigger>Your Account</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu></li>
                    <li><Link href='/'>Cart</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
