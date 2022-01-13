import React from 'react'
import "../App.css"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { IconButton } from '@material-ui/core'
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import blank from "../images/blank.png"
import contact from "../images/contact.png"
import party from "../images/party.png"
import uuid from 'react-uuid'
import {useHistory} from "react-router-dom"

const Template = () => {
    const history = useHistory();
    const createForm = () =>{
        const id = uuid();
        history.push("/form/"+id)
    }
    return (
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <span style={{fontSize:"16px",color:"#202124"}}>Start a New Form</span>
                </div>
                <div className="template_right">
                    <div className="gallery_button">
                        Template Gallery
                        <UnfoldMoreIcon/>
                    </div>
                    <IconButton>
                        <MoreVertIcon fontSize="small"/>
                    </IconButton>
                </div>
            </div>
            <div className="template_body">
                <div className="card" onClick={createForm}>
                    <img src={blank} alt="no_image" className="card_image"/>
                    <p className="card_title">Blank</p>
                </div>
                <div className="card">
                    <img src={contact} alt="no_image" className="card_image"/>
                    <p className="card_title">Contact</p>
                </div>
                <div className="card">
                    <img src={[party]} alt="no_image" className="card_image"/>
                    <p className="card_title">Party</p>
                </div>
            </div>
        </div>
    )
}

export default Template
