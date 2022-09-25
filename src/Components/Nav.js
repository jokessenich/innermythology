import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
//import Context from '../../Context'
import { slide as Menu } from 'react-burger-menu'
import {browserHistory} from 'react-router-dom'

export default class Nav extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            isOpen: false
        }
    }

   // static contextType = Context
    
    handleStateChange (state) {
        this.setState({isOpen: state.isOpen})  
      }
/*
    handleLogout=()=>{
        this.context.handleLogout()
    }
*/
    closeMenu=()=>{
        this.setState({
            isOpen: false
        })
    }

    render() {
        let menuProp = this.state.isOpen;
        /*
        let navBar = this.context.isLoggedIn ?
            <div className='nav-bar'>
                <ul className = 'screen-nav-bar'>
                    

                    <li><Link to='/' className="nav-bar-link">Home</Link></li>

                    <li><Link to='/maladylist' className="nav-bar-link">Maladies</Link></li>

                    <li><Link to='/addremedy' className="nav-bar-link">Add Remedy</Link></li>

                    <li><Link to='/addmalady' className="nav-bar-link">Add Malady</Link></li>
                
                    <li><Link to='/login' className="nav-bar-link" onClick = {this.handleLogout}>Logout</Link></li>

                </ul>

                <Menu isOpen = {menuProp}
                       width = {'100%'}
                       right
                      onStateChange={(state) => this.handleStateChange(state)}>
                

                    <Link to='/' className="nav-link" onClick = {this.closeMenu}>Home</Link>

                    <Link to='/maladylist' className="nav-link" onClick = {this.closeMenu}>Maladies</Link>

                    <Link to='/addremedy' className="nav-link" onClick = {this.closeMenu}>Add Remedy</Link>

                    <Link to='/addmalady' className="nav-link" onClick = {this.closeMenu}>Add Malady</Link>

                    <Link to='/login' className="nav-link" onClick = {this.handleLogout}>Logout</Link>

                </Menu>


            </div>:
            */
           
            let navBar =
            <div className='nav-bar'>

            <Menu isOpen = {menuProp}  
                  width = {'100%'}  
                  right       
                  onStateChange={(state) => this.handleStateChange(state)}>

                <Link to='/home' className="nav-link" onClick = {this.closeMenu}>Home</Link>
                <Link to='/about' className="nav-link" onClick = {this.closeMenu}>About</Link>
                <Link to='/podcast' className="nav-link" onClick = {this.closeMenu}>Podcast</Link>
                <Link to='/contact' className="nav-link" onClick = {this.closeMenu}>Sessions</Link>




        </Menu>
        
        
        </div>
        
        return (
            <div>
            {navBar}
            </div>
        )
    }
}

