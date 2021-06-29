
import { Text,View,Image ,ScrollView ,TouchableOpacity } from 'react-native';

import React from 'react'  
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Customheaderback from '../components/customheader'




export default function ViewScreen({ route,navigation }) {
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
              source = {require('../src/image/back.png')}        
            />
          </View>
          <View style ={{flex:1, justifyContent:'center'}}>
            <Image
              style={{width:30,height:30,marginLeft:5}}
              source = {require('../src/image/arrow-point-to-right.png')}        
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
  