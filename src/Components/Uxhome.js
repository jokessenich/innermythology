import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import './Uxhome.css'
//import Context from '../../Context'

export default class Uxhome extends React.Component {

    render(){
        return(
            <div className="ux-home overlay">
                <h3 className="breathe">breathe</h3>
                <h1 className="page-header">Home</h1>

                <p className="p-introduction">
                   {//} Our internal world is a vibrant, wild jungle. 
                   //} {<br />}{<br />}
        }
                    Just as our feet move us through the outer world, our thoughts and emotions move us through our inner world.
                    {<br />}{<br />}
                    Let us put our ear to the ground and listen, breathe with and learn to deeply love our inner world. 
                    {<br />}{<br />}
                    We aim not to fix or fight, but to move with love, understanding and intention.
                    You are the only one who can bring peace to your inner world. Only then will you bring peace to the outer world. 
                    {<br />}{<br />}
                    {<br />}{<br />}
                    {/* <Link to="about" className="page-link">More</Link> */}

                </p>

                </div>
                
        )
    }
}