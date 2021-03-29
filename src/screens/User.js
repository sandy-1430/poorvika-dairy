import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://dummyapi.io/data/api";
const APP_ID = "605ddb22ffda796866b15501";

export default function User() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyapi.io/data/api/user`, {
        headers: { "app-id": APP_ID },
      })
      .then(({ data }) => setData(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && "Loading..."}
      {JSON.stringify(data)}
    </div>
  );
}

// export { user };
