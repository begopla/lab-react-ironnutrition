import './App.css';
// To start using the pre-made Ant Design components we must first import them:
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import {useState} from 'react'
function App() {
const [food, setFood] = useState(foods);
const [searchedString, setSearchedString]=useState("");
const [showForm, setShowForm] = useState(true);

const handleAddFoodItem = (foodItem)=>{
  const foodsCopy = [...food];
  foodsCopy.push(foodItem);
   setFood(foodsCopy);
};


  let searchedFood = null;
  if(searchedString !== ""){
    searchedFood = food.filter((anyItem)=>{
      return anyItem.name.toLowerCase().includes(searchedString.toLowerCase());
    });
  } else{
    searchedFood = food;
  }

  const handleDeleteItem = (name)=>{
    setFood(searchedFood.filter((anyFood)=>anyFood.name !== name))
  }

  const toggleForm = () =>{
    setShowForm(!showForm)
  } 
  
  return (
    <div className="App">
    <h1>Welcome! </h1>

    <section  className='form-see' onClick = {toggleForm}> {showForm? 'Hide form' : 'See form'}
    <div className={showForm ? 'entry-form':'entry-form toggle-form'}>
    <AddFoodForm handleAddFoodItem={handleAddFoodItem} ></AddFoodForm>
    </div>
    </section>
    <Search 
        searchedString = {searchedString} 
        setSearchedString ={setSearchedString}
        />

    <section className='food-section'>
    {searchedFood.map((food)=>{
      return(
        
        <FoodBox   setFoods={setFood}
          name = {food.name}
          key = {food.name}
          image = {food.image}
          calories = {food.calories}
          servings = {food.servings}
          handleDeleteItem = {handleDeleteItem}
        />
      )
    })}
    </section>
    </div>
  );
}

export default App;
