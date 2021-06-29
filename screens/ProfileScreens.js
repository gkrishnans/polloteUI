import { Text, View ,Image,TouchableOpacity, StyleSheet} from 'react-native';
import React,{useState} from 'react'  
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CustomView from '../components/CustomView'
import CustomViewForPoll from '../components/CustomViewForPoll'
import Customheaderback from '../components/customheader'


const people = [
  {name:'Lawrence',key:1,id:'1',category:'Cricket',subcategory:'Test Cricket',description:'lawrence tried on a short ball for that he left the greese lucky hitted the stamp',img: require('../src/image/16DanLawrence.jpg')},
  {name:'CricketBall',key:2,id:'2',category:'Cricket',subcategory:'IPL',description:'here the red ball test endsby, there comes a pink ball cricket ',img: require('../src/image/Cricket_Ball_AP.jpg')},
  {name:'Stroky',id:'5',key:4,category:'Cricket',subcategory:'Test Cricket',description:'well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable well-talented man performing stunces too and it was lovable',img: require('../src/image/stroky.jpg')},
  {name:'Ashwin',id:'6',key:5,category:'Cricket',subcategory:'Test Cricket',description:'man of moments, won the hearts of chepauk audience',img: require('../src/image/TheManOfTheMoment.jpg')},
]
const peoplenews = [
  {question:'which app is the best for dream 11 prediction1 ',id:'1',category:'cricket',subcategory:'Test Cricket',options:[{name:'dream11',id:2,state:false},{name:'dream12',id:3,state:false},{name:'dream13',id:4,state:false}],img: require('../src/image/16DanLawrence.jpg')},
  {question:'who will be the best player in the world ',id:'2',category:'cricket',subcategory:'Test Cricket',options:[{name:'gokul',id:1,state:false},{name:'krishnan',id:2,state:false},{name:'ajith',id:3,state:false},{name:'reji',id:4,state:false}],img: require('../src/image/16DanLawrence.jpg')},
  {question:'which format of cricket do you like ',id:'3',category:'cricket',subcategory:'Test Cricket',options:[{name:'test cricket',id:1,state:false},{name:'odi',id:2,state:false},{name:'ipl',id:3,state:false},{name:'t20',id:4,state:false}],img: require('../src/image/16DanLawrence.jpg')},
  {question:'dhoni / virat',id:'1',category:'cricket',subcategory:'Test Cricket',options:[{name:'dhoni',id:2,state:false},{name:'virat',id:3,state:false}],img: require('../src/image/16DanLawrence.jpg')},

]




export default function ProfileScreen({navigation})
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
                              source = {require('../src/image//profile.png')}        
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
