/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, usePage } from "@inertiajs/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    const { auth } = usePage().props;
    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500">
                                    <span className="sr-only">Ouvrir Menu</span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-auto w-[120px]"
                                        src="images/logo/logo_cucina.webp"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-auto w-[100px]"
                                        src="images/logo/logo_cucina.webp"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                    <a
                                        href="https://www.cucinanapoli.com"
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold"
                                    >
                                        Notre Site
                                    </a>
                                    <a
                                        href="https://reservation.cucinanapoli.com"
                                        className=" border-green-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold"
                                    >
                                        Reservation
                                    </a>
                                    <a
                                        href="https://menu.cucinanapoli.com"
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold"
                                    >
                                        Menu
                                    </a>
                                    <a
                                        href="https://www.cucinanapoli.com/blog"
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold"
                                    >
                                        Blog
                                    </a>
                                    <a
                                        href="https://www.cucinanapoli.com/contact"
                                        className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-bold"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {auth && auth.user ? (
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                                <span className="sr-only">
                                                    Ouvrir Menu
                                                </span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            href={route(
                                                                "profile"
                                                            )}
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Mon Profile
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                        href={route('logout')}
                                                        method="post"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-gray-100"
                                                                    : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Déconnexion
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                ) : (
                                    <>
                                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                            <Link
                                                href={route("login")}
                                                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                                            >
                                                Se Connecter
                                            </Link>
                                            <Link
                                                href={route("register")}
                                                className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-green-700 hover:to-green-700"
                                            >
                                                Créer un compte
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="pt-2 pb-4 space-y-1">
                            <Disclosure.Button
                                as="a"
                                href="https://www.cucinanapoli.com"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Notre Site
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="https://menu.cucinanapoli.com"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Menu Cucina
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="https://www.cucinanapoli.com/blog"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Blog
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="https://www.cucinanapoli.com/contact"
                                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                            >
                                Contact
                            </Disclosure.Button>
                            {auth && auth.user ? (
                                <div></div>
                            ) : (
                                <>
                                    <div className="md:flex justify-center md:flex-1 lg:w-0">
                                        <Link
                                            href={route("login")}
                                            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                                        >
                                            Se Connecter
                                        </Link>
                                        <Link
                                            href={route("register")}
                                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-green-700 hover:to-green-700"
                                        >
                                            Créer un compte
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
