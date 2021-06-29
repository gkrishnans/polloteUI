
import { Text, View,Image ,TouchableOpacity ,} from 'react-native';
import React from 'react'  
import 'react-native-gesture-handler';


export default function Customheaderback({title,isHome,navigation,category})
{ 
  return (
      <View >
      
         <View style = {{flexDirection:'row',height : 50}}>

         <TouchableOpacity onPress = {()=>navigation.goBack()}>
          <View style ={{flex:1, justifyContent:'center'}}>
            <Image
              style={{width:30,height:30,marginLeft:5}}
              source = {require('../src/image/leftarrow.png')}
            />
          </View>
        </TouchableOpacity>

          <View style ={{flex:1.5,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>{title}</Text>
      </View>
      <View style ={{flex:2,flexDirection:'row',height : 50}}>
      
      </View>
    </View>        
      </View>

  )
}
