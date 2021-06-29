



export default function HomeStack({naivgation}){ 
    return (
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name="Home" component={HomeScreen} options ={navOptionHandler}/>
      </Stack.Navigator>
    )
  }
  