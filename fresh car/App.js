import  React, { useState ,useRef,useEffect }from 'react';
import QRCode from 'react-qr-code'
import { AppRegistry,Button,Image,View,TextInput,Text,ScrollView,Linking, Alert, TouchableHighlight,secureTextEntry, ImageBackground} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Directions } from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MapView,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import { BarCodeScanner } from 'expo-barcode-scanner';





 
const Stack =createStackNavigator();
function HomeScreen({ navigation }) {
 
  
  
  return (
   
    <Stack.Navigator >
      <Stack.Screen name="admin_use_only" component={AdminScreend}/>
      <Stack.Screen name="admin_use_only..." component={AdminScreen2d}/>
      <Stack.Screen name="admin_use_only...." component={AdminScreen3d}/>
      
      </Stack.Navigator>
   
  
  )
}

function AdminScreenc({ navigation }) {

  const [name1,setName]=useState('default');
  const [name2,setcarno]=useState('default');
  const [name3,setacno]=useState('dafault');
  const [name4,setpsword]=useState('dafault');
  
  
  return (
   
    <ScrollView style={{flex: 1,top:80,backgroundColor:'wheat'}}>
     
     <View><Text style={{color:'red',left:20}}>[There is no connection between service Center and this App.So Don't payment Anymore.Name is used for reference only].</Text></View>
      <View style={{height:30,width:90,top:20}}><Button  onPress={() => navigation.openDrawer()} title="MENU"color="#841584"/></View>
       <Text style={{fontSize:20,color:"green",left:90,}}>Internet Must Be ON Condition</Text>
      <Text style={{ fontWeight: 'bold',
        fontSize: 25,
        top:40,
        width: 200,
        height: 100,
        marginLeft:30,
        justifyContent: 'center',
        alignItems: 'center',
        
        color:'maroon'}}>SIVA Auto Carriage Sathyamangalam</Text>
        
       <TextInput 
       style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginLeft:20,marginTop:80}}
  
       placeholder="customer name"
       onChangeText={(val)=>setName(val)}
       />
       <TextInput 
       style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginLeft:20,marginTop:20}}
  
       placeholder="car number"
       onChangeText={(val)=>setcarno(val)}
       />
       <TextInput 
       style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginLeft:20,marginTop:20}}
  
       placeholder="account number"
       onChangeText={(val)=>setacno(val)}
       />
       <TextInput 
       style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginLeft:20,marginTop:20}}
  
       placeholder="Mobile number"
       onChangeText={(val)=>setpsword(val)}
       />
       <Text style={{left:40,color:'green',top:50}}>After enter the details </Text>
<View style={{marginLeft:45,marginTop:60}}>
<QRCode
      value={name1}
      value={name2}
      value={name3}
      value={name4}
    />
</View>
<Text style={{left:40,color:'green',top:10}}>Take screen shot of Qr code</Text>
<View><Image style={{height:90,right:30,width:400,top:70}}source={{uri:'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GooglePay_Lockup.max-1200x1200.png'}}/><View style={{width:170,height:70,left:110}}><Button onPress={ ()=>{ Linking.openURL('https://pay.google.com')}}title="RS.499/-" color="#841584"/></View></View>
<View><Image style={{height:120,right:30,width:400,top:70}}source={{uri:'https://qph.fs.quoracdn.net/main-qimg-a1cdb6d9b7396b0ab1c80c008fa27a63'}}/><View style={{top:10,width:170,height:70,left:110,}}><Button onPress={ ()=>{ Linking.openURL('https://www.phonepe.com/')}}title="RS.499/-"color="#841584" /></View></View>
<View><Image style={{height:120,right:30,width:400,top:70}}source={{uri:'https://img.icons8.com/plasticine/2x/paytm.png'}}/><View style={{top:10,width:170,height:70,left:110,}}><Button onPress={ ()=>{ Linking.openURL('https://paytm.com/')}}title="RS.499/-"color="#841584" /></View></View>
   <Text style={{color:'red',fontSize:20,fontWeight:'bold',left:10,top:50}}>[It for Demo purpose Only Don't Payment anymore]</Text>
    <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text> 
    
    </ScrollView>
   

   
  );
}


