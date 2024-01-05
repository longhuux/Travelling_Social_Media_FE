import React from 'react'
import LeftSidebar from '../components/leftSidebar/LeftSidebar'
import NewsFeed from '../components/feeds/NewsFeed'
import RightSidebar from '../components/rightSidebar/rightSidebar'

function Home() {
  return (
    <>
        
        <div className='flex content-center justify-center'>
          <LeftSidebar/>
          <NewsFeed/>
          <RightSidebar/>
        </div>
    </>
  )
}

export default Home