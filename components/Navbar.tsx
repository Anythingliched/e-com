import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import SearchBar from './ui/search';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className='bg-[#008080] text-white w-full h-22 flex justify-between items-center gap-x-4 p-4'>
            <div className="logo">
                <div className="icon">
                    <Link href='/'>
                        <Image src="/FlipaZon-logo-text.png" height={45} width={300} alt='flipazon-slogan-logo' />
                    </Link>
                </div>
            </div>
            <div className="searchbar">
                <SearchBar />
            </div>
            <div className="navigators">
                <ul className='flex items-center justify-center pr-15 gap-x-6 text-lg'>
                    <li><DropdownMenu>
                        <DropdownMenuTrigger>Your Account</DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-white'>
                            <DropdownMenuItem>
                                <Link href='/'>
                                    Your Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href='/shopping-cart'>
                                    Your Cart
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href='/orders-history'>
                                    Your Orders
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href='/track-orders'>
                                    Track Orders
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href='/help'>
                                    Help
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu></li>
                    <li><Link href='/shopping-cart'><ShoppingCart /></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
