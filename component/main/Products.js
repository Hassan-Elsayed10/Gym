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

export default class Products extends Component {
  constructor() {
    super();
    this.state = {
      Products: [
        {
          price: '370$',
          image: images.Empty,
        },
        {
          price: '150$',
          image: images.Empty,
        },
        {
          price: '500$',
          image: images.Empty,
        },
        {
          price: '300$',
          image: images.Empty,
        },
        {
          price: '270$',
          image: images.Empty,
        },
        {
          price: '370$',
          image: images.Empty,
        },
        {
          price: '500$',
          image: images.Empty,
        },
        {
          price: '300$',
          image: images.Empty,
        },
      ],
    };
  }

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
            }}
            onPress={() => {
              this.props.navigation.navigate('Profile');
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

        {/* -------------- */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 18}}>
            Products
          </Text>
          <View
            style={{
              width: '90%',
              marginHorizontal: '5%',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 20,
              marginBottom: 50,
            }}>
            {this.state.Products.map((item, index) => {
              return (
                <View
                  style={{
                    width: '48%',
                    height: 170,
                    backgroundColor: '#fff',
                    marginBottom: 25,
                    borderRadius: 5,
                    elevation: 5,
                  }}>
                  <Text
                    style={{
                      marginVertical: 3,
                      marginHorizontal: 10,
                      color: '#000',
                    }}>
                    {item.price}
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: '80%',
                      height: '60%',
                      alignSelf: 'center',
                      //   marginTop: 15,
                    }}
                    onPress={() => {
                      this.props.navigation.navigate('Products_Details');
                    }}>
                    <Image
                      source={item.image}
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 5,
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginTop: 3,
                      fontWeight: 'bold',
                      color: '#000',
                      marginLeft: 10,
                    }}>
                    Skirt
                  </Text>
                  <Text
                    style={{fontWeight: 'bold', color: '#000', marginLeft: 10}}>
                    Price 10$
                  </Text>

                  <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.primary,
                      width: 30,
                      height: 30,
                      position: 'absolute',
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      bottom: 5,
                      right: 5,
                    }}>
                    <Icon name="plus" size={18} color={'#fff'} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
        {/* ------------------------------------------ */}
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            backgroundColor: COLORS.primary,
            position: 'absolute',
            marginHorizontal: '5%',
            borderRadius: 10,
            bottom: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: '10%',
          }}
          onPress={() => {
            this.props.navigation.navigate('Cart');
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>
            Show the Cart
          </Text>
          <Icon name="shopping-cart" size={20} color={'#fff'} />
        </TouchableOpacity>
        {/* ------bottom-------- */}
        {/* <View
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
          <TouchableOpacity>
            <Icon name="user-o" size={28} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="calendar" size={28} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="gear" size={28} color={'#fff'} />
          </TouchableOpacity>
        </View> */}
      </>
    );
  }
}
