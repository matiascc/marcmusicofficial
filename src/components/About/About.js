import React from 'react';
import { Grid, Cell } from 'react-mdl'
import about from './about.png'

function About() {
    return (
        <div style={{display: 'flex', margin: 'auto'}}>
        <Grid className="landing-grid">
            <Cell col={6}>
                <h1 className="pageTitle">About</h1>
                <p>Este es un texto extenso que describe quien es, de donde viene que le gusta la musica y demas. 
                    Relleno relleno  relleno relleno relleno relleno relleno relleno relleno relleno
                    Relleno relleno  relleno relleno relleno relleno relleno relleno relleno relleno
                    Relleno relleno  relleno relleno relleno relleno relleno relleno relleno relleno
                    Relleno relleno  relleno relleno relleno relleno relleno relleno relleno relleno
                    Relleno relleno  relleno relleno relleno relleno relleno relleno relleno relleno
                    Relleno relleno  relleno relleno relleno relleno relleno relleno relleno relleno.</p>
            </Cell>
            <Cell col={6}>
                <img 
                    src={about}
                    alt="Landing_photo"
                    className="about-img"
                    />
            </Cell>
        </Grid>
    </div>
        );
    }
    
export default About;
    