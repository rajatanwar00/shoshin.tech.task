import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'

function AnnounceBar({text}){
    return(
      <div className='flex justify-between p-3 bg-gray-200 rounded-md text-sm'>
        <div className='flex justify-center items-center'>
          {text}
        </div>
        <div>
          <FontAwesomeIcon icon={faThumbtack} rotation={45} />
        </div>
      </div>
    )
  }

export default AnnounceBar