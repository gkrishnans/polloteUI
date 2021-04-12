var auth = {
  access_token:'',
  access_token_refresh_min :'',
  refresh_token:''
}

function reducers(state,action) {
  return action
}




function signupSubmit(name,password,email,{navigation})
{
  axios     
        .post('http://3.14.87.134:8080/api/signup',
        {
                "username":name,
                "password":password,
                "email":email,
        }            
        ).then( response => {
            console.log('acces',response.data.access_token)
            console.log('time',response.data.access_token_expiration_min)
            console.log('refresh',response.data.refresh_token)

            state.access_token = response.data.access_token
            state.access_token_expiration_min = response.data.access_token_expiration_min
            state.refresh_token = response.data.refresh_token

            if(response.data.success == true)
            {
              Alert.alert("Successfully signed in")
              dispatch(state)
              navigation.navigate('DrawerView');
            }
            else
            {
              Alert.alert(response.data.message)
            }
        })
}

function SignupPage({navigation})
{
//    const [namesignupip,setnamesignupip] = useState('')
//    const [passwordsignupip,setpasswordsignupip] = useState('')
    const [namesignup,setnamesignup] = useState('')
    const [emailsignup,setemailsignup] = useState('')
    const [confirmpasswordsignup,setconfirmpasswordsignup] = useState('')
    const [passwordsignup,setpasswordsignup] = useState('')
    const [signuppageboolean,setsignuppageboolean] = useState(false)
    const [signinpageboolean,setsigninpageboolean] = useState(true)
    const [eyesignup,seteyesignup] = useState(true)
    const [eyesignupconfirm,seteyesignupconfirm] = useState(true)
    const [eyesignin,seteyesignin] = useState(true)
    const [usernamesignin,setusernamesignin] = useState(0)
    const [passwordsignin,setpasswordsignin] = useState(0)


    return( 
            <View  style = {{flex : 1,flexDirection:'column',backgroundColor:'white'}} > 
              <View style={{marginLeft:17,marginTop:17,height:40,marginRight:17,backgroundColor:'white'}}>
                <View style={{flex:1,flexDirection:'row',}}>
                <Image
                style={{width:82,height:44,marginLeft:5}}
                source = {require('./src/image/polll.jpg')}
              />
                  <View style={{flex:1,flexDirection:'row-reverse',}}>
                    <Image
                    style={{width:20,height:20,marginRight:5,marginTop:13}}
                    source = {require('./src/image/close.png')}
                    />
                  </View>
                </View>
              </View>



              { signuppageboolean  && 
              <ScrollView>
               <View>
                <View style={{marginLeft:17,marginTop:17,height:50,marginRight:17}}>
                  <View style={{ flex:1,justifyContent:'center'}}>
                    <Text style={{fontSize:22,color:'grey'}}>Create Your Account :) </Text>
                  </View>
                </View>

              <View style={{flex : .5}}></View>
              <View>
                <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:12}}>User name</Text>
                  <TextInput style = {{  margin: 15,marginTop:0,
                        height: 44,
                              borderBottomColor:'#4B0082',
                              borderBottomWidth:2,
                              color:'#4B0082',
                            paddingBottom :10
                            }}
                            underlineColorAndroid = "transparent"
                            placeholderTextColor = "#9a73ef"
                            autoCapitalize = "none"
                            onChangeText = {text => setnamesignup(text)}
                            />                                
              </View>

              <View>
                <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:12}}>Mail id / Mobile number</Text>
                  <TextInput style = {{  margin: 15,marginTop:0,
                    height: 44,
                        borderBottomColor:'#4B0082',
                          borderBottomWidth:2,
                        color:'#4B0082',
                        paddingBottom :10}}
                        underlineColorAndroid = "transparent"
                        placeholderTextColor = "#9a73ef"
                        autoCapitalize = "none"
                        onChangeText = {text => setemailsignup(text)}
                        />                                         
              </View>
              <View>
                  <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:12}}>Password</Text>
                  <View 
                      style={{ borderBottomColor:'#4B0082',flexDirection:'row',
                                borderBottomWidth:2, margin: 15,marginTop:0,
                                height: 44,
                            }}>
                    <TextInput style = {{ 
                              color:'#4B0082',width:290,
                              paddingBottom :10}}//eye
                              underlineColorAndroid = "transparent"
                              autoCapitalize = "none"
                              secureTextEntry = {eyesignup}
                              onChangeText = {text => setpasswordsignup(text)}
                              /> 
                              <View style={{alignContent:'center',marginTop:14
                              }}>

                        {!eyesignup && //eyesignup
                          <TouchableOpacity 
                            onPress={()=>{
                              seteyesignup(!eyesignup) //eyesignup
                            }}
                          >
                            <Image
                              style={{width:25,height:20,marginLeft:5}}
                              source = {require('./src/image/eyeClose.jpeg')}
                            />

                          </TouchableOpacity>
                        }
                        {eyesignup && //eyesignup
                          <TouchableOpacity 
                            onPress={()=>{
                              seteyesignup(!eyesignup) //eyesignup
                            }}
                          >
                            <Image
                              style={{width:25,height:20,marginLeft:5}}
                              source = {require('./src/image/eyeOpen.jpeg')}
                            />

                          </TouchableOpacity>
                        }
                      </View>
                  </View>
              </View>

              <View>
                  <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:12}}>Confirm Password</Text>
                  <View 
                      style={{ borderBottomColor:'#4B0082',flexDirection:'row',
                                borderBottomWidth:2, margin: 15,marginTop:0,
                                height: 44,
                            }}>
                    <TextInput style = {{ 
                              color:'#4B0082',width:290,
                              paddingBottom :10}}//eye
                              underlineColorAndroid = "transparent"
                              autoCapitalize = "none"
                              secureTextEntry = {eyesignupconfirm}
                              onChangeText = {text => setconfirmpasswordsignup(text)} 
                              /> 
                              <View style={{alignContent:'center',marginTop:14
                              }}>

                        {!eyesignupconfirm && //eyesignupconfirm
                          <TouchableOpacity 
                            onPress={()=>{
                              seteyesignupconfirm(!eyesignupconfirm) //eyesignupconfirm
                            }}
                          >
                            <Image
                              style={{width:25,height:20,marginLeft:5}}
                              source = {require('./src/image/eyeClose.jpeg')}
                            />

                          </TouchableOpacity>
                        }
                        {eyesignupconfirm && //eyesignupconfirm
                          <TouchableOpacity 
                            onPress={()=>{
                              seteyesignupconfirm(!eyesignupconfirm) //eyesignupconfirm
                            }}
                          >
                            <Image
                              style={{width:25,height:20,marginLeft:5}}
                              source = {require('./src/image/eyeOpen.jpeg')}
                            />

                          </TouchableOpacity>
                        }
                      </View>
                  </View>
              </View>

              <View style = {{paddingTop:20,paddingBottom:20}}>
                <TouchableOpacity
                          style={{marginLeft:20,marginRight:20,height:50,borderRadius:5,backgroundColor:'#FF1493',alignContent:'center',justifyContent:'center'}}
                          onPress ={ ()=>{ 
                            if(namesignup == '')
                            {
                              Alert.alert('Username field can\'t be Empty')
                            }
                            else if(emailsignup == '')
                            {
                              Alert.alert('Mail id / Mobile number field can\'t be Empty')
                            }
                            else if(passwordsignup == '')
                            {
                              Alert.alert('Password field can\'t be Empty')
                            }
                            else if(confirmpasswordsignup == '')
                            {
                              Alert.alert('Confirm password field can\'t be Empty')
                            }
                            else if(passwordsignup != confirmpasswordsignup)
                            {
                              Alert.alert('check your password')
                            }
                            else
                            {
                              signupSubmit(namesignup,emailsignup,passwordsignup,{navigation})
                            }
                          }}
                      >
                  <Text style={{textAlign:'center',color:'white',fontSize:20}}>Sign up</Text>
                </TouchableOpacity>                          
                <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:9,textAlign:'center'}}>You are agreeing the terms & Conditions by click the above button</Text>

              </View>

              <TouchableOpacity style = {{paddingTop:5,paddingBottom:20,flex:1,flexDirection:'row',justifyContent:"center"}}
                          onPress ={()=>{
                                  setsigninpageboolean(!signinpageboolean)
                                  setsignuppageboolean(!signuppageboolean)
                                    }}
              >
                <View>
                  <Text>Have an account ?</Text>
                </View>
                <View>
                  <TouchableOpacity
                      >
                      <Text style={{color:'#FF1493'}}> Log in </Text>
                  </TouchableOpacity>                          
                </View>
              </TouchableOpacity>               
            </View>
          </ScrollView>


              }

              {

//  const [usernamesignin,setusernamesignin] = useState(0)
//  const [passwordsignin,setpasswordsignin] = useState(0)

}
              { signinpageboolean &&

                <View>
            <View style={{marginLeft:17,marginTop:17,height:50,marginRight:17}}>
                <View style={{ flex:1,justifyContent:'center'}}>
                    <Text style={{fontSize:22,color:'grey'}}> Welcome Back !</Text>
                </View>
            </View>

            <View style={{flex:.5}}>


            </View>
            <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:12}}>User name / Mail id / Mobile number</Text>
            <TextInput style = {{  margin: 15,marginTop:0,
                height: 44,
                borderBottomColor:'#4B0082',
                borderBottomWidth:2,
                color:'#4B0082',
                paddingBottom :10}}
                underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                onChangeText = {text => setusernamesignin(text)}
            />  
            <Text style={{marginBottom:0,margin: 18,color:'gray',fontSize:12}}>Password</Text>
            <View 
                    style={{ borderBottomColor:'#4B0082',flexDirection:'row',
                    borderBottomWidth:2, margin: 15,marginTop:0,
                    height: 44,
                }}>

                <TextInput style = {{ 
                    color:'#4B0082',width:290,
                    paddingBottom :10}}//eye
                    underlineColorAndroid = "transparent"
                    autoCapitalize = "none"
                    secureTextEntry = {eyesignin}
                    onChangeText = {text => setpasswordsignin(text)}
                /> 
                <View style={{alignContent:'center',marginTop:14}}>
                    {
                      !eyesignin &&
                      <TouchableOpacity 
                          onPress={()=>{
                            seteyesignin(!eyesignin)
                          }
                          }
                      > 
                    <Image
                    style={{width:25,height:20,marginLeft:5}}
                    source = {require('./src/image/eyeClose.jpeg')}
                    />
                    </TouchableOpacity>
                    }
                    {eyesignin &&
                    <TouchableOpacity 
                    onPress={()=>{
                      seteyesignin(!eyesignin)
                    }}
                    >
                    <Image
                    style={{width:25,height:20,marginLeft:5}}
                    source = {require('./src/image/eyeOpen.jpeg')}
                    />
                    </TouchableOpacity>
                    }
                </View>
            </View> 

            <View style={{alignContent:'center',justifyContent:'center',marginBottom:18,marginLeft:17}}>
                <TouchableOpacity >
                    <Text style={{color:'#4B0082',fontSize:13}}>forget password?</Text>
                </TouchableOpacity>
            </View> 
            <TouchableOpacity
                style={{marginLeft:17,marginRight:17,height:50,borderRadius:5,backgroundColor:'#FF1493',alignContent:'center',justifyContent:'center'}}
                onPress ={ ()=>{
                signinSubmit(usernamesignin,passwordsignin,{navigation})
                }}
                >
                <Text style={{textAlign:'center',color:'white',fontSize:20}}>Log in</Text>
            </TouchableOpacity>                          
            <TouchableOpacity style = {{paddingTop:20,paddingBottom:20,flex:1,flexDirection:'row',justifyContent:"center"}}
                    onPress ={()=>{
                                  setsigninpageboolean(!signinpageboolean)
                                  setsignuppageboolean(!signuppageboolean)
                                    }}>
                <View><Text style={{color:'#4B0082',fontSize:13}}>Dont't have a account ? </Text></View>

                <View
                >
                <Text style={{color:'#FF1493',paddingLeft:20}}> Sign up </Text>
                </View>                          
            </TouchableOpacity>
        </View>  


              }
          </View>  
        );
    }

  
  function call(response,{navigation})
  {
    if(response.data.success)
    {
      Alert.alert('Logged in successfully')
      navigation.navigate('DrawerView');
      navigation.navigate('DrawerView')
    }
    else
    {
      console.log('invalid user')
      navigation.navigate('signup')
    }
  }

function signinSubmit(username,password,{navigation})
{
    console.log(username,password)
    axios     
        .post('http://3.14.87.134:8080/api/signIn',
        {
                "username":username,
                "password":password,
        }            
        ).then( response => {
            console.log(response)
            call(response,{navigation});
        })
} 
