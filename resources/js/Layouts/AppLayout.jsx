import React from 'react'
import { PhoneIcon, LocationIcon, UserIcon, ArrowLeftIcon } from "@/icons";
import { Link } from "@inertiajs/react";

function Navbar() {
    return (
        <div className="border-b border-b-light-gray z-50">
            <div className="flex items-center gap-4 bg-white px-6 py-4">
                <Link href="/" className="flex-shrink-0">
                    <img
                        src="/images/logo/logo_cucina.webp"
                        alt="Logo"
                        className="block h-[100px] w-[120px]"
                    />
                </Link>
                <div className="flex-1"></div>
                <Link
                    href="/profile"
                    className="flex-shrink-0 border-2 border-green-600 text-green-600 rounded-full w-12 h-12 grid place-items-center hover:text-white hover:bg-green-600 transition"
                >
                    <UserIcon />
                </Link>
                <Link
                    href="/"
                    className="flex-shrink-0 hidden md:flex text-xs text-white bg-green-600 rounded-full px-6 py-3 font-semibold items-center gap-2 hover:opacity-80 transition"
                >
                    <ArrowLeftIcon />
                    <span>Retour a l'acceuil</span>
                </Link>
            </div>
        </div>
    );
}

function AppLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default AppLayout;
