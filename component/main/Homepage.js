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

export default class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      Data: [
        {
          image:
            'https://www.shutterstock.com/image-photo/modern-light-gym-sports-equipment-260nw-721723381.jpg',
          title: 'Sports clubs',
          description:
            'You will find the best clubs and near you with the best promotions',
          Gym_Data: [
            {
              name: 'X GYM Club',
              desc: 'A specialized club, the latest machines and the strongest trainers',
            },
            {
              name: 'Y GYM Club',
              desc: 'A specialized club, the latest machines and the strongest trainers',
            },
            {
              name: 'Z GYM Club',
              desc: 'A specialized club, the latest machines and the strongest trainers',
            },
          ],
        },
        {
          image:
            'https://nsmc.partners.org/cmslibrary/nsmc/images/Nutrition/Nutrition.jpg',
          title: 'Nutrition clinics',
          description:
            'You will find the best nutrition clinics near you with the best prices, discounts and offers',
          Gym_Data: [
            {
              name: 'X fitness clinic',
              desc: 'Clinic specialized in healthy nutrition and suitable for people',
            },
            {
              name: 'Y fitness clinic',
              desc: 'Clinic specialized in healthy nutrition and suitable for people',
            },
            {
              name: 'Z fitness clinic',
              desc: 'Clinic specialized in healthy nutrition and suitable for people',
            },
          ],
        },
        {
          image:
            'https://img.freepik.com/free-photo/medical-assistant-helping-patient-with-physiotherapy-exercises_23-2149071499.jpg',
          title: 'Physiotherapy clinics',
          description:
            'You will find the best physiotherapy clinics, according to the evaluation, the best prices and exclusive offers',
          Gym_Data: [
            {
              name: 'X Physiotherapy Clinic',
              desc: 'Clinic specialized in healthy nutrition and suitable for people',
            },
            {
              name: 'Y Physiotherapy Clinic',
              desc: 'Clinic specialized in healthy nutrition and suitable for people',
            },
            {
              name: 'Z Physiotherapy Clinic',
              desc: 'Clinic specialized in healthy nutrition and suitable for people',
            },
          ],
        },
        {
          image:
            'https://www.euruni.edu/blog/wp-content/uploads/brooke-lark-229136.jpg',
          title: 'Healthy food restaurants',
          description:
            'You will find the best healthy food restaurants near you and your best prices and offers',
          Gym_Data: [
            {
              name: 'X Healthy food restaurants',
              desc: 'A restaurant specialized in making healthy food',
            },
            {
              name: 'Y Healthy food restaurants',
              desc: 'A restaurant specialized in making healthy food',
            },
            {
              name: 'Z Healthy food restaurants',
              desc: 'A restaurant specialized in making healthy food',
            },
          ],
        },
        {
          image:
            'https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?cs=srgb&dl=pexels-anna-shvets-3962294.jpg&fm=jpg',
          title: 'Shops',
          description: 'Browse thousands of your products and the best offers',
          Gym_Data: [
            {
              name: 'X Healthy food restaurants',
              desc: 'A store specialized in all natural and healthy products',
            },
            {
              name: 'Y Healthy food restaurants',
              desc: 'A store specialized in all natural and healthy products',
            },
            {
              name: 'Z Healthy food restaurants',
              desc: 'A store specialized in all natural and healthy products',
            },
          ],
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
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.Data.map((item, index) => {
            return (
              <>
                <TouchableOpacity
                  style={{
                    width: '90%',
                    height: 100,
                    marginHorizontal: '5%',
                    // backgroundColor: 'yellow',
                    borderRadius: 10,
                    marginBottom: 20,
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('Gymtybe', {
                      image: item.image,
                      title: item.title,
                      // Data: item.Gym_Data
                    });
                    // alert(JSON.stringify(item.Gym_Data));
                  }}>
                  <ImageBackground
                    source={{
                      uri: item.image,
                      // uri: 'https://www.shutterstock.com/image-photo/modern-light-gym-sports-equipment-260nw-721723381.jpg',
                    }}
                    style={{width: '100%', height: '100%'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 24,
                        color: '#fff',
                        paddingLeft: '5%',
                      }}>
                      {item.title}
                    </Text>
                    <Text style={{color: '#fff', paddingLeft: '5%'}}>
                      {item.description}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </>
            );
          })}
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
