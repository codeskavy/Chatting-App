import { AppBar, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense } from 'react'
import {Menu as MenuIcon,Search as SearchIcon,Add as AddIcon,Group as GroupIcon,Logout as LogoutIcon,Notifications as NotificationIcon}from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import {SearchDialog} from '../specific/Search'

const Header = () => {

    const navigate=useNavigate();
    const SearchDialog=lazy(()=>import("../specific/Search"));
    const NotificationDialog=lazy(()=>import("../specific/Notification"));
    const NewGroupDialog=lazy(()=>import("../specific/NewGroup"));

    const [isMobile,setIsMobile]=useState(false);
    const [isSearch,setIsSearch]=useState(false);
    const [isGroup,setIsGroup]=useState(false);
    const [isNotification,setIsNotification]=useState(false);

  
    const handleMobile=()=>{
        console.log("Mobile");
        setIsMobile(prev!=prev);
    };

    const openSearch=()=>{
        console.log("openSearch");
        setIsSearch(prev!=prev);
    }

    const openNewGroup=()=>{
        console.log("openNewGroup");
        setIsGroup(prev!=prev);
    }

    const openNotification=()=>{
        console.log("openNewGroup");
        setIsNotification(prev!=prev);
    }

    const logoutHandler=()=>{
        console.log("logoutHandler")
    }
    const navigateToGroup=()=>navigate("/groups");
  return (
    <>
      <Box sx={{flexGrow:1}} height={"4rem"}>
        <AppBar position="static" sx={{
            bgcolor:orange,
        }}>
        
        <Toolbar>
         <Typography
         variant="h6"
         sx={{
            display:{xs:"none",sm:"block"},
         }}>

            </Typography>   

        <Box sx={{
            display:{xs:"block",sm:"none"},

        }}>
            <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon/>
            </IconButton>
           
        </Box>
        <Box sx={{
            flexGrow:1.
        }}/>
        <Box>

            <IconBtn
            title={"Search"} icon={<SearchIcon/>} onClick={openSearch}/>

<IconBtn
            title={"New Group"} icon={ <AddIcon/>} onClick={openNewGroup}/>

<IconBtn
            title={"Manage Groups"} icon={ <GroupIcon/>} onClick={navigateToGroup}/>

<IconBtn
            title={"Notifications"} icon={ <NotificationIcon/>} onClick={openNotification}/>
       
           
       <IconBtn
            title={"Logout"} icon={ <LogoutIconIcon/>} onClick={logoutHandler}/>
       

        </Box>
        </Toolbar>
            </AppBar>

      </Box>

    {
        isSearch && (
           <Suspense fallback={<div>Loading....</div>}>
            <SearchDialog/>
           </Suspense> 
        )
    }
    </>
  )
}

const Iconbtn=({title,icon,onClick})=>{
    return(
        <Tooltip title={title}>
        <IconButton color="inherit" size="large" onClick={onClick}>
                {icon}
            </IconButton>
        </Tooltip>

    );
}

export default Header
