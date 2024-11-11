import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className='p-3 flex justify-around items-center lg:justify-between border-b-2 min-w-full'>
        <div className='bg-gray-200 rounded flex-row'>
            <input type='text' placeholder='Search' className=' p-2 bg-gray-200'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='pr-2'/>
        </div>

        <div className='flex items-center'>
            <div className='p-2 lg:pr-6'>
                <FontAwesomeIcon icon={faBell} size='xl'/>
            </div>

            <div className='p-2 lg:pr-6 lg:pl-6'>
                <FontAwesomeIcon icon={faMessage} size='xl'/>
            </div>

            <div className='lg:flex lg:justify-between lg:items-center p-2 lg:pl-6 lg:pr-4'>
                <FontAwesomeIcon icon={faCircleUser} size='xl'/>
                <p className='hidden lg:block lg:font-medium lg:pl-1'>Admirra John</p>
            </div>
        </div>
    </div>
  )
}

export default Header