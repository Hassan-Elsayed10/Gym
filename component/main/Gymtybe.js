import React, { Component } from 'react';
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
import { COLORS, images } from '../../constants';
const { width, height } = Dimensions.get('screen');

export default class Gymtybe extends Component {
  constructor() {
    super();
    this.state = {
      Gym_Data: [
        {
          name: "X GYM Club",
          desc: "A specialized club, the latest machines and the strongest trainers"
        },
        {
          name: "Y GYM Club",
          desc: "A specialized club, the latest machines and the strongest trainers"
        },
        {
          name: "Z GYM Club",
          desc: "A specialized club, the latest machines and the strongest trainers"
        },
        {
          name: "A GYM Club",
          desc: "A specialized club, the latest machines and the strongest trainers"
        },
        {
          name: "S GYM Club",
          desc: "A specialized club, the latest machines and the strongest trainers"
        },
        {
          name: "M GYM Club",
          desc: "A specialized club, the latest machines and the strongest trainers"
        },
      ],
      // Gym_data: [],
      image: '',
      title: ''
    }
  }


  componentDidMount() {
    // let Gym_data =JSON.parse(this.props.route.params.Gym_Data) 
    let image = this.props.route.params.image
    let title = this.props.route.params.title

    this.setState({
      image, title,
      // Gym_data
    })
    // alert(JSON.stringify(this.props.route.params))

  }


  render() {
    return (
      <>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
        {/* -------Header------- */}
        <View
          style={styles.headercontainer}>
          <TouchableOpacity
            style={styles.barstyle}>
            <Icon name="bars" size={28} color={COLORS.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.locationcontainer}
            onPress={() => {
              this.props.navigation.navigate('Gps');
            }}
            >
            <Text style={{ fontWeight: '700', fontSize: 18, color: '#000' }}>
              Cairo
            </Text>
            <Icon name="map-marker" size={32} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        {/* -------------- */}
        <TouchableOpacity
          style={styles.sportstyle}>
          <ImageBackground
            source={{
              uri: this.state.image
              // uri: item.image,
              // uri: 'https://www.shutterstock.com/image-photo/modern-light-gym-sports-equipment-260nw-721723381.jpg',
            }}
            style={styles.groundstyle}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 24,
                color: '#fff',
              }}>
              {this.state.title}
              {/* Sports clubs */}
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        {/* ------------------------------------- */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.Gym_Data.map((item, index) => {
            return (
              <>
                <TouchableOpacity style={{ width: "90%", height: 100, backgroundColor: "#f4f4f4", marginHorizontal: "5%", borderRadius: 10, borderWidth: 1, borderColor: "#b4b4b4", padding: "2%", marginBottom: 10 }}
                  onPress={() => {
                    this.props.navigation.navigate('Gymdetails', {
                      name: item.name,
                      image: this.state.image,
                    });
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: COLORS.primary }}>{item.name}</Text>
                  <Text style={{ fontWeight: "400", color: "#000" }}>{item.desc}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 5
                    }}>
                    <Icon name="map-marker" size={20} color={COLORS.primary} />
                    <Text style={{ fontWeight: '400', color: '#000', marginLeft: 10 }}>
                      Cairo
                    </Text>
                  </View>
                </TouchableOpacity>
              </>
            )
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


const styles = StyleSheet.create({
  headercontainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    // backgroundColor: 'green',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    marginBottom: 15,
  }, barstyle: {
    width: '10%',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }, locationcontainer: {
    width: '30%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  }, sportstyle: {
    width: '90%',
    height: 100,
    marginHorizontal: '5%',
    // backgroundColor: 'yellow',
    borderRadius: 10,
    marginBottom: 20,
  }, groundstyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }, bottomcontainer: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  }
})