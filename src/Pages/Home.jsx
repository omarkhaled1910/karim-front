import React from 'react'

import { useSelector } from 'react-redux'
import Categories from '../Components/Categories'
import Contact from '../Components/Contact/Contact'
import Customers from '../Components/Customers'
import NewsLetter from '../Components/NewsLetter'
import './Home.css'



const Home = () => {

    const cart = useSelector(state => state.cart)

    console.log(cart);

    return (
        <>
            <div className='hero-container'>
                <video src='/videos/video-1.mp4' autoPlay loop muted />
                <h1>ADVENTURE AWAITS</h1>
                <p>What are you waiting for?</p>
                <div className='hero-btns'>
                    {/* <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        GET STARTED
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        onClick={console.log('hey')}
                    >
                        WATCH TRAILER <i className='far fa-play-circle' />
                    </Button> */}
                </div>
            </div>


            <Categories></Categories>

            <Customers />

            <Contact></Contact>

            <NewsLetter></NewsLetter>


        </>
    )
}

export default Home
