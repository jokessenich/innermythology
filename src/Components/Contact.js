import React from 'react';
import "./Contact.css"
import NavBar from './NavBar';
import PodcastLinks from './PodcastLinks';

export default class Contact extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            hidden: true
        }
    }


render(){
    return(
        <div className="contact-background">
        <h3 className="breathe">breathe</h3>
        <NavBar></NavBar>

        <h1 className="page-header">Sessions</h1>
        <p className="description-section">
            I offer a first virtual session for free to see if Inner Mythology is a good fit for you.
            Virtual: An inner exploration with me via zoom. The session will be between 1 and 2 hours.
{<br />}{<br />}

In Person: I offer three ways of connecting in person. 
<li className = "session-types">An in person inner exploration.</li>
<li className = "session-types">An inner exploration with integrated body work to clear energetic patterns.</li>
<li className = "session-types">An inner exploration with Reiki</li>

{<br />}

            Current location: Ann Arbor, MI
            {<br />}{<br />}
        
            First session is a free half hour session over zoom or in person.
            {<br />}After the first session, rates are:
            <ul>
                <li>$80 for Inner Exploration in zoom or in person</li>
                <li>$150 for Inner Exploration with Reiki or Massage</li>
            </ul>
            {<br />}{<br />}
            We do offer some sliding scale servicess, contact for more information.
                    
        </p>
        <div className="contact-section">
        {this.state.hidden?<h3 onClick = {()=>this.setState({hidden:false})}>Click here for contact information</h3>:""}
        {this.state.hidden?'':<div id = "contactInfo">
            <h3 className="emailLink">For sessions or questions: </h3><br /><br /><a className="emailLink bigger" href="mailto:innermythology@gmail.com">innermythology (at) gmail.com </a>
            </div>}
            </div>
        </div>
    )
}
}