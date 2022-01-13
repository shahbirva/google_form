import React from 'react'
import "../App.css"
import form_image from "../images/form.png"
import { FiStar, FiSettings } from 'react-icons/fi'
import {AiOutlineEye} from "react-icons/ai"
import { IconButton } from '@material-ui/core'
import avatarimage from "../images/pic.PNG"
import {IoMdFolderOpen} from "react-icons/io"
import ColorLensIcon from '@material-ui/icons/ColorLens'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

const Formheader = () => {
    return (
        <div className="form_header">
            <div className="form_header_left">
                <img src={form_image} style={{height:"45px",width:"40px"}} alt="no_image"/>
                <input type="text" placeholder="Untitled form" className="form_name"/>
                <IoMdFolderOpen className="form_header_icon" style={{marginRight:"10px"}}/>
                <FiStar className="form_header_icon" style={{marginRight:"10px"}}/>
                <span style={{fontSize:"12px",fontWeight:"600"}}>All changes saved in Drive</span>
            </div>
            <div className="form_header_right">
                <IconButton>
                    <ColorLensIcon size="small" className="form_header_icon"/>
                </IconButton>
                <IconButton>
                    <AiOutlineEye className="form_header_icon"/>
                </IconButton>
                <IconButton>
                    <FiSettings className="form_header_icon"/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon className="form_header_icon"/>
                </IconButton>
                <IconButton>
                    <Avatar style={{height:"30px",width:"30px"}} src={avatarimage} alt="no_image"/>
                </IconButton>
            </div>
        </div>
    )
}

export default Formheader
