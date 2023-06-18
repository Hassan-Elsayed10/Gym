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

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      My_Cart: [
        {
          image: images.Empty,
          name: 'Skirt',
          description: 'Take your style to a new level',
          new_price: '1.0',
          old_price: '1.5',
          counter: 5,
        },
        {
          image: images.Empty,
          name: 'Skirt',
          description: 'Take your style to a new level',
          new_price: '1.0',
          old_price: '1.5',
          counter: 5,
        },
        {
          image: images.Empty,
          name: 'Skirt',
          description: 'Take your style to a new level',
          new_price: '1.0',
          old_price: '1.5',
          counter: 5,
        },
        {
          image: images.Empty,
          name: 'Skirt',
          description: 'Take your style to a new level',
          new_price: '1.0',
          old_price: '1.5',
          counter: 5,
        },
        {
          image: images.Empty,
          name: 'Skirt',
          description: 'Take your style to a new level',
          new_price: '1.0',
          old_price: '1.5',
          counter: 5,
        },
        {
          image: images.Empty,
          name: 'Skirt',
          description: 'Take your style to a new level',
          new_price: '1.0',
          old_price: '1.5',
          counter: 5,
        },
        {
          image: images.Empty,
          name: 'Skirt',
          description: 'Take your style to a new level',
          new_price: '1.0',
          old_price: '1.5',
          counter: 5,
        },
        {
          image: images.Empty,
          name: 'Skirt',
          description: 'Take your style to a new level',
          new_price: '1.0',
          old_price: '1.5',
          counter: 3,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
        {/* -------------- */}
        <Text style={styles.title}>My Cart</Text>
        {/* -- */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.My_Cart.map((item, index) => {
            return (
              <View style={styles.container}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.container_image}>
                    <Image source={item.image} style={styles.image_style} />
                  </View>
                  <View style={{marginLeft: 10, marginTop: 5}}>
                    <Text
                      style={{fontWeight: 'bold', color: '#000', fontSize: 16}}>
                      {item.name}
                    </Text>
                    <Text style={{color: '#000'}}>{item.description}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.click}>
                    <TouchableOpacity style={styles.icon}>
                      <Icon name="minus" size={10} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={{color: '#000'}}>{item.counter}</Text>
                    <TouchableOpacity style={styles.icon}>
                      <Icon name="plus" size={10} color={'#fff'} />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.price}>
                    <Text style={{fontWeight: 'bold', color: '#000'}}>
                      JOD {item.new_price}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#C40D15',
                        textDecorationLine: 'line-through',
                      }}>
                      JOD {item.old_price}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
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
              }}
            >
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Confirm and payment
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    margin: '5%',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  container: {
    width: '90%',
    height: 90,
    //   backgroundColor: 'yellow',
    marginHorizontal: '5%',
    marginBottom: 20,
  },
  container_image: {
    width: '20%',
    height: 60,
    //   backgroundColor: 'red',
    borderRadius: 10,
    elevation: 5,
    marginLeft: 5,
  },
  image_style: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  click: {
    width: '23%',
    // backgroundColor:"red",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  icon: {
    width: 22,
    height: 22,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    width: '35%',
    //   backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
