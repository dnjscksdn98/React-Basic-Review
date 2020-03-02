import React from "react";

import User from "./User";

// 배열 랜더링
function UserList(props) {
  const { users, handleRemove, handleToggle } = props;

  return (
    <React.Fragment>
      {/* 중요 : key 값 꼭 지정하기 */}
      {users.map(user => {
        return (
          <User
            user={user}
            key={user.id}
            handleRemove={handleRemove}
            handleToggle={handleToggle}
          />
        );
      })}
    </React.Fragment>
  );
}

export default UserList;
