



export default function NotificationStack(){
    return  (
      <Stack.Navigator initialRouteName = "Notification">
        <Stack.Screen name="Notification" component={NotificationsScreen} options ={navOptionHandler}/>
      </Stack.Navigator>
    )
  }
  