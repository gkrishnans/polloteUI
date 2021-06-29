{/*

            <Image
              style={{width:100,height:100, resizeMode: 'stretch'}}
              source = {item.img}
            />



            *old*

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



*/}




import { Text,View ,Image ,ScrollView ,TouchableOpacity ,StyleSheet} from 'react-native';

import React,{useState } from 'react'  
import 'react-native-gesture-handler';
import { io } from "socket.io-client";

export default function NotificationsScreen() {
    //doing
const [avatarSource,setavatarSource] = useState([])   



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


      <View>
      <Image
      style={{width:100,height:100, resizeMode: 'stretch'}}
      source={{uri: 'http://192.168.1.5:5001/file/imag699.jpg'}}
    />
      <Image
      style={{width:100,height:100, resizeMode: 'stretch'}}
      source={{uri: 'http://192.168.1.5:5001/file/imag699.jpg'}}
    />
      <Image
      style={{width:100,height:100, resizeMode: 'stretch'}}
      source={{uri: 'http://192.168.1.5:5001/file/imag701.jpg'}}
    />
    <Image
      style={{width:100,height:100, resizeMode: 'stretch'}}
      source={{uri: 'http://192.168.1.5:5001/file/imag702.jpg'}}
    />
      </View>
    );
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
  