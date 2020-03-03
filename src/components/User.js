import React from "react";

function User(props) {
  const { user, handleRemove, handleToggle } = props;

  // [] : 컴포넌트가 처음으로 랜더링됬을때만 실행
  //   useEffect(() => {
  //     // mount
  //     // props -> state
  //     // REST API
  //     console.log("컴포넌트가 화면에 나타남.");

  //     // unmount - cleaner function
  //     return () => {
  //       console.log("컴포넌트가 화면에 사라짐.");
  //     };
  //   }, []);

  //   // [value] : value의 값이 설정(mount)이되거나 바뀔때에만 실행
  //   useEffect(() => {
  //     // 값이 바뀐 후와 첫 마운트될때 실행
  //     console.log("값이 설정됨");
  //     console.log(user);

  //     // cleaner function : 값이 바뀌기 전에 실행됨
  //     return () => {
  //       console.log("값이 바뀌기 전");
  //       console.log(user);
  //     };
  //   }, [user]);

  // 랜더링 될때마다 실행됨
  // useEffect(() => {
  //   console.log(user);
  // });

  return (
    <React.Fragment>
      <b
        style={{ color: user.active ? "green" : "black", cursor: "pointer" }}
        onClick={() => handleToggle(user.id)}
      >
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      <button onClick={() => handleRemove(user.id)}>delete</button>
      <br />
    </React.Fragment>
  );
}

export default User;
