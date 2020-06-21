import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Card, CardContent, CardActions} from '@material-ui/core';
import { red } from '@material-ui/core/colors';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            riesgo: 2650
        }
    };


    render() {
        return(
        <div className="card">
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                         <h1 className="titulo"> 🇦🇷 {this.props.nombre} </h1>
                         <hr/>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                            <h2> Ultimo </h2>
                            <h2> {this.state.riesgo} </h2>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <hr/>
                            <p className="textoActualizacion">Actualizado al 21/06/2020 16:15</p>
                        </Grid>
                    </Grid>
                </CardActions>    
            </Card>                    
        </div>
        );
    }
}