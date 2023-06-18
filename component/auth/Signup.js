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
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, images} from '../../constants';
const {width, height} = Dimensions.get('screen');

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      user_name: '',
      user_name_err: '',
      email: '',
      emailerr: '',
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
          <Image source={images.Logo3} style={styles.logostyle} />
          <Text style={[styles.signtext, {fontSize: 20, marginTop: '5%'}]}>
            Lets Start your fitness journey!
          </Text>
          <Text style={[styles.signtext, {marginTop: '5%'}]}>Sign Up</Text>
          {/* -------user_name---------- */}
          <View style={styles.inputstyle}>
            <Hoshi
              label={'User Name'}
              borderColor={COLORS.primary}
              style={{
                width: '100%',
              }}
              borderHeight={2}
              labelStyle={{
                color: COLORS.primary,
              }}
              inputStyle={{color: '#000', textAlign: 'left'}}
              value={this.state.user_name}
              onChangeText={value => {
                this.setState({email: value});
              }}
            />
          </View>
          <Text style={styles.error_mes}>{this.state.user_name_err}</Text>
          {/* -------email---------- */}
          <View style={styles.inputstyle}>
            <Hoshi
              label={'Email'}
              borderColor={COLORS.primary}
              style={{
                width: '100%',
              }}
              borderHeight={2}
              labelStyle={{
                color: COLORS.primary,
              }}
              inputStyle={{color: '#000', textAlign: 'left'}}
              value={this.state.email}
              onChangeText={value => {
                this.setState({email: value});
              }}
            />
          </View>
          <Text style={styles.error_mes}>{this.state.emailerr}</Text>
          {/* -------pass---------- */}
          <View style={styles.inputstyle}>
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

          {/* -------------------------------- */}
          <Text style={styles.orstyle}>or</Text>
          {/* ------------ */}
          <View style={styles.iconhome}>
            <TouchableOpacity>
              <Icon name="apple" size={45} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={images.Google} style={styles.iconimage} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={images.Facebook} style={styles.iconimage} />
            </TouchableOpacity>
          </View>
          {/* ------------ */}

          <TouchableOpacity
            style={styles.signbutton}
            onPress={() => {
            //   this.Check_Validation();
            }}>
            <Text style={styles.textbutton}>Sign Up</Text>
          </TouchableOpacity>
          {/* ------------ */}
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  logostyle: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: '5%',
  },
  signtext: {
    fontWeight: '700',
    fontSize: 28,
    color: '#000',
    alignSelf: 'center',
  },
  inputstyle: {
    width: '90%',
    height: 60,
    marginHorizontal: '5%',
  },
  error_mes: {
    textAlign: 'center',
    color: 'red',
    fontSize: 14,
    fontWeight: '800',
  },
  orstyle: {
    fontWeight: '700',
    fontSize: 20,
    color: COLORS.primary,
    alignSelf: 'center',
    marginBottom:"2%",
  },
  iconhome: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    marginHorizontal: '10%',
    marginBottom: '2%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconimage: {
    width: 40,
    height: 40,
  },
  signbutton: {
    width: '60%',
    height: 55,
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2%',
  },
  textbutton: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
});
