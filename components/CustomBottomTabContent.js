import { Text,TouchableOpacity ,View} from 'react-native';

import React from 'react'  
import 'react-native-gesture-handler';

export default function CustomBottomTabContent(props)
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

