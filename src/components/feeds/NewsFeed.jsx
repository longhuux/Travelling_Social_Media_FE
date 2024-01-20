import React, { useEffect, useCallback, useRef, useState } from "react";
import Post from "./Post";
import Test from "./Test";
import PostForm from "./PostForm";
import VacationFeeds from "./VacationFeeds";
import { useSelector, useDispatch } from "react-redux";
import { fetchVacations } from "../../redux/slice/vacationSlice";
import { createVacation } from "../../redux/slice/vacationSlice";
import { CircularProgress } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
function NewsFeed() {
  const dispatch = useDispatch();
  const vacations = useSelector((state) => state.vacation.vacations);
  const status = useSelector((state) => state.vacation.status);
  const error = useSelector((state) => state.vacation.error);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async (__page) => {
    console.log(__page);
    const response = await axios.get(
      `http://localhost:8000/vacation/get-all-vacations?pageSize=${5}&pageIndex=${page}`
    );
    console.log(response.data.data)
    setItems([...items, ...response.data.data]);
    setPage(page + 1);
  };

  useEffect(() => {
    if (status === "idle") {
      // dispatch(fetchVacations({ pageSize: 5, pageIndex: 1 }));
      // dispatch(createVacation());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <div className="flex justify-center w-[600px] mt-10">
        <CircularProgress className="flex justify-center" />
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="w-[600px] px-3 flex-col justify-start items-start inline-flex overflow-auto scroll-smooth">
        {/* {vacations.map((vacation) => {
          return <VacationFeeds key={vacation._id} vacation={vacation} />;
        })} */}
        <InfiniteScroll
          style={{ margin: "10px" }}
          pageStart={0}
          loadMore={fetchData}
          hasMore={true}
          loader={
            <div className="loader flex justify-center !w-[600px] mt-6" key={0}>
        <CircularProgress className="flex justify-center" />
            </div>
          }
        >
          {items.map((item) => (
             <VacationFeeds key={item._id} vacation={item} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default NewsFeed;