function AdminScreen2c({ navigation }) {

  
  
  
  return (
   
    <ScrollView style={{flex: 2,top:80}}>
     
     
      <View style={{height:30,width:90}}><Button  onPress={() => navigation.openDrawer()} title="MENU"color="#841584"/></View>
    
      <Text style={{ fontWeight: 'bold',
        fontSize: 18,
        top:30,
        width: 200,
        height: 80,
        marginLeft:30,
        justifyContent: 'center',
        alignItems: 'center',
       
        color:'red'}}>SIVA Auto Carriage Details</Text>
        
       <View style={{width:130}}><Text style={{fontSize:30,fontWeight:"bold",color:"navy"}}>Address:</Text></View><View><Text style={{fontSize:20}}>No. 3, E.V.K. Sampath Road,{'\n'}Karungalpalayam, {'\n'}Erode - 638003
     
        </Text></View >
         
         <View style={{width:230}}><Text  style={{fontSize:30,fontWeight:"bold",color:"navy"}}>Working Hours:</Text></View><View>
          <Text style={{fontSize:20}}>Monday :- 9:30 Am - 8:00 Pm{'\n'}Tuesday :- 9:30 Am - 8:00 Pm{'\n'}
Wednesday  :- 9:30 Am - 8:00 Pm{'\n'}
Thursday  :- 9:30 Am - 8:00 Pm{'\n'}
Friday    :- 9:30 Am - 8:00 Pm{'\n'}
Saturday :- 9:30 Am - 8:00 Pm{'\n'}
Sunday   :- Closed</Text></View>
    
<View style={{width:130}}><Text style={{fontSize:30,fontWeight:"bold",color:"navy"}}>Contact:</Text></View><Text style={{fontSize:20,color:"orange"}}
selectable>
        6374794516{'\n'}
        
        </Text>
<Text style={{fontSize:10,color:"red"}}
>
        (for copyrights problem we didn't show service center contact number){'\n'}
        
        </Text>
        <Text style={{fontSize:30,fontWeight:"bold",color:"navy"}}>location is marked Already  in MAP{'\n'}</Text>
        <MapView
        style={{width:500,height:500}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude:11.347871,
          longitude:77.721433,
          latitudeDelta: 0.0922,
          longitudeDelta:0.0421,
        }}>
        <Marker coordinate={{ latitude:11.347871,
          longitude:77.721433,}}/>
        
        </MapView> 
    
    </ScrollView>
   

   
  );
}
function AdminScreend({ navigation }) {
  const [name2,setcarno]=useState("default");
 
  
  
  return (
    <ImageBackground
    style={{flex:1,resizeMode:"cover",top:40}}
    source={{uri:"https://images.wallpaperscraft.com/image/auto_car_sports_138451_800x1200.jpg"}}
 >
   <View style={{ flex: 1,top:80}}>
   <Text style={{color:"green",left:30}}>Always turn on your Internet while using this App</Text>
     <View style={{height:30,width:90,marginLeft:40,top:20}}><Button onPress={() => navigation.openDrawer()} title="MENU"color="#841584"/>
    
    
    <TextInput style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginTop:50}}
 
 placeholder="user name"


 />
    
       
    <TextInput style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginTop:50}}
 
 placeholder="password"
 secureTextEntry={true}
 onChangeText={(val)=>setcarno(val)}
 
 ></TextInput>
 <View style={{width:290}}><Text style={{color:'white',fontSize:20}}>Demo purpuse only we reveal</Text><Text style={{color:'pink'}}>user name  :Anything{'\n'}password   :sribalaji999</Text></View>

    {name2==="sribalaji999"?(
    <View style={{height:30,width:90,marginLeft:80,marginTop:100}}>
   
    <Button onPress={()=>navigation.navigate('admin_use_only...')}title="submit"></Button>
    
    </View>
    ):(
      <View style={{height:30,width:90,marginLeft:80,marginTop:100}}>
   
      <Button onPress={()=>navigation.navigate('admin_use_only....')}title="submit"></Button>
      
      </View>
    )}
    
     </View>
     </View>
  
     </ImageBackground>
   
 );
}

   

   
  
