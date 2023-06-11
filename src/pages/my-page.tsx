import React from "react";
import Hello from "../app/components/Hello";

function MyPage(props: any) {
  return (
    <div>
      <h1>My first page</h1>
      <Hello name={"Karthi"}></Hello>
    </div>
  );
}

export default MyPage;