import React, { Component } from "react";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import NavBar from "./NavBar";
import Icon from './Icon';
import { Typography, SvgIcon, List, ListItem, Grid } from "@material-ui/core";
import MetaTags from "react-meta-tags";

const bgColor = {
    primary: '#103452',
    secondary: '#FFFFFF'
}

class About extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.root}>
                <MetaTags>
                    <title>Neil Lemmer's Web Portfolio/About</title>
                </MetaTags>
                <NavBar />
                <Grid className={classes.content}>
                    <Typography variant='display1' color='primary' className={classes.cvHeading}>
                        Neil Christian Lemmer
                            </Typography>
                    <br />
                    <Typography variant='headline' color='primary' className={classes.cvHeading}>
                        Johannesburg GAUTENG
                            </Typography>
                    <br />
                    <div className={classes.cvHeading}>
                        < a target='_black' href='https://github.com/Neilphpbeginner?tab=repositories'>
                            <SvgIcon color='primary' className={classes.spaceBetweenIcons}>
                                <Icon icon="git" />
                            </SvgIcon>
                        </a>
                        < a target='_black' href='https://www.facebook.com/neil.lemmer'>
                            <SvgIcon color='primary' className={classes.spaceBetweenIcons}>
                                <Icon icon="facebook" />
                            </SvgIcon>
                        </a>
                        < a target='_black' href='https://www.linkedin.com/in/neil-lemmer-5b56a4140/'>
                            <SvgIcon color='primary' className={classes.spaceBetweenIcons}>
                                <Icon icon="linkin" />
                            </SvgIcon>
                        </a>
                        < a target='_black' href='https://www.codewars.com/users/Neilphpbeginner'>
                            <SvgIcon color='primary' className={classes.spaceBetweenIcons}>
                                <Icon icon="codewars" />
                            </SvgIcon>
                        </a>
                        < a target='_black' href='https://www.freecodecamp.org/neilphpbeginner'>
                            <SvgIcon color='primary' className={classes.spaceBetweenIcons}>
                                <Icon icon="freeCodeCamp" />
                            </SvgIcon>
                        </a>
                        < a target='_black' href='https://www.codecademy.com/microSolver77357'>
                            <SvgIcon color='primary' className={classes.spaceBetweenIcons}>
                                <Icon icon="codecademy" />
                            </SvgIcon>
                        </a>
                    </div>
                    <div style={{ backgroundColor: bgColor.primary, borderRadius: 25, margin: 40 }}>
                        <Typography variant='h5' color='secondary' className={classes.cvHeading}>
                            Software Engineering
                        </Typography>
                    </div>
                    <div>
                        <List className={classes.listItems}>
                            <ListItem>
                                Hyperiondev graduate offering a strong foundation in software engineering and programming principles across multiple platforms.
                            </ListItem>
                            <ListItem>
                                Experienced in object-oriented programming; developing, testing and debugging code.
                            </ListItem>
                            <ListItem>
                                Quickly learn and master new technologies; successful working in both team and self-directed settings.
                            </ListItem>
                        </List>
                    </div>
                    <div style={{ backgroundColor: bgColor.primary, borderRadius: 25, margin: 40 }}>
                        <Typography variant='h5' color='secondary' className={classes.cvHeading}>
                            Education
                        </Typography>
                    </div>
                    <List className={classes.listItems}>
                        <ListItem>
                            IBM eServer certified specialist AIX –  System Administrator (2003)
                            </ListItem>
                        <ListItem>
                            IBM eServer certified specialist AIX – System Support (2003)
                            </ListItem>
                        <ListItem>
                            P690 Technical Support(2003)Information Security
                        </ListItem>
                        <ListItem>
                            Oracle Certified Associate, Java SE8 Programmer (2016)
                        </ListItem>
                        <ListItem>
                            70-480:  Programming HTML5 with JavaScript and CSS3 (2016)Enterprise Software Overview
                        </ListItem>
                        <ListItem>
                            PHP Programmer (2017)
                        </ListItem>
                        <ListItem>
                            Introduction to Programming (Python)
                        </ListItem>
                        <ListItem>
                            Introduction to Software Engineering
                        </ListItem>
                        <ListItem>
                            Data Science, Algorithms and Advanced Software Engineering
                        </ListItem>
                    </List>
                    <div style={{ backgroundColor: bgColor.primary, borderRadius: 25, margin: 40 }}>
                        <Typography variant='h5' color='secondary' className={classes.cvHeading}>
                            Work Experience
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='inherit' className={classes.listItems}>
                            Babcock Ntuthuko Generations (Head Office, Bedfordview)
                            Administrator Site, July 2007 to Present
                        </Typography>
                    </div>


                </Grid>
            </Grid>
        );

    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
