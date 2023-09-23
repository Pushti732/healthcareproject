import React from 'react'
import { Link } from 'react-router-dom'
import a from './data'
function Header(props) {
  return (
        <div>
        <header>
            <h1>{props.title}</h1>
            <nav>
               {
                props.navitems ? props.navitems.map((item,index)=>{
                    return <Link to={item}>{item}</Link>
                } ): "no data available"
               }
            </nav>
            <hr></hr>
        </header>
    </div>
  )
}


export default Header