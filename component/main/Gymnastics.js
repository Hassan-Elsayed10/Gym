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

export default class Gymnastics extends Component {
  constructor() {
    super();
    this.state = {
      Exercies_Data: [
        {
          image: images.Empty,
          title: 'The first Training',
          first: 'The first step is to pay forward.',
          second: 'The second step is a squat jump.',
          third: 'The third step is a push up.',
        },
        {
          image: images.Empty,
          title: 'The second Training',
          first: 'The first step is to pay forward.',
          second: 'The second step is a squat jump.',
          third: 'The third step is a push up.',
        },
        {
          image: images.Empty,
          title: 'The third Training',
          first: 'The first step is to pay forward.',
          second: 'The second step is a squat jump.',
          third: 'The third step is a push up.',
        },
      ],
    };
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
        </View>
        {/* -------------- */}
        <TouchableOpacity style={styles.sportstyle}>
          <ImageBackground
            source={{
              // uri: item.image,
              uri: 'https://img.freepik.com/free-photo/medical-assistant-helping-patient-with-physiotherapy-exercises_23-2149071499.jpg',
            }}
            style={styles.groundstyle}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 24,
                color: '#fff',
              }}>
              Physiotherapy clinics
            </Text>
          </ImageBackground>
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 20,
            marginBottom: 10,
            color: '#000',
          }}>
          Daily scheduled exercises
        </Text>
        {/* ------------------------------------- */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.state.Exercies_Data.map((item, index) => {
            return (
              <>
                <View
                  style={{
                    width: '90%',
                    height: 150,
                    // backgroundColor: "green",
                    marginHorizontal: '5%',
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}>
                  <View
                    style={{
                      flex: 1.5,
                      //  backgroundColor: "yellow" ,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{fontWeight: 'bold', fontSize: 18, color: '#000'}}>
                      {item.title}
                    </Text>
                    <Text style={{color: '#000'}}>{item.first}</Text>
                    <Text style={{color: '#000'}}>{item.second}.</Text>
                    <Text style={{color: '#000'}}>{item.third}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      //  backgroundColor: "red",
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      style={{width: '95%', height: '80%', borderRadius: 5}}
                      onPress={() => {
                        this.props.navigation.navigate('Circle');
                      }}>
                      <Image
                        source={item.image}
                        style={{width: '100%', height: '100%', borderRadius: 5}}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        width: '50%',
                        height: '15%',
                        backgroundColor: COLORS.primary,
                        borderRadius: 10,
                        position: 'absolute',
                        bottom: 5,
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                        paddingHorizontal: '3%',
                      }}>
                      <Icon name="check" size={16} color={'#fff'} />
                      <Text style={{color: '#fff', fontWeight: 'bold'}}>
                        Finish
                      </Text>
                    </View>
                  </View>
                </View>
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
  sportstyle: {
    width: '90%',
    height: 100,
    marginHorizontal: '5%',
    // backgroundColor: 'yellow',
    borderRadius: 10,
    marginBottom: 20,
  },
  groundstyle: {
    width: '100%',
    height: '100%',
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
