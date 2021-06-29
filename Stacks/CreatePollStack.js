



export default function CreatePollStack(){//12
  return  (
    <Stack.Navigator >
      <Stack.Screen name="CreatePolls" component={CreatePollScreen} options ={navOptionHandler}/>
      <Stack.Screen name="CreatePollToggle" component={CreatePollToggleScreen} options ={navOptionHandler}/>
    </Stack.Navigator>
  )
}
