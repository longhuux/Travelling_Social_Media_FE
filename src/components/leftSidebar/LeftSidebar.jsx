import React from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import logo from '../.././assets/xjourney.png';
import CreateJourney from "./CreateJourney";

function LeftSidebar() {

  return (
    <div>
      <div className="w-[275px] h-screen px-3 flex-col justify-start items-start inline-flex top-0 sticky">
        <div className="self-stretch h-14 py-[3px] flex-col justify-start items-start gap-2.5 flex my-6">
        <img src={logo} className='logo'/>

          <div className="w-[50px] h-[50px] flex-col justify-center items-center gap-2.5 flex" />
        </div>
        <div className="self-stretch h-[602px] flex-col justify-start items-start gap-[38px] flex">
          <div className="px-3 flex-col justify-start items-start gap-8 flex">
            <div className="self-stretch h-[50px] justify-start items-center gap-5 inline-flex cursor-pointer">
              <div className="w-[26px] h-[26px] relative">
                <div className="w-[7px] h-[7px] left-[17px] top-[-1px] absolute bg-sky-500 rounded-full" />
                <HomeRoundedIcon/>
              </div>
              <div className="w-[55px] text-neutral-900 text-xl font-normal leading-normal">
                Home
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-5 inline-flex cursor-pointer">
              <div className="w-[26px] h-[26px] relative">
                <SearchIcon/>
              </div>
              <div className="w-[68px] text-neutral-900 text-xl font-normal leading-normal">
                Explore
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-5 inline-flex cursor-pointer">
              <div className="w-[26px] h-[26px] relative">
                <NotificationsIcon/>
              </div>
              <div className="w-[119px] text-neutral-900 text-xl font-normal leading-normal">
                Notifications
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-5 inline-flex cursor-pointer">
              <div className="w-[26px] h-[26px] relative">
                <MessageIcon/>
              </div>
              <div className="w-[92px] text-neutral-900 text-xl font-normal leading-normal">
                Messages
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-5 inline-flex cursor-pointer">
              <div className="w-[26px] h-[26px] relative" >
                <BookmarkIcon/>
              </div>
              <div className="w-[104px] text-neutral-900 text-xl font-normal leading-normal">
                Bookmarks
              </div>
            </div>
            {/* <div className="self-stretch justify-start items-center gap-5 inline-flex cursor-pointer">
              <div className="w-[26px] h-[26px] relative" />
              <div className="w-[43px] text-neutral-900 text-xl font-normal leading-normal">
                Lists
              </div>
            </div> */}
            <div className="self-stretch justify-start items-center gap-5 inline-flex cursor-pointer">
              <div className="w-[26px] h-[26px] relative" >
                <PersonIcon/>
              </div>
              <div className="w-[59px] text-neutral-900 text-xl font-normal leading-normal">
                Profile
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-5 inline-flex cursor-pointer">
              <div className="w-[26px] h-[26px] relative" >
                <MoreHorizIcon/>
              </div>
              <div className="w-[47px] text-neutral-900 text-xl font-normal leading-normal">
                More
              </div>
            </div>
          </div>
          <CreateJourney/>
        </div>
        <div className="self-stretch grow shrink basis-0 justify-start items-end gap-[29px] inline-flex">
          <div className="grow shrink basis-0 h-[90px] py-6 justify-start items-center gap-4 flex">
            <div className="w-10 h-10 rounded-[500px] justify-center items-center flex">
              <div className="w-10 h-10 justify-center items-center inline-flex">
                <AccountCircleTwoToneIcon fontSize="large"/>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="self-stretch text-neutral-900 text-[15px] font-bold leading-tight">
                  longhuux
              </div>
              <div className="self-stretch text-slate-600 text-[15px] font-normal leading-tight">
                @longhuux
              </div>
            </div>
            <div className="w-[19px] h-[19px] relative" >
              <MoreHorizIcon className="w-10 h-10 justify-center items"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
