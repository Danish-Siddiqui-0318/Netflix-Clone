import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useParams, useNavigate, Navigate } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setdata] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTVkMzFmMGU1NDk1OWUyOTdmM2RkYTFmMjc0OGZjOCIsIm5iZiI6MTcyMjg1MzIzOS4zNjg1OTEsInN1YiI6IjY2YWQ0MTEyMjM1Y2M2NmQyZDY0YWYyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uFrwFGZAF031aUnXZ5oRFvdPEcv6SwzPm-FrETitG-k",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setdata(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt=""
        onClick={() => {
          navigate(-2);
        }}
      />
      <iframe
        src={`https://www.youtube.com/embed/${data.key}`}
        width="90%"
        height="90%"
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{data.published_at.slice(0, 10)}</p>
        <p>{data.name}</p>
        <p>{data.typeof}</p>
      </div>
    </div>
  );
};

export default Player;
