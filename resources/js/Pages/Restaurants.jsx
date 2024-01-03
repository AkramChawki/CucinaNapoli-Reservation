import Card from '@/Components/Card'
import Navbar from '@/Components/Navbar'
import { properties } from '@/constants/data'
import React from 'react'

export default function Restaurants() {
    return (
        <>
            <Navbar />
            <div className="cardss">
                <div className="properties">
                    {properties.map((item) => (
                        <Card data={item} key={item.id} />
                    ))}
                </div>
            </div>
        </>
    )
}
