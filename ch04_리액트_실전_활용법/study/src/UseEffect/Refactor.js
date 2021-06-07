import React, { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

function Refactor() {
  const [user, setUser] = useState();
  const userId = 1;
  const fetchAndSetUser = useCallback(
    async (needDetail) => {
      const data = await fetchAndSetUser(userId, needDetail);
      setUser(data);
    },
    [userId]
  );
  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);
  return <div></div>;
}

export default Refactor;
