import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {DrawerNavigator} from 'react-navigation';

import lHomeComponent from './LogHome';
import InboxComponent from './LogInbox';
import SideMenu from './SideMenuFile';
    

const ProfileNavigator = DrawerNavigator({
    lHome:{
        screen:lHomeComponent,
    },
    Inbox:{
        screen:InboxComponent,
    }
},{
    contentComponent:SideMenu
    }
);
export default ProfileNavigator;