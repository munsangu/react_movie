import React from "react"
import { HashRouter, Route } from "react-router-dom"
import Home from "./routes/home"
import About from "./routes/about"
import Detail from "./routes/detail"
import Navigation from "./components/navigation"
import "./app.css"

function App() {
  return <HashRouter>
    <Navigation></Navigation>
    <Route path="/" exact={true} component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/movie/:id" component={Detail}></Route>
  </HashRouter>
}

export default App;