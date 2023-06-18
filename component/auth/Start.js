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
} from 'react-native';
import {COLORS, images} from '../../constants';
const {width, height} = Dimensions.get('screen');

export default class start extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={COLORS.primary} barStyle={'dark-content'} />
        <View style={styles.container}>
          <Image source={images.Logo3} style={styles.imagestyle} />
          <TouchableOpacity 
           onPress={()=>{
            this.props.navigation.navigate("Signup")
          }}
          style={styles.buttonstyle}>
            <Text style={styles.creattext}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.alreadystyle}
          onPress={()=>{
            this.props.navigation.navigate("Signin")
          }}
          >
            <Text
              style={styles.alreadytext}>
              Already have an account?
            </Text>
            <Text
              style={styles.logintext}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  imagestyle: {
    width: 250,
    height: height / 4,
    // resizeMode: "contain",
    marginTop: height / 4,
    alignSelf: 'center',
  },
  buttonstyle: {
    width: width / 1.4,
    height: height / 12,
    backgroundColor: '#FFF',
    marginTop: height / 4.5,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  creattext: {
    fontWeight: '700',
    fontSize: 20,
    color: COLORS.primary,
  },
  alreadystyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    marginTop: 15,
  },
  alreadytext:{
    fontWeight: '500',
    color: '#fffeff',
    fontSize: 16,
  },
  logintext:{
    fontWeight: '500',
    color: '#FFD600',
    fontSize: 16,
    marginLeft:10
  }
});
