import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAtom} from '@fortawesome/free-solid-svg-icons'

function Menu() {
  return (
    <div className='hidden lg:flex lg:flex-col lg:w-1/6 lg:h-screen lg:bg-gray-200'>
        <div className='p-2 pb-6 pt-6 text-3xl text-blue-900 font-bold'>
            <div className='flex items-center justify-center'>
                <FontAwesomeIcon icon={faAtom} size='lg'/>
                <p className=''>Vasitum</p>
            </div>
            
        </div>
        <br/>

        <div className='flex-col text-gray-600 p-2'>
            <p className='text-xs'>MAIN MENU</p>
            <div className='pt-2 pb-2'>
                <ul className='flex-col p-2'>
                    <li className='p-2 text-center'>
                        <NavLink to="/" className={({ isActive }) =>isActive ? 'text-red-700 font-bold' :''}>
                            Dashboard
                        </NavLink>
                    </li>

                    <li className='p-2 text-center'>
                        <NavLink>
                            Recruitment
                        </NavLink>
                    </li>

                    <li className='p-2 text-center'>
                        <NavLink>
                            Schedule
                        </NavLink>
                    </li>

                    <li className='p-2 text-center'>
                        <NavLink>
                            Employee
                        </NavLink>
                    </li>

                    <li className='p-2 text-center'>
                        <NavLink>
                            Department
                        </NavLink>
                    </li>
                </ul>
            </div>
            <br/>
            <div className='pt-2 pb-2'>
                <p className='text-xs'>OTHER</p>
                <ul>
                    <li className='p-2 text-center'>
                        <NavLink>
                            Support
                        </NavLink>
                    </li>

                    <li className='p-2 text-center'>
                        <NavLink>
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Menu