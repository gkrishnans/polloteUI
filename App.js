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

import NotificationsScreen from './screens/NotificationsScreen'


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator()

const Drawer = createDrawerNavigator();

const navOptionHandler = () => ({
  headerShown:false
})

const people = [
  {name:'Lawrence',key:'1',id:'1',category:'Cricket',subcategory:'Test Cricket',description:'lawrence tried on a short ball for that he left the greese lucky hitted the stamp',img: require('./src/image/16DanLawrence.jpg')},
  {name:'CricketBall',key:'2',id:'2',category:'Cricket',subcategory:'IPL',description:'here the red ball test endsby, there comes a pink ball cricket ',img: require('./src/image/Cricket_Ball_AP.jpg')},
  {name:'Stroky',id:'5',key:'4',category:'Cricket',subcategory:'Test Cricket',description:'well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable',img: require('./src/image/stroky.jpg')},
  {name:'Ashwin',id:'6',key:'5',category:'Cricket',subcategory:'Test Cricket',description:'man of moments, won the hearts of chepauk audience',img: require('./src/image/TheManOfTheMoment.jpg')},
]
const peoplenews = [
  {key:'1',question:'which app is the best for dream 11 prediction1 ',id:'1',category:'cricket',subcategory:'Test Cricket',options:[{name:'dream11',id:2,state:false},{name:'dream12',id:3,state:false},{name:'dream13',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {key:'2',question:'who will be the best player in the world ',id:'2',category:'cricket',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {key:'3',question:'which format of cricket do you like ',id:'3',category:'cricket',subcategory:'Test Cricket',options:[{name:'test cricket',id:1,state:false},{name:'odi',id:2,state:false},{name:'ipl',id:3,state:false},{name:'t20',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {key:'4',question:'dhoni / virat',id:'1',category:'cricket',subcategory:'Test Cricket',options:[{name:'dhoni',id:2,state:false},{name:'virat',id:3,state:false}],img: require('./src/image/16DanLawrence.jpg')},

]

const cricket = [
  {name:'All',id:'0',description:'Here you will have all stories'},
  {name:'IPL',id:'1',description:'Here you will have IPL stories'},
  {name:'Test Cricket',id:'2',description:'Here you will have TEST CRICKET stories'}, 
  {name:'World Tour',id:'3',description:'Here you will have WORLD TOUR stories'},
  {name:'T20',id:'4',description:'Here you will have T20 stories'},
  {name:'One Day International',id:'5',description:'Here you will have ONE DAY INTERNATIONAL stories'},
]
const politicspeople = [
  {name:'stalin',key:'1',id:'1',category:'Politics',subcategory:'PM election',description:'Dravida Munnetra Kazhagam (DMK) ( transl. Dravidian Progressive Federation) is a political party in India, particularly in the state of Tamil Nadu and union territory of Puducherry.',img: require('./src/image/admk.jpg')},
  {name:'poverty and reforms',key:'2',category:'Politics',subcategory:'Correption',id:'3',description:'India long suffered from a mindless commitment to policies that were advertised in the public policy domain as solutions to poverty and destitution but that tragically accentuated instead these tragic phenomena over decades. The economic reforms from 1991 onwards were meant to reverse the situation and have made a successful contribution. And yet we hear again sceptical voices against the reforms. Since a spirited response is necessary to prevent a roll back to the counterproductive policies of the past, it is useful to examine a few arguments against reforms in the public policy debate today that have superficial and hence popular appeal.',img: require('./src/image/povertyandreforms.jpg')},
  {name:'stop correption',key:'3',id:'2',category:'Politics',subcategory:'Correption',description:'Most UK businesses have adopted anti-bribery policies - but it’s the way they are implemented that will make a difference. It’s critical that all staff understand what is and isn’t acceptable in relation to gifts, hospitality, donations, sponsorship and political donations.  Make sure staff understand your companys rules and expectations around bribery and corruption. They need to do know what is and isnot acceptable in relation to gifts, hospitality, donations, sponsorship and political donations. You need to provide regular bribery training to maintain awareness.  Alongside training, establish processes that help them remember the do’s and don’ts, such as checklists and travel guidelines.Staff need to understand that any gift or hospitality they receive must have a legitimate business purpose, be proportionate, and declared in the company’s Gift and Hospitality Register. Be sure to clearly outline what is meant by ‘legitimate’ and ‘proportionate’ - don’t leave it open to interpretation.',img: require('./src/image/stopcorreption.jpg')},

]
//???CustomViewForPoll

const options = [{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}]

const politicspeoplenews = [
  {key:'1',question:'politics 1',id:'1',category:'politics',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {key:'2',question:'politics 2',id:'2',category:'politics',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {key:'3',question:'politics 3',id:'3',category:'politics',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
]
const politices = [
  {name:'All',id:'0',description:'Here you will have all stories'},
  {name:'BJP',id:'1',description:'Here you will have BJP stories'},
  {name:'PM election',id:'2',description:'Here you will have  PM election stories'},
  {name:'Correption',id:'3',description:'Here you will have correption stories'},
]





const coronapeople  = [
  {name:'positives',key:'1',id:'1',category:'Corona',subcategory:'Active Cases',description:'Doctors and researchers are noticing some curious and unexpectedly positive side effects of the abrupt shifts in human behaviour in response to the covid-19 pandemic. Skies are #4B0082r, fewer cars are crashing, crime is falling, and some other infectious diseases are fading from hospital emergency departments.',img: require('./src/image/positives.jpg')},
  {name:'C19recovery',key:'2',id:'2',category:'Corona',subcategory:'Recoveries',description:'People with mild symptoms who are otherwise healthy should manage their symptoms at home. On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.',img: require('./src/image/C19recovery.jpg')},
  {name:'covaccine2',key:'3',id:'3',category:'Corona',subcategory:'Covaccine',description:'Is there a COVID-19 vaccine for children? The Pfizer/BioNTech COVID-19 vaccine is available to people age 16 and older. Several companies have begun enrolling children as young as age 12 in COVID-19 vaccine clinical trials. Studies including younger children will begin soon.',img: require('./src/image/covaccine2.jpg')},

]

const coronapeoplenews  = [
  {key:'1',question:'corona 1',id:'1',category:'corona',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {key:'2',question:'corona 2',id:'2',category:'corona',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {key:'3',question:'corona 3',id:'3',category:'corona',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {key:'4',question:'corona 4',id:'4',category:'corona',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
]
const corona = [
  {name:'All',id:'0',description:'Here you will have all stories'},
  {name:'Covaccine',id:'1',description:'Here you will have Covaccine stories'},
  {name:'Active Cases',id:'2',description:'Here you will have  Active Cases stories'},
  {name:'Recoveries',id:'3',description:'Here you will have Recoveries stories'},
]

//--------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------


{
  /*
  
  <ScrollView horizontal={true} style= {{maxHeight:35}}>
 
    { 
      initialParams.map(item =>
      (
        <TouchableOpacity style ={{flex:1.5,justifyContent:'center',paddingRight:14,paddingLeft:2}}
            onPress = {
                subCategorySelector(item)
            }
        >
          <View>
          <Text style = {{textAlign:'center'}}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )) 
    }
  </ScrollView>
  */
}


//1


//onPress = {() => navigation.navigate('Selected',{'item':item})}
//  {question:'which app is the best for dream 11 prediction',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},



{

  
  /*
  const states = {
  count: 0
}
function reduce(state,action)
{
  switch(action.type
  {
    case 'increment':
      state.count+=1
    case 'decrement':
      state.count-=1
  }
  return state 
}
  */
}

{
  /*
  {
            {
            screen : 'CreatePolls',
            params:
            {
                isTab:true
            }
          }
                setisTab(route.params.isTab)
  */
}

//--------------------------------------------------------------------------------------------------------------
//screen collections
//--------------------------------------------------------------------------------------------------------------



                           


//fun


//1
{
  /*
  
                    <View style={styles.modalView}>
                    <ScrollView style={{}}>
                    { 
                    categoryListItem.map(item =>
                    (
                      <TouchableOpacity style ={{flex:1.5,justifyContent:'center',paddingRight:14,paddingLeft:2}} onPress = {() => navigation.navigate('HomeDetail',{'item':item})}>
                        <View>
                          <Text style = {{textAlign:'left',padding:5}}>{item}</Text>
                        </View>
                      </TouchableOpacity>
                    )) 
                    }
                    </ScrollView>
                                  <View style={{flex:1,backgroundColor:'silver',width:200,marginTop:,}}>
                <View style={{flex:1}}>
                  <Text>Category</Text>
                </View>
                <View style={{flex:1}}>
                  <Text>Category</Text>
                </View>
                <View style={{flex:1}}>
                  <Text>Category</Text>
                </View>
              </View>
  */
}





{/*
  {
        "Category":"Cricket",
        "sub_category":"IPL",
        "is_timer":0,
        "Start_time":"now_time",
        "End_time":"20",
        "Poll_question":"who will win",
        "Options":{
                "a":{
                        "option_name":"csk",
            "votes":0
                },
                "b":{
                        "option_name":"mi",
            "votes":0
                },
                "c":{
                        "option_name":"kkr",
            "votes":0
                }
        },
        "Attachment":"img.jpg1",
        "Poll_status":0,
        "Is_anonymous":"yes",
        "Created_date":"now",
        "Created_by":"athi"
}
         
{
        "Category":"Cricket",
        "sub_category":"IPL",
        "is_timer":isTimer,
        "Start_time":"now_time",
        "End_time":"20",
        "Poll_question":qns,
        "Options":options
        "Attachment":'./src/image/siva.jpg',
        "Poll_status":0,
        "Is_anonymous":"yes",
        "Created_date":"now",
        "Created_by":"athi"


        PostAPoll(category,category,isTimer,timerCount,qns,options,'./src/image/siva.jpg')

}
*/}


    {/*
    
    {this.state.avatarSource && <Image source = {{uri: this.state.avatarSource.uri}} style = {{width:100,height:200,resizeMode:'contain'}}/>}
               <Button title={"Upload a image"} onPress={this.uploadImage} />
               <Button title={"Create a new post"} onPress={this.sendDate} />
              


    */}
    

var auth = {
  access_token:'',
  access_token_refresh_min :'',
  refresh_token:''
}

function reducers(state,action) {
  return action
}

{/*
            {
              headers:  {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
            }
*/}



    {
      /*
      
      
      
      */
    }

    
    
    
//custom




//--------------------------------------------------------------------------------------------------------------
//style collections
//--------------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({

  checker:{
    flex:1,
    justifyContent:"center",
    alignContent:'center'

    },

  container :{
    flex: 1,
    flexDirection: 'row',
    marginLeft:1,
    marginRight:1,
    marginTop: 1,
    marginBottom: 8,
    backgroundColor: '#ADD8E6',
    elevation: 2,

  },
  card:{
    flexDirection: 'row',
    borderRadius: 8,
    marginLeft:8,
    marginRight:8,
    marginTop: 8,
    backgroundColor: '#FFFFFF',
    padding:15,
    marginBottom:2,
  },
  item: {
    marginTop : 24,
    padding:30,
    backgroundColor:'lightgreen',
    fontSize:10,
    marginHorizontal:10,
    marginLeft:0,
  },
  text:
  {
    paddingLeft: 10,
  }
  ,
  viewCell:
  { 
    flex:1.4,
    backgroundColor:'pink',
    borderColor: "#20232a",
    borderWidth: 4,
  },
  textStyle:{  
    margin: 24,  
    fontSize: 25,  
    fontWeight: 'bold',  
    textAlign: 'center',  
    color: '#344953'  
},
TopView:{
  flex:1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 0

},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  width:210,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
buttonClose: {
  backgroundColor: "#2196F3",
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
},
input: {
  margin: 15,
  height: 40,
  borderColor: 'black',
  borderWidth: 3,
  color:'#4B0082'
},
button:{
backgroundColor:'#ff5c5c',
},container1:
{
    flex:1,
    justifyContent:'center',
    padding:1,
    borderBottomColor: 'black'           
}

})


//--------------------------------------------------------------------------------------------------------------
//stack collections
//<Stack.Screen name="TestForTemporary" component={CustomRadioButton} options ={navOptionHandler}/>
//----------------------------------------------------------- ---------------------------------------------------

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "DrawerView">
        <Stack.Screen name="DrawerView" component={DrawerNavigation} options ={navOptionHandler}/>
        <Stack.Screen name="signup" component={SignupPage} options ={navOptionHandler}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigation(props)
{
  const Cricket = {
    screen:'HomeTab',
    params:
      {
        screen:'Home',
        params:
        {
          tab:cricket,
          view:people,
          polls:peoplenews
        }
      }    

  }
  const Politics = {
    screen:'HomeTab',
    params:
      {
        screen:'Home',
        params:
        {
          tab:politices,
          view:politicspeople,
          polls:politicspeoplenews
        }
      }
  }
  const Corona = {
    screen:'HomeTab',
    params:
      {
        screen:'Home',
        params:
        {
          tab:corona,
          view:coronapeople,
          polls:coronapeoplenews
        }
      } 
  }

  return(
    <isPollContext.Provider value = {props}>
      <Drawer.Navigator initialRouteName="Cricket"
        drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="Cricket" component={TabNavigation} initialParams = {Cricket} />
        <Drawer.Screen name="Politics" component={TabNavigation} initialParams = {Politics} />
        <Drawer.Screen name="Corona" component={TabNavigation} initialParams = {Corona} />    
        <Drawer.Screen name="Selected" component={ViewScreen} />
        <Drawer.Screen name="CreateScreen" component={CreatePollStack}/>
        <Drawer.Screen name="SelectedToVote" component={VoteScreen}/>
        <Drawer.Screen name="vote" component={ViewStack}/>

      </Drawer.Navigator>
    </isPollContext.Provider>
  )
}
//      <Drawer.Screen name="CreateScreen" component={CreatePollStack} initialParams = {{screen : 'CreatePolls', params :{istab: true}}}/> worked

function TabNavigation()
{
  return(
      <Tab.Navigator initialRouteName="Notification" tabBar={props => <CustomBottomTabContent {...props} />}>
        <Tab.Screen name="Profile" component={ProfileStack} />      
        <Tab.Screen name="HomeTab" component={HomeStack} />
        <Tab.Screen name="Notification" component={NotificationStack} />
      </Tab.Navigator>
  )
}


function ViewStack()
{
  return(
  <Stack.Navigator initialRouteName = "SelectedToVote">
    <Stack.Screen name="SelectedToVote" component={VoteScreen} options ={navOptionHandler}/>
    <Stack.Screen name="ForTesting" component={Samp} options ={navOptionHandler}/>

  </Stack.Navigator>

  )
}

function HomeStack({naivgation}){ 
  return (
    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name="Home" component={HomeScreen} options ={navOptionHandler}/>
    </Stack.Navigator>
  )
}

function CreatePollStack(){//12      <Stack.Screen name="CreatePollToggle" component={CreatePollToggleScreen} options ={navOptionHandler}/>
  return  (
    <Stack.Navigator >
      <Stack.Screen name="CreatePolls" component={CreatePollScreen} options ={navOptionHandler}/>
    </Stack.Navigator>
  )
}

function NotificationStack(){
  return  (
    <Stack.Navigator initialRouteName = "Notification">
      <Stack.Screen name="Notification" component={NotificationsScreen} options ={navOptionHandler}/>
    </Stack.Navigator>
  )
}

function ProfileStack(){
  return  (
    <Stack.Navigator initialRouteName = "Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} options ={navOptionHandler}/>
    </Stack.Navigator>
  )
} 