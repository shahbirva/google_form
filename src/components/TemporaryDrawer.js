import React from 'react'
import "../App.css"
import MenuIcon from "@material-ui/icons/Menu"
import { IconButton, ListItemText, makeStyles, ListItem, List, Divider, Drawer} from '@material-ui/core'
import sheetimage from "../images/sheet.png"
import docimage from "../images/doc.png"
import driveimage from "../images/drive.png"
import slideimage from "../images/slide.png"
import formimage from "../images/form.png"
import {FiSettings} from "react-icons/fi"
import {BsQuestionCircle} from "react-icons/bs"

const useStyle = makeStyles({
    listitem:{
        marginLeft:"20px", fontSize:"14px", fontWeight:"500",color:"grey"
    },
    slideImages:{
        height:"20px",width:"20px"
    }
})

const TemporaryDrawer = () => {
    const classes = useStyle();
    const [state,setState] = React.useState({
        left:false
    })

    const toggleDrawer = (anchor,open) => (event) =>{
        setState({...state,[anchor]:open});
    }

    const list =(anchor)=>(
        <div style={{width:"250px"}} role="presentation">
        <Divider/>
            <List>
                <ListItem>
                <ListItemText style={{fontSize:"48px", marginLeft:"5px"}}>
                    <span style={{color:"blue", fontWeight:"700", fontSize:"22px", fontFamily: "'Product Sans',Arial,san-serif"}}>G</span>
                    <span style={{color:"red", fontWeight:"500", fontSize:"22px", fontFamily: "'Product Sans',Arial,san-serif"}}>o</span>
                    <span style={{color:"yellow", fontWeight:"500", fontSize:"22px", fontFamily: "'Product Sans',Arial,san-serif"}}>o</span>
                    <span style={{color:"blue", fontWeight:"500", fontSize:"22px", fontFamily: "'Product Sans',Arial,san-serif"}}>g</span>
                    <span style={{color:"green", fontWeight:"500", fontSize:"22px", fontFamily: "'Product Sans',Arial,san-serif"}}>l</span>
                    <span style={{color:"red", fontWeight:"500", fontSize:"22px",marginRight:"10px", fontFamily: "'Product Sans',Arial,san-serif"}}>e</span>

                    <span style={{color:"#5f6368", fontWeight:"700", fontSize:"22px", fontFamily: "'Product Sans',Arial,san-serif"}}>Docs</span>
                </ListItemText>
                </ListItem>
            </List>
        <Divider/>
        <List style={{marginLeft:"08px", marginRight:"8px",marginTop:"15px"}}>
            <ListItem className="list_item">
                <img src={docimage} className={classes.slideImages} alt="no_image"/>
                <div className={classes.listitem}>Docs</div>
            </ListItem>
            
            <ListItem className="list_item">
                <img src={sheetimage} className={classes.slideImages} alt="no_image"/>
                <div className={classes.listitem}>Sheets</div>
            </ListItem>

            <ListItem className="list_item">
                <img src={slideimage} className={classes.slideImages} alt="no_image"/>
                <div className={classes.listitem}>Slides</div>
            </ListItem>

            <ListItem className="list_item">
                <img src={formimage} className={classes.slideImages} alt="no_image"/>
                <div className={classes.listitem}>Forms</div>
            </ListItem>
        </List>
        <Divider/>
        <List style={{marginLeft:"08px", marginRight:"8px",marginTop:"15px"}}>
            <ListItem className="list_item">
                <FiSettings/>
                <div style={{marginLeft:"20px",fontSize:"14px"}}>Settings</div>
            </ListItem>
            <ListItem className="list_item">
                <BsQuestionCircle/>
                <div style={{marginLeft:"20px",fontSize:"14px",fontWeight:"500",color:"grey"}}>Help & Feedback</div>
            </ListItem>
        </List>
        <Divider/>
        <List style={{marginLeft:"08px", marginRight:"8px",marginTop:"15px"}}>
            <ListItem className="list_item">
                <img src={driveimage} style={{height:"20px",width:"20px"}} alt="no_img"/>
                <div style={{marginLeft:"20px",fontSize:"14px"}}>Driver</div>
            </ListItem>
        </List>
        </div>
    )
    return (
        <div>
        <>
            <IconButton onClick={toggleDrawer('left',true)}>
                <MenuIcon/>
            </IconButton>
            <Drawer open={state['left']} onClose={toggleDrawer('left',false)} anchor={'left'}>
                {list('left')}
            </Drawer>
        </>
        </div>
    )
}

export default TemporaryDrawer
