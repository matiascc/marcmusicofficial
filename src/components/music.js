import React from 'react';
import { Card, CardTitle, CardActions, Button, Grid, Cell } from "react-mdl";

function Music() {
    return (
            <div style={{width: '100%', height: '100%'}}>
                <Grid className="landing-grid">
                    <div style={{width: '100%', margin: 'auto'}}>
                        <h1 className="pageTitle">Music</h1>
                    </div>
                    <Cell>
                        <Card shadow={5} style={{margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', height: '222px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Canción 1</CardTitle>
                            <CardActions border>
                                <Button colored>
                                    <i className="btn_spotify"/>
                                </Button>
                                <Button colored>Apple M</Button>
                                <Button colored>
                                    <i className="btn_youtube"/>
                                </Button>
                                <Button colored>SC</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell> 
                        <Card shadow={5} style={{margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', height: '222px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Canción 2</CardTitle>
                            <CardActions border>
                                <Button colored>Spotify</Button>
                                <Button colored>Apple M</Button>
                                <Button colored>YT</Button>
                                <Button colored>SC</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell> 
                        <Card shadow={5} style={{margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', height: '222px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Canción 3</CardTitle>
                            <CardActions border>
                                <Button colored>Spotify</Button>
                                <Button colored>Apple M</Button>
                                <Button colored>YT</Button>
                                <Button colored>SC</Button>
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        );
    }
    
export default Music;