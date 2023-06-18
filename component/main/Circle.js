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
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {COLORS, images} from '../../constants';
const {width, height} = Dimensions.get('screen');

export default class Circle extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
        {/* -------Header------- */}
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 50,
            // backgroundColor: 'green',
            paddingHorizontal: '5%',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <TouchableOpacity
            style={{
              width: '10%',
              //   backgroundColor: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="bars" size={28} color={COLORS.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '75%',
              //   backgroundColor: 'yellow',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={{fontWeight: '700', fontSize: 18, color: '#000'}}>
              Seif ElDeen Wael
            </Text>
            <Icon
              name="user-circle-o"
              size={28}
              color={COLORS.primary}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '10%',
              //   backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="bell" size={28} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        {/* -------------- */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: '90%',
              height: 300,
              backgroundColor: '#DDDDDD',
              marginHorizontal: '5%',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                marginTop: 10,
                marginBottom: 20,
              }}>
              Daily Training
            </Text>
            <AnimatedCircularProgress
              size={200}
              width={15}
              fill={80}
              tintColor={COLORS.primary}
              onAnimationComplete={() => console.log('onAnimationComplete')}
              backgroundColor="#C0C2C8"
              style={{alignSelf: 'center'}}>
              {fill => (
                // (<Icon name="bell" size={20} color={COLORS.primary} />),
                <Text style={{fontWeight: 'bold'}}>Jogging training</Text>
              )}
            </AnimatedCircularProgress>
            <View
              style={{
                width: '95%',
                height: 40,
                flexDirection: 'row',
                // backgroundColor: 'red',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: '2.5%',
              }}>
              <View
                style={{
                  // width: '50%',
                  backgroundColor: COLORS.primary,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 7  ,
                  height: 30,
                  flexDirection: 'row',
                }}>
                <Icon name="exclamation" size={15} color={'#fff'} />
                <Text style={{color: '#FFF'}}>a note on the training</Text>
              </View>
              <View
                style={{
                  // width: '30%',
                  backgroundColor: COLORS.primary,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 5,
                  height: 30,
                  flexDirection: 'row',
                }}>
                <Icon name="check" size={15} color={'#fff'} />
                <Text style={{color: '#FFF'}}>Completed</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginHorizontal: '5%',
              height: 150,
              marginTop: '10%',
              justifyContent: 'space-between',
              marginBottom:10
            }}>
            <TouchableOpacity
              style={{
                width: '45%',
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Image
                source={images.Foot}
                style={{width: '40%', height: '40%'}}
                resizeMode="contain"
              />

              <Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 18}}>
                All Exercises
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '45%',
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Image
                source={images.Fire}
                style={{width: '40%', height: '40%'}}
                resizeMode="contain"
              />

              <Text style={{marginTop: 5, fontWeight: 'bold', fontSize: 18}}>
                Next Exercises
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
