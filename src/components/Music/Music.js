import React from 'react';
import './Music.css'
import { Card, CardTitle, CardActions, Grid, Button, Cell } from "react-mdl";
import spotifyIcon from '../../images/icons/icons8-spotify-128.png';
import appleIcon from '../../images/icons/icons8-mac-os-128.png';
import soundcloudIcon from '../../images/icons/icons8-soundcloud-150.png';
import youtubeIcon from '../../images/icons/icons8-youtube-play-192.png';
import song from '../../images/icons/icons8-música-64.png'

function Music() {
    return (
            <div style={{display: 'flex', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell style={{width: '100%', marginBottom: '50px'}}>
                        <h1 className="pageTitle">Music</h1>
                    </Cell>
                    <Cell className="cellMusic" style={{maxWidth: '90%'}}>
                        <Card shadow={5} style={{margin: 'auto', marginBottom: '50px'}}>
                            <CardTitle expand style={{height: '222px'}}>
                                <img className="songCardImage" src={song} alt='song1'></img>
                            </CardTitle>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://www.spotify.com/">
                                        <img className="iconButton" src={spotifyIcon} alt="Spotify"/>
                                    </a>
                                </Button>
                                <Button colored>
                                    <a href="https://www.apple.com/apple-music/">
                                        <img className="iconButton" src={appleIcon} alt="Apple" />
                                    </a>
                                </Button>
                                <Button colored className="iconButton">
                                    <a href="https://www.youtube.com/channel/UC_avHGLI62hQ-3vgDJy_-Bw">
                                        <img className="iconButton" src={youtubeIcon} alt="Apple" />
                                    </a>
                                </Button>
                                <Button colored className="iconButton">
                                    <a href="https://soundcloud.com/marckovickkk">
                                        <img className="iconButton" src={soundcloudIcon} alt="Apple" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell className="cellMusic" style={{maxWidth: '90%'}}> 
                        <Card shadow={5} style={{margin: 'auto', marginBottom: '50px'}}>
                            <CardTitle expand style={{color: '#fff', height: '222px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Canción 2</CardTitle>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://www.spotify.com/">
                                        <img className="iconButton" src={spotifyIcon} alt="Spotify"/>
                                    </a>
                                </Button>
                                <Button colored>
                                    <a href="https://www.apple.com/apple-music/">
                                        <img className="iconButton" src={appleIcon} alt="Apple" />
                                    </a>
                                </Button>
                                <Button colored className="iconButton">
                                    <a href="https://www.youtube.com/channel/UC_avHGLI62hQ-3vgDJy_-Bw">
                                        <img className="iconButton" src={youtubeIcon} alt="Apple" />
                                    </a>
                                </Button>
                                <Button colored className="iconButton">
                                    <a href="https://soundcloud.com/marckovickkk">
                                        <img className="iconButton" src={soundcloudIcon} alt="Apple" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell className="cellMusic" style={{maxWidth: '90%'}}> 
                        <Card shadow={5} style={{margin: 'auto', marginBottom: '50px'}}>
                            <CardTitle expand style={{color: '#fff', height: '222px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Canción 3</CardTitle>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://www.spotify.com/">
                                        <img className="iconButton" src={spotifyIcon} alt="Spotify"/>
                                    </a>
                                </Button>
                                <Button colored>
                                    <a href="https://www.apple.com/apple-music/">
                                        <img className="iconButton" src={appleIcon} alt="Apple" />
                                    </a>
                                </Button>
                                <Button colored className="iconButton">
                                    <a href="https://www.youtube.com/channel/UC_avHGLI62hQ-3vgDJy_-Bw">
                                        <img className="iconButton" src={youtubeIcon} alt="Apple" />
                                    </a>
                                </Button>
                                <Button colored className="iconButton">
                                    <a href="https://soundcloud.com/marckovickkk">
                                        <img className="iconButton" src={soundcloudIcon} alt="Apple" />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        );
    }
    
export default Music;