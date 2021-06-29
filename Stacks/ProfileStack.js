


export default function ProfileStack(){
    return  (
      <Stack.Navigator initialRouteName = "Profile">
        <Stack.Screen name="Profile" component={ProfileScreen} options ={navOptionHandler}/>
      </Stack.Navigator>
    )
  } 
  