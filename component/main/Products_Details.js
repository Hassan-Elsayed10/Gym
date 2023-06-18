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

export default class Products_Details extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />

        {/* -------------- */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: '90%',
              height: 250,
              margin: '5%',
              borderRadius: 10,
              borderWidth: 1,
            }}>
            <Image
              source={images.Empty}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              width: '90%',
              marginHorizontal: '5%',
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 22, color: '#000'}}>
              Skirt
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}>
              <Text
                style={{
                  color: COLORS.primary,
                  fontWeight: 'bold',
                  fontSize: 17,
                }}>
                Price 10$
              </Text>
              <Text style={{fontWeight: 'bold', color: '#000'}}>100KKKAL</Text>
            </View>
            <Text style={{marginTop: 10, color: '#000'}}>
              Take your style to a new level by wearing this Pant. It has been
              tailored with premium quality fabric, which will feel soft against
              your skin. Ideal for any casual occasion.
            </Text>
          </View>
        </ScrollView>
        {/* ------------------------------------------ */}
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            backgroundColor: COLORS.primary,
            margin: '5%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({});
