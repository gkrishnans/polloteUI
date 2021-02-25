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

//import { block } from 'react-native-reanimated';



//-------------------------------------------------------------------------------------------------------------
//screens
//-------------------------------------------------------------------------------------------------------------

//import SigninPage from './routes/SigninPage'
//import SignupPage from './routes/SignupPage'


//-------------------------------------------------------------------------------------------------------------
//GLOBAL
//-------------------------------------------------------------------------------------------------------------


const isPollContext = createContext(true)

const isShow = true

const reducer = (state,action) =>{
  if(action)
  {
    return false
  }
  else{
    return true
  }
}


//--------------------------------------------------------------------------------------------------------------
//constant collections
//--------------------------------------------------------------------------------------------------------------


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator()

const Drawer = createDrawerNavigator();

const navOptionHandler = () => ({
  headerShown:false
})

//--------------------------------------------------------------------------------------------------------------
//data collections
//--------------------------------------------------------------------------------------------------------------
/*
const initialParams = [
  {
  Question:'which app is best for dream 11 prediction?',
  options:[
      'a': {value:'gokul\'s app',count:0},
      'b': {value:'dream 11\'s app',count:0},
      'c': {value:'play 11\'s app',count:0},
      'd': {value:'krishnan\'s app',count:0},
    ],
  comments :{
      0:{
    user:'Gokul',
    description:'i will always prefer gokul\'s app',
    like:10,
  },
  },
  share:['instagram','whatsapp','twitter','facebook']
},
]
*/

const people = [
  {name:'Lawrence',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',description:'lawrence tried on a short ball for that he left the greese lucky hitted the stamp',img: require('./src/image/16DanLawrence.jpg')},
  {name:'CricketBall',key:2,id:'2',category:'Cricket',subcategory:'IPL',description:'here the red ball test endsby, there comes a pink ball cricket ',img: require('./src/image/Cricket_Ball_AP.jpg')},
  {name:'Stroky',id:'5',key:4,category:'Cricket',subcategory:'Test Cricket',description:'well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable',img: require('./src/image/stroky.jpg')},
  {name:'Ashwin',id:'6',key:5,category:'Cricket',subcategory:'Test Cricket',description:'man of moments, won the hearts of chepauk audience',img: require('./src/image/TheManOfTheMoment.jpg')},
]
const peoplenews = [
  {question:'which app is the best for dream 11 prediction',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},

]

console.log(people[0])

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
  {question:'which app is the best for dream 11 prediction',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},

]
const politices = [
  {name:'All',key:0,description:'Here you will have all stories'},
  {name:'BJP',key:1,description:'Here you will have BJP stories'},
  {name:'PM election',key:2,description:'Here you will have  PM election stories'},
  {name:'Correption',key:3,description:'Here you will have correption stories'},
]

const coronapeople  = [
  {name:'positives',key:1,id:'1',category:'Corona',subcategory:'Active Cases',description:'Doctors and researchers are noticing some curious and unexpectedly positive side effects of the abrupt shifts in human behaviour in response to the covid-19 pandemic. Skies are bluer, fewer cars are crashing, crime is falling, and some other infectious diseases are fading from hospital emergency departments.',img: require('./src/image/positives.jpg')},
  {name:'C19recovery',key:1,id:'1',category:'Corona',subcategory:'Recoveries',description:'People with mild symptoms who are otherwise healthy should manage their symptoms at home. On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.',img: require('./src/image/C19recovery.jpg')},
  {name:'covaccine2',key:1,id:'1',category:'Corona',subcategory:'Covaccine',description:'Is there a COVID-19 vaccine for children? The Pfizer/BioNTech COVID-19 vaccine is available to people age 16 and older. Several companies have begun enrolling children as young as age 12 in COVID-19 vaccine clinical trials. Studies including younger children will begin soon.',img: require('./src/image/covaccine2.jpg')},

]

