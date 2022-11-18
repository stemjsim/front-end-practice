import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destinations</h1>
            <dic className="cards__container">
                <div className="cards__wrapper">
                    <ul className='cards__items'>
                        <CardItem
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the amazon jungle"
                            label='Adventure'
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Travel through the Islands of Bali on  a private cruise"
                            label='Luxury'
                            path="/services"
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src="images/img-3.jpg"
                            text="Set sail in the Ocean where you'll visit uncharted waters"
                            label='Mystery'
                            path="/services"
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text="Experience Football at the top of the world"
                            label='Adventure'
                            path="/products"
                        />
                        <CardItem
                            src="images/img-8.jpg"
                            text="Ride through the Sahara on a Camel Tour"
                            label='Andrenaline'
                            path="/sign-up"
                        />
                    </ul>
                </div>
            </dic>
        </div>
    )
}

export default Cards