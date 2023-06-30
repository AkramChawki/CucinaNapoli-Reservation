import AppLayout from "@/Layouts/AppLayout";
import {
    CheckCircleIcon,
    ChevronRightIcon,
    MailIcon,
} from "@heroicons/react/solid";
import React from "react";

export default function History({ reservations }) {
    console.log(reservations);
    return (
        <AppLayout>
            <div className="bg-white">
                <div className="py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
                        <div className="max-w-2xl mx-auto px-4 lg:max-w-4xl lg:px-0">
                            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                                Historique des réservation
                            </h1>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="sr-only">Réservations récentes</h2>
                        <div className="max-w-7xl mx-auto sm:px-2 lg:px-8">
                            <div className="max-w-2xl mx-auto space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
                                {reservations.length === 0 && (
                                    <p className="text-center text-gray-400 my-6">
                                        Pas encore de reservation !
                                    </p>
                                )}
                                <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                    <ul
                                        role="list"
                                        className="divide-y divide-gray-200"
                                    >
                                        {reservations.map((reservation) => (
                                            <li key={reservation.id}>
                                                <a
                                                    href="#"
                                                    className="block hover:bg-gray-50"
                                                >
                                                    <div className="flex items-center px-4 py-4 sm:px-6">
                                                        <div className="min-w-0 flex-1 flex items-center">
                                                            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                                                <div>
                                                                    <p className="text-sm font-medium text-indigo-600 truncate">
                                                                        {
                                                                            reservation.nom
                                                                        }{" "}
                                                                        {
                                                                            reservation.prenom
                                                                        }
                                                                    </p>
                                                                    <p className="mt-2 flex items-center text-sm text-gray-500">
                                                                        <MailIcon
                                                                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                                            aria-hidden="true"
                                                                        />
                                                                        <span className="truncate">
                                                                            {
                                                                                reservation.email
                                                                            }
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <div className="hidden md:block">
                                                                    <div>
                                                                        <p className="text-sm text-gray-900">
                                                                            Réserver le
                                                                            {" "}
                                                                            <time
                                                                                dateTime={
                                                                                    reservation.selectedDate
                                                                                }
                                                                            >
                                                                                {
                                                                                    reservation.selectedDate
                                                                                }{" "}
                                                                            </time>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <ChevronRightIcon
                                                                className="h-5 w-5 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
