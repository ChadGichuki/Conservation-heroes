import React from "react"
import {Link} from "react-router-dom"

function Home(){
    return(
        <div className="home">
            <img id="gif" src="heroes.gif"/>
            <h1>Join the movement of Conservation Heroes... </h1>
            <h3>Spreading awareness and healing our planet, one post at a time.</h3>
            <br/>
            <Link to="/leaderboard" className="homebtn">View Leaderboards</Link>
        </div>
    )
}

export default Home