import React from "react";
import CourseList from "./components/CourseList";
import Header from "./components/Header/header";

const App = () => {
  return (    
      <div className="App">
        <Header/>
        <CourseList />
      </div>      
  );
};

export default App;
