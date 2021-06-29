      
import {launchImageLibrary} from 'react-native-image-picker';


import { Text,TextInput, View ,StyleSheet ,Image,Modal,ScrollView ,TouchableOpacity ,Switch,Alert,ToastAndroid} from 'react-native';

import { FlatList } from 'react-native';
import React,{useState,} from 'react'  
import 'react-native-gesture-handler';

const axios = require('axios');





function PostAPoll(var_Category,var_sub_category,var_istimer,var_endtimer,var_Poll_question,var_options,var_Is_anonymous)
{ 

  axios
  .post('http://192.168.1.5:5001/createPoll',   //192.168.1.5   
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
      //console.log(response);
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
//  fetch('http://192.168.1.5:5001/api/polls/imageUpload', {   //192.168.1.5

  fetch('http://192.168.1.5:5001/imageUpload', {   //192.168.1.5
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },        
    body: data
  })
    .then((response) => response.json())
    .then((response) => {
      console.log('upload succes *',category,category_,isTimer,timerCount,qns,options,isanonymous);
      PostAPoll(category,category_,isTimer,timerCount,qns,options,isanonymous)
      alert('Upload success!');

      //this.setState({ "avatarSource": null });
    })
    .catch((error) => {
      console.log('upload error', error);
      alert('Upload failed!');
    });
  }


export default function CreatePollScreen({route,navigation}) 
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
      const [qns,setqns] = useState("")

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
          //console.log('Response = ', response);
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
//          //  console.log(response)
            setavatarSource(response)
          }
        }); 
      }
      //setisTab(route.params.isTab)
  
      const categoryListItem = ['Politics','Sports','Educaton','International','National','Local News','Corona','Spiritual']
      const val = route.params.istab
      const cat = route.params.category
      const subcat = route.params.subcategory
      const [modalVisibleForTimer,setmodalVisibleForTimer] = useState(0)
      const [timerCount,settimerCount] = useState(0)
      const values = ['0','5','10','15','20','25','30','35','40','45','50','55','60','180','360']
      React.useEffect(() => {
        navigation.addListener('blur', () => {
          console.log(" i am removed>>setcategory('')")
        });})

        React.useEffect(() => {
          navigation.addListener('focus', () => {
            if(!val)
            {
              var exampleImageUri = Image.resolveAssetSource(route.params.item.img)
              exampleImageUri['fileName'] = 'temp'
              exampleImageUri['type'] = "image/jpeg"
              setavatarSource(exampleImageUri)
             // console.log('gk',avatarSource,exampleImageUri)
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
                  source = {require('../src/image/close.png')}
                />
                </TouchableOpacity>  
                <TouchableOpacity style={{ justifyContent: 'center', marginLeft:7 }}
                                  onPress={() =>{ 
                                    sendDate(avatarSource,category,category,isTimer,timerCount,qns,options,isanonymous)
                                    console.log("i am ",category)
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
                    style={{color:'blue', borderBottomWidth: .5,borderBottomColor:'#DCDCDC',marginRight:10}}
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
                    style={{color:'blue', borderBottomWidth: .5,borderBottomColor:'#DCDCDC',marginRight:10}}
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
                      source = {require('../src/image/plus.png')}
                    />
                  </TouchableOpacity>
              </View>  
              <View style={{height:196,marginLeft:10,marginRight:10,}}>  
              <FlatList 
                  data = {options}
                  keyExtractor = {(item) => item.id}
                  renderItem = {({item}) => (

                    <View style = {{height:45,marginBottom:5,flexDirection:'row',borderColor:'grey',borderWidth:2,borderRadius:10}}>
                  <View style={{flex:1,alignContent:'center',justifyContent:'center',alignItems:'center'}}>  
                      <Image
                      style={{width:20,height:20,marginLeft:5}}
                      source = {require('../src/image/apps.png')}
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
                                  if(options[i].id == toString(item.id))
                                  break
                                }
                                var add = {'name':text,'id':toString(item.id)}
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
                      source = {require('../src/image/close.png')}
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



//--------------------------------------------------------------------------------------------------------------

//packages collections
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
      


      {/* 

        //before modification
      
      
import {launchImageLibrary} from 'react-native-image-picker';


import { Text,TextInput, View ,StyleSheet ,Image,Modal,ScrollView ,TouchableOpacity ,Switch,Alert,ToastAndroid} from 'react-native';

import { FlatList } from 'react-native';
import React,{useState,} from 'react'  
import 'react-native-gesture-handler';

const axios = require('axios');








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


export default function CreatePollScreen({route,navigation}) 
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
                  source = {require('../src/image/close.png')}
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
                      source = {require('../src/image/plus.png')}
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
                      source = {require('../src/image/apps.png')}
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
                      source = {require('../src/image/close.png')}
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


      
      
      */}