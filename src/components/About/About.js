import React from 'react';
import { Grid, Cell } from 'react-mdl'
import about from './about.png'

function About() {
    return (
        <div style={{display: 'flex', margin: 'auto'}}>
        <Grid className="landing-grid">
            <Cell col={7} style={{marginLeft:'5%'}}>
                <h1 className="pageTitle">About</h1>
                <p className="aboutText">Marcos Andrada, que decir, un tipo humilde, 23 años, oriundo de la metropolis, chico prodigio del dota. <br/>
                    Por los años 2014 solía defender la escudería del famoso TenFingers, le daba tan duro al mid como a su teclado.
                    Su invoker era temido, aunque mas por sus compañeros de equipo que por los rivales (pero eso es otra historia).
                    Dejo una oportunidad de dominar la escena sudamericana para dedicarse a lo que realmente ama, la música.</p>
            </Cell>
            <Cell col={4}>
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
    