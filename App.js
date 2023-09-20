import React from 'react'
import Header from './header'
import Fotter from './fotter'
import Main from './main'
import a from './data.js'
import Implement from './implement'

function App(props) {
  return (
    <div className='hello'>
      <Header title={a.title} navitems={a.navitems}/>
      <Implement/>
      <Main/>
      <Fotter/>

    </div>
  )
}

export default App