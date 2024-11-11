import React from 'react'

function Card({text,number,subnumber,statement,color}) {
  return (
    <div className={`border rounded-lg p-3 ${color} w-full lg:w-60`}>
        <p className='p-1 text-lg font-medium'>{text}</p>
        <p className='p-1 text-3xl'>{number}</p>
        <p className='p-1 text-sm'>{subnumber} {statement}</p>
    </div>
  )
}

export default Card