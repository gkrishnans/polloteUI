function Customheader({title,isHome,navigation,category})
{ 
  const [feed,dispatch] = useReducer(reducer,isShow)
  const isPollContextContext = useContext(isPollContext)
  return (
      <View style={{flex:1}}>
      {
        isHome &&
         <View style = {{flexDirection:'row',height : 50}}>

          <TouchableOpacity onPress = {()=>navigation.openDrawer()}>

            <View style ={{flex:1, justifyContent:'center'}}>
              <Image
                style={{width:30,height:30,marginLeft:5}}
                source = {require('./src/image/menu.png')}
              />
            </View>
          </TouchableOpacity>
          <View style ={{flex:1.5,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>{title}</Text>
      </View>
      <View style ={{flex:2,flexDirection:'row',height : 50}}>
      <View style ={{flex:2,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>news feed</Text>
      </View>
      <Switch  
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          value={feed}  
          onValueChange ={
              (switchValue)=>{
              dispatch(feed)
              console.log(switchValue)
              if(feed)
              {
                isPollContextContext.navigation.navigate('CricketNews')
                console.log(feed,'poli')
              }
              else{
                isPollContextContext.navigation.navigate('Corona')
                console.log(feed,'cri')
              }
//            dispatch(feed)
            }
          }

          />  
       
      <View style ={{flex:1.5,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>poll</Text>
      </View>
      
      </View>
    </View>
      }
      {!ishome &&
        
        <TouchableOpacity onPress = {()=>navigation.goBack()}>
          <View style ={{flex:1, justifyContent:'center'}}>
            <Image
              style={{width:30,height:30,marginLeft:5}}
              source = {require('./src/image/leftarrow.png')}
            />
          </View>
        </TouchableOpacity>
      }
      </View>

  )
}






function Customheader({title,isHome,navigation,category})
{ 
  const [feed,dispatch] = useReducer(reducer,isShow)
  const isPollContextContext = useContext(isPollContext)
  return (
    <View style = {{flexDirection:'row',height : 50}}>
      {
        isHome ?
          <TouchableOpacity onPress = {()=>navigation.openDrawer()}>

            <View style ={{flex:1, justifyContent:'center'}}>
              <Image
                style={{width:30,height:30,marginLeft:5}}
                source = {require('./src/image/menu.png')}
              />
            </View>
          </TouchableOpacity>
        :
        <TouchableOpacity onPress = {()=>navigation.goBack()}>
          <View style ={{flex:1, justifyContent:'center'}}>
            <Image
              style={{width:30,height:30,marginLeft:5}}
              source = {require('./src/image/leftarrow.png')}
            />
          </View>
        </TouchableOpacity>
      }
      <View style ={{flex:1.5,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>{title}</Text>
      </View>
      <View style ={{flex:2,flexDirection:'row',height : 50}}>
      <View style ={{flex:2,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>news feed</Text>
      </View>
      <Switch  
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          value={feed}  
          onValueChange ={
              (switchValue)=>{
              dispatch(feed)
              console.log(switchValue)
              if(feed)
              {
                isPollContextContext.navigation.navigate('CricketNews')
                console.log(feed,'poli')
              }
              else{
                isPollContextContext.navigation.navigate('Corona')
                console.log(feed,'cri')
              }
//            dispatch(feed)
            }
          }

          />  
      <View style ={{flex:1.5,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>poll</Text>
      </View>
      
      </View>
    </View>
  )
}
