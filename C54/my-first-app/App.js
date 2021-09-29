import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';



export default class App extends Component {
  render() {
    return (
      <view style={{marginTop: 150}}>
      <Text style={{marginTop:80 ,marginLeft:120,color:"blue",fontSize: 25}}>My first App</Text>
      <br/>            
      <Button color= "pink" title="press me" onPress={()=> Alert.alert("hey....lets begin !!")} /> 
      <br/>
      <Button color= "green" title="press me"/>  
      <br/>
      <Button color= "yellow" title="press me"/> 
      </view>
    );
  }
}