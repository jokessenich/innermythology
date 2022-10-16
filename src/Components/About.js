import React from 'react';
import './About.css'
import NavBar from './NavBar'
import PodcastLinks from './PodcastLinks';

export default class About extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contact:false,
            innerMythology: false,
            sessions: false,
            whoAreYou: false,
            reasons: false
        }
    }


    render() {
        return (
            <div className="podcast-background">
                <h3 className="breathe">breathe</h3>
                <NavBar></NavBar>

                <h1 className="page-header">About </h1>

                <div className="faq-parent-section">
                    <p className="hidden-label" onClick={() => this.setState({ innerMythology: !this.state.innerMythology })}>What is Inner Mythology?</p>
                    {this.state.innerMythology ?
                        <div className='faq-bg'>
                            <p className='faq-section'>
                            {<br />}
                                . . .
                                {<br />}
                                {<br />}

                                Inner Mythology is the collection of stories that we live by. We all have our stories of who we are, where we came from and where we are going. We have stories of who we are in relationships, in conflicts, in triumph and defeat. These stories are almost entirely held and acted out below the conscious level.
                                {<br />}
                                {<br />} These stories are the dominant narratives of our lives and the most effective way to make any change in our lives is to listen and learn from our stories. As we understand our stories, we start to deepen our love and understanding of ourselves. We can learn to embrace our inner wisdom and trust ourselves completely.
                                {<br />}
                                {<br />}
                                . . .
                                {<br />}
                                {<br />}
                            </p></div> : ""}
                    <p className="hidden-label" onClick={() => this.setState({ reasons: !this.state.reasons })}>What can these sessions help with?</p>
                    {this.state.reasons ?
                        <div className='faq-bg'>

                            <p className='faq-section'>
                                {<br />}
                                . . .
                                {<br />}
                                {<br />}

                                Our outer world and living reality are a reflection of our internal world. Any problem or issue we encounter in the outer world can be helped with an Inner Exporation and understanding of our Inner Mythology.
                                {<br />}
                                {<br />}
                                The most concise answer is that these sessions can help us feeling centered, inspired and loving in our beings. They have the potential to help with illnesses, pain, psychological struggles, resistances, mental/physical performance and inspiration, among many other things.
                                {<br />}
                                {<br />}
                                . . .
                                {<br />}
                                {<br />}
                            </p> </div> : ""}
                    <p className="hidden-label" onClick={() => this.setState({ sessions: !this.state.sessions })}>What are Inner Exploration sessions like?</p>
                    {this.state.sessions ?
                        <div className='faq-bg'>
                            <p className='faq-section'>
                            {<br />}
                                . . .
                                {<br />}
                                {<br />}
                                The sessions are a mix between a dream, a meditation and a NVC communication session. There is a very magical quality to the work and it often feels to clients that they are in a different world. Initially we do a short explanation of the session clarification of intent, and permission to proceed. We then use Interactive Guided Imagery to go into a safe place in your unconscious mind and proceed to explore, communicate and clarify. When we have explored to an appropriate extent, or when time has run out, we give thanks, and then come back to the present place and debrief.
                                {<br />}
                                {<br />}
                                Session goals can include: seeking inner wisdom, developing deeper understanding, resolving inner conflict,
                                {<br />}
                                {<br />}
                                There are also bodywork and Reiki sessions available in conjunction with the Inner Exploration. These modalities permit some people to go to a deeper place of relaxation and resolve issues at a more comprehensive level.

                                {<br />}
                                {<br />}
                                . . .
                                {<br />}
                                {<br />}
                            </p> </div> : ""}
                    <p className="hidden-label" onClick={() => this.setState({ whoAreYou: !this.state.whoAreYou })}>Who does this work?</p>
                    {this.state.whoAreYou ? <div className='faq-bg'>
                        <p className='faq-section'>
                        {<br />}
                            . . .
                            {<br />}
                            {<br />}
                            My name is John Kessenich. I have been working with and exploring my own subconscious for 15 years and have been guiding other people with their subconscious for 10 years. I have been practicing body work for 15 years and recently have become certified in Reiki, Chi Nei Tsang and Interactive Guided Imagery.
                            {<br />}
                            {<br />}
                            My work is to create a safe space and allow a framework for people to connect and explore their inner universe within. 
                            {<br />}
                            {<br></br>}
                            . . .
                            {<br />}
                            {<br />}

                        </p> </div> : ""}

                </div>
                <div className="contact-section">
        <h3 onClick = {()=>this.setState({contact:!this.state.contact})}> More questions?</h3>
        {this.state.contact?<div id = "contactInfo">
           <a className="emailLink bigger" href="mailto:innermythology@gmail.com">innermythology (at) gmail.com</a>
            </div>:""}
            </div>
            </div>
        )
    }
}