import React from 'react'

function FeatureItem({heading, main, close, image, reverse }) {
  return (
    <div className={`${reverse ? "md:flex-row-reverse" : ""} flex flex-wrap items-center max-w-5xl mx-auto mt-10`}>
        <div className='w-full md:w-1/2'>
            <h1 className={`${reverse ? 'heading-bg' : 'red-text'} text-xl md:text-3xl font-semibold mb-5`}>{heading}</h1>
            <p className='mb-4 leading-loose'>{main}</p>
            <p className='leading-loose'>{close}</p>
        </div>
        <div className='justify-self-center w-full md:w-1/2 '>
            <img className={`${reverse ? "" : "mx-auto"}`} src={image} alt="" />
        </div>
    </div>
  )
}

export default FeatureItem