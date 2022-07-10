import React, {Component, Fragment} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import NavTabs from "../../component/common/Nav";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img3.jpeg";
import img3 from "../../assets/images/img4.jpg";
import img4 from "../../assets/images/img5.jpg";

class DashBoard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {classes}=this.props;
        return(
            <div className={classes.container}>
                <NavTabs/>
                <div className={classes.card}>
                <Card sx={{ maxWidth: 345 }} style={{marginLeft:'3px'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            src={img1}
                            alt="green iguana"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Super Market
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Marketing is the process of getting potential clients or customers
                                interested in your products and services.
                                The keyword in this definition is "process
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} style={{marginLeft:'50px'}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            src={img2}
                            alt="green iguana"

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Super Market
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Marketing is the process of getting potential clients or customers
                                interested in your products and services.
                                The keyword in this definition is "process
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
                    <Card sx={{ maxWidth: 345 }} style={{marginLeft:'50px'}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src={img3}
                                alt="green iguana"

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Super Market
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Marketing is the process of getting potential clients or customers
                                    interested in your products and services.
                                    The keyword in this definition is "process
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }} style={{marginLeft:'50px'}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                src={img4}
                                alt="green iguana"

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Super Market
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Marketing is the process of getting potential clients or customers
                                    interested in your products and services.
                                    The keyword in this definition is "process
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </div>

            </div>

        )
    }


}
export default withStyles(styleSheet) (DashBoard)