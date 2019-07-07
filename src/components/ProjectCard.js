import React from 'react';
import data from '../data/projects.json';
import { Typography, Card, CardContent, CardActions, CardActionArea, CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides:{
        MuiCard:{
            root:{ 
                display: 'inline-flex',
                margin: 5
            }
        },
        MuiPaper:{ 
            elevation1:{
                width: '30%'
            },
        },
        MuiButtonBase:{
            root:{
                border: '50%'
            }
        }
    }
});

class ProjectCard extends React.Component{
    render(){
        return( <MuiThemeProvider theme={theme}>
            {data.map((detail,index)=>{
                return <Card>
                    <CardActionArea>
                        <CardMedia 
                        className="cardImage"
                        image={require('../assets/'+detail.image)}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {detail.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {detail.info}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Source Code</Button>            
                            </CardActions>
                    </CardActionArea>
                </Card>
            })}
        </MuiThemeProvider>
        )
    }
}

export default ProjectCard;