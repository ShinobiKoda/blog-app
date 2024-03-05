import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setisLoading(false);
      })
      .catch(error => console.error("Fetching error:", error));
    },1000)
  }, [url]); // Empty dependency array means this effect runs once after initial render

  return { data, isLoading };
};

export default useFetch;
