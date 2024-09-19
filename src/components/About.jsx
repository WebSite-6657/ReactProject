import React from 'react'
import img from "../assets/img/about.jpg";
import Button from './Layout/Button';

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor'>
    <h1 className='font-semibold text-center justify-center lg:mt-14 mt-24 mb-8'>About Us</h1>

    <div className='flex flex-col lg:flex-row items-center gap-5'>
        <div className='w-full lg:w-2/4'>
            <img className='rounded-lg' src={img} alt="img" />
        </div >
        <div className='w-full lg:w-2/4 p-4 space-y-3'>
          <h2 className='font-semibold text-3xl'>what Makes Our Coffee Special?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, rem sint dolor ratione vitae repellendus dolores, perferendis maiores voluptate debitis soluta non culpa facere possimus, esse iste minima saepe dolorem!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus iusto atque perferendis facilis ut ducimus quaerat autem dolorem eaque quidem.</p>

          <Button title="Learm More"/>
        </div>
    </div>
    </div>
  )
}

export default About
