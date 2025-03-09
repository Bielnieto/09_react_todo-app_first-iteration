import "./App.css";
import { Header } from "./components/Header/Header";
import { Subheader } from "./components/Subheader/Subheader";
import { ListHeader } from "./components/ListHeader/ListHeader";
import { ItemCard } from "./components/ItemCard/ItemCard";
import { ItemsList } from "./components/ItemList/ItemList";
import { ListContainer } from "./components/ListContainer/ListContainer";

function App() {
  const todoItems = [
    {
      title: "Buy groceries",
      description: "Purchase milk, eggs, and bread from the supermarket.",
      status: "pending"
    },
    {
      title: "Finish project report",
      description: "Complete the final draft of the quarterly report.",
      status: "in progress"
    },
    {
      title: "Call plumber",
      description: "Fix the leaking sink in the kitchen.",
      status: "pending"
    },
    {
      title: "Schedule dentist appointment",
      description: "Book a check-up for next week.",
      status: "done"
    },
    {
      title: "Workout",
      description: "Go to the gym for an hour of cardio and strength training.",
      status: "pending"
    }
  ];

  return (
    <>
      <Header />
      <Subheader subtitle="Todo List Manager" />
      <ListContainer>
        <ListHeader content="Todo List" />
        <ItemsList itemsList={todoItems} />
      </ListContainer>
    </>
  )
}

export default App
