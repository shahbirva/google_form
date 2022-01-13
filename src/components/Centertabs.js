import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root:{
        flexGrow:1,
    },
    tab:{
        fontSize:12,
        color:"#5f6368",
        textTransform:"capitalize",
        height:10,
        fontWeight:600,
        fontFamily: 'Google Sans,Robot,Arial,sans-serif',
    },
    tabs:{
        height:10
    }
})

const Centertabs = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <Tabs
                className={classes.tabs}
                textColor="primary"
                indicateColor="primary"
                centered>
                    <Tab label="Questions" className={classes.tab}>

                    </Tab>
                    <Tab label="Response" className={classes.tab}>

                    </Tab>
                </Tabs>
            </Paper>
        </div>
    )
}

export default Centertabs
