import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://coding-challenge-api.aerolab.co/products";
  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzljOWMxNjU2NDAxYTAwMjEwZjdjNDgiLCJpYXQiOjE2NzEyMDc5NTh9.w6gcLbKyxHgMraak-eFBfQSHDXEOHf_o13C2Nk-wcI8";
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError("An error occurred");
      });
  }, [url]);
  return {
    data,
    error,
    isLoading,
  };
};
