import { useEffect, useState } from "react";

export function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        try {
          setLoading(true);
          const response = await fetch(url);
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.log(error);
          setError(error);
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    },
    [url]
  );

  return { loading, data, error };
}

export function useMultipleFetch(url) {
  const { data } = useFetch(url);

  const [loading, setLoading] = useState(false);
  const [lstData, setLstData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        try {
          setLoading(true);
          let temp = await data.results.map(async (r) => {
            try {
              const res = await fetch(r.url);
              const item = await res.json();
              return item;
            } catch (err) {
              throw err;
            }
          });
          temp = await Promise.all(temp);
          setLstData(temp);
        } catch (error) {
          console.log(error);
          setError(error);
        } finally {
          setLoading(false);
        }
      }

      if (data && data.results && Array.isArray(data.results)) {
        fetchData();
      }
    },
    [data]
  );

  return { loading, lstData, error };
}
