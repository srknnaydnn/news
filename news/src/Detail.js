import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Alert } from 'react-native';
import { Container, Content } from 'native-base';
import NetInfo from "@react-native-community/netinfo";



class Detail extends Component {
    
  render() {
      const {url}=this.props.route.params
      NetInfo.addEventListener(state => {
     
      
        if(!state.isInternetReachable){
          Alert.alert('ağ bağlantısını kontol ediniz...')
        }
      });
    return (
   
             <WebView
              source={{ uri: url }}
            
             />
       

    );
  }
}
export default Detail