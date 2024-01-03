import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../sass/main.scss";

// Components
import Header from "../components/Header";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import Form from "@/Components/Form";
import Layout from "@/Layouts/Layout";

function Reservation() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loading
            ? document.querySelector("body").classList.add("loading")
            : document.querySelector("body").classList.remove("loading");
    }, [loading]);

    return (
        <AnimateSharedLayout type='crossfade'>
            <AnimatePresence>
                {loading ? (
                    <motion.div key='loader'>
                        <Loader setLoading={setLoading} />
                    </motion.div>
                ) : (
                    <>
                        <Header />
                        <Banner />
                        {!loading && (
                            <div>
                                <Form />
                                <div className='transition-image final'>
                                    <motion.img
                                        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                                        src="/images/loader/image-2.jpg"
                                        layoutId='main-image-1'
                                    />
                                </div>
                            </div>
                        )}
                    </>
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    );
}

export default Reservation;
