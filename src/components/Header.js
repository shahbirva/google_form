import React from 'react'
import "../App.css"
import { IconButton } from '@material-ui/core'
import formimage from "../images/form.png"
import SearchIcon from "@material-ui/icons/Search"
import AppIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"
import avatarimage from "../images/pic.PNG"
import TemporaryDrawer from "./TemporaryDrawer"

const Header = () => {
        return (
            <div className="header">
                <div className="header_info">
                <TemporaryDrawer/>
                <img src={formimage} style={{height:'40px',width:'40px'}} className="form_image" alt="no_image"/>
                <div className="info">
                    Forms
                </div>
                </div>
                <div className="header_search">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                    <input type="text" name="search" placeholder="search here"/>
                </div>
                <div className="header_right">
                <IconButton>
                    <AppIcon/>
                </IconButton>
                <IconButton>
                    <Avatar src={avatarimage}/>
                </IconButton>
                </div>
            </div>
        )
    }

export default Header;
