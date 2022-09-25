import React from 'react'
import {Switch, Route} from 'react-router-dom'
import  Home from './Home.js'
//import Register from  '../Register/Register'
//import Login from '../Login/Login'
//import AddRemedy from '../AddRemedy/AddRemedy.js'
//import SearchResults from '../SearchResults/SearchResults.js'
//import MaladyList from '../MaladyList/MaladyList'
//import Malady from '../MaladyList/Malady/Malady'
//import AddMalady from '../AddMalady/AddMalady.js'
//import MaladyNotFound from '../MaladyNotFound/MaladyNotFound.js'
//import ErrorPage from '../../ErrorPage/ErrorPage.js'
import Benefits from './Benefits.js'
import Uxhome from './Uxhome.js'
import About from './About.js'
import Contact from './Contact.js'


export default class Main extends React.Component{

    render(){
        return(

        <Switch>

            <Route exact path ='/' component = {Home}></Route> 

            <Route exact path ='/home' component = {Uxhome}></Route> 
            <Route exact path ='/about' component = {About}></Route> 
            <Route exact path ='/contact' component = {Contact}></Route> 
            <Route exact path ='/benefits' component = {Benefits}></Route> 


        </Switch>            
        )
    }
}