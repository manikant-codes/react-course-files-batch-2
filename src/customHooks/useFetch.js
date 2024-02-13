import { useEffect, useState } from "react";
import { fetchData, fetchMultipleData } from "../services/apiServices";

export function useFetch(endpoint) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchDataFromApi() {
        try {
          setLoading(true);
          const response = await fetchData(endpoint);
          setData(response);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      }

      fetchDataFromApi();
    },
    [endpoint]
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
          const response = await fetchData(url);
          const urls = getUrls(response);
          const multipleResponse = await fetchMultipleData(urls);
          setData(multipleResponse);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }

      fetchDataFromApi();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url]
  );

  return { loading, data, error };
}
