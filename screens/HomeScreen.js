

import { Text,View,Image, Switch,TouchableOpacity} from 'react-native';

import React,{useReducer } from 'react'  
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import CustomTopTabContent from '../components/CustomTopTabContent'
import CustomView from '../components/CustomView'
import CustomViewForPoll from '../components/CustomViewForPoll'

const isShow = false

const reducer = (state,action) =>{
  return !state
}





export default function HomeScreen({route,navigation}) {
    const switchfeeds = route.params.view.category
    const switchpoll = route.params.view.category+'News'
    const [feed,dispatch] = useReducer(reducer,isShow)
    console.log(switchfeeds,switchpoll)
    const title = "home"
    console.log(route.params.polls)
  
    return (
        <SafeAreaProvider style={{flex:1}}>
        <View >
           <View style = {{flexDirection:'row',height : 50}}>
  
            <TouchableOpacity onPress = {()=>navigation.openDrawer()}>
  
              <View style ={{flex:1, justifyContent:'center'}}>
                <Image
                  style={{width:30,height:30,marginLeft:5}}
                  source = {require('../src/image/menu.png')}
                />
              </View>
            </TouchableOpacity>
            <View style ={{flex:1.5,justifyContent:'center'}}>
          <Text style = {{textAlign:'center'}}>{title}</Text>
        </View>
        <View style ={{flex:2,flexDirection:'row',height : 50}}>
        <View style ={{flex:2,justifyContent:'center'}}>
          <Text style = {{textAlign:'center'}}>news feed</Text>
        </View>
        <Switch  
          value= {feed}  
          onValueChange ={(switchValue)=>{
              dispatch(feed)
            }}/>  
        <View style ={{flex:1.5,justifyContent:'center'}}>
          <Text style = {{textAlign:'center'}}>poll</Text>
        </View>
        
        </View>
      </View>        
        </View>
        <CustomTopTabContent  navigation = {navigation} initialParams = {route.params.tab}/>
        <View style = {{flex :1}}>
  
        {
          !feed && 
          <CustomView navigation = {navigation} initialParams = {route.params.view} />
        }
        {feed && 
          <CustomViewForPoll navigation = {navigation} initialParams = {route.params.polls} />
  
        }
  
        </View>
       </SafeAreaProvider>
    );
  }
  