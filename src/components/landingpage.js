import React from 'react';
import { Grid, Cell } from 'react-mdl'

function Landing() {
    return (
            <div style={{width: '100%', height: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcToTQv7zjS50YgHkEWWUzlgPecptJLI_plcmQ&usqp=CAU"
                            //src="../images/landing.png"
                            alt="Landing_photo"
                            className="landing-img"
                            />
                        <div className="banner-text">
                            <h1>MARC</h1>

                            <hr/>
                        </div>
                    </Cell>
                </Grid>
            </div>
    );
}
    
export default Landing;