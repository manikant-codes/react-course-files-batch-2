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
  const { data: urls } = useFetch(url);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(urls);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        try {
          setLoading(true);
          const promises = urls.results.map(async (result) => {
            const response = await fetch(result.url);
            const json = await response.json();
            return json;
          });

          const resolved = await Promise.all(promises);

          setData(resolved);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }

      if (urls && urls.results) {
        fetchData();
      }
    },
    [urls]
  );

  return { loading, data, error };
}
