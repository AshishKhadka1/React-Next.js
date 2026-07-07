import "./App.css";
import Card from "./components/Card.jsx";
import  Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx"
import { Button } from "./components/ui/button.tsx";

function App() {
  return (
    <>
      
      <Header/>
      <Hero/>
      <Button>Click me</Button>
      <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl">
        hello world
      </h1>
      <div className="flex gap-4">
        <Card
          title="Buy python Course"
          buttonText="Join now"
          imageurl="https://i.pinimg.com/1200x/cf/1d/b8/cf1db89fc8b650f69258258cb3423655.jpg"
          paragraph="If you want to learn python, then this is the best course for you. It will help you to learn python from scratch and make you a pro in python."
        />

        <Card 
        title="Learn React"
        buttonText="Start now"
        imageurl="https://i.pinimg.com/1200x/6a/40/3b/6a403b7c382238de027c51d155b1bde9.jpg"
        />

        <Card 
        title="learn Next.js"
        buttonText="Learn more"
        imageurl="https://i.pinimg.com/1200x/ab/53/ca/ab53cab7e9784f2f5794f96cee7d5f1d.jpg"
        />
      </div>
    </>
  );
}

export default App;
