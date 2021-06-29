function Customheader({title,isHome,navigation,category})
{ 
  const switchfeeds = category[0]['category']
  const switchpoll = category[0]['category'] + 'News'
  const [feed,dispatch] = useReducer(reducer,isShow)
  const isPollContextContext = useContext(isPollContext)
  return (
      <View >
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
        value= {feed}  
        onValueChange ={(switchValue)=>{
          if(feed)
              {
                isPollContextContext.navigation.navigate(switchfeeds)
              }
          else{
            isPollContextContext.navigation.navigate(switchpoll)
              }
            dispatch(feed)
          }}/>  
       
      <View style ={{flex:1.5,justifyContent:'center'}}>
        <Text style = {{textAlign:'center'}}>poll</Text>
      </View>
      
      </View>
    </View>        
      </View>
  )
}



class NotificationsScreenbefore extends Component {
    constructor () {
      super();
      this.state = {
        counter: []
      };
    }
    tryImage()
    {
      axios.get('http://192.168.1.5:5000/api/polls/getPollDetails/subcategory')
           .then( response => {
             const data = response.data
             if(data.valid != 20)
             {
               console.log("entered condition")
               this.addTo(data.data)
               console.log("written into list ")
               this.tryImage()
             }
             else
             {
               console.log("downloaded successfully....")
             }
          })
          .catch(error =>
            {
              console.log("i am in error page")
              console.log(error)
            })
    }
    addTo (data) {
      this.setState({
        counter: [...this.state.counter,data] 
      });
    }
    render () {
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
                  <CustomRadioButtonListView options = {peoplenews.options} navigation = {navigation} item = {peoplenews}/>
                </View>
                </View>
              </View>
            )}
          />
        </View>
          );
      }
  }



  class NotificationsScreen_forImageOneAfterOther extends Component {
    constructor () {
      super();
      this.state = {
        counter: []
      };
    }
    tryImage()
    {
      axios.get('http://192.168.1.5:5000/api/polls/getPollDetails/subcategory')
           .then( response => {
             const data = response.data
             if(data.valid != 20)
             {
               console.log("entered condition")
               this.addTo(data.data)
               console.log("written into list ")
               this.tryImage()
             }
             else
             {
               console.log("downloaded successfully....")
             }
          })
          .catch(error =>
            {
              console.log("i am in error page")
              console.log(error)
            })
    }
    addTo (data) {
      this.setState({//doing2
        counter: [...this.state.counter,data]
      });
    }
    render () {
      return(
        <View
          style  = {styles.checker}
        >
          <TouchableOpacity
            onPress = {()=>{
              this.tryImage()
              console.log("prior")
            }}
          >
              <Text style = {{textAlign:'center',marginTop:30}}>Get Images</Text>
          </TouchableOpacity>

        <ScrollView>
          {
            this.state.counter.map(item =>(
              <Image source = {{uri: 'data:image/jpeg;base64, ' + item}} style = {{width:300,height:400,borderColor:'gray',marginTop:10,borderWidth:5,resizeMode:'contain',padding:10,marginLeft:30,}}/>               
              ))
          }
          </ScrollView>
        </View>
      );
      }
  }



  

  class NotificationsScreen_workedWithManyNumbersCorrectly_true extends Component {
    constructor () {
      super();
      this.state = {
        counter: []
      };
    }
    tryImage()
    {
      axios.get('http://192.168.1.5:5000/api/polls/getPollDetails/subcategory')
           .then( response => {
             const data = response.data
             if(data.data != 2)
             {
               console.log("entered condition")
               console.log(data.data)
               this.addTo(data.data)
               console.log("written into list ")
               this.tryImage()
             }
             else
             {
               console.log("downloaded successfully....")
             }
          })
          .catch(error =>
            {
              console.log("i am in error page")
              console.log(error)
            })
    }
    addTo (data) {
      this.setState({
        counter: [...this.state.counter,data]
      });
    }
    render () {
      return(
        <View
          style  = {styles.checker}
        >
          <TouchableOpacity
            onPress = {()=>{
              this.tryImage()
              console.log("prior")
            }}
          >
              <Text style = {{textAlign:'center',marginTop:30}}>Get Images</Text>
          </TouchableOpacity>

        <ScrollView>
          {
            this.state.counter.map(item =>(
              
              <View><Text>{item}</Text></View>))
          }
          </ScrollView>
        </View>
      );
      }
  }
  function NotificationsScreen_func()
  {//doing
    var list = []

    const [avatarSource,setavatarSource] = useState([1,2,3])
    function addTo(data) {
      console.log("i am writting..")
        setavatarSource(
          [...avatarSource,data]
        )
    }
    function tryImage()
    {
      axios.get('http://192.168.1.5:5000/api/polls/getPollDetails/subcategory')
           .then( response => {
             const data = response.data
             if(data.data != 2)
             {
               console.log("entered condition")
               console.log(data.data)
               addTo(data.data)
               console.log("written into list ")
             }
             else
             {
               console.log("downloaded successfully....")
             }
          })
          .catch(error =>
            {
              console.log("i am in error page")
              console.log(error)
            })
    }
    return(
      <View
        style  = {styles.checker}
      >
        <TouchableOpacity
          onPress = {()=>{
            tryImage()
            console.log("prior")
          }}
        >
            <Text style = {{textAlign:'center',marginTop:30}}>Get Images</Text>
        </TouchableOpacity>

      <ScrollView>
        {
          avatarSource.map(item =>(
            <View><Text>{item}</Text></View>))
        }
        </ScrollView>
      </View>
    );
  }





  function NotificationsScreen_forSingleImage()
  {
    var list = []

    const [avatarSource,setavatarSource] = useState([])

    function tryImage()
    {
      axios.get('http://192.168.1.5:5000/api/polls/getPollDetails/subcategory')
           .then( response => {
             const data = response.data
             if(data)
             {
               console.log("entered condition")
               setavatarSource([data.data])
               console.log("written into list ")
             }
             else
             {
               console.log("downloaded successfully....")
             }
          })
          .catch(error =>
            {
              console.log("i am in error page")
              console.log(error)
            })
    }

    return(
      <View
                style  = {styles.checker}
      >


      <TouchableOpacity
        onPress = {()=>{
          console.log("prior")
          tryImage()
          //        <Image source = {{uri: 'data:image/jpeg;base64, ' + avatarSource}} style = {{width:300,height:400,borderColor:'gray',marginTop:10,borderWidth:5,resizeMode:'contain',padding:10,marginLeft:30,}}/>

        }}//%%
      >

                <Text style = {{textAlign:'center',marginTop:30}}>Get Images</Text>

      </TouchableOpacity>

      <ScrollView>
        {
          avatarSource.map(item =>(
            <Image source = {{uri: 'data:image/jpeg;base64, ' + item}} style = {{width:300,height:400,borderColor:'gray',marginTop:10,borderWidth:5,resizeMode:'contain',padding:10,marginLeft:30,}}/>

          ))
        }
        </ScrollView>






      </View>


    );
  }


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
  
   
  



  function VoteScreenVoteScreen({route,navigation})
{
  const isPollContextContext = useContext(isPollContext)
  const [vote,setvote] = useState(true)
  return(
    <TouchableOpacity 
    onPress = {()=>{
      navigation.goBack()
    }}>
      <Text>hello world!</Text>
      
    </TouchableOpacity>
  )
}

