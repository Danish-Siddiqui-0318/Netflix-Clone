import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./TvSeries.css";
import Navbar from "../../components/Navbar/Navbar";

const TvSeries = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTVkMzFmMGU1NDk1OWUyOTdmM2RkYTFmMjc0OGZjOCIsIm5iZiI6MTcyMjk1ODc5MS42MzM5NDEsInN1YiI6IjY2YWQ0MTEyMjM1Y2M2NmQyZDY0YWYyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rrAGX5E6YzOEio8-0e3xG2-k0nZ5GPh7XL34zpM-ZzQ",
    },
  };

  useEffect(() => {
    fetchItems();
  }, [page]);

  const fetchItems = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${page}`,
        options
      );
      const result = await response.json();
      setData((prevData) => [...prevData, ...result.results]);
      setHasMore(result.results.length > 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more items</p>}
        >
          {data.map((item, index) => (
            <div key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.original_name}
              />
              <h1>{item.original_name}</h1>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default TvSeries;
