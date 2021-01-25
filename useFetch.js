import { useState, useEffect } from "react";

export const useCallApi = (url) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setResponse(data);
      });
  }, []);

  return response;
};
