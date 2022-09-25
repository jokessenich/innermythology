import React from 'react'
import './PodcastLinks.css'
import appleBadge from "../Images/apple-badge.png"
import { Link } from 'react-router-dom'
import spotifyBadge from "../Images/spotify-badge.png"

export default class PodcastLinks extends React.Component {
    render() {
        return (
            <div className='podcast-links'>
                {/*}
                <p><a href="https://icons8.com/icons/set/alternative-herbal-medicine">Alternative Herbal Medicine icon</a> icon by <a href="https://icons8.com">Icons8</a></p>
                <p><a href="https://icons8.com/icons/set/good-quality">Good Quality icon</a> icon by <a href="https://icons8.com">Icons8</a></p>
        */}
                    <Link to = {{pathname:"https://podcasts.apple.com/us/podcast/embracing-our-inner-selves/id1627543843"}} target="_blank"><img src={appleBadge} alt="apple badge" height="50" width="175"></img></Link>
                    {<br />}
                    <Link to = {{pathname:"https://open.spotify.com/show/4s2ElRqryUUImu7QB7AsDe"}} target="_blank"><img src={spotifyBadge} alt="spotify badge" height="50" width="112"></img></Link>
                
                </div>
        )
    }
}