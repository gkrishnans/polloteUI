//--------------------------------------------------------------------------------------------------------------

//packages collections
//--------------------------------------------------------------------------------------------------------------

import { Text,TextInput, View ,SafeAreaView ,StyleSheet ,Image ,Button ,Pressable,Modal,ScrollView ,TouchableOpacity ,Switch,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FlatList } from 'react-native';
import React,{useState,useContext, useReducer ,createContext,Component } from 'react'  
import 'react-native-gesture-handler';

import RadioForm, {
  RadioButton,RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button'


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
  {question:'which app is the best for dream 11 prediction1',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction2',key:1,id:'2',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction3',key:1,id:'3',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},

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

const politicspeoplenews = [
  {question:'politics 1',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 2',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 3',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},

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
  {question:'corona 1',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 2',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 3',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},

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
  


  */
}
function CustomTopTabContent({navigation,initialParams})
{
  return (
  <ScrollView horizontal={true} style= {{maxHeight:35}}>
    { 
      initialParams.map(item =>
      (
        <TouchableOpacity style ={{flex:1.5,justifyContent:'center',paddingRight:14,paddingLeft:2}} onPress = {() => navigation.navigate('HomeDetail',{'item':item})}>
          <View>
          <Text style = {{textAlign:'center'}}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )) 
    }
  </ScrollView>
  )
}

//2

function CustomDrawerContent(props) {
  return(
    <SafeAreaView style={{flex :1}}>
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
    </SafeAreaView>
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

function CustomViewForPoll({navigation,initialParams})
{
  const [votevalue,setvotevalue] = useState(-1)
  return(
    <View style={styles.container}>
      <FlatList
        keyExtractor = {(item) => item.id}
        data = {initialParams}
        renderItem = {({item}) => (
          <View style = {styles.card} >          
            <View style={{flex:1}}>
              <Text style = {styles.text} >{item.question}</Text>
              <Text></Text>
              <View style={{}}>
                <RadioForm
                  buttonColor ={'black'}
                  buttonSize = {25}
                  buttonOuterSize = {26}
                  radio_props={item.options}
                  onPress = {(value) =>{
                    setvotevalue(value)//2
                  }}
                  //style ={{flex:1.5,justifyContent:'center',paddingRight:14,paddingLeft:2}}
                  initial = {-1}
                />
              </View>  
              <View style = {{flexDirection:'row',height : 45,marginTop:5}}>
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
                          onPress = {() => {//12
                          navigation.navigate('SelectedToVote',{'item':item, 'value':votevalue})}}
                          >
                  <Text >More</Text>
                  <Image
                    style={{width:20,height:20,padding:3}}
                    source = {require('./src/image/arrow-point-to-right.png')}        
                  />
                </TouchableOpacity>
              </View>            
            </View>
          </View>
        )}
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
    <SafeAreaView style={{flex:1},styles.container}>
      
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
    </SafeAreaView>
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
          onPress={() => props.navigation.navigate('Explore')}        
        >
          <Text style = {{textAlign:'center',fontSize:11}}>Explore</Text>
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
function NotificationsScreen({ navigation }) {
  const [option1,setoption1] = useState(0)
  const [state,dispatch] = useReducer(states,reduce)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Text>{option1}</Text>
      <Button onPress={() => dispatch('increment')} title="increment" />
      <Button onPress={() => dispatch('decrement')} title="drecrement" />
      <Text>{state.count}</Text>

      <TextInput
      style={{ height: 39,width:100, borderColor: 'gray' }}
      onChangeText={text => setoption1(text)}
      placeholder="option1 "
      value={option1}
    />

    </View>
  );
}
class ExploreScreen extends Component {  
  state = {  
      switchValue: null  
  };  
  render() {  
      return (  
          <View style={{flex: 1,  
            alignItems: 'center',  
            justifyContent: 'center',  }}>  
              <Text style={styles.textStyle}>Switch Example</Text>  
              <Text style={styles.textStyle}>{this.state.switchValue ? 'on' :'off'}</Text>  
              <Switch  
                  value={this.state.switchValue}  
                  onValueChange ={(switchValue)=>{this.setState({switchValue})
                  console.log(this.state.switchValue)}}/>  
          </View>  
      );  
  }  
}  


//          <CustomView  navigation = {navigation} initialParams = {route.params.view} />
//*

function HomeScreen({route,navigation}) {
  return (
      <SafeAreaView style={{flex:1}}>
          <Customheader title = "Home" isHome = {true} navigation = {navigation} category = {route.params.view}/>
          <CustomTopTabContent  navigation = {navigation} initialParams = {route.params.tab}/>
          <CustomView  navigation = {navigation} initialParams = {route.params.view} />
     </SafeAreaView>
  );
}

function PollScreen({route,navigation}) {
  return (
      <SafeAreaView style={{flex:1}}>
          <Customheader title = "Poll" isHome = {true} navigation = {navigation} category = {route.params.view}/>
          <CustomTopTabContent  navigation = {navigation} initialParams = {route.params.tab}/>
          <CustomViewForPoll  navigation = {navigation} initialParams = {route.params.view} />
      </SafeAreaView>
  );
}
//      <Text>{route.params.item.question}</Text>
//<Text>{route.params.value}</Text>



{
  /*
  (
    <View style = {{flex:1,marginTop:10,marginRight:20,justifyContext:'center',marginBottom:10}}>
      <View style={{flex:.5,height:150,flexDirection:'row',paddingLeft:10,paddingTop:10,height:200}}>
        <Image
          style={{width:100,height:100,marginLeft:5}}
          source = {require('./src/image/admk.jpg')}        
        />
        <Text style={{width:240,fontSize:17,height:50,marginLeft:10,marginRight:20}}>{route.params.item.question}</Text>
      </View>
      <View horizontal = {true} style={{flex:2.5,paddingLeft:10,paddingTop:10,height:150}}>
        <View style={{flex:.7,flexDirection:'row'}}>
          <RadioForm

          
          Color ={'black'}
            buttonSize = {25}
            buttonOuterSize = {26}
            style={{borderColor:'black',borderWidth:1,width:329}}
            radio_props={route.params.item.options}
            onPress = {(value) =>{
              setvotevalue(value)//2
            }}//vote
            //style ={{flex:1.5,justifyContent:'center',paddingRight:14,paddingLeft:2}}
            initial = {-1}
          />
        </View> 
        <TouchableOpacity style={{backgroundColor:'pink',flex:.25,borderRadius:10,paddingBottom:1,alignItem:'center',justifyContent:'center'}}
                  onPress = {()=> {
                    setvote(null)
                    setcomments(true)
                  }}>  
            <Text>vote</Text>
          </TouchableOpacity>
        </View>    
        <View style={{width:329,height:50,flex:1,backgroundColor:'red'}}></View>  

    
    </View>
  )
  
  */
}

function VoteScreen({route,navigation})
{
  const isPollContextContext = useContext(isPollContext)
  const [vote,setvote] = useState(true)
  return(
    <SafeAreaView style={{flex:1,alignItem:'center',justifyContent:'center',backgroundColor:'white'}}>
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

       {vote && <View style={{flex:1.5,alignItem:'center',justifyContent:'center',backgroundColor:'white',marginBottom:5,marginTop:6,marginLeft:10,marginRight:10}}>
            <View style={{flex:1,paddingLeft:10,paddingRight:10,paddingTop:10,backgroundColor:'white',marginBottom:5}}>
                <RadioForm
                buttonColor ={'black'}
                buttonSize = {25}
                buttonOuterSize = {26}
                style={{width:319}}
                radio_props={route.params.item.options}
                onPress = {(value) =>{
                  setvotevalue(value)//2
                }}//vote
                //style ={{flex:1.5,justifyContent:'center',paddingRight:14,paddingLeft:2}}
                initial = {-1}
              />
            </View>
              <Button
              title="Learn More"
              color="#FF1493"
              onPress={()=>{ setvote(false)
              }}
              />            
        </View>}
        {!vote && <View style={{flex:1.5,alignItem:'center',justifyContent:'center',backgroundColor:'white',marginBottom:5,marginTop:6,marginLeft:10,marginRight:10}}>
            <View style={{flex:1,paddingLeft:10,paddingRight:10,paddingTop:10,backgroundColor:'white',marginBottom:5}}>
            {
              //starts here
            }
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:40,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/radio-on-button.png')}        
                          />
                        <Text style={{paddingLeft:8}}>{route.params.item.options[0].label}</Text>

                      </View>
                  </View>
                  <View style = {{backgroundColor:'green',height:5,width:50,borderRadius:5,}}>
                  </View>
                </View>
            {
              //ends here
            }
            {
              //starts here
            }
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:40,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/radio-on-button.png')}        
                          />
                        <Text style={{paddingLeft:8}}>{route.params.item.options[1].label}</Text>

                      </View>
                  </View>
                  <View style = {{backgroundColor:'orange',height:5,width:300,borderRadius:5,}}>
                  </View>
                </View>
            {
              //ends here
            }

            {
              //starts here
            }
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:40,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/radio-on-button.png')}        
                          />
                        <Text style={{paddingLeft:8}}>{route.params.item.options[2].label}</Text>

                      </View>
                  </View>
                  <View style = {{backgroundColor:'#4B0082',height:5,width:200,borderRadius:5,}}>
                  </View>
                </View>
            {
              //ends here
            }

            {
              //starts here
            }
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:40,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/radio-on-button.png')}        
                          />
                        <Text style={{paddingLeft:8}}>{route.params.item.options[3].label}</Text>

                      </View>
                  </View>
                  <View style = {{backgroundColor:'red',height:5,width:250,borderRadius:5,}}>
                  </View>
                </View>
            {
              //ends here
            }


            </View>
        </View>}
        {vote && <View style={{flex:2,backgroundColor:'white',marginBottom:5,marginTop:6,marginLeft:10,marginRight:10}}>

        </View>
        }
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
    </SafeAreaView>
  )
}

//fun


//1
function ViewScreen({ route,navigation }) {
  console.log("hloo")
  console.log("bye")
  return (
    <SafeAreaView style={{flex:1}}>
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

              navigation.navigate('CreateScreen',{
                                                    screen : 'CreatePolls', //12
                                                    params :{
                                                      istab: false,
                                                      category: route.params.item.category, 
                                                      subcategory : route.params.item.subcategory
                                                      }
                                                  })
            }}
            >
          <Text style = {{textAlign:'center',color: "red"}}>Create poll</Text>
        </TouchableOpacity>
        </View>
  </SafeAreaView>
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

function CreatePollScreen({route,navigation}) 
{
//  navigation.navigate('CreateScreen',{"subCategory": route.params.item.subCategory,"Category":route.params.item.Category})

      const [modalVisible, setModalVisible] = useState(false);
      const [isTab,setisTab] = useState(0) 
      const [resultSetting,setresultSetting] = useState(0)
      const [value,setValue] = useState(0)
      const [category,setcategory] = useState('')
      const [subcategory,setSubCategory] = useState(0)
      const [isTimer,setIsTimer] = useState(0)
      const [showSuggestions,setShowSuggestions] = useState(0)     

      //setisTab(route.params.isTab)
      

      const categoryListItem = ['Politics','Sports','Educaton','International','National','Local News','Corona','Spiritual']
      const val = route.params.isTab
      const cat = route.params.category
      const subcat = route.params.subcategory
      return (  
        <SafeAreaView style={{flexDirection:'column',flex:1}}>

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

            <View style={{flexDirection:'row',flex:1}}>
                <TouchableOpacity style={{flex: 1, justifyContent: 'center', marginLeft:20 }}
                                  onPress={() => navigation.goBack()}
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
            <View style={{flex: 1, justifyContent: 'center',marginLeft:23}}>  
              <Text style={{color:'gray',fontSize:17}}>Create a Poll</Text>
            </View>  


            <View style={{flex: 1, justifyContent: 'center',marginLeft:23}}>  
              <TouchableOpacity style={{flex:.5, justifyContent: 'center'}} onPress={() => setModalVisible(true)}>  
                <Text style={{color:'gray',fontSize:12}}>Category </Text>
              </TouchableOpacity>  
              <View style={{flex:2,marginRight:23}}>  
                <TextInput
                    style={{color:'#4B0082', borderBottomWidth: .5,borderBottomColor:'#DCDCDC  ',}}
                    onChangeText={text => setValue(text)}
                    value = {cat + ' '+ subcat + category}
                />              
              </View>  
            </View>  


            <View style={{flex: 1, justifyContent: 'center',marginLeft:23,marginTop:10}}>  
              <View style={{flex:.5, justifyContent: 'center'}}>  
                <Text style={{color:'gray',fontSize:12}} >Related Post</Text>
              </View>  
              <View style={{flex:2,marginRight:23}}>  
                <TextInput
                    style={{color:'#4B0082', borderBottomWidth: .5,borderBottomColor:'#DCDCDC ',}}
                    onChangeText={text => setValue(text)}
                />              
              </View>  
            </View>  

            <View style={{flexDirection:'row',flex:1}}>
                <View style={{flex: 1, justifyContent: 'center',marginLeft:23,}}>  
                  <Text style={{color:'gray',fontSize:12}} >Poll Question</Text>
                </View>  
                <View style={{flexDirection:'row',flex:1,marginRight:7}}>
                  <View style={{flex: 1, justifyContent: 'center',marginLeft:23,}}>  
                      <Text style={{color:'gray',fontSize:12}} >Suggestions</Text>
                  </View>  
                  

                  <Switch  
                    value= {showSuggestions}  
                    onValueChange ={(switchValue)=>{setshowSuggestions(switchValue)}}/>  
                </View>  
            </View>  

            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center',  }}>  
              <Text>Type here...</Text>
            </View>  

            <View style={{flex: 5,justifyContent: 'center',  }}>  
              <View style={{flex:1,flexDirection:'row',marginLeft:23,}}>  
                 <View style={{flex:1,justifyContent:'center'}}>
                  <Text style={{color:'gray',fontSize:12}} >Options</Text>
                 </View>
                 <View style={{flex:1,justifyContent:'center', marginLeft:220}}>
                   <TouchableOpacity  onPress={() => navigation.goBack()}>  
                      <Image
                      style={{width:20,height:20,marginLeft:5}}
                      source = {require('./src/image/plus.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>  
              <View style={{flex:2, marginLeft:23,justifyContent:'center',alignContent:'center'}}>  
                <View style={{flex:1,marginLeft:20}}>
                  <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>

                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Image
                      style={{width:16,height:16,marginLeft:5}}
                      source = {require('./src/image/apps.png')}
                      />                 
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Text>option1</Text>
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <TouchableOpacity 
                          onPress={() => navigation.goBack()}
                          >  
                        <Image
                        style={{width:16,height:16,marginLeft:15}}
                        source = {require('./src/image/close.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>

                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Image
                      style={{width:16,height:16,marginLeft:5}}
                      source = {require('./src/image/apps.png')}
                      />                 
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Text>option2</Text>
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <TouchableOpacity 
                          onPress={() => navigation.goBack()}
                          >  
                        <Image
                        style={{width:16,height:16,marginLeft:15}}
                        source = {require('./src/image/close.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>

                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Image
                      style={{width:16,height:16,marginLeft:5}}
                      source = {require('./src/image/apps.png')}
                      />                 
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Text>option3</Text>
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <TouchableOpacity 
                          onPress={() => navigation.goBack()}
                          >  
                        <Image
                        style={{width:16,height:16,marginLeft:15}}
                        source = {require('./src/image/close.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>

                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Image
                      style={{width:16,height:16,marginLeft:5}}
                      source = {require('./src/image/apps.png')}
                      />                 
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Text>option4</Text>
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <TouchableOpacity 
                          onPress={() => navigation.goBack()}
                          >  
                        <Image
                        style={{width:16,height:16,marginLeft:15}}
                        source = {require('./src/image/close.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>                                                    
                </View>
              </View>  
           </View>  




            <View style={{flex: 2.5, justifyContent: 'center',  }}>  
              <View style={{flexDirection:'row',flex:1}}>
                <View style={{flex: 1, justifyContent: 'center',marginLeft:23,}}>  
                  <Text style={{color:'gray',fontSize:12}} >Poll Question</Text>
                </View>  
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',  }}>  
                <View style={{flexDirection:'row',flex:1,marginRight:7}}>
                  <View style={{flex: 1, justifyContent: 'center',marginLeft:23,}}>  
                      <Text style={{color:'gray',fontSize:12}} >Timer</Text>
                  </View>  
                  <Switch  
                    value={isTimer}  
                    onValueChange ={(switchValue)=>{console.log(switchValue)
                    setIsTimer(switchValue)}}/>  
                </View>  
                </View>  
              </View> 
              <View style={{flex:2,marginLeft:23,}}>  
                <Text style={{color:'#4B0082',fontSize:18}}>Default - After Poll</Text>
              </View>  
             </View>  
          </SafeAreaView>
      );  
    }

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

  




//--------------------------------------------------------------------------------------------------------------
//style collections
//--------------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
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
          view:people
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
          view:politicspeople
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
          view:coronapeople
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
        <Drawer.Screen name="SelectedToVote" component={VoteScreen}/>
        <Drawer.Screen name="CreateScreen" component={CreatePollStack}/>
        <Drawer.Screen name="CricketNews" component={TabNavigation} initialParams = {{screen:'HomeTab',params:{screen:'polls',params:{tab:cricket,view:peoplenews}}}}/>
        <Drawer.Screen name="PoliticsNews" component={TabNavigation} initialParams = {{screen:'HomeTab',params:{screen:'polls',params:{tab:politices,view:politicspeoplenews}}}}/>
        <Drawer.Screen name="CoronaNews" component={TabNavigation} initialParams = {{screen:'HomeTab',params:{screen:'polls',params:{tab:corona,view:coronapeoplenews}}}} />    
      </Drawer.Navigator>
      </isPollContext.Provider>
  )
}

//      <Drawer.Screen name="CreateScreen" component={CreatePollStack} initialParams = {{screen : 'CreatePolls', params :{istab: true}}}/> worked

function TabNavigation()
{
  return(
      <Tab.Navigator initialRouteName="Profile" tabBar={props => <CustomBottomTabContent {...props} />}>
        <Tab.Screen name="Profile" component={ProfileStack} />      
        <Tab.Screen name="HomeTab" component={HomeStack} />
        <Tab.Screen name="Explore" component={ExploreStack} />
        <Tab.Screen name="CreatePoll" component={CreatePollStack} />
        <Tab.Screen name="Notification" component={NotificationStack} />
      </Tab.Navigator>
  )
}

function HomeStack({naivgation}){ 
  return (
    <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name="Home" component={HomeScreen} options ={navOptionHandler}/>
      <Stack.Screen name="polls" component={PollScreen} options ={navOptionHandler}/>

    </Stack.Navigator>
  )
}

function ExploreStack(){ 
  return (
    <Stack.Navigator initialRouteName = "Explore">
      <Stack.Screen name="Explore" component={ExploreScreen} options ={navOptionHandler}/>
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
//--------------------------------------------------------------------------------------------------------------

//packages collections
//--------------------------------------------------------------------------------------------------------------

import { Text,TextInput, View ,SafeAreaView ,VirtualizedList,StyleSheet ,Image ,Button ,Pressable,Modal,ScrollView ,TouchableOpacity ,TouchableWithoutFeedback,Switch,Alert} from 'react-native';
import { NavigationContainer,CommonActions, StackRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FlatList } from 'react-native';
import React,{useState,useContext, useReducer ,createContext,Component } from 'react'  
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RadioForm, {
  RadioButton,RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button'
import { Touchable } from 'react-native';

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
  {question:'which app is the best for dream 11 prediction1',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction2',key:1,id:'2',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction3',key:1,id:'3',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction1',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction2',key:1,id:'2',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction3',key:1,id:'3',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction1',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction2',key:1,id:'2',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction3',key:1,id:'3',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction1',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction2',key:1,id:'2',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction3',key:1,id:'3',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},

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

const politicspeoplenews = [
  {question:'politics 1',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'politics 1'},{value:'b',label:'politics 11'},{value:'c',label:'politics 111'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 2',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 3',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 1',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'politics 1'},{value:'b',label:'politics 11'},{value:'c',label:'politics 111'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 2',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 3',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 1',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'politics 1'},{value:'b',label:'politics 11'},{value:'c',label:'politics 111'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 2',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 3',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 1',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'politics 1'},{value:'b',label:'politics 11'},{value:'c',label:'politics 111'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 2',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 3',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 1',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'politics 1'},{value:'b',label:'politics 11'},{value:'c',label:'politics 111'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 2',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'politics 3',key:1,id:'1',category:'politics',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},

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
  {question:'corona 1',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 2',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 3',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 1',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 2',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 3',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 1',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 2',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 3',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 1',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 2',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 3',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 1',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 2',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 3',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 1',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 2',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'corona 3',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},

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

function CustomViewForPoll({navigation,initialParams})
{
  console.log(initialParams)
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
            <CustomRadioButton option1 = {'sfa'} option2 = {'sfafd'} option3 = {'asfdaf'} option4 = {'sadfasfsa'}/>

            </View>
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
                            navigation.navigate('SelectedToVote',{'item':item})}}
                          >
                  <Text >More</Text>
                  <Image
                    style={{width:20,height:20,padding:3}}
                    source = {require('./src/image/arrow-point-to-right.png')}        
                  />
                </TouchableOpacity>
              </View>            
            </View>
          </View>
        )}
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

      <View style = {{flexDirection:'row',padding:5,height:50, alignContent:'center',justifyContent:'center',borderWidth:1,borderRadius:5,borderColor:'orange',marginBottom:5}}>{/*container for radio button and text*/}
        <View style={{alignContent:'center',justifyContent:'center' ,flex:.1}}>
          <TouchableOpacity style={{height:27,width:27,borderRadius:27,borderColor:'blue',borderWidth:3,justifyContent:'center',alignContent:'center'}}
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
              <View style={{height:13,width:13,borderRadius:13,backgroundColor:'blue',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
              </View>
            }
          </TouchableOpacity>
        </View>

        <View style={{flex:.8,padding:10,}}>{/*text area*/}
            <Text style={{marginLeft:5}}>{option1}</Text>

        </View>                                      
      </View>
 


      <View style = {{flexDirection:'row',padding:5,height:50, alignContent:'center',justifyContent:'center',borderWidth:1,borderRadius:5,borderColor:'orange',marginBottom:5}}>{/*container for radio button and text*/}
        <View style={{alignContent:'center',justifyContent:'center' ,flex:.1}}>
          <TouchableOpacity style={{height:27,width:27,borderRadius:27,borderColor:'blue',borderWidth:3,justifyContent:'center',alignContent:'center'}}
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
              <View style={{height:13,width:13,borderRadius:13,backgroundColor:'blue',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
              </View>
            }
          </TouchableOpacity>
        </View>

        <View style={{flex:.8,padding:10,}}>{/*text area*/}
            <Text style={{marginLeft:5}}>{option2}</Text>

        </View>                                      
      </View>



      <View style = {{flexDirection:'row',padding:5,height:50, alignContent:'center',justifyContent:'center',borderWidth:1,borderRadius:5,borderColor:'orange',marginBottom:5}}>{/*container for radio button and text*/}
        <View style={{alignContent:'center',justifyContent:'center' ,flex:.1}}>
          <TouchableOpacity style={{height:27,width:27,borderRadius:27,borderColor:'blue',borderWidth:3,justifyContent:'center',alignContent:'center'}}
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
              <View style={{height:13,width:13,borderRadius:13,backgroundColor:'blue',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
              </View>
            }
          </TouchableOpacity>
        </View>

        <View style={{flex:.8,padding:10,}}>{/*text area*/}
            <Text style={{marginLeft:5}}>{option3}</Text>

        </View>                                      
      </View>



      <View style = {{flexDirection:'row',padding:5,height:50, alignContent:'center',justifyContent:'center',borderWidth:1,borderRadius:5,borderColor:'orange',marginBottom:5}}>{/*container for radio button and text*/}
        <View style={{alignContent:'center',justifyContent:'center' ,flex:.1}}>
          <TouchableOpacity style={{height:27,width:27,borderRadius:27,borderColor:'blue',borderWidth:3,justifyContent:'center',alignContent:'center'}}
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
              <View style={{height:13,width:13,borderRadius:13,backgroundColor:'blue',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
              </View>
            }
          </TouchableOpacity>
        </View>

        <View style={{flex:.8,padding:10,}}>{/*text area*/}
            <Text style={{marginLeft:5}}>{option4}</Text>

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
  const isPollContextContext = useContext(isPollContext)
  const [vote,setvote] = useState(true)
  console.log("hii you have entered stalin")
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

       {vote && <View style={{flex:2.5,alignItem:'center',justifyContent:'center',backgroundColor:'white',marginBottom:5,marginTop:6,marginLeft:10,marginRight:10}}>
            <View style={{flex:1,paddingLeft:10,paddingRight:10,paddingTop:10,backgroundColor:'white',marginBottom:5}}>

            <CustomRadioButton option1 = {'sfa'} option2 = {'sfafd'} option3 = {'asfdaf'} option4 = {'sadfasfsa'}/>

            </View>
              <Button
              title="Learn More"
              color="#FF1493"
              onPress={()=>{ setvote(false)
              }}
              />            
        </View>}
        {!vote && <View style={{flex:1.5,alignItem:'center',justifyContent:'center',backgroundColor:'white',marginBottom:5,marginTop:6,marginLeft:10,marginRight:10}}>
            <View style={{flex:1,paddingLeft:10,paddingRight:10,paddingTop:10,backgroundColor:'white',marginBottom:5}}>
            {
              //starts here
            }
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:40,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/radio-on-button.png')}        
                          />
                        <Text style={{paddingLeft:8}}>{route.params.item.options[0].label}</Text>

                      </View>
                  </View>
                  <View style = {{backgroundColor:'green',height:5,width:50,borderRadius:5,}}>
                  </View>
                </View>
            {
              //ends here
            }
            {
              //starts here
            }
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:40,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/radio-on-button.png')}        
                          />
                        <Text style={{paddingLeft:8}}>{route.params.item.options[1].label}</Text>

                      </View>
                  </View>
                  <View style = {{backgroundColor:'orange',height:5,width:300,borderRadius:5,}}>
                  </View>
                </View>
            {
              //ends here
            }

            {
              //starts here
            }
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:40,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/radio-on-button.png')}        
                          />
                        <Text style={{paddingLeft:8}}>{route.params.item.options[2].label}</Text>

                      </View>
                  </View>
                  <View style = {{backgroundColor:'#4B0082',height:5,width:200,borderRadius:5,}}>
                  </View>
                </View>
            {
              //ends here
            }

            {
              //starts here
            }
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:40,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/radio-on-button.png')}        
                          />
                        <Text style={{paddingLeft:8}}>{route.params.item.options[3].label}</Text>

                      </View>
                  </View>
                  <View style = {{backgroundColor:'red',height:5,width:250,borderRadius:5,}}>
                  </View>
                </View>
            {
              //ends here
            }


            </View>
        </View>}
        {vote && <View style={{flex:2,backgroundColor:'white',marginBottom:5,marginTop:6,marginLeft:10,marginRight:10}}>

        </View>
        }
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

              navigation.navigate('CreateScreen',{
                                                    screen : 'CreatePolls', //12
                                                    params :{
                                                      istab: false,
                                                      category: route.params.item.category, 
                                                      subcategory : route.params.item.subcategory
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

function CreatePollScreen({route,navigation}) 
{
//  navigation.navigate('CreateScreen',{"subCategory": route.params.item.subCategory,"Category":route.params.item.Category})

      const [modalVisible, setModalVisible] = useState(false);
      const [isTab,setisTab] = useState(0) 
      const [resultSetting,setresultSetting] = useState(0)
      const [value,setValue] = useState(0)
      const [category,setcategory] = useState('')
      const [subcategory,setSubCategory] = useState(0)
      const [isTimer,setIsTimer] = useState(0)
      const [showSuggestions,setShowSuggestions] = useState(0)     

      //setisTab(route.params.isTab)
      

      const categoryListItem = ['Politics','Sports','Educaton','International','National','Local News','Corona','Spiritual']
      const val = route.params.isTab
      const cat = route.params.category
      const subcat = route.params.subcategory
      return (  
        <SafeAreaProvider style={{flexDirection:'column',flex:1}}>

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

            <View style={{flexDirection:'row',flex:1}}>
                <TouchableOpacity style={{flex: 1, justifyContent: 'center', marginLeft:20 }}
                                  onPress={() => navigation.goBack()}
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
            <View style={{flex: 1, justifyContent: 'center',marginLeft:23}}>  
              <Text style={{color:'gray',fontSize:17}}>Create a Poll</Text>
            </View>  


            <View style={{flex: 1, justifyContent: 'center',marginLeft:23}}>  
              <TouchableOpacity style={{flex:.5, justifyContent: 'center'}} onPress={() => setModalVisible(true)}>  
                <Text style={{color:'gray',fontSize:12}}>Category </Text>
              </TouchableOpacity>  
              <View style={{flex:2,marginRight:23}}>  
                <TextInput
                    style={{color:'#4B0082', borderBottomWidth: .5,borderBottomColor:'#DCDCDC  ',}}
                    onChangeText={text => setValue(text)}
                    value = {cat + ' '+ subcat + category}
                />              
              </View>  
            </View>  


            <View style={{flex: 1, justifyContent: 'center',marginLeft:23,marginTop:10}}>  
              <View style={{flex:.5, justifyContent: 'center'}}>  
                <Text style={{color:'gray',fontSize:12}} >Related Post</Text>
              </View>  
              <View style={{flex:2,marginRight:23}}>  
                <TextInput
                    style={{color:'#4B0082', borderBottomWidth: .5,borderBottomColor:'#DCDCDC ',}}
                    onChangeText={text => setValue(text)}
                />              
              </View>  
            </View>  

            <View style={{flexDirection:'row',flex:1}}>
                <View style={{flex: 1, justifyContent: 'center',marginLeft:23,}}>  
                  <Text style={{color:'gray',fontSize:12}} >Poll Question</Text>
                </View>  
                <View style={{flexDirection:'row',flex:1,marginRight:7}}>
                  <View style={{flex: 1, justifyContent: 'center',marginLeft:23,}}>  
                      <Text style={{color:'gray',fontSize:12}} >Suggestions</Text>
                  </View>  
                  

                  <Switch  
                    value= {showSuggestions}  
                    onValueChange ={(switchValue)=>{setshowSuggestions(switchValue)}}/>  
                </View>  
            </View>  

            <View style={{flex: 2, alignItems: 'center', justifyContent: 'center',  }}>  
              <Text>Type here...</Text>
            </View>  

            <View style={{flex: 5,justifyContent: 'center',  }}>  
              <View style={{flex:1,flexDirection:'row',marginLeft:23,}}>  
                 <View style={{flex:1,justifyContent:'center'}}>
                  <Text style={{color:'gray',fontSize:12}} >Options</Text>
                 </View>
                 <View style={{flex:1,justifyContent:'center', marginLeft:220}}>
                   <TouchableOpacity  onPress={() => navigation.goBack()}>  
                      <Image
                      style={{width:20,height:20,marginLeft:5}}
                      source = {require('./src/image/plus.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>  
              <View style={{flex:2, marginLeft:23,justifyContent:'center',alignContent:'center'}}>  
                <View style={{flex:1,marginLeft:20}}>
                  <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>

                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Image
                      style={{width:16,height:16,marginLeft:5}}
                      source = {require('./src/image/apps.png')}
                      />                 
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Text>option1</Text>
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <TouchableOpacity 
                          onPress={() => navigation.goBack()}
                          >  
                        <Image
                        style={{width:16,height:16,marginLeft:15}}
                        source = {require('./src/image/close.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>

                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Image
                      style={{width:16,height:16,marginLeft:5}}
                      source = {require('./src/image/apps.png')}
                      />                 
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Text>option2</Text>
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <TouchableOpacity 
                          onPress={() => navigation.goBack()}
                          >  
                        <Image
                        style={{width:16,height:16,marginLeft:15}}
                        source = {require('./src/image/close.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>

                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Image
                      style={{width:16,height:16,marginLeft:5}}
                      source = {require('./src/image/apps.png')}
                      />                 
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Text>option3</Text>
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <TouchableOpacity 
                          onPress={() => navigation.goBack()}
                          >  
                        <Image
                        style={{width:16,height:16,marginLeft:15}}
                        source = {require('./src/image/close.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>

                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Image
                      style={{width:16,height:16,marginLeft:5}}
                      source = {require('./src/image/apps.png')}
                      />                 
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <Text>option4</Text>
                    </View>
                    <View style = {{flex:1,alignContent:'center',justifyContent:'center'}}>
                      <TouchableOpacity 
                          onPress={() => navigation.goBack()}
                          >  
                        <Image
                        style={{width:16,height:16,marginLeft:15}}
                        source = {require('./src/image/close.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>                                                    
                </View>
              </View>  
           </View>  




            <View style={{flex: 2.5, justifyContent: 'center',  }}>  
              <View style={{flexDirection:'row',flex:1}}>
                <View style={{flex: 1, justifyContent: 'center',marginLeft:23,}}>  
                  <Text style={{color:'gray',fontSize:12}} >Poll Question</Text>
                </View>  
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',  }}>  
                <View style={{flexDirection:'row',flex:1,marginRight:7}}>
                  <View style={{flex: 1, justifyContent: 'center',marginLeft:23,}}>  
                      <Text style={{color:'gray',fontSize:12}} >Timer</Text>
                  </View>  
                  <Switch  
                    value={isTimer}  
                    onValueChange ={(switchValue)=>{console.log(switchValue)
                    setIsTimer(switchValue)}}/>  
                </View>  
                </View>  
              </View> 
              <View style={{flex:2,marginLeft:23,}}>  
                <Text style={{color:'#4B0082',fontSize:18}}>Default - After Poll</Text>
              </View>  
             </View>   
          </SafeAreaProvider>
      );  
    }

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

  




//--------------------------------------------------------------------------------------------------------------
//style collections
//--------------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
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