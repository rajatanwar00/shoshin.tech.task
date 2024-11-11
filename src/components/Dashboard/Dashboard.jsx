import React from 'react'
import Card from '../Card/Card'
import GraphCard from '../GraphCard/GraphCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import AnnounceBar from '../AnnounceBar/AnnounceBar'


function Dashboard() {
  return (
    <div className='w-full'>
      <div className='p-3 pb-0'>
        <p className='flex items-center font-medium text-2xl pl-4'>
          Dashboard
        </p>
      </div>      

      <div className='p-3 pt-0 lg:flex'>
        <div className='p-2 w-full lg:flex lg:flex-col lg:justify-center lg:items-between lg:w-2/3'>
          <div className='p-2 space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:justify-between'>
            <Card text="Available Position" number="24" subnumber="4" statement="Urgently needed" color="bg-orange-300"/>

            <Card text="Job Open" number="10" subnumber="4" statement="Active Hiring" color="bg-blue-300"/>

            <Card text="New Employees" number="24" subnumber="4" statement="Department" color="bg-pink-300"/>
          </div>

          <div className='p-2 flex flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:justify-between'>
            <GraphCard heading="Total Employees" number="216" graphnum="2" men="120" women="96" />

            <GraphCard heading="Talent Request" number="16" graphnum="5" men="6" women="10" />
          </div>

          <div className='p-2'>
            <div className='border rounded-md p-2'>
              <div>
                <p className='font-medium p-2'>Announcement</p>
                <div>

                </div>
              </div>

              <div>
                <ul className='flex flex-col justify-between'>
                  <li className='p-1'>
                    <AnnounceBar text=" Outing schedule for every department"/>
                  </li>

                  <li className='p-1'>
                    <AnnounceBar text="Meeting HR Department"/>
                  </li>

                  <li className='p-1'>
                    <AnnounceBar text="IT Department need two more talents for UX/UI Designer position"/>
                  </li>
                </ul>
              </div>
              </div>            
          </div>
        </div>

        <div className='flex flex-col items-center justify-around lg:justify-start w-full lg:w-1/3 p-2'>
          <div className='bg-blue-900 rounded-md'>
            <div className='p-2 bg-blue-950 text-white rounded-t-md'>Recently Activity</div>
            <div className='p-2 bg-blue-900 rounded-b-md'> 
              <p></p>
              <p className='text-white'>
                You Posted a New Job
              </p>
              <p className='text-slate-400'>
                Kindly check the requirements and terms of work and make sure everything is right.
              </p>
              <br/>
              <div className='flex justify-between'>
                <p className='text-slate-400'>Today you make activites</p>
                <button className='p-2 bg-red-500 rounded-md text-white'>See all activity</button>
              </div>
            </div>
          </div>

          <br/>
          <div className='border-2 rounded p-2'>
            <div className='p-2'>
              <p className='font-medium'>Upcoming Schedule</p>

            </div>

            <div className='p-2'>

              <div className='pt-2 pb-2'>
                <p className='text-sm'>Priority</p>
                <AnnounceBar text="Review candidate applications"/>
              </div>

              <div className='pt-2 pb-2'>
                <p className='text-sm'>Other</p>
                <ul>
                  <li className='p-1'>
                    <AnnounceBar text="Interview with candidates"/>
                  </li>

                  <li className='p-1'>
                    <AnnounceBar text=" Short meeting with product designer from IT Department"/>
                  </li>
                </ul>
              </div>                 

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard