import {useState} from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";

export default function App() {
  const [queue, setQueue] = useState([]);

const addToQueue = (customer) => {
  // Add data to the queue
}

const updateStatus = (id, newStatus) => {
  // Change the data in queue based on the id and newStatus
}

const removeFromQueue = (id) => {
  // Remove data from the queue based on the id
}

  return (
    <div>
      <header>
        <h1>Queue Management System</h1>
        <p>Manage your customers efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <h1>Queue Display</h1>
      </main>
      
    </div>
  );
}
