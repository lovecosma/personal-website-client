import React from 'react'
import "./MyApps.css"
export  const MyApps = (props) => {
    return (
        <div style={{padding: "15px", marginTop: "100px"}}>
            <h2 className="center"> My Apps</h2>

            {/* <div id="apps-container">
                <h2>EQ Trainer for Spotify</h2> 
                <h6>
                    Login with Spotify Experiment with EQ on tracks from your Spotify playlists 
                    in the Playground Challenge yourself by guessing the parameters of the EQ in the Training section
                </h6> 
            </div> */}
            <h3>More Content Coming soon!</h3>
            <p style={{fontSize: "x-large"}} >Check out my repo <a href="https://github.com/lovecosma/personal-website-client" alt="repo" style={{fontSize: "x-large"}}>here</a></p>
            <p>Updated daily.</p>
        </div>
    )
}
