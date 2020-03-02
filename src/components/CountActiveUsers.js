import React, { useState, useEffect } from "react";

function CountActiveUsers(props) {
  const { users } = props;

  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    setActiveUsers(users.filter(user => user.active).length);
  }, [users]);

  return (
    <React.Fragment>
      <h1>Active users : {activeUsers}</h1>
    </React.Fragment>
  );
}

export default CountActiveUsers;
