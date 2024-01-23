import People from "@mui/icons-material/People";
import { Button } from "@mui/material";
import React from "react";
import CreatePost from "./CreatePost";

function RightSidebar() {
  return (
    <div>
      <div className="w-[360px] h-[1224px] pr-3 pt-1 flex-col justify-start items-center gap-4 inline-flex overflow-y-auto top-0 sticky">
        <div className="w-[348px] h-12 px-4 py-3 bg-gray-100 rounded-full justify-start items-start gap-4 inline-flex">
          <div className="w-6 h-6 relative" />
          <div className="grow shrink basis-0 text-slate-600 text-[15px] font-normal leading-tight">
            Search
          </div>
        </div>

        <div className="h-fit w-full px-4 py-[13px] bg-slate-200 rounded-2xl border border-gray-50 flex-col justify-start items-start gap-[25px] flex">
          <div className=" text-neutral-900 text-xl font-bold leading-normal">
            Your curent vacation
          </div>
          <div className="bg-white w-full h-full rounded-2xl p-3">
            <h1 className="text-sky-600 text-lg">Title of vacation</h1>
            <div className="flex gap-x-1">
              <People />
              <p>2 members</p>
            </div>
            <p className="">desc...</p>
            <div className="flex justify-around mt-3">

            <Button className="w-[134px]" variant="outlined" color="error">
              Finish
            </Button>
            <CreatePost/>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[542px] px-4 py-[13px] bg-gray-50 rounded-2xl border border-gray-50 flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch h-[516px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-neutral-900 text-xl font-bold leading-normal">
              Popular places
            </div>
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[3px] inline-flex"></div>
              <div className="w-[19px] h-[19px] relative" />
            </div>
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[3px] inline-flex"></div>
              <div className="w-[19px] h-[19px] relative" />
            </div>
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[3px] inline-flex"></div>
              <div className="w-[19px] h-[19px] relative" />
            </div>
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[3px] inline-flex"></div>
              <div className="w-[19px] h-[19px] relative" />
            </div>
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[3px] inline-flex"></div>
              <div className="w-[19px] h-[19px] relative" />
            </div>
            <div className="self-stretch justify-start items-start gap-4 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-[3px] inline-flex"></div>
              <div className="w-[19px] h-[19px] relative" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RightSidebar;
