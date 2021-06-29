import { FlatList } from "react-native"

function CustomRadioButton({ option1,option2,option3,option4 }) {

  const [a,seta] = useState(false)
  const [b,setb] = useState(false)
  const [c,setc] = useState(false)
  const [d,setd] = useState(false)
  const [result,setresult] = useState()

  return (
    <View style = {{justifyContent:'center', alignContent:'center',padding:10}}>{/*container*/}

      <View style ={{height:35,flexDirection:'row'}}>
        <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
          <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                            onPress = {() =>
                              {
                                seta(true)
                                setb(false)
                                setc(false)
                                setd(false)
                                setresult('a')
                              }
                            }
                            >{/*outerRadius*/}
            {a &&
              <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
              </View>
            }
          </TouchableOpacity>
        </View>

        <View style ={{height:35,justifyContent:'center',flex:1}}>
            <Text style={{marginLeft:5}}>{option1}</Text>

        </View>                                      
      </View>
 


      <View style ={{height:35,flexDirection:'row'}}>
        <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
          <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                            onPress = {() =>
                              {
                                seta(false)
                                setb(true)
                                setc(false)
                                setd(false)
                                setresult('b')
                              }
                            }
                            >{/*outerRadius*/}
            {b &&
              <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
              </View>
            }
          </TouchableOpacity>
        </View>

        <View style ={{height:35,justifyContent:'center',flex:1}}>
            <Text style={{marginLeft:5}}>{option1}</Text>

        </View>                                      
      </View>



      <View style ={{height:35,flexDirection:'row'}}>
        <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
          <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                            onPress = {() =>
                              {
                                seta(false)
                                setb(false)
                                setc(true)
                                setd(false)
                                setresult('c')
                              }
                            }
                            >{/*outerRadius*/}
            {c &&
              <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
              </View>
            }
          </TouchableOpacity>
        </View>

        <View style ={{height:35,justifyContent:'center',flex:1}}>
            <Text style={{marginLeft:5}}>{option1}</Text>

        </View>                                      
      </View>


      <View style ={{height:35,flexDirection:'row'}}>
        <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
          <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                            onPress = {() =>
                              {
                                seta(false)
                                setb(false)
                                setc(false)
                                setd(true)
                                setresult('d')

                              }
                            }
                            >{/*outerRadius*/}
            {d &&
              <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
              </View>
            }
          </TouchableOpacity>
        </View>

        <View style ={{height:35,justifyContent:'center',flex:1}}>
            <Text style={{marginLeft:5}}>{option1}</Text>

        </View>                                      
      </View>
    </View>
  );
}


const options = [
  {
    name:'gokul',
    id:1,
    state:false
  },
  {
    name:'krishnan',
    id:2,
    state:false
  },
  {
    name:'ajith',
    id:3,
    state:false
  },
  {
    name:'reji',
    id:4,
    state:false
  },
    
]


function CustomRadioButtonListView({ options }) {

  return (
    <View style = {{justifyContent:'center', alignContent:'center',padding:10}}>{/*container*/}

    <FlatList
      data = {options}
      renderItem = {
        ({
          item
        }) => (

            <View style ={{height:35,flexDirection:'row'}}>
              <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
                <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                                  onPress = {() =>
                                    {
                                      for(key in options)
                                      {
                                        key.state = false
                                      }
                                      item.state = true
                                    }
                                  }
                                  >{/*outerRadius*/}
                  {item.state &&
                    <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
                    </View>
                  }
                </TouchableOpacity>
              </View>

              <View style ={{height:35,justifyContent:'center',flex:1}}>
                  <Text style={{marginLeft:5}}>{option1}</Text>
              </View>                                      
            </View>
        )
      }
    />
    </View>
  );
}





