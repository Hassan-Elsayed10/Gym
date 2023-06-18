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

export default class Forgotpass extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailerr: '',
    };
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={images.Logo3} style={styles.logostyle} />
          <Text style={[styles.signtext, {fontSize: 20, marginTop: '5%'}]}>
            Ops you forgot your password
          </Text>
          <Text style={[styles.signtext, {fontSize: 20}]}>
            Lets get you back on Track!
          </Text>
          <Text style={[styles.signtext, {marginTop: '10%'}]}>
            Forgot password
          </Text>
          {/* -------email---------- */}
          <View style={styles.inputstyle}>
            <Hoshi
              label={'example@gmail.com'}
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
          {/* ---------------------- */}
          <TouchableOpacity
            style={styles.signbutton}
            onPress={() => {
            //   this.Check_Validation();
            }}>
            <Text style={styles.textbutton}>Send</Text>
          </TouchableOpacity>
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
    marginTop: '10%',
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
    marginVertical: '10%',
  },
  error_mes: {
    textAlign: 'center',
    color: 'red',
    fontSize: 14,
    fontWeight: '800',
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
