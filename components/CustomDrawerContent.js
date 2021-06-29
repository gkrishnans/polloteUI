
import { Text,ScrollView ,TouchableOpacity } from 'react-native';
import React from 'react'  
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';




export default function CustomDrawerContent(props) {
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
  