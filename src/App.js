import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import NavBar from "./components/NavBar"
import Home from "./components/Home"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Reservations from "./components/Reservations"
import DishDetails from "./components/DishDetails"
import Menu from "./components/Menu"

class App extends React.Component {
  state = {
    isCacio: false,
  }

  checkCacio = (check) => {
    this.setState({ isCacio: check })
  }

  render() {
    return (
      <>
        <Router>
          <NavBar isCacio={this.state.isCacio} title="Strivestaurant" />
          <Route
            path="/"
            exact
            // render={(props) => (
            //   <Home title="Stefano" history={props.history} location={props.location} match={props.match} />
            // )}
            render={(
              props // props are history, location, match
            ) => <Home title="Stefano" {...props} />} // in this way you can pass your own props along with the router ones
          />
          <Route path="/menu" exact component={Menu} />
          {/* <Route path="/reservation" exact component={Reservations} /> */}
          <Route
            path="/reservation"
            exact
            render={(props) => (
              <Reservations header="MAKE YOUR RESERVATION BY PASSING PROPS THROUGH A ROUTE COMPONENT" />
            )}
          />
          {/* <Route path="/details/:stefano" component={DishDetails} /> */}
          <Route
            path="/details/:stefano"
            render={(props) => (
              <DishDetails checkCacio={this.checkCacio} {...props} />
            )}
          />
        </Router>
      </>
    )
  }
}

export default App
