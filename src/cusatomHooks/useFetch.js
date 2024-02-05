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

  return [loading, data, error];
}

export function useMultipleFetch(url) {
  const [l, d, e] = useFetch(url);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        try {
          setLoading(true);
          let temp = await d.results.map(async (i) => {
            try {
              const res = await fetch(i.url);
              const item = await res.json();
              return item;
            } catch (err) {
              throw err;
            }
          });
          temp = await Promise.all(temp);
          setData(temp);
        } catch (error) {
          console.log(error);
          setError(error);
        } finally {
          setLoading(false);
        }
      }

      if (d && d.results && Array.isArray(d.results)) {
        fetchData();
      }
    },
    [d]
  );

  return [loading, data, error];
}
