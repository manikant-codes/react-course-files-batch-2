import { useEffect, useState } from "react";
import { fetchData, fetchMultipleData } from "../services/apiServices";

export function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchDataFromApi() {
        try {
          setLoading(true);
          const result = await fetchData(url);
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }

      fetchDataFromApi();
    },
    [url]
  );

  return { loading, data, error };
}

export function useMultipleFetch(url, getUrls) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchDataFromApi() {
        try {
          setLoading(true);
          const resultSingle = await fetchData(url);
          console.log("result", resultSingle);
          const urls = getUrls(resultSingle);
          console.log("urls", urls);
          const result = await fetchMultipleData(urls);
          setData(result);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }

      fetchDataFromApi();
    },
    [getUrls, url]
  );

  return { loading, data, error };
}
