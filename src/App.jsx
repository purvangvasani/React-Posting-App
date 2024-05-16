import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function changeModalStateHandler() {
    setModalIsVisible(!modalIsVisible);
  }
  
  return (
    <>
      <MainHeader onCreatePost={changeModalStateHandler} />
      <main>
        <PostList modalIsvisible={modalIsVisible} changeModalStateHandler={changeModalStateHandler} />
      </main>
    </>
  )
}

export default App;
