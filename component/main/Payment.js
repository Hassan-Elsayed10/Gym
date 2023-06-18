import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ToastAndroid,
  AsyncStorage,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, images} from '../../constants';
const {width, height} = Dimensions.get('screen');

export default class Payment extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
        {/* -------------- */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Please select apayment method</Text>
          <Text
            style={{
              marginHorizontal: '5%',
              color: '#000',
              marginTop: 10,
              marginBottom: 20,
            }}>
            Please copy the transfer number and complete the transfer outside
            the application, then upload a copy of the payment receipt
          </Text>
          {/* -- */}
          <View
            style={{
              width: '90%',
              height: 100,
              backgroundColor: '#fff',
              marginHorizontal: '5%',
              borderRadius: 5,
              elevation: 5,
              flexDirection: 'row',
            }}>
            <View style={{width: '25%', height: '100%', marginLeft: 10}}>
              <Image
                source={images.Credit}
                style={{width: '100%', height: '100%', resizeMode: 'center'}}
              />
            </View>
            <View style={{marginTop: 10, marginLeft: 10}}>
              <Text style={{fontWeight: 'bold', color: '#000'}}>
                Pay via Vodafone Cash
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text
                  style={{fontWeight: 'bold', color: '#000', marginRight: 10}}>
                  01000220508
                </Text>
                <TouchableOpacity>
                  <Icon name="copy" size={16} color={'#000'} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  //   width: '100%',
                  height: 30,
                  backgroundColor: COLORS.primary,
                  borderRadius: 5,
                  marginTop: 5,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  paddingHorizontal: '5%',
                }}>
                <Text style={{color: '#fff'}}>Upload a receipt</Text>
                <Image source={images.Receipt} style={{ width: 25, height: 25 }} />

              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
         {/* ------------------------------- */}
         <View
          style={{
            width: '90%',
            marginHorizontal: '5%',
            // backgroundColor: 'red',
            height: 120,
            borderTopWidth: 1,
            borderColor: '#BEBBBB',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{fontWeight: 'bold', color: '#000'}}>Final Total</Text>
            <Text style={{fontWeight: 'bold', color: '#000'}}>40 JOD</Text>
          </View>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 50,
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 20,
            }}
            onPress={() => {
              this.props.navigation.navigate('Payment');
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Confirm 
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    marginTop: '5%',
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
});
