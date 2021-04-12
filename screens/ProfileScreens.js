//--------------------------------------------------------------------------------------------------------------

//packages collections
//--------------------------------------------------------------------------------------------------------------

import { Text,View ,SafeAreaView ,Image ,TouchableOpacity } from 'react-native';
import React,{useState} from 'react'  
import 'react-native-gesture-handler';


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





function CustomViewForPoll({navigation,initialParams})
{
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
                          onPress = {() => {
                            navigation.navigate('vote',{'item':item})}}
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



function CustomViewForPoll({navigation,initialParams})
{
  return(
    <View style={styles.container}>
      <FlatList
        keyExtractor = {(item) => item.id}
        data = {initialParams}
        renderItem = {({item}) => (
          <View style = {styles.card} >          
            <TouchableOpacity style={{flex:1}}
            onPress = {() => {
                            navigation.navigate('vote',{'item':item})}}
            >
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
              </View>            
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}



                <TouchableOpacity style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}                       
                          onPress = {() => {
                            navigation.navigate('vote',{'item':item})}}
                          >
                  <Text >More</Text>
                  <Image
                    style={{width:20,height:20,padding:3}}
                    source = {require('./src/image/arrow-point-to-right.png')}        
                  />
                </TouchableOpacity>
