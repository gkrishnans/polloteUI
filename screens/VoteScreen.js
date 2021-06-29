//--------------------------------------------------------------------------------------------------------------

//packages collections
//--------------------------------------------------------------------------------------------------------------


import { Text,TextInput, View ,Image ,Button ,ScrollView ,TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native';
import React,{useState} from 'react'  
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';



import Customheaderback from '../components/customheader'




export default function VoteScreen({route,navigation})
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
            source = {require('../src/image/admk.jpg')}        
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
                      source = {require('../src/image/paper-plane.png')}        
                    />
                </View>
              </View>
            </View>
        }
    </SafeAreaProvider>
  )
}
