import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'

function GraphCard({heading,number,graphnum,men,women}) {
  return (
    <div className='p-3 border rounded-md w-full lg:w-80 lg:shadow-lg'>
        <p className='font-medium'>{heading}</p>
        <br/>   

        <div className='flex justify-between'>
            <p className='text-3xl'>{number}</p>

            <div>
                <FontAwesomeIcon icon={faArrowTrendUp} size='2xl'/>
            </div>            
        </div>
        <br/>

        <div className='flex justify-between text-sm'>
            <div>
                <p>
                    {men} Men
                </p>
                <p>
                    {women} Women
                </p>
            </div>

            <div className='flex justify-center items-center bg-orange-100 p-1'>
                +{graphnum}% Past month
            </div>
        </div>
    </div>
  )
}

export default GraphCard