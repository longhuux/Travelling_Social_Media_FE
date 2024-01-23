import React from "react";
import LeftSidebar from "../components/leftSidebar/LeftSidebar";
import NewsFeed from "../components/feeds/NewsFeed";
import RightSidebar from "../components/rightSidebar/RightSidebar";
import { useNavigate, Navigate } from "react-router-dom";

function Home() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {

    console.log(token);
    return <Navigate to = "/sign-in"></Navigate>;
  }
  

  return (
    <>
      <div className="flex content-center justify-center">
        <LeftSidebar />
        <NewsFeed />
        <RightSidebar />
      </div>
    </>
  );
}

export default Home;
