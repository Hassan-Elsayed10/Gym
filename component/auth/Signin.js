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
} from 'react-native';
import {Hoshi} from 'react-native-textinput-effects';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, images} from '../../constants';
const {width, height} = Dimensions.get('screen');

const userInfo = {email: 'admin@gmail.com', password: '123456'};

export default class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailerr: '',
      password: '',
      passworderr: '',
      icon: true,
    };
  }

  async Check_Validation() {
    if (this.state.email == '' && this.state.password == '') {
      // alert("You Don't Enter Any email or password");
      ToastAndroid.showWithGravityAndOffset(
        "You Don't Enter Any email or password",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else if (this.state.email == '') {
      // alert('You Shoud Enter your mail.');
      ToastAndroid.showWithGravityAndOffset(
        'You Shoud Enter your mail',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else if (this.state.password == '') {
      // alert('You Shoud Enter your password.');
      ToastAndroid.showWithGravityAndOffset(
        'You Shoud Enter your password',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } else if (this.state.email != '' && this.state.pass != '') {
      if (
        userInfo.email === this.state.email &&
        userInfo.password === this.state.password
      ) {
        // alert('بيانات  صحيحه');
        ToastAndroid.showWithGravityAndOffset(
          'Correct data',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
        await AsyncStorage.setItem('isLoggedIn', '1');
        this.props.navigation.navigate('Homepage');
      } else if (
        userInfo.email !== this.state.email ||
        userInfo.password !== this.state.password
      ) {
        ToastAndroid.showWithGravityAndOffset(
          'Your email or password is wrong',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      }
    } else {
      alert('Your email or Password is wrong');
    }
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* -------------- */}
          <Image source={images.Logo3} style={styles.logostyle} />
          <Text style={styles.signtext}>Sign In</Text>
          {/* -------email---------- */}
          <View style={[styles.inputstyle, {marginTop: '10%'}]}>
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
          {/* ------------ */}
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
              this.Check_Validation();
            }}>
            <Text style={styles.textbutton}>Sign In</Text>
          </TouchableOpacity>
          {/* ------------ */}
          <TouchableOpacity style={{alignSelf: 'center', marginBottom: 10}}
           onPress={()=>{
            this.props.navigation.navigate("Forgotpass")
          }}
          >
            <Text style={styles.forgetstyle}>Forget password</Text>
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
    fontSize: 28,
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
  orstyle: {
    fontWeight: '700',
    fontSize: 20,
    color: COLORS.primary,
    alignSelf: 'center',
    marginVertical: '5%',
  },
  iconhome: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    marginHorizontal: '10%',
    marginBottom: '5%',
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
    marginVertical: '5%',
  },
  textbutton: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
  },
  forgetstyle: {
    fontWeight: '500',
    color: COLORS.primary,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  error_mes: {
    textAlign: 'center',
    color: 'red',
    fontSize: 14,
    fontWeight: '800',
  },
});
