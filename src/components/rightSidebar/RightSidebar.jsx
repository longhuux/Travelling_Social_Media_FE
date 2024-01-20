import React from "react";

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

        <div className="h-[314px] w-full px-4 py-[13px] bg-gray-50 rounded-2xl border border-gray-50 flex-col justify-start items-start gap-[25px] flex">
          <div className="w-[139px] text-neutral-900 text-xl font-bold leading-normal">
            You might like
          </div>
          <div className="self-stretch grow shrink basis-0 justify-start items-center gap-3 inline-flex">
            <div className="w-12 h-12 rounded-[500px] justify-center items-center flex">
              <img
                className="w-12 h-12"
                src="https://via.placeholder.com/48x48"
              />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="self-stretch text-neutral-900 text-[15px] font-bold leading-tight">
                Ada Mu
              </div>
              <div className="w-[78px] text-slate-600 text-[15px] font-normal leading-tight">
                @ada_mu
              </div>
            </div>
            <div className="w-[75px] px-[17px] py-[7px] bg-neutral-900 rounded-full justify-start items-center gap-2.5 flex">
              <div className="text-center text-white text-sm font-normal leading-none">
                Follow
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-3 inline-flex">
            <div className="w-12 h-12 rounded-[500px] justify-center items-center flex">
              <img
                className="w-12 h-12"
                src="https://via.placeholder.com/48x48"
              />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="self-stretch text-neutral-900 text-[15px] font-bold leading-tight">
                Jane Doe
              </div>
              <div className="w-[115px] text-slate-600 text-[15px] font-normal leading-tight">
                @jane_doe
              </div>
            </div>
            <div className="w-[75px] px-[17px] py-[7px] bg-neutral-900 rounded-full justify-start items-center gap-2.5 flex">
              <div className="text-center text-white text-sm font-normal leading-none">
                Follow
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-center gap-3 inline-flex">
            <div className="w-12 h-12 rounded-[500px] justify-center items-center flex">
              <img
                className="w-12 h-12"
                src="https://via.placeholder.com/48x48"
              />
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
              <div className="self-stretch text-neutral-900 text-[15px] font-bold leading-tight">
                John Week
              </div>
              <div className="w-[115px] text-slate-600 text-[15px] font-normal leading-tight">
                @john_week
              </div>
            </div>
            <div className="w-[75px] px-[17px] py-[7px] bg-neutral-900 rounded-full justify-start items-center gap-2.5 flex">
              <div className="text-center text-white text-sm font-normal leading-none">
                Follow
              </div>
            </div>
          </div>
          <div className="w-[78px] text-sky-500 text-[15px] font-normal leading-tight">
            Show more
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
        <div className="self-stretch h-14 flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch justify-start items-start gap-3 inline-flex">
            <div className="text-slate-600 text-[13px] font-normal leading-none">
              Terms of Service
            </div>
            <div className="text-slate-600 text-[13px] font-normal leading-none">
              Privacy Policy
            </div>
            <div className="text-slate-600 text-[13px] font-normal leading-none">
              Cookie Policy
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-3 inline-flex">
            <div className="text-slate-600 text-[13px] font-normal leading-none">
              Accessibility
            </div>
            <div className="text-slate-600 text-[13px] font-normal leading-none">
              Ads info
            </div>
            <div className="justify-start items-center gap-0.5 flex">
              <div className="text-slate-600 text-[13px] font-normal leading-none">
                More
              </div>
              <div className="w-4 h-4 relative" />
            </div>
          </div>
          <div className="self-stretch text-slate-600 text-[13px] font-normal leading-none">
            © 2024 Twitter, Inc.
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
