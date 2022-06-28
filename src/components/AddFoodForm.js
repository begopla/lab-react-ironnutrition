import React from 'react'
import{Divider, Input} from 'antd'
import{useState} from 'react'
const AddFoodForm = ({ handleAddFoodItem}) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("1");

    
    const handleImageInput = e => setImage(e.target.value);
    const handleCaloriesInput = e => setCalories(e.target.value);
    const handleServingsInput = e => setServings(e.target.value);
  
    const resetFields =() =>{
        setName('')
        setImage('')
        setCalories('')
        setServings('1')
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        if(name ==="" || image === "" || calories === "" || servings === ""){
         console.log("You need to complete the form")
        return
        }
        const newFood = {name, image, calories, servings}
        handleAddFoodItem(newFood)
        resetFields()
    }
   
    return (

    <form action="" onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        
        <label htmlFor="name" className='entry-label'>Name</label>
        <Input value={name} name="name" type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="image" className='entry-label'>Image</label>
        <Input value={image} name="image" type="text" onChange={(e) => setImage(e.target.value)} />
        <label htmlFor="calories " className='entry-label'>Calories</label>
        <Input value={calories} name="calories" type="text" onChange={(e) => setCalories(e.target.value)} />
        <label htmlFor="servings " className='entry-label'>Servings</label>
        <Input value={servings} name="servings" type="text" onChange={(e) => setServings(e.target.value)} />
        <button className='entry-label button' type='submit'>Create</button>
        <Divider/>
    </form>
  )
}

export default AddFoodForm