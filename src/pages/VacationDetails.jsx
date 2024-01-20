import React from 'react'
import LeftSidebar from '../components/leftSidebar/LeftSidebar'
import RightSidebar from '../components/rightSidebar/rightSidebar'
import Vacation from '../components/vacation/Vacation'

function VacationDetails() {
  return (
    <>
        <div className='flex content-center justify-center'>
          <LeftSidebar/>
          <Vacation/>
          <RightSidebar/>
        </div>
    </>
  )
}

export default VacationDetails