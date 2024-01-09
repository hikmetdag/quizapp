 import { useEffect, useState } from "react";
// import axios from "axios";

// const useFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get(url);
//         setData(res.data);
//       } catch (err) {
//         setError(err);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const reFetch = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(url);
//       setData(res.data);
//     } catch (err) {
//       setError(err);
//     }
//     setLoading(false);
//   };

//   return { data, loading, error, reFetch };
// };

// export default useFetch;

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log("responseData from useFetch:", result); // Log the response data
        setData(result);
      } catch (error) {
        console.error("Error in useFetch:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, loading, error];
};
export default useFetch;