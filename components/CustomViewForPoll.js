

import { Text,View,StyleSheet,SafeAreaView} from 'react-native';

import { FlatList } from 'react-native';
import React from 'react'  
import 'react-native-gesture-handler';

import CustomRadioButtonListView from './CustomRadioButtonListView'




export default function CustomViewForPoll({navigation,initialParams})
{
  console.log("i am initial params for custom view for poll",initialParams)
  return(

    
    <SafeAreaView style={styles.container,{backgroundColor:'yellow'}}>
    
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
        )}
      />
    </SafeAreaView>
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
  