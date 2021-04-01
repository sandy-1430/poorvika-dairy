import React from "react";
import { useEffect, useState } from "react";

export default function User() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  return <div>{loading && "Loading..."}</div>;
}

// export { user };
