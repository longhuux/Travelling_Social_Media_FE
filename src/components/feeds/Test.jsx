import React from "react";
import { CLOUDINARY_URL } from "../../config";
function Test() {
  return (
    <main className="w-full py-3">
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-2xl mx-auto overflow-hidden"
        data-v0-t="card"
      >
        <div className="space-y-1.5 p-4 flex flex-row items-center">
          <a className="flex items-center gap-2 text-sm font-semibold" href="#">
            <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 border">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                U
              </span>
            </span>
            @username
          </a>
          <button
            className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground ml-auto w-8 h-8 rounded-full"
            type="button"
            id="radix-:r18:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <circle cx={12} cy={12} r={1} />
              <circle cx={19} cy={12} r={1} />
              <circle cx={5} cy={12} r={1} />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">Italian Expedition</h1>
          <img
            // src="https://livetraffic.eu/wp-content/uploads/placeholder-300x300.png"
            src={`${CLOUDINARY_URL}/1704990900390-iamge.png`}            alt="Italian Expedition"
            className="w-[521px] h-auto object-cover mb-4 rounded-lg"
          />
          <div className="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
            <span>12 Participants</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
              <line x1={16} x2={16} y1={2} y2={6} />
              <line x1={8} x2={8} y1={2} y2={6} />
              <line x1={3} x2={21} y1={10} y2={10} />
            </svg>
            <span>Start: Dec 1, 2023</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
              <line x1={16} x2={16} y1={2} y2={6} />
              <line x1={8} x2={8} y1={2} y2={6} />
              <line x1={3} x2={21} y1={10} y2={10} />
            </svg>
            <span>End: Dec 14, 2023</span>
          </div>
          <h2 className="text-xl font-semibold mb-2">Milestones:</h2>
          <ul>
            <li className="mb-2">Visited the Colosseum</li>
            <li className="mb-2">Explored the Amalfi Coast</li>
          </ul>
        </div>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span>320 Reactions</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
            </svg>
            <span>120 Comments</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx={12} cy={12} r={3} />
            </svg>
            <span>1.2k Views</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Test;
