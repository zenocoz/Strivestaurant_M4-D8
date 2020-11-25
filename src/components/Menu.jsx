import React from "react"
import dishes from "../data/menu.json"
import SingleDish from "./SingleDish.jsx"
import { Container, ProgressBar, Alert } from "react-bootstrap"

const Menu = () => (
  <Container>
    {dishes && dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />)}{" "}
    {!dishes && (
      <>
        <ProgressBar className="mt-5" now={60} />
        <Alert variant="danger" className="mt-5 ">
          we are working on it
        </Alert>
      </>
    )}
  </Container>
)
export default Menu
