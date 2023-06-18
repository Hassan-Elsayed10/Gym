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
} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, images} from '../../constants';
const {width, height} = Dimensions.get('screen');

export default class Newpass extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      passworderr: '',
      re_password: '',
      re_password_err: '',
      icon: true,
      re_icon: true,
    };
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* -------------- */}
          <Image source={images.Logo3} style={styles.logostyle} />
          <Text style={styles.signtext}>Enter your new password</Text>
          {/* -------pass---------- */}
          <View style={[styles.inputstyle, {marginTop: '15%'}]}>
            <Hoshi
              label={'Password'}
              borderColor={COLORS.primary}
              style={{
                width: '100%',
              }}
              borderHeight={2}
              labelStyle={{
                color: COLORS.primary,
              }}
              inputStyle={{color: '#000', textAlign: 'left'}}
              secureTextEntry={this.state.icon}
              value={this.state.password}
              onChangeText={value => {
                this.setState({password: value});
              }}
            />

            <TouchableOpacity
              onPress={() => {
                let x = this.state.icon;
                this.setState({icon: !x});
              }}
              style={{
                position: 'absolute',
                top: '50%',
                right: 10,
              }}>
              <Icon
                name={this.state.icon ? 'eye-slash' : 'eye'}
                size={20}
                color={'#acabab'}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.error_mes}>{this.state.passworderr}</Text>

          {/* -------re_pass---------- */}
          <View style={styles.inputstyle}>
            <Hoshi
              label={'Re-enter Password'}
              borderColor={COLORS.primary}
              style={{
                width: '100%',
              }}
              borderHeight={2}
              labelStyle={{
                color: COLORS.primary,
              }}
              inputStyle={{color: '#000', textAlign: 'left'}}
              secureTextEntry={this.state.re_icon}
              value={this.state.re_password}
              onChangeText={value => {
                this.setState({re_password: value});
              }}
            />

            <TouchableOpacity
              onPress={() => {
                let x = this.state.re_icon;
                this.setState({re_icon: !x});
              }}
              style={{
                position: 'absolute',
                top: '50%',
                right: 10,
              }}>
              <Icon
                name={this.state.re_icon ? 'eye-slash' : 'eye'}
                size={20}
                color={'#acabab'}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.error_mes}>{this.state.re_password_err}</Text>

          {/* ------------ */}
          <TouchableOpacity
            style={styles.signbutton}
            onPress={() => {
              this.Check_Validation();
            }}>
            <Text style={styles.textbutton}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  logostyle: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: '10%',
  },
  signtext: {
    fontWeight: '700',
    fontSize: 25,
    color: '#000',
    alignSelf: 'center',
    marginTop: '10%',
  },
  inputstyle: {
    width: '90%',
    height: 60,
    marginHorizontal: '5%',
    marginBottom: 10,
  },
  signbutton: {
    width: '60%',
    height: 55,
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%',
  },
  textbutton: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
});
