import React, { useEffect, useState } from "react";
import axios from "axios";

import LoadingIndicator from "./LoadingIndicator";
import "./Logo.scss";

function Logo({ userId }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://api.github.com/users/FrancoSirena")
        .then(({ data }) => setUser(data))
        .finally(() => setLoading(false));
    }, 1000);
  }, [userId]);

  return (
    <div className="logo-container">
      {loading ? (
        <LoadingIndicator />
      ) : (
        <img
          src={user.avatar_url}
          alt={user.name}
          className="logo"
          title={user.name}
        />
      )}
    </div>
  );
}

export default Logo;
