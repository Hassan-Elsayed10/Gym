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

export default class Heart extends Component {
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
            <Text style={{fontWeight: '700', fontSize: 18, color: '#000'}}>
              Cairo
            </Text>
            <Icon name="map-marker" size={32} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        {/* -------------- */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              color: '#000',
            }}>
            ToDay
          </Text>
          <Text
            style={{alignSelf: 'center', fontWeight: 'bold', color: '#000'}}>
            Monday 03/06/2023
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              marginTop: '5%',
              color: '#000',
            }}>
            Total Calories
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              color: COLORS.primary,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            1200
          </Text>
          <View
            style={{
              width: '90%',
              height: 400,
              //  backgroundColor: "yellow",
              marginHorizontal: '5%',
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                //  backgroundColor: "red"
              }}>
              <View
                style={{
                  flex: 1,
                  // backgroundColor: "gray",
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
                  Steps
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: COLORS.primary,
                  }}>
                  6
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  //  backgroundColor: "red",
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
                  Water
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: COLORS.primary,
                  }}>
                  6
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  //  backgroundColor: "#fff",
                  alignItems: 'center',
                  //  justifyContent: "center"
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, marginTop: '40%',
                  color: '#000'}}>
                  Notes
                </Text>
                <Image
                  source={images.Pencil}
                  style={{width: '40%', height: '40%'}}
                  resizeMode="center"
                />
              </View>
            </View>
            <View
              style={{
                flex: 1.5,
                // backgroundColor: "blue"
              }}>
              <Image
                source={images.Heart}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flex: 1,
                //  backgroundColor: "green"
              }}>
              <View
                style={{
                  flex: 1,
                  //  backgroundColor: "gray",
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
                  Breakfast
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: COLORS.primary,
                  }}>
                  250
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  //  backgroundColor: "red",
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
                  Lunch
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: COLORS.primary,
                  }}>
                  250
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  //  backgroundColor: "#fff",
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
                  Dinner
                </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: COLORS.primary,
                  }}>
                  250
                </Text>
              </View>
            </View>
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
    width: '30%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
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
