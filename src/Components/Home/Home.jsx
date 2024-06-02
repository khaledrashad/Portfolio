import React from 'react';
import Particle from '../Particle.jsx/Particle';
import { ReactTyped } from 'react-typed';


const Home = () => {
    return <>
        <div className="row p-0 m-0">
            <div className="col-12">
                <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                    <ReactTyped strings={["My name is Khaled Rashad","Your up coming Frontend web developer","And this is my portfolio"]} typeSpeed={50} loop backSpeed={50} className='h1 text-white'/>
                </div>
            </div>
        </div>
    </>
}

export default Home;
