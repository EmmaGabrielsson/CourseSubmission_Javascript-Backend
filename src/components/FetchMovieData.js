import { useEffect, useState } from "react";

const FetchMovieData = (url) => {
  const [data, setData] = useState("");
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Error: " + res.status);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setWaiting(false);
      })
      .catch((err) => {
        setData(null);
        setWaiting(false);
        console.log(err.message);
      });
  }, [url]);

  return { data, waiting };
};

export default FetchMovieData;
