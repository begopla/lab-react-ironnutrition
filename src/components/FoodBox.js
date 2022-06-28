import React from 'react'
import {Card, Col, Button} from 'antd'
const FoodBox = ({name, image, calories, servings, setFood,handleDeleteItem}) => {
  return (
    <div className='food-container'>
      <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories} </p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings}  </b> kcal
        </p>
        <Button type="primary" onClick={()=>handleDeleteItem(name)}> Delete </Button>
      </Card>
    </Col>
    </div>
  )
}

export default FoodBox