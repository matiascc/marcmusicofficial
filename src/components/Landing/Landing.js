import React from 'react';
import { Grid, Cell } from 'react-mdl'
import landing from './landing.png'

function Landing() {
    return (
            <div style={{display: 'flex', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div>
                            <h1 className="pageTitle">MARC</h1>
                        </div>
                        <div>
                        <img 
                            src={landing}
                            alt="Landing_photo"
                            className="landing-img"
                            />
                        </div>
                    </Cell>
                </Grid>
            </div>
    );
}
    
export default Landing;