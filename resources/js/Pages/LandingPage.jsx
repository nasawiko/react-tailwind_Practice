import React from 'react';
import '../../css/app.css'
import { Link, Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/LandingPage/header';
import Hero from '@/Components/LandingPage/hero';
import Hero2 from '@/Components/LandingPage/hero2';
import Footer from '@/Components/LandingPage/footer';
export default function Welcome(props) {
    return (
        <>  
            <Head title='WellcomeToLareact' />

            <div className="container-fluid">
           
                <Navbar />  
                <div className="container-fluid bg-zinc-500 text-white">
                    <ul className='flex'>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                {/* Carousel */}
                <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                <img src="https://placeimg.com/800/200/arch" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                </div>
                </div>
                {/* carousel end */}
            </div>
            <Hero />
            <Hero2 />
            <Footer />
            </>
    );
}
