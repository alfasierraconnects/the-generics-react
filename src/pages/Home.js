import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import LiveShowItem from "../components/LiveShowItem";

const Home = () => {
  const { liveShows } = useContext(StoreContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Upcoming Live Shows</h1>
      <div>
        {liveShows.map((show) => (
          <LiveShowItem
            key={show.id}
            id={show.id}
            date={show.date}
            city={show.city}
            venue={show.venue}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
