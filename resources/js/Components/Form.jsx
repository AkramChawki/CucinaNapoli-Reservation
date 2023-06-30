import { useForm } from "@inertiajs/react";
import React from "react";
import moment from "moment";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers";

function Form() {
    const queryParameters = new URLSearchParams(window.location.search);
    const restaurant = queryParameters.get("restaurant");
    var localisation = "";

    if (restaurant === "1") {
        localisation =
            "https://www.google.com/maps/place/CUCINA+NAPOLI+-+Anoual+-+Restaurant+italien/@33.5692406,-7.6126558,15z/data=!4m6!3m5!1s0xda7d3f983bc2dd5:0x33b97595312098d1!8m2!3d33.5692406!4d-7.6126558!16s%2Fg%2F11rkl6_dzx?entry=ttu";
    } else {
        localisation =
            "https://www.google.com/maps/place/CUCINA+NAPOLI+-+Palmier+-+Restaurant+italien/@33.5792518,-7.6266445,15z/data=!4m6!3m5!1s0xda7d343b43401df:0x4a188f323bca5ea6!8m2!3d33.5792518!4d-7.6266445!16s%2Fg%2F11sdzp6tq7?entry=ttu";
    }

    const { data, setData, post, errors } = useForm({
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        adults: "1",
        childs: "0",
        selectedDate: "",
        notes: '',
        create_account: false,
    });

    const handleDateChange = (date) => {
        setData("selectedDate", date.format("YYYY-MM-DD HH:mm:ss"));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formattedDate = moment(data.selectedDate).format(
            "YYYY-MM-DD HH:mm:ss"
        );

        const queryParameters = new URLSearchParams(window.location.search);
        const restaurant = queryParameters.get("restaurant");

        const myFormData = new FormData(e.target);
        const formDataObj = Object.fromEntries(myFormData.entries());

        const childs = formDataObj.childs
            ? `et pour ${formDataObj.childs} enfant(s)`
            : "";

        const text = `Bonjour, Je suis ${formDataObj.nom} ${formDataObj.prenom} je veux réserver une table pour ${formDataObj.adults} personne(s) ${childs} le ${formattedDate}, Notes : ${formDataObj.notes}, Veuillez confirmer ma reservation sur le numéro ${formDataObj.telephone} et sur l email ${formDataObj.email}`;

        var phone = "";

        if (restaurant === "1") {
            phone = "212664222057";
        } else {
            phone = "212664526570";
        }

        const lien = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
            text
        )}`;

        post("/reservation", { selectedDate: formattedDate });

        window.open(lien, "_blank").focus();
    };
    console.log(errors);
    console.log(data);
    return (
        <div className="relative bg-white mt-10 lg:mr-10">
            <div className="lg:absolute lg:inset-0">
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover lg:absolute lg:h-full"
                        src="images/cover/reservation.webp"
                        alt=""
                    />
                </div>
            </div>
            <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
                <div className="lg:pr-8">
                    <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                            Réservez votre table maintenant
                        </h2>
                        <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                            Réservez votre table en ligne dès maintenant et
                            profitez d'une expérience culinaire exceptionnelle !
                            Ne manquez pas cette occasion de vous régaler avec
                            des plats exquis et un service de qualité
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                        >
                            <div>
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nom
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="nom"
                                        value={data.nom}
                                        onChange={(e) =>
                                            setData("nom", e.target.value)
                                        }
                                        id="nom"
                                        autoComplete="Nom"
                                        required
                                        className="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Prénom
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="prenom"
                                        value={data.prenom}
                                        onChange={(e) =>
                                            setData("prenom", e.target.value)
                                        }
                                        id="prenom"
                                        required
                                        autoComplete="prenom"
                                        className="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="flex justify-between">
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Telephone
                                    </label>
                                </div>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="telephone"
                                        value={data.telephone}
                                        onChange={(e) =>
                                            setData("telephone", e.target.value)
                                        }
                                        id="phone"
                                        required
                                        autoComplete="tel"
                                        aria-describedby="phone-description"
                                        className="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor=""
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nombre d'adultes
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="location"
                                        name="adults"
                                        value={data.adults}
                                        onChange={(e) =>
                                            setData("adults", e.target.value)
                                        }
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor=""
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Nombre d'enfants
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="location"
                                        name="childs"
                                        value={data.childs}
                                        onChange={(e) =>
                                            setData("childs", e.target.value)
                                        }
                                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                                    >
                                        <option disabled>0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor=""
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Date et Heure
                                </label>
                                <div className="mt-1">
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <DateTimePicker
                                            disablePast
                                            ampm={false}
                                            views={[
                                                "day",
                                                "month",
                                                "year",
                                                "hours",
                                                "minutes",
                                            ]}
                                            value={data.selectedDate}
                                            onChange={handleDateChange}
                                            renderInput={(props) => (
                                                <TextField {...props} />
                                            )}
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                                        />
                                    </LocalizationProvider>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <div className="flex justify-between">
                                    <label
                                        htmlFor="Notes"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Notes
                                    </label>
                                    <span
                                        id="notes-description"
                                        className="text-sm text-gray-500"
                                    >
                                        Max. 300 characters
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <textarea
                                        id="notes"
                                        name="notes"
                                        value={data.notes}
                                        onChange={(e) =>
                                            setData("notes", e.target.value)
                                        }
                                        aria-describedby="notes-description"
                                        rows={2}
                                        className="block w-full shadow-sm sm:text-sm focus:ring-green-500 focus:border-green-500 border border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="relative flex items-start sm:col-span-2">
                                <div className="flex items-center h-5">
                                    <input
                                        id="comments"
                                        aria-describedby="comments-description"
                                        name="comments"
                                        type="checkbox"
                                        checked={data.create_account}
                                        onChange={(e) =>
                                            setData(
                                                "create_account",
                                                e.target.checked
                                            )
                                        }
                                        className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="comments"
                                        className="font-medium text-gray-700"
                                    >
                                        Creer Un Compte <br />
                                    </label>
                                    <span
                                        id="comments-description"
                                        className="text-gray-500"
                                    >
                                        Votre Mdp sera votre numero de telephone
                                    </span>
                                </div>
                            </div>
                            <div className="text-right sm:col-span-2">
                                <a
                                    href={localisation}
                                    className="inline-flex justify-center mr-3 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    localisation
                                </a>
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    Reserver
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Form;
