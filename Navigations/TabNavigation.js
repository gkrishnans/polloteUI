

//--------------------------------------------------------------------------------------------------------------

//packages collections
//--------------------------------------------------------------------------------------------------------------
import {launchImageLibrary} from 'react-native-image-picker';


import { Text,TextInput, View ,SafeAreaView ,VirtualizedList,StyleSheet ,Image ,Button ,Pressable,Modal,ScrollView ,TouchableOpacity ,TouchableWithoutFeedback,Switch,Alert,ToastAndroid, addons} from 'react-native';
import { NavigationContainer,CommonActions, StackRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FlatList } from 'react-native';
import React,{useState,useContext, useReducer ,createContext,Component,useEffect } from 'react'  
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { io } from "socket.io-client";
import RadioForm, {
  RadioButton,RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button'
import { Touchable } from 'react-native';
import { set } from 'react-native-reanimated';

const axios = require('axios');

const isPollContext = createContext(true)

const reducerForToken = ( start,action ) => {
  return action
}

import Customheaderback from './components/customheader'
import CustomTopTabContent from './components/CustomTopTabContent'
import CustomDrawerContent from './components/CustomDrawerContent'
import CustomView from './components/CustomView'
import CustomViewForPoll from './components/CustomViewForPoll'
import CustomBottomTabContent from './components/CustomBottomTabContent'





import ProfileScreen from './screens/ProfileScreens'
import HomeScreen from './screens/HomeScreen'
import VoteScreen from './screens/VoteScreen'
import ViewScreen from './screens/ViewScreen';
import CreatePollScreen from './screens/CreatePollScreen';
import SignupPage from './screens/SignupPage';
import NotificationsScreen from './screens/NotificationsScreen';




const Tab = createBottomTabNavigator();



export default function TabNavigation()
{
  return(
      <Tab.Navigator initialRouteName="Notification" tabBar={props => <CustomBottomTabContent {...props} />}>
        <Tab.Screen name="Profile" component={ProfileStack} />      
        <Tab.Screen name="HomeTab" component={HomeStack} />
        <Tab.Screen name="Notification" component={NotificationStack} />
      </Tab.Navigator>
  )
}
