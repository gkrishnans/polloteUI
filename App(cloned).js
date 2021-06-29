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




const Tab = createBottomTabNavigator();

const Stack = createStackNavigator()

const Drawer = createDrawerNavigator();

const navOptionHandler = () => ({
  headerShown:false
})

const people = [
  {name:'Lawrence',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',description:'lawrence tried on a short ball for that he left the greese lucky hitted the stamp',img: require('./src/image/16DanLawrence.jpg')},
  {name:'CricketBall',key:2,id:'2',category:'Cricket',subcategory:'IPL',description:'here the red ball test endsby, there comes a pink ball cricket ',img: require('./src/image/Cricket_Ball_AP.jpg')},
  {name:'Stroky',id:'5',key:4,category:'Cricket',subcategory:'Test Cricket',description:'well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable',img: require('./src/image/stroky.jpg')},
  {name:'Ashwin',id:'6',key:5,category:'Cricket',subcategory:'Test Cricket',description:'man of moments, won the hearts of chepauk audience',img: require('./src/image/TheManOfTheMoment.jpg')},
]
const peoplenews = [
  {question:'which app is the best for dream 11 prediction1 ',id:'1',category:'cricket',subcategory:'Test Cricket',options:[{name:'dream11',id:2,state:false},{name:'dream12',id:3,state:false},{name:'dream13',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'who will be the best player in the world ',id:'2',category:'cricket',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which format of cricket do you like ',id:'3',category:'cricket',subcategory:'Test Cricket',options:[{name:'test cricket',id:1,state:false},{name:'odi',id:2,state:false},{name:'ipl',id:3,state:false},{name:'t20',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'dhoni / virat',id:'1',category:'cricket',subcategory:'Test Cricket',options:[{name:'dhoni',id:2,state:false},{name:'virat',id:3,state:false}],img: require('./src/image/16DanLawrence.jpg')},

]



const cricket = [
  {name:'All',key:0,description:'Here you will have all stories'},
  {name:'IPL',key:1,description:'Here you will have IPL stories'},
  {name:'Test Cricket',key:2,description:'Here you will have TEST CRICKET stories'}, +
  {name:'World Tour',key:3,description:'Here you will have WORLD TOUR stories'},
  {name:'T20',key:4,description:'Here you will have T20 stories'},
  {name:'One Day International',key:5,description:'Here you will have ONE DAY INTERNATIONAL stories'},
]
const politicspeople = [
  {name:'stalin',key:1,id:'1',category:'Politics',subcategory:'PM election',description:'Dravida Munnetra Kazhagam (DMK) ( transl. Dravidian Progressive Federation) is a political party in India, particularly in the state of Tamil Nadu and union territory of Puducherry.',img: require('./src/image/admk.jpg')},
  {name:'poverty and reforms',category:'Politics',subcategory:'Correption',key:1,id:'1',description:'India long suffered from a mindless commitment to policies that were advertised in the public policy domain as solutions to poverty and destitution but that tragically accentuated instead these tragic phenomena over decades. The economic reforms from 1991 onwards were meant to reverse the situation and have made a successful contribution. And yet we hear again sceptical voices against the reforms. Since a spirited response is necessary to prevent a roll back to the counterproductive policies of the past, it is useful to examine a few arguments against reforms in the public policy debate today that have superficial and hence popular appeal.',img: require('./src/image/povertyandreforms.jpg')},
  {name:'stop correption',key:1,id:'1',category:'Politics',subcategory:'Correption',description:'Most UK businesses have adopted anti-bribery policies - but it’s the way they are implemented that will make a difference. It’s critical that all staff understand what is and isn’t acceptable in relation to gifts, hospitality, donations, sponsorship and political donations.  Make sure staff understand your companys rules and expectations around bribery and corruption. They need to do know what is and isnot acceptable in relation to gifts, hospitality, donations, sponsorship and political donations. You need to provide regular bribery training to maintain awareness.  Alongside training, establish processes that help them remember the do’s and don’ts, such as checklists and travel guidelines.Staff need to understand that any gift or hospitality they receive must have a legitimate business purpose, be proportionate, and declared in the company’s Gift and Hospitality Register. Be sure to clearly outline what is meant by ‘legitimate’ and ‘proportionate’ - don’t leave it open to interpretation.',img: require('./src/image/stopcorreption.jpg')},

]
//???CustomViewForPoll

const options = [{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}]

const politicspeoplenews = [
  {question:'politics 1',id:'1',category:'politics',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 2',id:'2',category:'politics',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 3',id:'3',category:'politics',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
]
const politices = [
  {name:'All',key:0,description:'Here you will have all stories'},
  {name:'BJP',key:1,description:'Here you will have BJP stories'},
  {name:'PM election',key:2,description:'Here you will have  PM election stories'},
  {name:'Correption',key:3,description:'Here you will have correption stories'},
]





const coronapeople  = [
  {name:'positives',key:1,id:'1',category:'Corona',subcategory:'Active Cases',description:'Doctors and researchers are noticing some curious and unexpectedly positive side effects of the abrupt shifts in human behaviour in response to the covid-19 pandemic. Skies are #4B0082r, fewer cars are crashing, crime is falling, and some other infectious diseases are fading from hospital emergency departments.',img: require('./src/image/positives.jpg')},
  {name:'C19recovery',key:1,id:'1',category:'Corona',subcategory:'Recoveries',description:'People with mild symptoms who are otherwise healthy should manage their symptoms at home. On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.',img: require('./src/image/C19recovery.jpg')},
  {name:'covaccine2',key:1,id:'1',category:'Corona',subcategory:'Covaccine',description:'Is there a COVID-19 vaccine for children? The Pfizer/BioNTech COVID-19 vaccine is available to people age 16 and older. Several companies have begun enrolling children as young as age 12 in COVID-19 vaccine clinical trials. Studies including younger children will begin soon.',img: require('./src/image/covaccine2.jpg')},

]

const coronapeoplenews  = [
  {question:'corona 1',id:'1',category:'corona',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 2',id:'2',category:'corona',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 3',id:'3',category:'corona',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 4',id:'4',category:'corona',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('./src/image/16DanLawrence.jpg')},
]
const corona = [
  {name:'All',key:0,description:'Here you will have all stories'},
  {name:'Covaccine',key:1,description:'Here you will have Covaccine stories'},
  {name:'Active Cases',key:2,description:'Here you will have  Active Cases stories'},
  {name:'Recoveries',key:3,description:'Here you will have Recoveries stories'},
]

//--------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------


const isShow = false

const reducer = (state,action) =>{
  return !state
}

function Customheader({title,isHome,navigation,category})
{ 
  const switchfeeds = category[0]['category']
  const switchpoll = category[0]['category'] + 'News'
  const [feed,dispatch] = useReducer(reducer,isShow)
  const isPollContextContext = useContext(isPollContext)
  return (
      <View >
         <View style = {{flexDirection:'row',height : 50}}>

          <TouchableOpacity onPress = {()=>navigation.openDrawer()}>

            <View style ={{flex:1, justifyContent:'center'}}>
              <Image
                style={{width:30,height:30,marginLeft:5}}
                source = {require('./src/image/menu.png')}
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
          if(feed)
              {
                isPollContextContext.navigation.navigate(switchfeeds)
              }
          else{
            isPollContextContext.navigation.navigate(switchpoll)
              }
            dispatch(feed)
          }}/>  
       
      <View style ={{flex:1.5,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>poll</Text>
      </View>
      
      </View>
    </View>        
      </View>
  )
}


function Customheaderback({title,isHome,navigation,category})
{ 
  return (
      <View >
         <View style = {{flexDirection:'row',height : 50}}>

         <TouchableOpacity onPress = {()=>navigation.goBack()}>
          <View style ={{flex:1, justifyContent:'center'}}>
            <Image
              style={{width:30,height:30,marginLeft:5}}
              source = {require('./src/image/leftarrow.png')}
            />
          </View>
        </TouchableOpacity>

          <View style ={{flex:1.5,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>{title}</Text>
      </View>
      <View style ={{flex:2,flexDirection:'row',height : 50}}>
      
      </View>
    </View>        
      </View>

  )
}




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
function subCategorySelector(item)
{
  Alert.alert(item)
}


function CustomTopTabContent({navigation,initialParams})
{
  let listViewRef;
  const ItemView = ({ item }) => {
    return (
      <Text style={{padding:10}} onPress={() => {
        subCategorySelector(item.name)
      }}>
        {item.name}
      </Text>
    );
  };
  return (
    <ScrollView horizontal={true} style= {{maxHeight:50}}>
  
      <FlatList
              keyExtractor = {(item) => item.id}
              data = {initialParams}
              horizontal={true}
              renderItem={ItemView}
              ref={(ref) => {
                listViewRef = ref;
              }}
              
            />
    </ScrollView>
  )
}

function CustomDrawerContent(props) {
  return(
    <SafeAreaProvider style={{flex :1}}>
        <ScrollView style={{marginLeft:5}}>
        
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => {
              props.navigation.navigate('Cricket')
            }}        
          >
            <Text>Cricket</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => {
              props.navigation.navigate('Politics')

            }}        
          >
            <Text>Politics</Text>
          </TouchableOpacity>        
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => {
              props.navigation.navigate('Corona')
            }}        
          >
            <Text>Corona</Text>
          </TouchableOpacity>        
        </ScrollView>
    </SafeAreaProvider>
  )   
}

//1

function CustomView({navigation,initialParams})
{
  return(
    <View style={styles.container}>

      <FlatList
        keyExtractor = {(item) => item.id}
        data = {initialParams}
        renderItem = {({item}) => (//12
          <TouchableOpacity style = {styles.card} onPress = {() => navigation.navigate('Selected',{'item':item})}>
            <Image
              style={{width:100,height:100, resizeMode: 'stretch'}}
              source = {item.img}
            />
            <View>
              <Text style = {styles.text} >{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

//onPress = {() => navigation.navigate('Selected',{'item':item})}
//  {question:'which app is the best for dream 11 prediction',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},

function CustomRadioButtonListView({ options ,navigation,item}) {
  const [myopt,setmyopt] = useState(options)
  return (
    <View style = {{justifyContent:'center', alignContent:'center',padding:10}}>{/*container*/}

    <FlatList
      data = {myopt}
      renderItem = {
        ({
          item
        }) => (

            <View style ={{height:35,flexDirection:'row'}}>
              <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
                <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                                  onPress = {() =>
                                    {
                                      let newopt = [...options]
                                      let key
                                      for(key in newopt)
                                      {
                                        if(item.id == newopt[key]['id'])
                                        {
                                          newopt[key]['state'] = true
                                        }
                                        else
                                        {
                                          newopt[key]['state'] = false
                                        }
                                      }
                                      setmyopt([...newopt])
                                      console.log("hello",myopt)
                                    }
                                  }
                                  >{/*outerRadius*/}
                  {item.state &&
                    <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
                    </View>
                  }
                </TouchableOpacity>
              </View>

              <View style ={{height:35,justifyContent:'center',flex:1}}>
                  <Text style={{marginLeft:5}}>{item.name}</Text>
              </View>                                      
            </View>
        )
      }
    />
                  <View style = {{flex:1,flexDirection:'row',height : 45,marginTop:5}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                 <Image
                  style={{width:25,height:25,}}
                  source = {require('./src/image/speech-bubble.png')}        
                />
                  <Text style={{paddingLeft:3}}>25+</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                 <Image
                  style={{width:25,height:25,}}
                  source = {require('./src/image/share.png')}        
                />
                  <Text style={{paddingLeft:3}}>25+</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                 <Image
                  style={{width:25,height:25,}}
                  source = {require('./src/image/statistics.png')}        
                />
                  <Text style={{paddingLeft:3}}>25+</Text>
                </View>
                <TouchableOpacity style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}                       
                          onPress = {() => {
                            navigation.navigate('SelectedToVote',{'item':item,'option':myopt})}}
                          >
                  <Text >More</Text>
                  <Image
                    style={{width:20,height:20,padding:3}}
                    source = {require('./src/image/arrow-point-to-right.png')}        
                  />
                </TouchableOpacity>
              </View>            

    </View>
  );
}

function CustomViewForPoll({navigation,initialParams})
{
  console.log("there",initialParams)
  return(
    <View style={styles.container}>
    
      <FlatList
        keyExtractor = {(item) => item.id}
        data = {initialParams}
        renderItem = {({item}) => (
          <View style = {styles.card} >          
            <View style={{flex:1}}>
            <View style= {{flex:1,alignContent:'center',justifyContent:'center'}}>
            <Text style = {styles.text} >{item.question}</Text>
            <CustomRadioButtonListView options = {item.options} navigation = {navigation} item = {item}/>
            </View>
            </View>
          </View>
        )}t-
      />
    </View>
  )
}

function ProfileScreen({navigation})
{                       
  const [mypoll,setmypoll] = useState(true)
  const [voted,setvoted] = useState(false)
  const [mypollColor,setmypollColor] = useState(2.5)
  const [myvoteColor,setmyvoteColor] = useState(0)
  const [myvoteBold,setmyvoteBold] = useState("400")
  const [mypollBold,setmypollBold] = useState("700")
  const [myvoteSize,setmyvoteSize] = useState(0)
  const [mypollSize,setmypollSize] = useState(0)

  return(
    <SafeAreaProvider style={{flex:1},styles.container}>
      
        <View style={{flex:1.2,flexDirection:'column'}}>
        <Customheaderback navigation = {navigation} />
          <View style = {{flex:1,flexDirection:'column'}}>
            <View style={{flex:2.5,flexDirection:'row',}}>
              <View style = {{justifyContent:"center", borderColor:"violet",borderRightWidth:1,paddingLeft:20}}>
              <Image
                              style={{width:55,height:55,marginLeft:10,borderRadius:2}}
                              source = {require('./src/image/profile.png')}        
                            />
              </View>
              <View style = {{justifyContent:"center",paddingRight:10,paddingLeft:10}}>
                <TouchableOpacity style = {{borderRadius:18,borderWidth:1,padding:5,borderColor:'blue',flexWrap:"wrap",justifyContent:'center',alignContent:'center',paddingLeft:14,paddingRight:14,backgroundColor:'white',marginLeft:3}}>
                  <Text style={{textAlign:'center',fontSize:12}}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
              <View style = {{justifyContent:"center",paddingRight:10}}>
              <TouchableOpacity style = {{borderRadius:18,borderWidth:1,padding:5,borderColor:'blue',flexWrap:"wrap",justifyContent:'center',alignContent:'center',paddingLeft:14,paddingRight:14,backgroundColor:'white',marginRight:3}}>
              <Text style={{textAlign:'center',fontSize:12}}>Change Password</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex:2.5,flexDirection:'column'}}>
              <View style={{marginLeft:10,marginTop:5}}>
                <Text>Gokula Krishnan</Text>
              </View>
              <View style={{marginLeft:10,marginBottom:10,marginRight:10,marginTop:5}}>
                <Text>
                  Senior Editor @Cenmag. Woman Scientiesthelping Chemists And Chemical Engineers Achieve Work-Life Balance
                </Text>
              </View>
            </View>
          </View>
          <View style = {{flex:2}}>
            <View style={{flex:.150,flexDirection:'row',backgroundColor:'white'}}>
              <View style = {{marginLeft:10, justifyContent:"center"}}>
              <TouchableOpacity style = {{alignContent:'center',flexWrap:"wrap",paddingLeft:20,paddingRight:20,padding:10,borderBottomColor:'black',borderBottomWidth:mypollColor}}
                    onPress = {()=> {
                        setmypoll(true)
                        setvoted(false)
                        setmyvoteColor(0)
                        setmypollColor(2.5)
                        setmypollBold("700")
                        setmyvoteBold("400")
                  }}>  
                    <Text style={{textAlign:'center',fontWeight:mypollBold,fontFamily: "Cochin",fontSize:14}}>My Polls</Text>
                </TouchableOpacity>
              </View>
              <View style = {{justifyContent:"center",marginLeft:10}}>
                <TouchableOpacity style = {{alignContent:'center',paddingLeft:20,paddingRight:20,flexWrap:'wrap',padding:10,borderBottomColor:'black',borderBottomWidth:myvoteColor}}
                    onPress = {()=> {
                        setmypoll(false)
                        setvoted(true)
                        setmyvoteColor(2.5)                    
                        setmypollColor(0)
                        setmypollBold("400")
                        setmyvoteBold("700")
                  }}>                  
                    <Text style={{textAlign:'center',fontWeight: myvoteBold,fontFamily: "Cochin",fontSize:14}}>Voted</Text>
                </TouchableOpacity>
              </View>
              <View style = {{flex:1,justifyContent:"center"}}>
              </View>
            </View>
              {mypoll &&
                <CustomViewForPoll  navigation = {navigation} initialParams = {peoplenews} />
              }
              {voted &&
                <CustomView  navigation = {navigation} initialParams = {people} />
              }  

          </View>
        </View>
    </SafeAreaProvider>
  )
}
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
function CustomBottomTabContent(props)
{
return(
    <View horizontal={true} style = {{flexDirection:'row',height : 50}}>
      <View style ={{flex:1,justifyContent:'center',paddingRight:1,paddingLeft:1}}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Home')}}        
        >
          <Text style = {{textAlign:'center',fontSize:11}}>Home</Text>
        </TouchableOpacity>
      </View>  
      <View style ={{flex:1,justifyContent:'center',paddingRight:1,paddingLeft:1}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('CreateScreen',{screen : 'CreatePolls', params :{istab: true,category: '', subcategory : ''}}
                                                  )}
        >
        <Text style = {{textAlign:'center',fontSize:11}}>Create Poll</Text>
        </TouchableOpacity>
      </View>
      <View style ={{flex:1,justifyContent:'center',paddingRight:1,paddingLeft:1}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Notification')}        
        >
          <Text style = {{textAlign:'center',fontSize:11}}>Notification</Text>
        </TouchableOpacity>     
      </View>   
      <View style ={{flex:1,justifyContent:'center',paddingRight:1,paddingLeft:1}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Profile')}        
        >
          <Text style = {{textAlign:'center',fontSize:11}}>Profile</Text>
        </TouchableOpacity>          
      </View>
    </View>  
  )   
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


function CustomRadioButton({ option1,option2,option3,option4 }) {

  const [a,seta] = useState(false)
  const [b,setb] = useState(false)
  const [c,setc] = useState(false)
  const [d,setd] = useState(false)
  const [result,setresult] = useState()

  return (
    <View style = {{justifyContent:'center', alignContent:'center',padding:10}}>{/*container*/}

      <View style ={{height:35,flexDirection:'row'}}>
        <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
          <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                            onPress = {() =>
                              {
                                seta(true)
                                setb(false)
                                setc(false)
                                setd(false)
                                setresult('a')
                              }
                            }
                            >{/*outerRadius*/}
            {a &&
              <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
              </View>
            }
          </TouchableOpacity>
        </View>

        <View style ={{height:35,justifyContent:'center',flex:1}}>
            <Text style={{marginLeft:5}}>{option1}</Text>

        </View>                                      
      </View>
 


      <View style ={{height:35,flexDirection:'row'}}>
        <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
          <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                            onPress = {() =>
                              {
                                seta(false)
                                setb(true)
                                setc(false)
                                setd(false)
                                setresult('b')
                              }
                            }
                            >{/*outerRadius*/}
            {b &&
              <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
              </View>
            }
          </TouchableOpacity>
        </View>

        <View style ={{height:35,justifyContent:'center',flex:1}}>
            <Text style={{marginLeft:5}}>{option1}</Text>

        </View>                                      
      </View>



      <View style ={{height:35,flexDirection:'row'}}>
        <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
          <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                            onPress = {() =>
                              {
                                seta(false)
                                setb(false)
                                setc(true)
                                setd(false)
                                setresult('c')
                              }
                            }
                            >{/*outerRadius*/}
            {c &&
              <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
              </View>
            }
          </TouchableOpacity>
        </View>

        <View style ={{height:35,justifyContent:'center',flex:1}}>
            <Text style={{marginLeft:5}}>{option1}</Text>

        </View>                                      
      </View>


      <View style ={{height:35,flexDirection:'row'}}>
        <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
          <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                            onPress = {() =>
                              {
                                seta(false)
                                setb(false)
                                setc(false)
                                setd(true)
                                setresult('d')

                              }
                            }
                            >{/*outerRadius*/}
            {d &&
              <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
              </View>
            }
          </TouchableOpacity>
        </View>

        <View style ={{height:35,justifyContent:'center',flex:1}}>
            <Text style={{marginLeft:5}}>{option1}</Text>

        </View>                                      
      </View>
    </View>
  );
}

function HomeScreen({route,navigation}) {
  const switchfeeds = route.params.view.category
  const switchpoll = route.params.view.category+'News'
  const [feed,dispatch] = useReducer(reducer,isShow)
  const isPollContextContext = useContext(isPollContext)
  console.log(switchfeeds,switchpoll)
  const title = "home"
  const [poll, setpoll] = useState(0)
  console.log(route.params.polls)

  return (
      <SafeAreaProvider style={{flex:1}}>
      <View >
         <View style = {{flexDirection:'row',height : 50}}>

          <TouchableOpacity onPress = {()=>navigation.openDrawer()}>

            <View style ={{flex:1, justifyContent:'center'}}>
              <Image
                style={{width:30,height:30,marginLeft:5}}
                source = {require('./src/image/menu.png')}
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
                           
function VoteScreenVoteScreen({route,navigation})
{
  const isPollContextContext = useContext(isPollContext)
  const [vote,setvote] = useState(true)
  return(
    <TouchableOpacity 
    onPress = {()=>{
      navigation.goBack()
    }}>
      <Text>hello world!</Text>
      
    </TouchableOpacity>
  )
}

function voteS({route,navigation})
{

  const isPollContextContext = useContext(isPollContext)
  const [vote,setvote] = useState(true)
  return(
    <TouchableOpacity 
    onPress = {()=>{
      navigation.navigate('samp')
    }}>
      <Text>hello world!</Text>
      
    </TouchableOpacity>
  ) 
}


function Samp({route,navigation})
{

  const isPollContextContext = useContext(isPollContext)
  const [vote,setvote] = useState(true)
  return(
    <TouchableOpacity 
    onPress = {()=>{
      navigation.dispatch(CommonActions.goBack())    }}>
      <Text>here it is samp</Text>
      
    </TouchableOpacity>
  )
}

function VoteScreen({route,navigation})
{

  const value = route.params.option
  const [myopt,setmyopt] = useState(value)
  const [vote,setvote] = useState(true)
  React.useEffect(() => {
    navigation.addListener('blur', () => {
      setvote(true)
      console.log("hey")
    });})
  return(
    <SafeAreaProvider style={{flex:1,alignItem:'center',justifyContent:'center',backgroundColor:'white'}}>
        <Customheaderback navigation = {navigation} />
        <View style={{flex:.7,alignItem:'center',flexDirection:'row',justifyContent:'center',backgroundColor:'white',marginBottom:5,marginTop:10,marginLeft:10,marginRight:10}}>
            <Image
            style={{width:105,height:105,marginLeft:5}}
            source = {require('./src/image/admk.jpg')}        
          />

          <ScrollView style={{marginTop:3, alignContent:'center',height:115}}>
            <Text style={{fontSize:14,marginLeft:10,marginRight:20}}>{route.params.item.question}</Text>
          </ScrollView>
        </View>
        {vote && <View>
        <View style = {{justifyContent:'center', alignContent:'center',padding:10}}>{/*container*/}

            <FlatList
              data = {value}
              renderItem = {
                ({
                  item
                }) => (

                    <View style ={{height:35,flexDirection:'row'}}>
                      <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
                        <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                                          onPress = {() =>
                                            {
                                              let newopt = [...options]
                                              let key
                                              for(key in newopt)
                                              {
                                                if(item.id == newopt[key]['id'])
                                                {
                                                  newopt[key]['state'] = true
                                                }
                                                else
                                                {
                                                  newopt[key]['state'] = false
                                                }
                                              }
                                              setmyopt([...newopt])
                                              console.log("hello",myopt)
                                            }
                                          }
                                          >{/*outerRadius*/}
                          {item.state &&
                            <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
                            </View>
                          }
                        </TouchableOpacity>
                      </View>

                      <View style ={{height:35,justifyContent:'center',flex:1}}>
                          <Text style={{marginLeft:5}}>{item.name}</Text>
                      </View>                                      
                    </View>
                )
              }
            />
            </View>
            <View 
                style = {{marginLeft:10,marginRight:10,marginTop:16}}
            >
              <Button
              title="Learn More"
              color="#FF1493"
              onPress={()=>{ setvote(false)
              }}
              />            
            </View>
      </View>}
      {!vote && <View>
        <View style = {{justifyContent:'center', alignContent:'center',padding:20}}>{/*container*/}

            <FlatList
              data = {value}
              renderItem = {
                ({
                  item
                }) => (
                    <View>
                    <View style ={{height:35,flexDirection:'row'}}>
                      <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
                        <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                                          onPress = {() =>
                                            {
                                              let newopt = [...options]
                                              let key
                                              for(key in newopt)
                                              {
                                                if(item.id == newopt[key]['id'])
                                                {
                                                  newopt[key]['state'] = true
                                                }
                                                else
                                                {
                                                  newopt[key]['state'] = false
                                                }
                                              }
                                              setmyopt([...newopt])
                                              console.log("hello",myopt)
                                            }
                                          }
                                          >{/*outerRadius*/}
                          {item.state &&
                            <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
                            </View>
                          }
                        </TouchableOpacity>
                      </View>

                      <View style ={{height:35,justifyContent:'center',flex:1}}>
                          <Text style={{marginLeft:5}}>{item.name}</Text>
                      </View>                                      
                    </View>
                      <View style = {{backgroundColor:'red',height:5,width:250,borderRadius:5,padding:1}}>
                      </View>
                      </View>

                )
              }
            />
            </View>
      </View>}

      {vote && <View style={{flex:2}}>
      </View>}
      {!vote && <View style={{flex:2,backgroundColor:'white',marginBottom:5,marginTop:6,marginLeft:10,marginRight:10}}>
          <View style = {{marginLeft:10,marginTop:10}}>
            <Text style = {{color:'gray'}}>Comments</Text>
            <ScrollView>
                
            </ScrollView>
          </View>
        </View>
        }

        {!vote &&
          <View style={{flex:.5,alignItem:'center',justifyContent:'center',backgroundColor:'white',marginTop:5,}}>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{alignItem:'center',justifyContent:'center',marginLeft:10}}>
                  <TextInput
                          style={{color:'#4B0082', borderBottomWidth: .5,borderBottomColor:'#DCDCDC  ',borderRadius:20,borderWidth:2,width:275}}
                          placeholder='sdfdfafasf'
                      />      
                </View>
                <View style={{alignItem:'center',justifyContent:'center',marginLeft:7}}
                >
                  <Image
                      style={{width:30,height:30, alignContent:'center' , resizeMode: 'stretch'}}
                      source = {require('./src/image/paper-plane.png')}        
                    />
                </View>
              </View>
            </View>
        }
    </SafeAreaProvider>
  )
}

//fun


//1
function ViewScreen({ route,navigation }) {
  return (
    <SafeAreaProvider style={{flex:1}}>
      <Customheaderback navigation = {navigation} category = {route.params.view}/>
      <View>
        <Image
            style={{width:385,height:280, alignContent:'center' , resizeMode: 'stretch'}}
            source = {route.params.item.img}
          />
        </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{route.params.item.name}</Text>
      </View>
      <View style={{ flex: 5,paddingRight:20, paddingLeft:20,marginTop:10, alignItems: 'center' }}>
        <ScrollView>
          <Text>{route.params.item.description}</Text>
        </ScrollView>
      </View>
      <View style = {{flexDirection:'row',height : 50}}>
        <View style ={{flex:1, justifyContent:'center'}}>
          <Image
            style={{width:30,height:30,marginLeft:5}}
            source = {require('./src/image/back.png')}        
          />
        </View>
        <View style ={{flex:1, justifyContent:'center'}}>
          <Image
            style={{width:30,height:30,marginLeft:5}}
            source = {require('./src/image/arrow-point-to-right.png')}        
          />
        </View>
        <View style ={{flex:2,justifyContent:'center'}}>
          <Text style = {{textAlign:'center',color:"#4B0082"}}>Related poll</Text>
        </View>
        <TouchableOpacity style ={{flex:2,justifyContent:'center'}} 
            onPress = {()=> {
              console.log(route.params.item)
              navigation.navigate('CreateScreen',{
                                                    screen : 'CreatePolls', //12
                                                    params :{
                                                      istab: false,
                                                      category: route.params.item.category, 
                                                      subcategory : route.params.item.subcategory,
                                                      item:route.params.item
                                                      }
                                                  })
            }}
            >
          <Text style = {{textAlign:'center',color: "red"}}>Create poll</Text>
        </TouchableOpacity>
        </View>
  </SafeAreaProvider>
  );
}
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
function PostAPoll(var_Category,var_sub_category,var_istimer,var_endtimer,var_Poll_question,var_options,var_Is_anonymous)
{ 
  axios
  .post('http://192.168.1.5:5000/api/polls/createPoll',   //192.168.1.5
  {
    "Category":var_Category,
    "sub_category":var_sub_category,
    "is_timer":var_istimer,
    "Start_time":'now',
    "End_time":var_endtimer,
    "Poll_question":var_Poll_question,
    "Options":var_options,
    "Poll_status":1,
    "Is_anonymous":var_Is_anonymous,
    "Created_date":'now',
    "Created_by":'athi'
  }            
  ).then( response => {
      console.log(response);
      Alert.alert('success')
  })
}

function sendDate(avatarSource,category,category_,isTimer,timerCount,qns,options,isanonymous)
{
  const data = new FormData();
  data.append('photo', {
    name: avatarSource.fileName,
    type: avatarSource.type,
    uri:
      Platform.OS === 'android' ? avatarSource.uri : avatarSource.uri.replace('file://', ''),
  });

  fetch('http://192.168.1.5:5000/api/polls/imageUpload', {   //192.168.1.5
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },        
    body: data
  })
    .then((response) => response.json())
    .then((response) => {
      console.log('upload succes', response);
      PostAPoll(category,category_,isTimer,timerCount,qns,options,isanonymous)
      alert('Upload success!');

      //this.setState({ "avatarSource": null });
    })
    .catch((error) => {
      console.log('upload error', error);
      alert('Upload failed!');
    });
  }


function CreatePollScreen({route,navigation}) 
{
//  navigation.navigate('CreateScreen',{"subCategory": route.params.item.subCategory,"Category":route.params.item.Category})
      const [isanonymous,setisanonymous] = useState(0)
      const [modalVisible, setModalVisible] = useState(false);
      const [isTab,setisTab] = useState(route.params.istab) 
      const [resultSetting,setresultSetting] = useState(0)
      const [value,setValue] = useState(0)
      const [category,setcategory] = useState('')
      const [subcategory,setSubCategory] = useState(0)
      const [isTimer,setIsTimer] = useState(0)
      const [showSuggestions,setShowSuggestions] = useState(0)  
      const [id,setid] = useState(0)
      const [qns,setqns] = useState(0)

      const [options,setoptions] = useState([])    
      const [avatarSource,setavatarSource] = useState()

      const addoptions = () => {
        if(options.length < 4)
        {
          setid(id+1)
          setoptions(
            [
              ...options,{
                id:id,
                name : id
              }
            ]
          )  
        }
        else
        {
            ToastAndroid.showWithGravity(
              "no more than 4 options",
              ToastAndroid.SHORT,
              ToastAndroid.BOTTOM
            );        
        }
      }
      const deloptions = (id_) => {
        console.log(id_)
        var i;
        for (i = 0; i < options.length; i++)
        {
          if(options[i].id == id_)
          break
        }
        setoptions(
          [
            ...options.slice(0, i).concat([ ...options].slice(i+1,options.length))
          ]
          )                
      }
      function uploadImage()
      {
          launchImageLibrary(
            {
              noData:true,
              mediaType:'photo',
              saveToPhotos:true,
              includeBase64:true,
            }, (response) => {
          console.log('Response = ', response);
          if (response.didCancel) 
          {
            console.log('User cancelled image picker');
          } 
          else if (response.error) 
          {
            console.log('ImagePicker Error: ', response.error);
          } 
          else if (response.customButton) 
          {
            console.log('User tapped custom button: ', response.customButton);
          } 
          else 
          {
            console.log(response)
            setavatarSource(response)
          }
        }); 
      }
      //setisTab(route.params.isTab)
      {
        /*
        
        response = {
          uri 
        }

        */
      }
      const categoryListItem = ['Politics','Sports','Educaton','International','National','Local News','Corona','Spiritual']
      const val = route.params.istab
      const cat = route.params.category
      const subcat = route.params.subcategory
      const [modalVisibleForTimer,setmodalVisibleForTimer] = useState(0)
      const [timerCount,settimerCount] = useState(0)
      const values = ['0','5','10','15','20','25','30','35','40','45','50','55','60','180','360']
      React.useEffect(() => {
        navigation.addListener('blur', () => {
          setcategory('')
        });})

        React.useEffect(() => {
          navigation.addListener('focus', () => {
            if(!val)
            {
              var exampleImageUri = Image.resolveAssetSource(route.params.item.img)
              exampleImageUri['fileName'] = 'temp'
              exampleImageUri['type'] = "image/jpeg"
              setavatarSource(exampleImageUri)
              console.log('gk',avatarSource,exampleImageUri)
            }
          });})
      return (  
        <View style={{flexDirection:'column',flex:1,}}>
        

              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisibleForTimer}
                onRequestClose={() => {
                  setmodalVisibleForTimer(!modalVisibleForTimer);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={{
                            width:220,
                            height:220,
                            backgroundColor: "white",
                            borderRadius: 15,
                            padding: 10,        
                            alignItems: "center",
                            shadowColor: "#000",
                            shadowOffset: {
                              width: 0,
                              height: 2
                            }}}>
                    <ScrollView style={{}}>
                    { 
                      values.map(item =>
                      (
                        <TouchableOpacity style ={{flex:1.5,justifyContent:'center',marginLeft:10,marginRight:10}} 
                                          onPress = {() => {
                                            settimerCount(item)
                                            setmodalVisibleForTimer(false)
                                            }
                                                      }>
                          <View>
                            <Text style = {{textAlign:'left',padding:5,marginRight:10,marginLeft:10}}>{item}</Text>
                          </View>
                        </TouchableOpacity>
                      )) 
                    }
                    </ScrollView>
                  </View>
                </View>
              </Modal>


              <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={{
                            width:220,
                            backgroundColor: "white",
                            borderRadius: 15,
                            padding: 35,
                            alignItems: "center",
                            shadowColor: "#000",
                            shadowOffset: {
                              width: 0,
                              height: 2
                            }}}>
                    <ScrollView style={{}}>
                    { 
                    categoryListItem.map(item =>
                    (
                      <TouchableOpacity style ={{flex:1.5,justifyContent:'center',paddingRight:14,paddingLeft:2}} 
                                        onPress = {() => {
                                          setcategory(item)
                                                    setModalVisible(false)}
                                                    }>
                        <View>
                          <Text style = {{textAlign:'left',padding:5}}>{item}</Text>
                        </View>
                      </TouchableOpacity>
                    )) 
                    }
                    </ScrollView>
                  </View>
                </View>
              </Modal>




            <View style={{flexDirection:'row',padding:3,flex:.1}}>
                <TouchableOpacity style={{ justifyContent: 'center', marginLeft:7 }}
                                  onPress={() => navigation.goBack()}
                                  >  
                  <Image
                  style={{width:23,height:23,marginLeft:5}}
                  source = {require('./src/image/close.png')}
                />
                </TouchableOpacity>  


                <TouchableOpacity style={{ justifyContent: 'center', marginLeft:7 }}
                                  onPress={() =>{ navigation.goBack()
                                    sendDate(avatarSource,category,category,isTimer,timerCount,qns,options,isanonymous)
                                  }
                                  }
                                  >  
                                  <Text style={{color:'gray',fontSize:12}}>P O S T </Text>
                </TouchableOpacity> 
            </View>
            <ScrollView style={{flex:1}}>
            <View style={{height:20, justifyContent: 'center',marginLeft:10,marginBottom:20,marginRight:10}}>  
              <Text style={{color:'gray',fontSize:17}}>Create a Poll</Text>
            </View>  


            <View style={{height:70, justifyContent: 'center',marginLeft:10}}>  
              <TouchableOpacity style={{flex:.5, justifyContent: 'center'}} onPress={() => setModalVisible(true)}>  
                <Text style={{color:'gray',fontSize:12}}>Category </Text>
              </TouchableOpacity>  
              <View style={{flex:2}}>  
                <TextInput
                    style={{color:'blue', borderBottomWidth: .5,borderBottomColor:'#DCDCDC  ',marginRight:10}}
                    onChangeText={text => setValue(text)}
                    value = {cat + ' '+ subcat + category}
                />              
              </View>  
            </View>  


            <View style={{height:70, justifyContent: 'center',marginLeft:10,marginTop:10}}>  
              <View style={{flex:.5, justifyContent: 'center'}}>  
                <Text style={{color:'gray',fontSize:12}} >Related Post</Text>
              </View>  
              <View style={{flex:2}}>  
                <TextInput
                    style={{color:'blue', borderBottomWidth: .5,borderBottomColor:'#DCDCDC ',marginRight:10}}
                    onChangeText={text => setValue(text)}
                />              
              </View>  
            </View>  

            <View style={{flexDirection:'row',height:60,marginLeft:10,marginRight:10 ,}}>
                <View style={{flex: 1, justifyContent: 'center',}}>  
                  <Text style={{color:'gray',fontSize:12}} >Poll Question</Text>
                </View>  
                <View style={{flexDirection:'row-reverse',flex:1 ,}}>
                  <Switch  
                    value= {showSuggestions}  
                    onValueChange ={(switchValue)=>{setShowSuggestions(switchValue)}}/>  
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'gray',fontSize:12,textAlign:'right',marginRight:5}} >Suggestions</Text>
                  </View>

                </View>  
            </View>  

            <View style={{height:70, justifyContent: 'center',  }}>  
            <TextInput
                    style={{color:'blue',marginRight:10 ,width:310}}
                    onChangeText={text => setqns(text)}
                    value={qns}
                />                   
            </View>  

              <View style={{height:36,flexDirection:'row',marginLeft:10,marginRight:10,}}>  
                 <View style={{flex:1,justifyContent:'center'}}>
                  <Text style={{color:'gray',fontSize:12}} >Options</Text>
                 </View>
                   <TouchableOpacity  
                          style = {{flexDirection:'row-reverse'}}
                          onPress={() => {
                          addoptions()
                   }}
                   >  
                      <Image
                      style={{width:20,height:20}}
                      source = {require('./src/image/plus.png')}
                    />
                  </TouchableOpacity>
              </View>  
              <View style={{height:196,marginLeft:10,marginRight:10,}}>  
              <FlatList
                  data = {options}
                  renderItem = {({item}) => (

                    <View style = {{height:45,marginBottom:5,flexDirection:'row',borderColor:'grey',borderWidth:2,borderRadius:10}}>
                  <View style={{flex:1,alignContent:'center',justifyContent:'center',alignItems:'center'}}>  
                      <Image
                      style={{width:20,height:20,marginLeft:5}}
                      source = {require('./src/image/apps.png')}
                    />
                  </View>
                  <View style = {{flex:5,justifyContent:'center'}}>
                    <TextInput 
                              style = {{textAlign:'left',marginLeft:5}}
                              underlineColorAndroid = "transparent"
                              placeholderTextColor = "#9a73ef"
                              onChangeText = {text => 
                              {
                                var i;
                                for (i = 0; i < options.length; i++)
                                {
                                  if(options[i].id == item.id)
                                  break
                                }
                                var add = {'name':text,'id':item.id}
                                setoptions(
                                  [//%%
                                    ...options.slice(0, i).concat(add).concat([ ...options].slice(i+1,options.length))
                                  ]
                                  )
                                console.log(options)

//  ...options.slice(0, i).concat([ ...options].slice(i+1,options.length))

                              }
                              }
                              />                                

                  </View>
                  <TouchableOpacity style={{flex:1,alignContent:'center',justifyContent:'center',alignItems:'center'}}
                                    onPress = {
                                      ()=>{
                                        deloptions(item.id)
                                      }
                                    }
                    >
                      <Image
                      style={{width:20,height:20,marginLeft:5}}
                      source = {require('./src/image/close.png')}
                    />
                  </TouchableOpacity>
                </View>
                  )}
                />
              </View>
              <View style={{flexDirection:'row',height:60,marginLeft:10,marginRight:10 ,}}>
              <View style={{justifyContent:'center',alignItems:'center'}}>
                      <Text style={{color:'gray',fontSize:12,textAlign:'right',marginRight:5}} >Set anonymous</Text>
                    </View>

                <View style={{justifyContent: 'center',}}>  
                    <Switch
                      value = {isanonymous}
                      onValueChange = {(switchValue)=>{
                        setisanonymous(!isanonymous)
                      }}
                    />
                </View>  
                <View style={{flexDirection:'row-reverse',flex:1 ,}}>
                  <Switch  
                    value= {isTimer}  

                    onValueChange ={(switchValue)=>{console.log(switchValue)
                      if(switchValue)
                      {
                        setmodalVisibleForTimer(true);
                      }
                      else
                      {
                          settimerCount('')
                      }
                    setIsTimer(switchValue)}}/>  
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                      <Text style={{color:'gray',fontSize:12,textAlign:'right',marginRight:5}} >Timer</Text>
                    </View>
                </View>  
            </View>   
              <View style={{height:35,marginLeft:10,marginRight:10}}>  
                <Text style={{color:'blue',fontSize:18}}>Default - After Poll</Text>
              </View>

              {
                val && 
                <View style= {{}}>
                {
                  avatarSource && val &&
                      
                      <Image source = {{uri: avatarSource.uri}} style = {{width:300,height:400,borderColor:'gray',borderWidth:5,resizeMode:'contain',padding:10,marginLeft:30,}}/>
                }             

                <TouchableOpacity 
                            style = {{padding:10}}
                            onPress={()=>{
                              uploadImage() 
                            }}
                          >
                           <View style={{backgroundColor:'yellow',height:60,padding:10,justifyContent:'center',alignContent:'center'}}> 
                              <Text style={{textAlign:'center'}}> U P L O A D   A   I M A G E </Text>
                           </View>

                          </TouchableOpacity>
                </View>
              } 

              {//%
                !val && avatarSource &&
                <View style= {{}}>
                <Image source = {{uri: avatarSource.uri}} style = {{width:300,height:400,borderColor:'gray',borderWidth:5,resizeMode:'contain',padding:10,marginLeft:30,}}/>

                </View>
              } 
              
          </ScrollView>
          </View>


      );  
    }


    {/*
    
    {this.state.avatarSource && <Image source = {{uri: this.state.avatarSource.uri}} style = {{width:100,height:200,resizeMode:'contain'}}/>}
               <Button title={"Upload a image"} onPress={this.uploadImage} />
               <Button title={"Create a new post"} onPress={this.sendDate} />
              


    */}
    
function CreatePollToggleScreen({route,navigation}) 
{
      return (  
        <SafeAreaView style={{flexDirection:'column',flex:1}}>
            <View style={{flexDirection:'row',flex:1}}>
                <TouchableOpacity style={{flex: 1, justifyContent: 'center', marginLeft:20 }}
                                  onPress={() => navigation.goBack()}//!
                                  >  
                  <Image
                  style={{width:25,height:25,marginLeft:5}}
                  source = {require('./src/image/close.png')}
                />
                </TouchableOpacity>  
                <View style={{flex: 1,justifyContent:'center'}}>  
                  
                  <TouchableOpacity style={{height:45,width:100,marginLeft:57,backgroundColor:'#FF1493',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Post</Text>
                  </TouchableOpacity>
                </View>  
            </View>  
          </SafeAreaView> 
      )
} 

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


function SignupPage({navigation})
{
//    const [namesignupip,setnamesignupip] = useState('')
//    const [passwordsignupip,setpasswordsignupip] = useState('')
    const [namesignup,setnamesignup] = useState('')
    const [emailsignup,setemailsignup] = useState('')
    const [confirmpasswordsignup,setconfirmpasswordsignup] = useState('')
    const [passwordsignup,setpasswordsignup] = useState('')
    const [signuppageboolean,setsignuppageboolean] = useState(false)
    const [signinpageboolean,setsigninpageboolean] = useState(true)
    const [eyesignup,seteyesignup] = useState(true)
    const [eyesignupconfirm,seteyesignupconfirm] = useState(true)
    const [eyesignin,seteyesignin] = useState(true)
    const [usernamesignin,setusernamesignin] = useState(0)
    const [passwordsignin,setpasswordsignin] = useState(0)

    const [access_token,setaccess_token] = useState('')
    const [access_token_expiration_min,setaccess_token_expiration_min] = useState('')
    const [refresh_token,setrefresh_token] = useState('')
        
    function signupSubmit(name,password,email,{navigation})
    {
      console.log("dei",password,name,email)
      axios     
            .post('http://3.14.87.134:8080/api/signup',
            {
                    "username":name,
                    "password":password,
                    "email":email,
            }            
            )
            .then( response => {

                console.log(response)
                console.log("****************************************************************")
                console.log('acces',response.data.access_token)
                console.log('time',response.data.access_token_expiration_min)
                console.log('refresh',response.data.refresh_token) 
                console.log("****************************************************************")

                setaccess_token(response.data.access_token)
                setaccess_token_expiration_min(response.data.access_token_expiration_min)
                setrefresh_token(response.data.refresh_token)

                if(response.data.success == true)
                {
                  Alert.alert("Successfully signed in")
                  navigation.navigate('DrawerView');
                }
                else if(response.data.success == false)
                {
                  Alert.alert(response.data.message)
                }
            })
            .catch(error =>  
              {
                Alert.alert(error.response.data.message)
              }
            )
    }    
    function signinSubmit(username,password,{navigation})
    {
        console.log(username,password)
        axios     
            .post('http://3.14.87.134:8080/api/signIn',
            {
                    "username":username,
                    "password":password,
            },            
            ).then( response => {
                if(response.data.success)
                {
                  Alert.alert('Logged in successfully')
                  navigation.navigate('DrawerView');
                }
                else
                {
                  console.log('invalid user')
                  navigation.navigate('signup')
                }
            })
            .catch(error =>
              {
                Alert.alert(error.response.data.message)
              })
    } 

    return( 
            <View  style = {{flex : 1,flexDirection:'column',backgroundColor:'white'}} > 
              <View style={{marginLeft:17,marginTop:17,height:40,marginRight:17,backgroundColor:'white'}}>
                <View style={{flex:1,flexDirection:'row',}}>
                <Image
                style={{width:82,height:44,marginLeft:5}}
                source = {require('./src/image/polll.jpg')}
              />
                  <View style={{flex:1,flexDirection:'row-reverse',}}>
                    <Image
                    style={{width:20,height:20,marginRight:5,marginTop:13}}
                    source = {require('./src/image/close.png')}
                    />
                  </View>
                </View>
              </View>



              { signuppageboolean  && 
              <ScrollView>
               <View>
                <View style={{marginLeft:17,marginTop:17,height:50,marginRight:17}}>
                  <View style={{ flex:1,justifyContent:'center'}}>
                    <Text style={{fontSize:22,color:'grey'}}>Create Your Account :) </Text>
                  </View>
                </View>

              <View style={{flex : .5}}></View>
              <View>
                <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:12}}>User name</Text>
                  <TextInput style = {{  margin: 15,marginTop:0,
                        height: 44,
                              borderBottomColor:'#4B0082',
                              borderBottomWidth:2,
                              color:'#4B0082',
                            paddingBottom :10
                            }}
                            underlineColorAndroid = "transparent"
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            onChangeText = {text => setnamesignup(text)}
                            />                                
              </View>

              <View>
                <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:12}}>Mail id / Mobile number</Text>
                  <TextInput style = {{  margin: 15,marginTop:0,
                    height: 44,
                        borderBottomColor:'#4B0082',
                          borderBottomWidth:2,
                        color:'#4B0082',
                        paddingBottom :10}}
                        underlineColorAndroid = "transparent"
                        placeholderTextColor = "#9a73ef"
                        autoCapitalize = "none"
                        onChangeText = {text => setemailsignup(text)}
                        />                                         
              </View>
              <View>
                  <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:12}}>Password</Text>
                  <View 
                      style={{ borderBottomColor:'#4B0082',flexDirection:'row',
                                borderBottomWidth:2, margin: 15,marginTop:0,
                                height: 44,
                            }}>
                    <TextInput style = {{ 
                              color:'#4B0082',width:290,
                              paddingBottom :10}}//eye
                              underlineColorAndroid = "transparent"
                              autoCapitalize = "none"
                              secureTextEntry = {eyesignup}
                              onChangeText = {text => setpasswordsignup(text)}
                              /> 
                              <View style={{alignContent:'center',marginTop:14
                              }}>

                        {!eyesignup && //eyesignup
                          <TouchableOpacity 
                            onPress={()=>{
                              seteyesignup(!eyesignup) //eyesignup
                            }}
                          >
                            <Image
                              style={{width:25,height:20,marginLeft:5}}
                              source = {require('./src/image/eyeClose.jpeg')}
                            />

                          </TouchableOpacity>
                        }
                        {eyesignup && //eyesignup
                          <TouchableOpacity 
                            onPress={()=>{
                              seteyesignup(!eyesignup) //eyesignup
                            }}
                          >
                            <Image
                              style={{width:25,height:20,marginLeft:5}}
                              source = {require('./src/image/eyeOpen.jpeg')}
                            />

                          </TouchableOpacity>
                        }
                      </View>
                  </View>
              </View>

              <View>
                  <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:12}}>Confirm Password</Text>
                  <View 
                      style={{ borderBottomColor:'#4B0082',flexDirection:'row',
                                borderBottomWidth:2, margin: 15,marginTop:0,
                                height: 44,
                            }}>
                    <TextInput style = {{ 
                              color:'#4B0082',width:290,
                              paddingBottom :10}}//eye
                              underlineColorAndroid = "transparent"
                              autoCapitalize = "none"
                              secureTextEntry = {eyesignupconfirm}
                              onChangeText = {text => setconfirmpasswordsignup(text)} 
                              /> 
                              <View style={{alignContent:'center',marginTop:14
                              }}>

                        {!eyesignupconfirm && //eyesignupconfirm
                          <TouchableOpacity 
                            onPress={()=>{
                              seteyesignupconfirm(!eyesignupconfirm) //eyesignupconfirm
                            }}
                          >
                            <Image
                              style={{width:25,height:20,marginLeft:5}}
                              source = {require('./src/image/eyeClose.jpeg')}
                            />

                          </TouchableOpacity>
                        }
                        {eyesignupconfirm && //eyesignupconfirm
                          <TouchableOpacity 
                            onPress={()=>{
                              seteyesignupconfirm(!eyesignupconfirm) //eyesignupconfirm
                            }}
                          >
                            <Image
                              style={{width:25,height:20,marginLeft:5}}
                              source = {require('./src/image/eyeOpen.jpeg')}
                            />

                          </TouchableOpacity>
                        }
                      </View>
                  </View>
              </View>

              <View style = {{paddingTop:20,paddingBottom:20}}>
                <TouchableOpacity
                          style={{marginLeft:20,marginRight:20,height:50,borderRadius:5,backgroundColor:'#FF1493',alignContent:'center',justifyContent:'center'}}
                          onPress ={ ()=>{ 
                            if(namesignup == '')
                            {
                              Alert.alert('Username field can\'t be Empty')
                            }
                            else if(emailsignup == '')
                            {
                              Alert.alert('Mail id / Mobile number field can\'t be Empty')
                            }
                            else if(passwordsignup == '')
                            {
                              Alert.alert('Password field can\'t be Empty')
                            }
                            else if(confirmpasswordsignup == '')
                            {
                              Alert.alert('Confirm password field can\'t be Empty')
                            }
                            else if(passwordsignup != confirmpasswordsignup)
                            {
                              Alert.alert('check your password')
                            }
                            else
                            {
                              signupSubmit(namesignup,emailsignup,passwordsignup,{navigation})
                            }
                          }}
                      >
                  <Text style={{textAlign:'center',color:'white',fontSize:20}}>Sign up</Text>
                </TouchableOpacity>                          
                <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:9,textAlign:'center'}}>You are agreeing the terms & Conditions by click the above button</Text>

              </View>

              <TouchableOpacity style = {{paddingTop:5,paddingBottom:20,flex:1,flexDirection:'row',justifyContent:"center"}}
                          onPress ={()=>{
                                  setsigninpageboolean(!signinpageboolean)
                                  setsignuppageboolean(!signuppageboolean)
                                    }}
              >
                <View>
                  <Text>Have an account ?</Text>
                </View>
                <View>
                  <TouchableOpacity
                      >
                      <Text style={{color:'#FF1493'}}> Log in </Text>
                  </TouchableOpacity>                          
                </View>
              </TouchableOpacity>               
            </View>
          </ScrollView>


              }

              {

//  const [usernamesignin,setusernamesignin] = useState(0)
//  const [passwordsignin,setpasswordsignin] = useState(0)

}
              { signinpageboolean &&

              

                <View>
            <View style={{marginLeft:17,marginTop:17,height:50,marginRight:17}}>
                <View style={{ flex:1,justifyContent:'center'}}>
                    <Text style={{fontSize:22,color:'grey'}}> Welcome Back !</Text>
                </View>
            </View>

            <View style={{flex:.5}}>


            </View>
            <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:12}}>User name / Mail id / Mobile number</Text>
            <TextInput style = {{  margin: 15,marginTop:0,
                height: 44,
                borderBottomColor:'#4B0082',
                borderBottomWidth:2,
                color:'#4B0082',
                paddingBottom :10}}
                underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                onChangeText = {text => setusernamesignin(text)}
            />  
            <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:12}}>Password</Text>
            <View 
                    style={{ borderBottomColor:'#4B0082',flexDirection:'row',
                    borderBottomWidth:2, margin: 15,marginTop:0,
                    height: 44,
                }}>

                <TextInput style = {{ 
                    color:'#4B0082',width:290,
                    paddingBottom :10}}//eye
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    secureTextEntry = {eyesignin}
                    onChangeText = {text => setpasswordsignin(text)}
                /> 
                <View style={{alignContent:'center',marginTop:14}}>
                    {
                      !eyesignin &&
                      <TouchableOpacity 
                          onPress={()=>{
                            seteyesignin(!eyesignin)
                          }
                          }
                      > 
                    <Image
                    style={{width:25,height:20,marginLeft:5}}
                    source = {require('./src/image/eyeClose.jpeg')}
                    />
                    </TouchableOpacity>
                    }
                    {eyesignin &&
                    <TouchableOpacity 
                    onPress={()=>{
                      seteyesignin(!eyesignin)
                    }}
                    >
                    <Image
                    style={{width:25,height:20,marginLeft:5}}
                    source = {require('./src/image/eyeOpen.jpeg')}
                    />
                    </TouchableOpacity>
                    }
                </View>
            </View> 

            <View style={{alignContent:'center',justifyContent:'center',marginBottom:18,marginLeft:17}}>
                <TouchableOpacity >
                    <Text style={{color:'#4B0082',fontSize:13}}>forget password?</Text>
                </TouchableOpacity>
            </View> 
            <TouchableOpacity
                style={{marginLeft:17,marginRight:17,height:50,borderRadius:5,backgroundColor:'#FF1493',alignContent:'center',justifyContent:'center'}}
                onPress ={ ()=>{
                signinSubmit(usernamesignin,passwordsignin,{navigation})
                }}
                >
                <Text style={{textAlign:'center',color:'white',fontSize:20}}>Log in</Text>
            </TouchableOpacity>                          
            <TouchableOpacity style = {{paddingTop:20,paddingBottom:20,flex:1,flexDirection:'row',justifyContent:"center"}}
                    onPress ={()=>{
                                  setsigninpageboolean(!signinpageboolean)
                                  setsignuppageboolean(!signuppageboolean)
                                    }}>
                <View><Text style={{color:'#4B0082',fontSize:13}}>Dont't have a account ? </Text></View>

                <View
                >
                <Text style={{color:'#FF1493',paddingLeft:20}}> Sign up </Text>
                </View>                          
            </TouchableOpacity>
        </View>  
              }
          </View>  
        );
    }


    {
      /*
      
      
      
      */
    }

    
    
    
    function NotificationsScreen_forSingleImage()
    {
      var list = []

      const [avatarSource,setavatarSource] = useState([])

      function tryImage()
      {
        axios.get('http://192.168.1.5:5000/api/polls/getPollDetails/subcategory')
             .then( response => {
               const data = response.data
               if(data)
               {
                 console.log("entered condition")
                 setavatarSource([data.data])
                 console.log("written into list ")
               }
               else
               {
                 console.log("downloaded successfully....")
               }
            })
            .catch(error =>
              {
                console.log("i am in error page")
                console.log(error)
              })
      }
  
      return(
        <View
                  style  = {styles.checker}
        >


        <TouchableOpacity
          onPress = {()=>{
            console.log("prior")
            tryImage()
            //        <Image source = {{uri: 'data:image/jpeg;base64, ' + avatarSource}} style = {{width:300,height:400,borderColor:'gray',marginTop:10,borderWidth:5,resizeMode:'contain',padding:10,marginLeft:30,}}/>

          }}//%%
        >

                  <Text style = {{textAlign:'center',marginTop:30}}>Get Images</Text>

        </TouchableOpacity>

        <ScrollView>
          {
            avatarSource.map(item =>(
              <Image source = {{uri: 'data:image/jpeg;base64, ' + item}} style = {{width:300,height:400,borderColor:'gray',marginTop:10,borderWidth:5,resizeMode:'contain',padding:10,marginLeft:30,}}/>

            ))
          }
          </ScrollView>






        </View>


      );
    }



     
    
