import React from 'react'
import NavBar from './NavBar'
import {Link} from 'react-router-dom'
import './Benefits.css'
//import Context from '../../Context'

export default class Benefits extends React.Component {

    render(){
        return(
            <div className="more-background">
                <h3 className="breathe">breathe</h3>
                <NavBar></NavBar>
                <h1 className="page-header">Benefits</h1>

                    <section className="description-section">
                        As humans, our inner mythology completely informs the way in which we live our lives. It guides our patterns, routines, interactions, and all of the stories we tell ourselves. Therefore the benefits of exploring, understanding and creating Inner Mythology are only limited by your own imagination. People often use Inner Exploration for:
                        <ul>
                            <li>Pain relief</li>
                            <li>Inner conflicts</li>
                            <li>Creativity</li>
                            <li>Inspiration</li>
                            <li>Changing habits</li>
                            <li>Changing belief systems</li>
                            <li>Performance in sport</li>
                            <li>Performance under pressure</li>
                            <li>Relationship conflicts</li>
                            <li>Psychosomatic healing</li>
                            <li>Healing past wounds</li>
                            <li>Overcoming resistance</li>
                            <li>Overcoming mental blocks</li>
                            <li>Facing fears</li>
                            <li>Preparation</li>
                            <li>Connecting deeply to intuition</li>
                        </ul>
                    </section>
                </div>
                
        )
    }
}