function voteS({route,navigation})
{

  const isPollContextContext = useContext(isPollContext)
  const [vote,setvote] = useState(true)
  return(
    <TouchableOpacity 
    onPress = {()=>{
      navigation.navigate('samp')
    }}>
      <Text>hello world!</Text>
      
    </TouchableOpacity>
  ) 
}


function Samp({route,navigation})
{

  const isPollContextContext = useContext(isPollContext)
  const [vote,setvote] = useState(true)
  return(
    <TouchableOpacity 
    onPress = {()=>{
      navigation.dispatch(CommonActions.goBack())    }}>
      <Text>here it is samp</Text>
      
    </TouchableOpacity>
  )
}



function CreatePollToggleScreen({route,navigation}) 
{
      return (  
        <SafeAreaView style={{flexDirection:'column',flex:1}}>
            <View style={{flexDirection:'row',flex:1}}>
                <TouchableOpacity style={{flex: 1, justifyContent: 'center', marginLeft:20 }}
                                  onPress={() => navigation.goBack()}//!
                                  >  
                  <Image
                  style={{width:25,height:25,marginLeft:5}}
                  source = {require('./src/image/close.png')}
                />
                </TouchableOpacity>  
                <View style={{flex: 1,justifyContent:'center'}}>  
                  
                  <TouchableOpacity style={{height:45,width:100,marginLeft:57,backgroundColor:'#FF1493',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'white',fontWeight:'bold',fontSize:17}}>Post</Text>
                  </TouchableOpacity>
                </View>  
            </View>  
          </SafeAreaView> 
      )
} 



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