function AdminScreen2d({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`${data}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{  flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink'}}>
        <Text
        style={{color:"maroon",fontSize:30,}}>Scan Customer Screen shot Qr code</Text>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{width:500,height:500}}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

 
function AdminScreen3d({ navigation }) {
  
  alert('Enter the correct password' );
    return (
      <View><Text style={{color:"green",fontSize:50,marginLeft:20,marginTop:70,fontWeight:"bold"}}>Go Back and Refill It...</Text></View>
    )
 
    
    
  
}

function AdminScreen3c({ navigation }) {

  
  
  
  return (
   
    <ScrollView style={{flex: 2,top:80}}>
     
     
      <View style={{height:30,width:90}}><Button  onPress={() => navigation.openDrawer()} title="MENU"color="#841584"/></View>
    
      <Text style={{ fontWeight: 'bold',
        fontSize: 18,
        top:30,
        width: 200,
        height: 80,
        marginLeft:30,
        justifyContent: 'center',
        alignItems: 'center',
       
        color:'red'}}>SIVA Auto Carriage Facilities</Text>
        <Text  style={{fontSize:20,fontWeight:'bold',color:"navy"}}>Siva Auto Service Centre in E.V.K. Sampath Road, Erode</Text>
       <Text>Siva Auto Service Centre in Erode. Car Repair  Services with Address, Contact Number, Photos, Maps. View Siva Auto Service Centre, Erode on Justdial.

A retailer cum service provider, Siva Auto Service Centre in E.V.K. Sampath Road, Erode is in the business of automotive products as well as full-scale automotive services. This establishment offers comprehensive car and bike care across the city through its wide network, comprising of multiple stores and mobile vehicles. Find a vast range of automotive products such as tyres, batteries, alloy wheels, oil, accessories and genuine parts for cars, two-wheelers and commercial vehicles. Run by professionals in a professional manner, this dealer looks to deliver beyond expectations when providing world-class products and services to their customers day in and day out. It employs a proficient and competent team of sales personnel and technicians, who uphold this firm's commitment towards offering impeccable services. In Erode, this car service agent is situated on the E.V.K. Sampath Road. Find it with ease E.V.K. Sampath Road. Undoubtedly it is one of the best car repair  services in E.V.K. Sampath Road, Erode.</Text>
    <Image style={{width:350,height:400}}source={{uri:'https://content3.jdmagicbox.com/comp/def_content/car_repair_and_services_hyundai_authorised/default-car-repair-and-services-hyundai-authorised-10-250.jpg'}}/>
    <Text  style={{fontSize:20,fontWeight:'bold',color:"navy"}}>Products and Services offered at Siva Auto Service Centre
    </Text>
    <Text>Being a retailer cum full-service automotive dealer, Siva Auto Service Centre in E.V.K. Sampath Road offers a myriad of automotive products and services. The products available here include tyres, batteries, alloy wheels, oils, accessories and genuine parts for cars, two-wheelers and commercial vehicles. They also deal in the genuine products of leading manufacturers including Bridgestone, Michelin, Yokohama, Goodyear, Apollo, CEAT, Amaron, Exide, Mobil, Shell, Motul, 3M, Hella, Bosch, Sparco, Neo, Tiara, Maruti Suzuki, Tata, Ford,  Mahindra, Honda, Yamaha, Suzuki, TVS and Royal Enfield. The service offerings include wash and detailing, paint and body shop, wheel alignment, balancing, polishing, painting, service and repairs, tubeless repair, nitrogen fill-up and top-up{'\n'}</Text>
    
    <Image style={{width:350,height:400}}source={{uri:'https://4.imimg.com/data4/LB/EG/MY-24096464/air-compressor-250x250.jpg'}}/>
    <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
    </ScrollView>
   

   
  );
}
function AdminScreenb({ navigation }) {
  const [name1,setName]=useState('default');
  const [name2,setcarno]=useState('default');
  const [name3,setacno]=useState('dafault');
  const [name4,setpsword]=useState('dafault');
  
  
  

  return (
   
    <ScrollView style={{flex:1,top:80,backgroundColor:'wheat'}}>
     
     <View><Text style={{color:'red',left:20}}>[There is no connection between service Center and this App.So Don't payment Anymore.Name is used for reference only].</Text></View>
      <View style={{height:30,width:90,top:20}}><Button  onPress={() => navigation.openDrawer()} title="MENU"color="#841584"/></View>
      <Text style={{fontSize:20,color:"green",left:90,}}>Internet Must Be ON Condition</Text>
      <Text style={{ fontWeight: 'bold',
        fontSize: 25,
        top:30,
        width: 200,
        height: 80,
        marginLeft:30,
        justifyContent: 'center',
        alignItems: 'center',
       
        color:'maroon'}}>Carzone Auto Works Erode</Text>
       
        <TextInput 
       style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginLeft:20,marginTop:20}}
  
       placeholder="customer name"
       onChangeText={(val)=>setName(val)}
       />
       <TextInput 
       style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginLeft:20,marginTop:20}}
  
       placeholder="car number"
       onChangeText={(val)=>setcarno(val)}
       />
       <TextInput 
       style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginLeft:20,marginTop:20}}
  
       placeholder="account number"
       onChangeText={(val)=>setacno(val)}
       />
       <TextInput 
       style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginLeft:20,marginTop:20}}
  
       placeholder="mobile number"
       onChangeText={(val)=>setpsword(val)}
       />
       
<View style={{marginLeft:45,marginTop:30}}>
 
<QRCode
      value={name1}
      value={name2}
      value={name3}
      value={name4}
    />

   
    
     
    
    </View>
    <Text style={{left:40,color:'green',top:10}}>Take screen shot of Qr code</Text>
<View><Image style={{height:90,right:30,width:400,top:50}}source={{uri:'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GooglePay_Lockup.max-1200x1200.png'}}/><View style={{width:170,height:70,left:110}}><Button onPress={ ()=>{ Linking.openURL('https://pay.google.com')}}title="RS.499/-"color="#841584" /></View></View>
<View><Image style={{height:120,right:30,width:400,top:50}}source={{uri:'https://qph.fs.quoracdn.net/main-qimg-a1cdb6d9b7396b0ab1c80c008fa27a63'}}/><View style={{top:10,width:170,height:70,left:110}}><Button onPress={ ()=>{ Linking.openURL('https://www.phonepe.com/')}}title="RS.499/-"color="#841584" /></View></View>
<View><Image style={{height:120,right:30,width:400,top:50}}source={{uri:'https://img.icons8.com/plasticine/2x/paytm.png'}}/><View style={{top:10,width:170,height:70,left:110}}><Button onPress={ ()=>{ Linking.openURL('https://paytm.com/')}}title="RS.499/-" color="#841584"/></View></View>
   <Text style={{color:'red',fontSize:30,fontWeight:'bold',left:10}}>[It for Demo purpose Only Don't Payment anymore]</Text>
    <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text> 
    

    </ScrollView>
     
   
  );
  
}


function AdminScreen2b({ navigation }) {

  
  
  
  return (
   
    <ScrollView style={{flex: 2,top:80}}>
     
     
      <View style={{height:30,width:90}}><Button  onPress={() => navigation.openDrawer()} title="MENU"color="#841584"/></View>
    
      <Text style={{ fontWeight: 'bold',
        fontSize: 18,
        top:30,
        width: 200,
        height: 80,
        marginLeft:30,
        justifyContent: 'center',
        alignItems: 'center',
       
        color:'red'}}>Carzone Auto Works Details</Text>
            
       <View style={{width:130}}><Text style={{fontSize:30,fontWeight:"bold",color:"navy"}}>Address:</Text></View >
          < Text style={{fontSize:20}}>No 267, Covai Main Road Sathyamangalam, Rangasamudram, Erode - 638402, Near Old RTO Office.</Text>
        
        <View><Text Text  style={{fontSize:30,fontWeight:"bold",color:"navy"}}>Functional Time</Text>< Text  style={{fontSize:20}}>
        
Monday:- Open 24 Hrs{'\n'}
Tuesday:- Open 24 Hrs{'\n'}
Wednesday:- Open 24 Hrs {'\n'}
Thursday:- Open 24 Hrs{'\n'}
Friday:- Open 24 Hrs{'\n'}
Saturday:- Open 24 Hrs{'\n'}
Sunday:- Open 24 Hrs{'\n'}</Text></View>

<View style={{width:130}}><Text style={{fontSize:30,fontWeight:"bold",color:"navy"}}>Contact:</Text></View><Text style={{fontSize:20,color:"orange"}}
selectable>
        6374794516{'\n'}
        
        </Text>
<Text style={{fontSize:10,color:"red"}}
>
        (for copyrights problem we didn't show service center contact number){'\n'}
        
        </Text>
        <Text style={{fontSize:30,fontWeight:"bold",color:"navy"}}>Location already marked in MAP{'\n'}</Text>
        
<MapView
        style={{width:500,height:500}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude:11.504887,
          longitude:77.238455,
          latitudeDelta: 0.0922,
          longitudeDelta:0.0421,
        }}>
        <Marker coordinate={{ latitude:11.504887,
          longitude:77.238455,}}/>
        
        </MapView>     
    
     
    
    </ScrollView>
   

   
  );
}
function AdminScreen3b({ navigation }) {

  
  
  
  return (
   
    <ScrollView style={{flex: 2,top:80}}>
     
     
      <View style={{height:30,width:90}}><Button  onPress={() => navigation.openDrawer()} title="MENU"color="#841584"/></View>
    
      <Text style={{ fontWeight: 'bold',
        fontSize: 18,
        top:30,
        width: 200,
        height: 80,
        marginLeft:30,
        justifyContent: 'center',
        alignItems: 'center',
       
        color:'red'}}>Carzone Auto Works Facilities</Text>
     <View><Text style={{fontSize:20,fontWeight:'bold',color:"navy"}}>
        Car Zone Auto Service
          </Text>
          </View>
        <Text>
        Car Zone Auto Service in Erode is one of the leading businesses in the Car Repair Services. Also known for Car Repair  Services, Tyre Dealers, Garages, Car Repair Services-Toyota, Car Repair Services-Ford, Car Repair  Services-Hyundai, Car Repair  Services-Mahindra, Car Repair  Services-Honda and much more. Find Address, Contact Number, Reviews  Ratings, Photos, Maps of Car Zone Auto Service, Erode.

A retailer cum service provider, Car Zone Auto Service in Rangasamudram, Erode is in the business of automotive products as well as full-scale automotive services since 2009. This establishment offers comprehensive car and bike care across the city through its wide network, comprising of multiple stores and mobile vehicles. Find a vast range of automotive products such as tyres, batteries, alloy wheels, oil, accessories and genuine parts for cars, two-wheelers and commercial vehicles. Run by professionals in a professional manner, this dealer looks to deliver beyond expectations when providing world-class products and services to their customers day in and day out. It employs a proficient and competent team of sales personnel and technicians, who uphold this firm's commitment towards offering impeccable services. In Erode, this car service agent is situated on the Covai Main Road Sathyamangalam. Find it with ease Near Old RTO Office. Undoubtedly it is one of the best car repair  services in Rangasamudram, Erode.
        </Text>
        <Image style={{width:350,height:400}}source={{uri:'https://cdn.himkhoj.com/uploads/2020/06/auto-work-by-default-img-272x300.jpg'}}/>
        <View><Text style={{fontSize:20,fontWeight:'bold',color:"navy"}}>
        Products and Services offered at Car Zone Auto Service
          </Text>
          </View>
        <View><Text>Being a retailer cum full-service automotive dealer, Car Zone Auto Service in Rangasamudram offers a myriad of automotive products and services. The products available here include tyres, batteries, alloy wheels, oils, accessories and genuine parts for cars, two-wheelers and commercial vehicles. They also deal in the genuine products of leading manufacturers including Bridgestone, Michelin, Yokohama, Goodyear, Apollo, CEAT, Amaron, Exide, Mobil, Shell, Motul, 3M, Hella, Bosch, Sparco, Neo, Tiara, Maruti Suzuki, Tata, Ford, Mahindra  Mahindra, Honda, Yamaha, Suzuki, TVS and Royal Enfield. The service offerings include wash and detailing, paint and body shop, wheel alignment, balancing, polishing, painting, service and repairs, tubeless repair, nitrogen fill-up and top-up. It is operational from 00:00 - 23:59 from Monday to Sunday.{'\n'}</Text></View>
        <Image style={{width:350,height:400}}source={{uri:'https://5.imimg.com/data5/XT/DO/MY-2038697/hydraulic-car-washing-lift-500x500.jpg'}}/>

        <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
       
    
     
    

       
    
     
    
    </ScrollView>
   

   
  );
}
function AdminScreena({ navigation }) {
  const [name1,setName]=useState('default');
  const [name2,setcarno]=useState('default');
  const [name3,setacno]=useState('dafault');
  const [name4,setpsword]=useState('dafault');
  
  
  
  
  return (
   
    <ScrollView style={{flex:1,top:80,backgroundColor:"wheat"}}>
     
     <View><Text style={{color:'red',left:20}}>[There is no connection between service Center and this App.So Don't payment Anymore.Name is used for reference only].</Text></View>
    
      <View style={{height:30,width:90,top:20}}><Button  onPress={() => navigation.openDrawer()} title="MENU"color="#841584"/></View>
      <Text style={{fontSize:20,color:"green",left:90,}}>Internet Must Be ON Condition</Text>
      <Text style={{ fontWeight: 'bold',
        fontSize: 25,
        top:30,
        width: 200,
        height: 80,
        marginLeft:30,
        justifyContent: 'center',
        alignItems: 'center',
       
        color:'maroon'}}>Jaya Auto Works Erode</Text>
           <TextInput 
       style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginLeft:20,marginTop:20}}
  
       placeholder="customer name"
       onChangeText={(val)=>setName(val)}
       />
       <TextInput 
       style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginLeft:20,marginTop:20}}
  
       placeholder="car number"
       onChangeText={(val)=>setcarno(val)}
       />
       <TextInput 
       style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginLeft:20,marginTop:20}}
  
       placeholder="account number"
       onChangeText={(val)=>setacno(val)}
       />
       <TextInput 
       style={{fontSize:30,height:40,width:250,backgroundColor:'white',borderWidth:2,marginLeft:20,marginTop:20}}
  
       placeholder="Mobile number"
       onChangeText={(val)=>setpsword(val)}
       />
<View style={{marginLeft:45,marginTop:30}}>
<QRCode
      value={name1}
      value={name2}
      value={name3}
      value={name4}
    />
       </View>
    
       <Text style={{left:40,color:'green',top:10}}>Take screen shot of Qr code</Text>
<View><Image style={{height:90,right:30,width:400,top:50}}source={{uri:'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GooglePay_Lockup.max-1200x1200.png'}}/><View style={{width:170,height:70,left:110}}><Button onPress={ ()=>{ Linking.openURL('https://pay.google.com')}}title="RS.499/-" color="#841584"/></View></View>
<View><Image style={{height:120,right:30,width:400,top:50}}source={{uri:'https://qph.fs.quoracdn.net/main-qimg-a1cdb6d9b7396b0ab1c80c008fa27a63'}}/><View style={{top:10,width:170,height:70,left:110}}><Button onPress={ ()=>{ Linking.openURL('https://www.phonepe.com/')}}title="RS.499/-"color="#841584" /></View></View>
<View><Image style={{height:120,right:30,width:400,top:50}}source={{uri:'https://img.icons8.com/plasticine/2x/paytm.png'}}/><View style={{top:10,width:170,height:70,left:110}}><Button onPress={ ()=>{ Linking.openURL('https://paytm.com/')}}title="RS.499/-" color="#841584"/></View></View>
   <Text style={{color:'red',fontSize:30,fontWeight:'bold',left:10}}>[It for Demo purpose Only Don't Payment anymore]</Text>
    <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text> 
    
    
    </ScrollView>
   

   
  );
}

function HomeScreenn({ navigation }) {
 
  
  
  return (
   
    <ImageBackground
    style={{flex:1,resizeMode:"cover",top:40}}
    source={{uri:"https://assets.wallpapersin4k.org/uploads/2017/03/4k-Wallpapers-For-Mobile-9.jpg"}}>
     
     
      <View style={{height:60,width:230,top:40,left:70}}><Button  onPress={() => navigation.openDrawer()} title="MENU"color="#841584"/></View>
      <Text style={{color:"maroon",top:40,left:30}}>Always turn on your Internet while using this App</Text>
      <Image style={{width:190,height:250,top:50,left:95}}source={{uri:'https://nptel.ac.in/content/college_assets/college_logo/781_logo.jpg'}}></Image>
    <View  ><Text
     style={{fontStyle:'italic',top:70,color:"cyan",fontSize:40}}>
     Welcome To My App</Text><Text  style={{fontStyle:'italic',top:70,color:"cyan",fontSize:40,textDecorationLine:"line-through",textDecorationColor:'green'}}>lication</ Text></View>
     <Text style={{fontSize:30,color:"orchid",fontWeight:"bold",top:90}}>Car service online booking</Text>
       
        <Text style={{top:140,left:40,color:"blue"}}>Demo Project by</Text>
        <Text style={{top:160,left:80,color:"orange"}}>M.Sri Balaji{'\n'}19CSR190{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
       
        
    
     
    
    </ImageBackground>
   

   
  );
}

function AdminScreen2a({ navigation }) {

  
  
  
  return (
  <ScrollView style={{flex: 2,top:80}}>
     
     
    <View style={{height:30,width:90}}><Button  onPress={() => navigation.openDrawer()} title="MENU"color="#841584"/></View>
  
    <Text style={{ fontWeight: 'bold',
      fontSize: 18,
      top:30,
      width: 200,
      height: 80,
      marginLeft:30,
      justifyContent: 'center',
      alignItems: 'center',
     
      color:'red'}}>Jaya Auto Works Details</Text>
     
        
          <Text style={{fontSize:30,fontWeight:"bold",color:"navy"}}>Address</Text>
          <Text style={{fontSize:20}}>No 294/2, Veerappampalayam Road, Thindal Erode, Erode - 638012, Opposite Jailaxmi Auto Work </Text>
      
        <Text style={{fontSize:30,fontWeight:"bold",color:"navy"}}>Running Periods</Text>
        <Text style={{fontSize:20}}>Monday :	9:00 AM – 7:00 PM{'\n'}
Tuesday :	9:00 AM – 7:00 PM{'\n'}
Wednesday :	9:00 AM – 7:00 PM{'\n'}
Thursday :	9:00 AM – 7:00 PM{'\n'}
Friday :	9:00 AM – 7:00 PM{'\n'}
Saturday :	9:00 AM – 7:00 PM{'\n'}
Sunday :	Closed</Text>
<View style={{width:130}}><Text style={{fontSize:30,fontWeight:"bold",color:"navy"}}>Contact:</Text></View><Text style={{fontSize:20,color:"orange"}}
selectable>
        6374794516{'\n'}
        
        </Text>
<Text style={{fontSize:10,color:"red"}}
>
        (for copyrights problem we didn't show service center contact number){'\n'}
        
        </Text>
        <Text style={{fontSize:30,fontWeight:"bold",color:"navy"}}>Location already marked in MAP{'\n'}</Text>


<MapView
        style={{width:500,height:500}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude:11.329549,
          longitude:77.686823,
          latitudeDelta: 0.0922,
          longitudeDelta:0.0421,
        }}>
        <Marker coordinate={{ latitude:11.329549,
          longitude:77.686823,}}/>
        
        </MapView>
      
        </ScrollView>
       
    
     
    
    
   

   
  );
}

function AdminScreen3a({ navigation }) {

  
  
  
  return (
   
    <ScrollView style={{flex: 2,top:80}}>
     
     
      <View style={{height:30,width:90}}><Button  onPress={() => navigation.openDrawer()} title="MENU"color="#841584"/></View>
    
      <Text style={{ fontWeight: 'bold',
        fontSize: 18,
        top:30,
        width: 200,
        height: 80,
        marginLeft:30,
        justifyContent: 'center',
        alignItems: 'center',
       
        color:'red'}}>Jaya Auto Work Facilitites</Text>
        <View><Text style={{fontSize:20,fontWeight:'bold',color:"navy"}}>
       Jaya Zone Auto Service
          </Text>
          </View>
        <Text>jaya Auto Works in Erode is one of the leading businesses in the Car Repair  Services. Also known for Car Repair & Services, Garages, Car Repair & Services-Ford, 24 Hours Car Repair & Services, Tractor Repair & Services-Eicher, Tractor Repair & Services, Car Body Repair & Services and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of jaya Auto Works, Erode.

A retailer cum service provider, jaya Auto Works in Thindal, Erode is in the business of automotive products as well as full-scale automotive services since 2004. This establishment offers comprehensive car and bike care across the city through its wide network, comprising of multiple stores and mobile vehicles. Find a vast range of automotive products such as tyres, batteries, alloy wheels, oil, accessories and genuine parts for cars, two-wheelers and commercial vehicles. Run by professionals in a professional manner, this dealer looks to deliver beyond expectations when providing world-class products and services to their customers day in and day out. It employs a proficient and competent team of sales personnel and technicians, who uphold this firm's commitment towards offering impeccable services. In Erode, this car service agent is situated on the Veerappampalayam Road. Find it with ease Opposite Jailaxmi Auto Works Chinnasengodampalyam. Undoubtedly it is one of the best car repair & services in Thindal, Erode.</Text>
<Image style={{width:350,height:400}}source={{uri:'https://5.imimg.com/data5/TestImages/ET/EA/KE/SELLER-7661984/service-station-equipment-250x250.jpg'}}/>
   <View><Text style={{fontSize:20,fontWeight:'bold',color:"navy"}}>Products and Services offered at jaya Auto Works</Text></View>    
    <Text>Being a retailer cum full-service automotive dealer, jaya Auto Works in Thindal offers a myriad of automotive products and services. The products available here include tyres, batteries, alloy wheels, oils, accessories and genuine parts for cars, two-wheelers and commercial vehicles. They also deal in the genuine products of leading manufacturers including Bridgestone, Michelin, Yokohama, Goodyear, Apollo, CEAT, Amaron, Exide, Mobil, Shell, Motul, 3M, Hella, Bosch, Sparco, Neo, Tiara, Maruti Suzuki, Tata, Ford, Mahindra & Mahindra, Honda, Yamaha, Suzuki, TVS and Royal Enfield. The service offerings include wash and detailing, paint and body shop, wheel alignment, balancing, polishing, painting, service and repairs, tubeless repair, nitrogen fill-up and top-up. It is operational from 00:00 - 23:59 from Monday to Sunday{'\n'}</Text>
     
    <Image style={{width:350,height:400}}source={{uri:'https://5.imimg.com/data5/EY/RY/MY-2435853/high-pressure-car-washer-pump-500x500.jpg'}}/>
    <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
    </ScrollView>
   

   
  );
}



const Tab= createBottomTabNavigator();
function NotificationsScreen({ navigation }) {
 

  
  
  
  return (
    
    
  <Tab.Navigator
 
    tabBarOptions={{
      activeTintColor: "white",
      activeBackgroundColor: "black",
   
      labelStyle: {
        fontSize:15
      }
      
      
    }}
    
   
 >
              
          
              <Tab.Screen name="Plan" component={AdminScreenc}/>
            <Tab.Screen name="Details" component={AdminScreen2c}/>
            <Tab.Screen name="Facilities" component={AdminScreen3c}/>
            
    
  </Tab.Navigator>



  );
}
function Notifications12Screen({ navigation }) {
 

  
  
  
  return (
    
    
  <Tab.Navigator
  tabBarOptions={{
    activeTintColor: "white",
    activeBackgroundColor: "black",
 
    labelStyle: {
      fontSize:15
    }
    
    
  }}>
              
            <Tab.Screen name="Plan " component={AdminScreenb}/>
    
            <Tab.Screen name="Datails" component={AdminScreen2b}/>
            <Tab.Screen name="Facilities" component={AdminScreen3b}/>
            
    
  </Tab.Navigator>



  );
}
function Notifications123Screen({ navigation }) {
 

  
  
  
  return (
    
    
  <Tab.Navigator
  tabBarOptions={{
    activeTintColor: "white",
    activeBackgroundColor: "black",
 
    labelStyle: {
      fontSize:15
    }
    
    
  }}>
              
            <Tab.Screen name="Plan" component={AdminScreena}/>
            <Tab.Screen name="Details" component={AdminScreen2a}/>
            <Tab.Screen name="Facilities" component={AdminScreen3a}/>
            
    
            
    
  </Tab.Navigator>



  );
}
const Drawer = createDrawerNavigator();

export default function App() {
 
  return (
   
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">

        <Drawer.Screen name="Welcome" component={HomeScreenn} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="SIVA Auto Carriage" component={NotificationsScreen} />
        <Drawer.Screen name="Carzone Auto Service" component={Notifications12Screen} />
        <Drawer.Screen name="Jaya Auto Works" component={Notifications123Screen} />
      </Drawer.Navigator>
        
     </NavigationContainer>
      
  );
 
}
