import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Yükleme işlemi başladı

        const response = await fetch(url);
        const result = await response.json();

        console.log("responseData from useFetch:", result); // Log the response data

        // Kontrol ekle: result'in beklenen formatta olup olmadığını kontrol et
        if (!result || typeof result !== "object") {
          throw new Error("Invalid data format from the API");
        }

        setData(result);
      } catch (error) {
        console.error("Error in useFetch:", error);
        setError(error);
      } finally {
        setLoading(false); // Yükleme işlemi tamamlandı
      }
    };

    fetchData();
  }, [url]);

  return [data, loading, error];
};

export default useFetch;
