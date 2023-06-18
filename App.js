import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Start,
  Signin,
  Signup,
  Forgotpass,
  Newpass,
  Verification,
} from './component/auth';

import {
  Homepage,
  Gymtybe,
  Gymdetails,
  Aboutgym,
  Gymnastics,
  Heart,
  Circle,
  Connect,
  Profile,
  Subscription,
  Products,
  Gps,
  Products_Details,
  Cart,
  Payment
} from './component/main';
const Stack = createNativeStackNavigator();

class App extends React.Component {
  componentDidMount() {
    this._loadData();
  }

  async _loadData() {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate(
      isLoggedIn !== '1' ? 'AuthStack' : 'HomeStack',
    );
  }

  render() {
    return <></>;
  }
}

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgotpass" component={Forgotpass} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Newpass" component={Newpass} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Gymtybe" component={Gymtybe} />
      <Stack.Screen name="Gymdetails" component={Gymdetails} />
      <Stack.Screen name="Aboutgym" component={Aboutgym} />
      <Stack.Screen name="Gymnastics" component={Gymnastics} />
      <Stack.Screen name="Heart" component={Heart} />
      <Stack.Screen name="Circle" component={Circle} />
      <Stack.Screen name="Connect" component={Connect} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Gps" component={Gps} />
      <Stack.Screen name="Products_Details" component={Products_Details} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Payment" component={Payment} />

    </Stack.Navigator>
  );
};

const AppContainer = () => {
  const userLoggedIn = false;
  return (
    <NavigationContainer>
      {userLoggedIn ? <AuthStack /> : <HomeStack />}
    </NavigationContainer>
  );
};

export default AppContainer;

// ------------------------------------------------
// ------------------------------------------------
// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StatusBar,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   NavigationContainer,
//   createAppContainer,
//   createSwitchNavigator,
// } from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {COLORS, images} from '../CampBack/constants';
// import {
//   Start,
//   Signin,
//   Signup,
//   Forgotpass,
//   Newpass,
//   Verification,
// } from './component/auth';
// import {Homepage,Gymtybe} from './component/main';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <>
//         {/* <Start /> */}
//         {/* <Signin/> */}
//         {/* <Signup/> */}
//         {/* <Forgotpass/> */}
//         {/* <Newpass/> */}
//         {/* <Verification /> */}
//         {/* <Homepage/> */}
//         <Gymtybe/>
//       </>
//     );
//   }
// }
// ----------------------------------------------
// ----------------------------------------------