//failure one
function CustomRadioButtonListView({ options }) {
  const [myopt,setmyopt] = useState(options)
  return (
    <View style = {{justifyContent:'center', alignContent:'center',padding:10}}>{/*container*/}

    <FlatList
      data = {myopt}
      renderItem = {
        ({
          item
        }) => (

            <View style ={{height:35,flexDirection:'row'}}>
              <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
                <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                                  onPress = {() =>
                                    {
                                      let newopt = [...options]
                                      let key
                                      let temp
                                      console.log(newopt)
                                      for(key in newopt)
                                      {
                                        temp = {
                                          id:newopt[key]['id'],
                                          name:newopt[key]['name'],
                                          state:false
                                        }
                                        newopt[key].update(temp)
                                        //newopt['state'].update(false)
                                      }
                                      temp = {
                                          id:newopt[key]['id'],
                                          name:newopt[key]['name'],
                                          state:true
                                        }

                                      console.log(item)
                                      newopt[item].update(temp)
                                      setmyopt([...newopt])
                                    }
                                  }
                                  >{/*outerRadius*/}
                  {item.state &&
                    <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
                    </View>
                  }
                </TouchableOpacity>
              </View>

              <View style ={{height:35,justifyContent:'center',flex:1}}>
                  <Text style={{marginLeft:5}}>sdfa</Text>
              </View>                                      
            </View>
        )
      }
    />
    </View>
  );
}


{/*

                  <TouchableOpacity style={{height:45,backgroundColor:'#FF69B4',borderRadius:20,justifyContent:'center',marginRight:10}}
                                    onPress = {
                                      //console.log('hey')
                                      PostAPoll()
                                    }
                  >
                      <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Post</Text>
                  </TouchableOpacity>


*/}


<CustomRadioButtonListView options = {
               [
                            {
                name:'gokul',
                id:1,
                state:false
              },
              {
                name:'krishnan',
                id:2,
                state:false
              },
              {
                name:'ajith',
                id:3,
                state:false
              },
                
            ]
            }/>

function CustomRadioButtonListView({ options }) {
  const [myopt,setmyopt] = useState(options)
  return (
    <View style = {{justifyContent:'center', alignContent:'center',padding:10}}>{/*container*/}

    <FlatList
      data = {myopt}
      renderItem = {
        ({
          item
        }) => (

            <View style ={{height:35,flexDirection:'row'}}>
              <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
                <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                                  onPress = {() =>
                                    {
                                      let newopt = [...options]
                                      let key
                                      for(key in newopt)
                                      {
                                        if(item.id == newopt[key]['id'])
                                        {
                                          newopt[key]['state'] = true
                                        }
                                        else
                                        {
                                          newopt[key]['state'] = false
                                        }
                                      }
                                      setmyopt([...newopt])
                                    }
                                  }
                                  >{/*outerRadius*/}
                  {item.state &&
                    <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
                    </View>
                  }
                </TouchableOpacity>
              </View>

              <View style ={{height:35,justifyContent:'center',flex:1}}>
                  <Text style={{marginLeft:5}}>{item.name}</Text>
              </View>                                      
            </View>
        )
      }
    />
    </View>
  );
}




function CustomViewForPoll({navigation,initialParams})
{
  console.log(initialParams)
  return(
    <View style={styles.container}>
    
      <FlatList
        keyExtractor = {(item) => item.id}
        data = {initialParams}
        renderItem = {({item}) => (
          <View style = {styles.card} >          
            <View style={{flex:1}}>
            <View style= {{flex:1,alignContent:'center',justifyContent:'center'}}>
            <Text style = {styles.text} >{item.question}</Text>


            <CustomRadioButtonListView options = {
               [
                            {
                name:'gokul',
                id:1,
                state:false
              },
              {
                name:'krishnan',
                id:2,
                state:false
              },
              {
                name:'ajith',
                id:3,
                state:false
              },
                
            ]
            }/>
            

            </View>
              <View style = {{flex:1,flexDirection:'row',height : 45,marginTop:5}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                 <Image
                  style={{width:25,height:25,}}
                  source = {require('./src/image/speech-bubble.png')}        
                />
                  <Text style={{paddingLeft:3}}>25+</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                 <Image
                  style={{width:25,height:25,}}
                  source = {require('./src/image/share.png')}        
                />
                  <Text style={{paddingLeft:3}}>25+</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                 <Image
                  style={{width:25,height:25,}}
                  source = {require('./src/image/statistics.png')}        
                />
                  <Text style={{paddingLeft:3}}>25+</Text>
                </View>
                <TouchableOpacity style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}                       
                          onPress = {() => {
                            navigation.navigate('SelectedToVote',{'item':item})}}
                          >
                  <Text >More</Text>
                  <Image
                    style={{width:20,height:20,padding:3}}
                    source = {require('./src/image/arrow-point-to-right.png')}        
                  />
                </TouchableOpacity>
              </View>            
            </View>
          </View>
        )}
      />
    </View>
  )
}





