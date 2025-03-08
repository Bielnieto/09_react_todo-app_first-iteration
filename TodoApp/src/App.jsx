import "./App.css";
import { Header } from "./Header";
import { Subheader } from "./Subheader";
import { ListHeader } from "./ListHeader";

function App() {
  
  return (
    <>
      <Header/>
      <Subheader subtitle="Todo List Manager"/>
      <ListHeader content="Todo List"/>
    </>
  )
}

export default App
