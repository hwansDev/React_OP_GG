//----------------------------
// import React && React-dom
//----------------------------

import React from "react";
import ReactDom from "react-dom";

//----------------------------
// import App.js
//----------------------------
import App from "./react/App.js";

// 추후 Redux or Context를 쓰기 위해 별도 Entry 컴포넌트 구성
// 과거에는 직접 렌더 파라미터에 쓰기도 했지만 좋은 방법이 아니다.
// 될 수 있으면 별도의 환경을 구성해주는 것이 좋다.
const Entry = () => {
  return <App />;
};

// index.html의 id가 app인 div에 Entry(<App/>)를 Render 하겠다.
ReactDom.render(<Entry />, document.querySelector("#app"));
