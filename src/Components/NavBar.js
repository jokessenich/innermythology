import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            hidden: true
        }
    }


render(){
    return(
        <div className = "nav-flex">
        <ul className="ul-flex">
        <li><Link to='/' className="nav-link-horiz">Home</Link></li>
    <li><Link to='/about' className="nav-link-horiz" >About</Link></li>
    <li><Link to='/benefits' className="nav-link-horiz" >Benefits</Link></li>
    <li><Link to='/contact' className="nav-link-horiz" >Sessions</Link></li>


        </ul>
    </div>
    )
}
}