//custom



  function NotificationsScreen() {
        //doing
    const [avatarSource,setavatarSource] = useState([])   
    const list = []   
    function addons(data)
    {
      setavatarSource(
        [data, ...avatarSource]
      )
    }
    function tryImage()
      {var m = 0
       console.log("attempted!",1)
       const socket = io("http://192.168.1.100:5000")//doing
       socket.emit('hellow',()=>{
          console.log("worked")
        });      
        socket.on('after connect', function(msg) 
        {
          console.log(msg.data)
          setavatarSource(
            [...avatarSource,msg.data]
          )
          console.log(m,avatarSource);
          m+=1;
        }
        );
    }




      
        return(
          <View
            style  = {styles.checker}
          >
            <TouchableOpacity
              onPress = {()=>{
                tryImage()
              }}
            >
                <Text style = {{textAlign:'center',marginTop:30}}>Get Images</Text>
            </TouchableOpacity>
  
          {false&&<ScrollView>
            {
              avatarSource.map(item =>(
                <Image source = {{uri: 'data:image/jpeg;base64, ' + item}} style = {{width:300,height:400,borderColor:'gray',marginTop:10,borderWidth:5,resizeMode:'contain',padding:10,marginLeft:30,}}/>               
                ))
            }
            </ScrollView> }
          </View>
        );
      }

    



    class NotificationsScreenbefore extends Component {
      constructor () {
        super();
        this.state = {
          counter: []
        };
      }
      tryImage()
      {
        axios.get('http://192.168.1.5:5000/api/polls/getPollDetails/subcategory')
             .then( response => {
               const data = response.data
               if(data.valid != 20)
               {
                 console.log("entered condition")
                 this.addTo(data.data)
                 console.log("written into list ")
                 this.tryImage()
               }
               else
               {
                 console.log("downloaded successfully....")
               }
            })
            .catch(error =>
              {
                console.log("i am in error page")
                console.log(error)
              })
      }
      addTo (data) {
        this.setState({
          counter: [...this.state.counter,data] 
        });
      }
      render () {
        return(
            <View style={styles.container}>
      
            <FlatList
              keyExtractor = {(item) => item.id}
              data = {initialParams}
              renderItem = {({item}) => (
                <View style = {styles.card} >          
                  <View style={{flex:1}}>
                  <View style= {{flex:1,alignContent:'center',justifyContent:'center'}}>
                  <Text style = {styles.text} >{item.question}</Text>
                    <CustomRadioButtonListView options = {peoplenews.options} navigation = {navigation} item = {peoplenews}/>
                  </View>
                  </View>
                </View>
              )}
            />
          </View>
            );
        }
    }



    class NotificationsScreen_forImageOneAfterOther extends Component {
      constructor () {
        super();
        this.state = {
          counter: []
        };
      }
      tryImage()
      {
        axios.get('http://192.168.1.5:5000/api/polls/getPollDetails/subcategory')
             .then( response => {
               const data = response.data
               if(data.valid != 20)
               {
                 console.log("entered condition")
                 this.addTo(data.data)
                 console.log("written into list ")
                 this.tryImage()
               }
               else
               {
                 console.log("downloaded successfully....")
               }
            })
            .catch(error =>
              {
                console.log("i am in error page")
                console.log(error)
              })
      }
      addTo (data) {
        this.setState({//doing2
          counter: [...this.state.counter,data]
        });
      }
      render () {
        return(
          <View
            style  = {styles.checker}
          >
            <TouchableOpacity
              onPress = {()=>{
                this.tryImage()
                console.log("prior")
              }}
            >
                <Text style = {{textAlign:'center',marginTop:30}}>Get Images</Text>
            </TouchableOpacity>
  
          <ScrollView>
            {
              this.state.counter.map(item =>(
                <Image source = {{uri: 'data:image/jpeg;base64, ' + item}} style = {{width:300,height:400,borderColor:'gray',marginTop:10,borderWidth:5,resizeMode:'contain',padding:10,marginLeft:30,}}/>               
                ))
            }
            </ScrollView>
          </View>
        );
        }
    }



    

    class NotificationsScreen_workedWithManyNumbersCorrectly_true extends Component {
      constructor () {
        super();
        this.state = {
          counter: []
        };
      }
      tryImage()
      {
        axios.get('http://192.168.1.5:5000/api/polls/getPollDetails/subcategory')
             .then( response => {
               const data = response.data
               if(data.data != 2)
               {
                 console.log("entered condition")
                 console.log(data.data)
                 this.addTo(data.data)
                 console.log("written into list ")
                 this.tryImage()
               }
               else
               {
                 console.log("downloaded successfully....")
               }
            })
            .catch(error =>
              {
                console.log("i am in error page")
                console.log(error)
              })
      }
      addTo (data) {
        this.setState({
          counter: [...this.state.counter,data]
        });
      }
      render () {
        return(
          <View
            style  = {styles.checker}
          >
            <TouchableOpacity
              onPress = {()=>{
                this.tryImage()
                console.log("prior")
              }}
            >
                <Text style = {{textAlign:'center',marginTop:30}}>Get Images</Text>
            </TouchableOpacity>
  
          <ScrollView>
            {
              this.state.counter.map(item =>(
                
                <View><Text>{item}</Text></View>))
            }
            </ScrollView>
          </View>
        );
        }
    }
    function NotificationsScreen_func()
    {//doing
      var list = []

      const [avatarSource,setavatarSource] = useState([1,2,3])
      function addTo(data) {
        console.log("i am writting..")
          setavatarSource(
            [...avatarSource,data]
          )
      }
      function tryImage()
      {
        axios.get('http://192.168.1.5:5000/api/polls/getPollDetails/subcategory')
             .then( response => {
               const data = response.data
               if(data.data != 2)
               {
                 console.log("entered condition")
                 console.log(data.data)
                 addTo(data.data)
                 console.log("written into list ")
               }
               else
               {
                 console.log("downloaded successfully....")
               }
            })
            .catch(error =>
              {
                console.log("i am in error page")
                console.log(error)
              })
      }
      return(
        <View
          style  = {styles.checker}
        >
          <TouchableOpacity
            onPress = {()=>{
              tryImage()
              console.log("prior")
            }}
          >
              <Text style = {{textAlign:'center',marginTop:30}}>Get Images</Text>
          </TouchableOpacity>

        <ScrollView>
          {
            avatarSource.map(item =>(
              <View><Text>{item}</Text></View>))
          }
          </ScrollView>
        </View>
      );
    }

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
//----------------------------------------------------------- ---------------------------------------------------

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "DrawerView">
        <Stack.Screen name="DrawerView" component={DrawerNavigation} options ={navOptionHandler}/>
        <Stack.Screen name="signup" component={SignupPage} options ={navOptionHandler}/>
        <Stack.Screen name="TestForTemporary" component={CustomRadioButton} options ={navOptionHandler}/>

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

function CreatePollStack(){//12
  return  (
    <Stack.Navigator >
      <Stack.Screen name="CreatePolls" component={CreatePollScreen} options ={navOptionHandler}/>
      <Stack.Screen name="CreatePollToggle" component={CreatePollToggleScreen} options ={navOptionHandler}/>
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