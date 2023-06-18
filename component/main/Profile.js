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

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
        {/* -------Header------- */}
        <View style={styles.headercontainer}>
          <TouchableOpacity style={styles.barstyle}>
            <Icon name="bars" size={28} color={COLORS.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.locationcontainer}>
            <Icon name="bell" size={28} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        {/* -------------- */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={images.About_Gym}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 10,
              marginBottom: '20%',
              color: '#000',
            }}>
            Seif ElDeen Wael
          </Text>
          {/* -- */}
          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              marginHorizontal: '5%',
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: 'center',
              paddingHorizontal: '5%',
              marginBottom: 5,
            }}
            onPress={() => {
              this.props.navigation.navigate('Subscription');
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
              Subscription
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              marginHorizontal: '5%',
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: 'center',
              paddingHorizontal: '5%',
              marginBottom: 5,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
              Notifications
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              marginHorizontal: '5%',
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: 'center',
              paddingHorizontal: '5%',
              marginBottom: 5,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              marginHorizontal: '5%',
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: 'center',
              paddingHorizontal: '5%',
              marginBottom: 5,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>Rate the App</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              marginHorizontal: '5%',
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: 'center',
              paddingHorizontal: '5%',
              marginBottom: 5,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>My Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '90%',
              height: 50,
              marginHorizontal: '5%',
              borderRadius: 10,
              borderWidth: 1,
              justifyContent: 'center',
              paddingHorizontal: '5%',
              marginBottom: 5,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>Setting</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* ------bottom-------- */}
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Heart');
            }}>
            <Icon name="heart" size={28} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Gymnastics');
            }}>
            <Image source={images.Dumbbell2} style={{width: 28, height: 28}} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}>
            <Icon name="user-o" size={28} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="calendar" size={28} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="gear" size={28} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    // backgroundColor: 'green',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  barstyle: {
    width: '10%',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationcontainer: {
    width: '10%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomcontainer: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
