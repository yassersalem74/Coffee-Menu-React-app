//import css files
import "./main.css";
import React from "react";
import { Container, Row } from "react-bootstrap";
import NavBar from "./component/navBar";
import Header from "./component/header";
import Categories from "./component/categories";
import CardDetails from "./component/card";
import items from "./data/data";
import { useState } from "react";

function App() {
  const [itemsData, setitemsData] = useState(items);
 
  //return Arr without repetition (reakfast-Lunch-Dinner-Snack) + All
  const allCategory =["All",...new Set(items.map((i) => i.category))]
 console.log(allCategory) 

  //filter by category
  const filterByCategory = (cat) => {
    if (cat === "All") {
      setitemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setitemsData(newArr);
    }
  }

    //filter by Search Button
    const filterBySearch = (word) => {
      // If the search word is empty, reset to show all items
      if (word === "") {
        setitemsData(items);
      } else {
        // Convert the search word to lowercase for case-insensitive matching
        const lowercasedWord = word.toLowerCase();
    
        // Filter items based on description containing the search word
        const newArr = items.filter((item) => 
          item.description.toLowerCase().includes(lowercasedWord)
        );
    
        setitemsData(newArr);
      }
    }
     
  

  return (
    <div>
      <NavBar filterBySearch={filterBySearch}/>
      <Container>
        <Header />
        <Categories filterByCategory={filterByCategory} allCategory={allCategory} />
        <Row>
          <CardDetails itemsData={itemsData} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
