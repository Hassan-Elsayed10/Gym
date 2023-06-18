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
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {COLORS, images} from '../../constants';
const {width, height} = Dimensions.get('screen');

export default class Verification extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* -------------- */}
          <Image source={images.Logo3} style={styles.logostyle} />
          <Text style={[styles.signtext, {marginTop: '10%'}]}>
            Please enter the
          </Text>
          <Text style={styles.signtext}>Verification code</Text>

          {/* ------------ */}

          <View
            style={{
              width: '90%',
              marginHorizontal: '5%',
              height: 50,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical:"15%"
              //   backgroundColor: 'red',
            }}>
            <OTPInputView
              style={{width: '90%', height: 200}}
              pinCount={6}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad
              codeInputFieldStyle={{
                width: 45,
                height: 45,
                borderWidth: 1,
                borderBottomWidth: 1,
                color: COLORS.primary,
              }}
              codeInputHighlightStyle={{
                borderColor: COLORS.primary,
              }}
              onCodeFilled={code => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
          </View>

          {/* ------------ */}
          <TouchableOpacity style={styles.signbutton} onPress={() => {}}>
            <Text style={styles.textbutton}>Verify</Text>
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
