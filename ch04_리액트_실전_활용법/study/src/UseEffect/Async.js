import React, { useState } from "react";
import { useEffect } from "react";

function Async() {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    async function fetchAndSetUser() {
      const data = await fetchAndSetUser(userId);
      setUserId(data);
    }
    fetchAndSetUser();
  }, [userId]);
  return <div></div>;
}

export default Async;