const coronapeoplenews  = [
  {question:'which app is the best for dream 11 prediction',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},
  {question:'which app is the best for dream 11 prediction',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',options:[{value:'a',label:'live score'},{value:'b',label:'dream 11'},{value:'c',label:'playing 11'},{value:'d',label:'predictionhub'}],img: require('./src/image/16DanLawrence.jpg')},

]
const corona = [
  {name:'All',key:0,description:'Here you will have all stories'},
  {name:'Covaccine',key:1,description:'Here you will have Covaccine stories'},
  {name:'Active Cases',key:2,description:'Here you will have  Active Cases stories'},
  {name:'Recoveries',key:3,description:'Here you will have Recoveries stories'},
]

//--------------------------------------------------------------------------------------------------------------
//custom collections
//--------------------------------------------------------------------------------------------------------------

//4
function Customheader({title,isHome,navigation,category})
{ 
  const [feed,dispatch] = useReducer(reducer,isShow)
  const isPollContextContext = useContext(isPollContext)
  return (
    <View style = {{flexDirection:'row',height : 50}}>
      {
        isHome ?
          <TouchableOpacity onPress = {()=>navigation.openDrawer()}>

            <View style ={{flex:1, justifyContent:'center'}}>
              <Image
                style={{width:30,height:30,marginLeft:5}}
                source = {require('./src/image/menu.png')}
              />
            </View>
          </TouchableOpacity>
        :
        <TouchableOpacity onPress = {()=>navigation.goBack()}>
          <View style ={{flex:1, justifyContent:'center'}}>
            <Image
              style={{width:30,height:30,marginLeft:5}}
              source = {require('./src/image/leftarrow.png')}
            />
          </View>
        </TouchableOpacity>
      }
      <View style ={{flex:1.5,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>{title}</Text>
      </View>
      <View style ={{flex:2,flexDirection:'row',height : 50}}>
      <View style ={{flex:2,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>news feed</Text>
      </View>
      <Switch  
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          value={feed}  
          onValueChange ={
              (switchValue)=>{
              dispatch(feed)
              console.log(switchValue)
              if(feed)
              {
                isPollContextContext.navigation.navigate('CricketNews')
                console.log(feed,'poli')
              }
              else{
                isPollContextContext.navigation.navigate('Corona')
                console.log(feed,'cri')
              }
//            dispatch(feed)
            }
          }

          />  
       
      <View style ={{flex:1.5,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>poll</Text>
      </View>
      
      </View>
    </View>
  )
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
            onPress={() => props.navigation.navigate('Cricket')}        
          >
            <Text>Cricket</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => props.navigation.navigate('Politics')}        
          >
            <Text>Politics</Text>
          </TouchableOpacity>        
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => props.navigation.navigate('Corona')}        
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
function ProfileScreen()
{                       
  return(
    <View style={styles.container}>
<Text
>     kljh</Text>
    </View>
  )
}


function NotificationsScreen({ navigation }) {
  const [option1,setoption1] = useState(0)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Text>{option1}</Text>
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
        <Customheader title = "Home Details" isHome = {false} navigation = {navigation} />

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
              color="#FF69B4"
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
                  <View style = {{backgroundColor:'blue',height:5,width:200,borderRadius:5,}}>
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
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:60,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/profile.png')}        
                          />
                        <Text style={{ flex:1,paddingLeft:8,paddingRight:8 ,flexDirection:'row'}}>sdfassafdasafafafafdsgsdgsdgsddddddddddddssfasfaf</Text>

                      </View>
                  </View>
                </View>
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:60,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/profile.png')}        
                          />
                        <Text style={{ flex:1,paddingLeft:8,paddingRight:8 ,flexDirection:'row'}}>sdfassafdasafafafafdsgsdgsdgsddddddddddddssfasfaf</Text>

                      </View>
                  </View>
                </View>
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:60,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/profile.png')}        
                          />
                        <Text style={{ flex:1,paddingLeft:8,paddingRight:8 ,flexDirection:'row'}}>sdfassafdasafafafafdsgsdgsdgsddddddddddddssfasfaf</Text>

                      </View>
                  </View>
                </View>
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:60,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/profile.png')}        
                          />
                        <Text style={{ flex:1,paddingLeft:8,paddingRight:8 ,flexDirection:'row'}}>sdfassafdasafafafafdsgsdgsdgsddddddddddddssfasfaf</Text>

                      </View>
                  </View>
                </View>
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:60,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/profile.png')}        
                          />
                        <Text style={{ flex:1,paddingLeft:8,paddingRight:8 ,flexDirection:'row'}}>sdfassafdasafafafafdsgsdgsdgsddddddddddddssfasfaf</Text>

                      </View>
                  </View>
                </View>
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:60,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/profile.png')}        
                          />
                        <Text style={{ flex:1,paddingLeft:8,paddingRight:8 ,flexDirection:'row'}}>sdfassafdasafafafafdsgsdgsdgsddddddddddddssfasfaf</Text>

                      </View>
                  </View>
                </View>
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:60,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/profile.png')}        
                          />
                        <Text style={{ flex:1,paddingLeft:8,paddingRight:8 ,flexDirection:'row'}}>sdfassafdasafafafafdsgsdgsdgsddddddddddddssfasfaf</Text>

                      </View>
                  </View>
                </View>
                <View style = {{borderRadius:5,height:50,paddingBottom:20}}>
                  <View style = {{backgroundColor:'white',height:60,justifyContent:'center',}}>
                      <View style={{flex:1,flexDirection:'row',marginTop:7,marginLeft:3}}>
                        <Image
                            style={{width:25,height:25, alignContent:'center' , resizeMode: 'stretch'}}
                            source = {require('./src/image/profile.png')}        
                          />
                        <Text style={{ flex:1,paddingLeft:8,paddingRight:8 ,flexDirection:'row'}}>sdfassafdasafafafafdsgsdgsdgsddddddddddddssfasfaf</Text>

                      </View>
                  </View>
                </View>

            </ScrollView>
          </View>
        </View>
        }

        {!vote &&
          <View style={{flex:.5,alignItem:'center',justifyContent:'center',backgroundColor:'white',marginTop:5,}}>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{alignItem:'center',justifyContent:'center',marginLeft:10}}>
                  <TextInput
                          style={{color:'blue', borderBottomWidth: .5,borderBottomColor:'#DCDCDC  ',borderRadius:20,borderWidth:2,width:275}}
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


function DetailedScreen({route,navigation})
{

  const [vote,setvote] = useState(true)
  const [customview,setcustomview] = useState(true)
  const isPollContextContext = useContext(isPollContext)

  return(
    <SafeAreaView style={{flex:1,alignItem:'center',justifyContent:'center',backgroundColor:'white'}}>
    
        <View style={{flex:.7,alignItem:'center',flexDirection:'row',justifyContent:'center',backgroundColor:'white',marginBottom:5,marginTop:6,marginLeft:10,marginRight:10}}>
          <View style={{justifyContent:'center'}}>
            <Image
            style={{width:105,height:105,marginLeft:5}}
            source = {require('./src/image/admk.jpg')}        
          />

          </View>
          <ScrollView style={{marginTop:3, alignContent:'center',height:115}}>
            <Text style={{fontSize:14,marginLeft:10,marginRight:20}}>mm</Text>

          </ScrollView>

        </View>

       <View style={{flex:1.5,alignItem:'center',justifyContent:'center',backgroundColor:'white',marginBottom:5,marginTop:6,marginLeft:10,marginRight:10}}>
            <View style={{flex:1.5,alignItem:'center',justifyContent:'center',backgroundColor:'white',marginBottom:5}}>

            </View>
            <View style={{flex:.5,alignItem:'center',justifyContent:'center',backgroundColor:'white',marginTop:5,}}>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{alignItem:'center',justifyContent:'center',marginLeft:10}}>
                  <TextInput
                          style={{color:'blue', borderBottomWidth: .5,borderBottomColor:'#DCDCDC  ',borderRadius:20,borderWidth:2,width:275}}
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
        </View>
    </SafeAreaView>
  )
}
//1
function ViewScreen({ route,navigation }) {
  console.log("hloo")
  console.log("bye")
  return (
    <SafeAreaView style={{flex:1}}>
    <Customheader title = "Home Details" isHome = {false} navigation = {navigation} />
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
          <Text style = {{textAlign:'center',color:"blue"}}>Related poll</Text>
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
                  
                  <TouchableOpacity style={{height:45,width:100,marginLeft:57,backgroundColor:'#FF69B4',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
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
                    style={{color:'blue', borderBottomWidth: .5,borderBottomColor:'#DCDCDC  ',}}
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
                    style={{color:'blue', borderBottomWidth: .5,borderBottomColor:'#DCDCDC ',}}
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
                <Text style={{color:'blue',fontSize:18}}>Default - After Poll</Text>
              </View>  
             </View>  
          </SafeAreaView>
      );  
    }




function CreatePollToggleScreen({route,navigation}) 
{//12
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
                  
                  <TouchableOpacity style={{height:45,width:100,marginLeft:57,backgroundColor:'#FF69B4',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Post</Text>
                  </TouchableOpacity>
                </View>  
            </View>  
          </SafeAreaView> 
      )
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//1
function DrawerNavigation(props)
{//12
  return(
    <isPollContext.Provider value = {props}>
      <Drawer.Navigator initialRouteName="Cricket"
        drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="Cricket" component={TabNavigation} initialParams = {{screen:'HomeTab',params:{screen:'Home',params:{tab:cricket,view:people}}}}/>
        <Drawer.Screen name="Politics" component={TabNavigation} initialParams = {{screen:'HomeTab',params:{screen:'Home',params:{tab:politices,view:politicspeople}}}}/>
        <Drawer.Screen name="Corona" component={TabNavigation} initialParams = {{screen:'HomeTab',params:{screen:'Home',params:{tab:corona,view:coronapeople}}}} />    
        <Drawer.Screen name="Selected" component={ViewScreen} />
        <Drawer.Screen name="SelectedToVote" component={VoteScreen}/>
        <Drawer.Screen name="SelectedToDetail" component={DetailedScreen} />
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
      <Tab.Navigator initialRouteName="HomeTab" tabBar={props => <CustomBottomTabContent {...props} />}>
        <Tab.Screen name="HomeTab" component={HomeStack} />
        <Tab.Screen name="Explore" component={ExploreStack} />
        <Tab.Screen name="CreatePoll" component={CreatePollStack} />
        <Tab.Screen name="Notification" component={NotificationStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
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