function CustomViewForPoll({navigation,initialParams})
{
  const [option,setoption] = useState()

  function changer(params) {
    console.log(params)
  }
  return(
    <View style={styles.container}>

      <FlatList
        data = {initialParams}
        renderItem = {({item}) => (
          <View style = {styles.card} >          
            <View style={{flex:1}}>
            <View style= {{flex:1,alignContent:'center',justifyContent:'center'}}>
            <Text style = {styles.text} >{item.question}</Text>
            {setoption(item.options)}
            {console.log(option)}
            <View style = {{justifyContent:'center', alignContent:'center',padding:10}}>{/*container*/}
            {
              option.map(value =>
                    (
                      <View style ={{height:35,flexDirection:'row'}}>
                        <View style ={{height:35,width:24,justifyContent:'center',alignContent:'center'}}>
                          <TouchableOpacity style={{height:20,width:20,borderRadius:20,borderColor:'black',borderWidth:2,justifyContent:'center',alignContent:'center'}}
                                            onPress = {() =>
                                              {



                                                let newopt = [...options]
                                                let key
                                                for(key in newopt)
                                                {
                                                  if(value.id == newopt[key]['id'])
                                                  {
                                                    newopt[key]['state'] = true
                                                  }
                                                  else
                                                  {
                                                    newopt[key]['state'] = false
                                                  }
                                                }
                                                setmyopt([...newopt])


                                              }
                                            }
                                            >{/*outerRadius*/}
                            {value.state &&
                              <View style={{height:9,width:9,borderRadius:9,backgroundColor:'black',borderColor:'red',marginLeft: "auto",marginRight: "auto"}}>{/*innerRadius*/}
                              </View>
                            }
                          </TouchableOpacity>
                        </View>

                        <View style ={{height:35,justifyContent:'center',flex:1}}>
                            <Text style={{marginLeft:5}}>{value.name}</Text>
                        </View>                                      
                      </View>
                      
                    ))
            }
            
              </View>

            </View>
              <View style = {{flex:1,flexDirection:'row',height : 45,marginTop:5}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                 <Image
                  style={{width:25,height:25,}}
                  source = {require('./src/image/speech-bubble.png')}        
                />
                  <Text style={{paddingLeft:3}}>25+</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                 <Image
                  style={{width:25,height:25,}}
                  source = {require('./src/image/share.png')}        
                />
                  <Text style={{paddingLeft:3}}>25+</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                 <Image
                  style={{width:25,height:25,}}
                  source = {require('./src/image/statistics.png')}        
                />
                  <Text style={{paddingLeft:3}}>25+</Text>
                </View>
                <TouchableOpacity style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}                       
                          onPress = {() => {

                            console.log("bby")
                            if(option == undefined)
                            {
                              Alert.alert("without voting u cant go more")
                            }
                            else{
                              console.log("gkbuddy" ,option,item)
                              navigation.navigate('SelectedToVote',{'item':item})
                              setoption(undefined)
                              }
                              }
                            }
                          >
                  <Text >More</Text>
                  <Image
                    style={{width:20,height:20,padding:3}}
                    source = {require('./src/image/arrow-point-to-right.png')}        
                  />
                </TouchableOpacity>
              </View>            
            </View>
          </View>
        )}
      />
    </View>
  )
}
