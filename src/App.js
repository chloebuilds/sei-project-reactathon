import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from './components/common/Home'
import Nav from './components/common/Nav'
import RandomArtCard from './components/art/RandomArtCard'
import ArtShow from './components/art/ArtShow'


function App() {

  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/artists/:artistId" component={ArtShow} />
          <Route path="/artists" component={RandomArtCard} />
        </Switch>
        
      </Router>
    </>

  )
}

export default App
