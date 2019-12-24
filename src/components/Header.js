import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    toolbar: {
        flexWrap: 'wrap',
    },
    logo: {
        flexGrow: 1,
        color: '#4B5C6B'
    },
    nav: {
        justifyContent: 'space-between',
        alignItems: 'baseline',
        display: 'flex',
        width: '25%'
    },
    appBar: {
        background: '#ffffff'
    },
    paper: {
        marginTop: theme.spacing(8)
    }

}));

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6' className={classes.logo}>
                    HealthKPIs
                </Typography>
                <nav className={classes.nav}>
                    <Link variant='button' href='#'>
                        Data
                    </Link>
                    <Link variant='button' href='#'>
                        Experiments
                    </Link>
                    <Button variant='contained' color='primary'>
                        Today
                    </Button>
                </nav>

            </Toolbar>
        </AppBar>
    )
}

export default Header;