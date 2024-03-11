import React from 'react'
import { useParams } from 'react-router-dom';
import '../city.css';
import data from '../assets/Data.js';

export default function City() {




    let { Id } = useParams();

    let city = data[Id];




    return (
        <>
            <div className='city-title'>
                {city !== undefined ? city.name : 'Not found'}
            </div>
            <a className='button' href='/'>Back Home</a>


            <div className='picture'>
                <img src={city.images[0]} alt='' />
                <img src={city.images[1]} alt='' />
                <img src={city.images[2]} alt='' />
                <img src={city.images[3]} alt='' />
            </div>

            <div className='description'>

                <h5 className='mt-5 m-4'>{city.description}</h5>
                <h3 className='text-center text-bg-success p-1 text-decoration-underline'>{city.subtitle}</h3>
                {city.visit.map((destinatii) =>
                    <ul>
                        <li>{destinatii}</li>
                    </ul>
                )}<hr />
                <p className='fs-4 text-center'>{city.paragraph}</p>


            </div>

        </>
    )
}
