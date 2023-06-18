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

export default class Aboutgym extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    let name = this.props.route.params.name;
    this.setState({
      name,
    });
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
          <View
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: '5%',
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: COLORS.primary,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}>
              <Icon name="check" size={40} color={'#fff'} />
            </View>
            <Image
              source={images.About_Gym}
              style={{width: 150, height: 150, borderRadius: 100}}
            />
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#000'}}>Club x GYM</Text>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>About Club</Text>
            <View
              style={{
                width: '30%',
                height: 5,
                backgroundColor: '#762dc4',
                marginBottom: 10,
              }}
            />
            <Text style={{fontWeight: '400', marginBottom: 10, color: '#000'}}>
              {this.state.name} was founded in 1992 by the famous coach and
              winner of several Arab awards, Coach Yassin Jado. The club
              graduated several coaches with distinguished expertise and still
              provides the best exercises and training.
            </Text>
            <TouchableOpacity
              style={{
                width: '60%',
                height: 50,
                backgroundColor: COLORS.primary,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}
              onPress={() => {
                this.props.navigation.navigate('Connect');
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                Connect with us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '60%',
                height: 50,
                backgroundColor: COLORS.primary,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                Subscription details
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '60%',
                height: 50,
                backgroundColor: COLORS.primary,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                Rate this place
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: '60%',
                height: 50,
                backgroundColor: COLORS.primary,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
              }}
              onPress={() => {
                this.props.navigation.navigate('Products');
              }}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
                Products
              </Text>
            </TouchableOpacity>
          </View>
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
