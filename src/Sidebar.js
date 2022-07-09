import React from 'react'
import "./sidebar.css"
import Sidebarrow from './Sidebarrow'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useStateValue } from './Stateprovider';
const Sidebar = () => {
    const [{user},dispatch]=useStateValue()
    return (
        <div className="sidebar">
            <Sidebarrow src={user.photoURL} title={user.displayName} />
            <Sidebarrow Icon={LocalHospitalIcon} title={'Covid-19 Information Center'} />
            <Sidebarrow Icon={EmojiFlagsIcon} title={'Pages'} />
            <Sidebarrow Icon={PeopleIcon} title={'Friends'} />
            <Sidebarrow Icon={ChatIcon} title={'Messenger'} />
            <Sidebarrow Icon={StorefrontIcon} title={'Marketplace'} />
            <Sidebarrow Icon={VideoLibraryIcon} title={'Videos'} />
            <Sidebarrow Icon={ExpandMoreOutlinedIcon} title={'Marketplace'} />
        </div>
    )
}

export default Sidebar