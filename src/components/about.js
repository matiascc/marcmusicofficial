import React from 'react';
import { Grid, Cell } from 'react-mdl'

function About() {
    return (
        <div style={{width: '100%', height: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <Cell col={6}>
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToTQv7zjS50YgHkEWWUzlgPecptJLI_plcmQ&usqp=CAU"
                    //src="../images/landing.png"
                    alt="Landing_photo"
                    className="landing-img"
                    />
            </Cell>
            <Cell col={6}>
                <h1>About</h1>
                <p>Text</p>
            </Cell>
        </Grid>
    </div>
        );
    }
    
export default About;
    