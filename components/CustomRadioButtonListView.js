

import { Text,View ,Image ,TouchableOpacity  , SafeAreaView} from 'react-native';
import { FlatList } from 'react-native';
import React,{useState} from 'react'  


export default function CustomRadioButtonListView({ options ,navigation,item}) {
    const [myopt,setmyopt] = useState(options)

    return (
      <SafeAreaView style = {{justifyContent:'center', alignContent:'center',padding:10}}>{/*container*/}
  
      <FlatList
        keyExtractor = {(item) => item.id}
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
                    source = {require('../src/image/speech-bubble.png')}        
                  />
                    <Text style={{paddingLeft:3}}>25+</Text>
                  </View>
                  <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                   <Image
                    style={{width:25,height:25,}}
                    source = {require('../src/image/share.png')}        
                  />
                    <Text style={{paddingLeft:3}}>25+</Text>
                  </View>
                  <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                   <Image
                    style={{width:25,height:25,}}
                    source = {require('../src/image/statistics.png')}        
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
                      source = {require('../src/image/arrow-point-to-right.png')}        
                    />
                  </TouchableOpacity>
                </View>            
      </SafeAreaView>
    );
  }
  