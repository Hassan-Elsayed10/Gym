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
  Platform,
  TextInput,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {PERMISSIONS, request} from 'react-native-permissions';
import Carousel from 'react-native-snap-carousel';
import getDirections from 'react-native-google-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, images} from '../../constants';
const {width, height} = Dimensions.get('screen');

export default class Gps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [
        {
          id: 0,
          distant: '3',
          image: images.Hos1,
          name: 'X Club',
          latitude: 30.590233,
          longitude: 31.505026,
          phone: '0552316363',
          address: 'El-Glaa St, Zagazig 2, Ash Sharqia Governorate',
          web: 'http://www.obourhospital.com/',
          time: 'Open 24 hours',
          Beds_Data: [
            {
              total_icu: 20,
              available_icu: 15,
              busy_icu: 5,
            },
            {
              total_nasal: 10,
              available_nasal: 6,
              busy_nasal: 4,
            },
            {
              total_unit: 15,
              available_unit: 5,
              busy_unit: 10,
            },
            {
              total_general: 30,
              available_general: 20,
              busy_general: 10,
            },
          ],
          heart_hospital: false,
          heart_ambulance: false,
          heart_oxygen: false,
          email: 'Not Available',
        },
        {
          id: 1,
          distant: '2',
          image: images.Hos2,
          name: 'Y Club',
          latitude: 30.597729,
          longitude: 31.496066,
          phone: '0552475004',
          address: 'Mawqaf El Mansoura St EL, Zagazig, Ash Sharqia Governorate',
          web: 'http://www.taisierhospital.com/',
          time: 'Open 24 hours',
          Beds_Data: [
            {
              total_icu: 30,
              available_icu: 10,
              busy_icu: 20,
            },
            {
              total_nasal: 10,
              available_nasal: 5,
              busy_nasal: 5,
            },
            {
              total_unit: 10,
              available_unit: 5,
              busy_unit: 5,
            },
            {
              total_general: 10,
              available_general: 5,
              busy_general: 5,
            },
          ],
          heart_hospital: false,
          heart_ambulance: false,
          heart_oxygen: false,
          email: 'Not Available',
        },
        {
          id: 2,
          distant: '1.8',
          image: images.Hos3,
          name: 'S Club',
          latitude: 30.595861,
          longitude: 31.496741,
          phone: '0552309885',
          address: 'El-Sayed Ateya, Banayos, Zagazig, Ash Sharqia Governorate',
          web: 'https://drhamdyelsayed.com/',
          time: 'Open 24 hours',
          Beds_Data: [
            {
              total_icu: 15,
              available_icu: 5,
              busy_icu: 10,
            },
            {
              total_nasal: 10,
              available_nasal: 5,
              busy_nasal: 5,
            },
            {
              total_unit: 10,
              available_unit: 5,
              busy_unit: 5,
            },
            {
              total_general: 10,
              available_general: 5,
              busy_general: 5,
            },
          ],
          heart_hospital: false,
          heart_ambulance: false,
          heart_oxygen: false,
          email: 'Not Available',
        },
        {
          id: 3,
          distant: '10',
          image: images.Hos4,
          name: 'V Club',
          latitude: 30.631816,
          longitude: 31.414924,
          phone: '01017888853',
          address:
            'Ash Sharqia ,Kilo 8 Mit Ghamr road, Ash Sharqia Governorate',
          web: 'http://hayatpalacehospital.com/',
          time: 'Open 24 hours',
          Beds_Data: [
            {
              total_icu: 25,
              available_icu: 20,
              busy_icu: 5,
            },
            {
              total_nasal: 10,
              available_nasal: 5,
              busy_nasal: 5,
            },
            {
              total_unit: 10,
              available_unit: 5,
              busy_unit: 5,
            },
            {
              total_general: 10,
              available_general: 5,
              busy_general: 5,
            },
          ],
          heart_hospital: false,
          heart_ambulance: false,
          heart_oxygen: false,
          email: 'Not Available',
        },
        {
          id: 4,
          distant: '4',
          image: images.Hos5,
          name: 'M Club',
          latitude: 30.598761,
          longitude: 31.491423,
          phone: '01028202577',
          address:
            'Zagazig, Ash ,In front of the new Mansoura parking lot, Ash Sharqia Governorate',
          web: 'Not Available',
          time: 'Open 24 hours',
          Beds_Data: [
            {
              total_icu: 40,
              available_icu: 18,
              busy_icu: 22,
            },
            {
              total_nasal: 10,
              available_nasal: 5,
              busy_nasal: 5,
            },
            {
              total_unit: 10,
              available_unit: 5,
              busy_unit: 5,
            },
            {
              total_general: 10,
              available_general: 5,
              busy_general: 5,
            },
          ],
          heart_hospital: false,
          heart_ambulance: false,
          heart_oxygen: false,
          email: 'Not Available',
        },
        {
          id: 5,
          distant: '3.5',
          image: images.Hos6,
          name: 'F Club',
          latitude: 30.586786,
          longitude: 31.520087,
          phone: '0552423949',
          address: 'Zagazig, El-Hariry, Zagazig 1, Ash Sharqia Governorate',
          web: 'Not Available',
          time: 'Open 24 hours',
          Beds_Data: [
            {
              total_icu: 50,
              available_icu: 30,
              busy_icu: 20,
            },
            {
              total_nasal: 10,
              available_nasal: 5,
              busy_nasal: 5,
            },
            {
              total_unit: 10,
              available_unit: 5,
              busy_unit: 5,
            },
            {
              total_general: 10,
              available_general: 5,
              busy_general: 5,
            },
          ],
          heart_hospital: false,
          heart_ambulance: false,
          heart_oxygen: false,
          email: 'Not Available',
        },
      ],
      markers: [],
      modalvisiable: false,
      details: {},
      distant: '',
    };
  }

  componentDidMount() {
    this.requestLocationPermission();
  }

  requestLocationPermission = async () => {
    if (Platform === 'ios') {
      var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      // console.log('Iphon: ' + request);
      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    } else {
      var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      // console.log('Android: ' + request);
      if (response === 'granted') {
        this.locateCurrentPosition();
      }
    }
  };

  locateCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      position => {
        // console.log(JSON.stringify(position));
        let initalPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        };
        this.setState({initalPosition});
      },
      // error => Alert.alert(error.message),
      // {enableHighAccuracy: true, timeout: 1000, maximumAge: 1000},
    );
  };

  renderCarouselItem = ({item}) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      {/* <Image source={item.image} style={styles.cardImage} /> */}
      <Image source={{uri: item.image}} style={styles.cardImage} />
    </View>
  );

  onCarouselItemChange = index => {
    let location = this.state.coordinates[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });
    //showCallout it's afun coming from ref that's use in Marker
    this.state.markers[index].showCallout();
  };

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    });

    // this._carousel.snapToItem(index);
  };

  handleGetDirections = marker => {
    const data = {
      //   ------------------------------
      // the place you go
      source: {
        // latitude: 30.594012,
        // longitude: 31.480426,
        latitude: marker.latitude,
        longitude: marker.longitude,
      },
      //   another road to the place you go
      destination: {
        // latitude: 30.594012,
        // longitude: 31.480426,
        latitude: marker.latitude,
        longitude: marker.longitude,
      },
      //   ------------------------------
      params: [
        {
          key: 'travelmode',
          value: 'driving', // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: 'dir_action',
          value: 'navigate', // this instantly initializes navigation using the given travel mode
        },
      ],
      waypoints: [
        {
          latitude: this.state.initalPosition.latitude,
          longitude: this.state.initalPosition.longitude,
          // latitude: 30.608791,
          // longitude: 31.509879,
        },
        {
          // latitude: 30.608791,
          // longitude: 31.509879,
          latitude: this.state.initalPosition.latitude,
          longitude: this.state.initalPosition.longitude,
        },
        {
          // latitude: 30.608791,
          // longitude: 31.509879,
          latitude: this.state.initalPosition.latitude,
          longitude: this.state.initalPosition.longitude,
        },
      ],
    };

    getDirections(data);
  };

  calcalutthedistant(marker) {
    // you location
    var lat1 = this.state.initalPosition.latitude;
    var lon1 = this.state.initalPosition.longitude;
    //  the place you go
    var lat2 = marker.latitude;
    var lon2 = marker.longitude;
    var p = 0.017453292519943295; // Math.PI / 180
    var c = Math.cos;
    var a =
      0.5 -
      c((lat2 - lat1) * p) / 2 +
      (c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

    // console.log(12742 * Math.asin(Math.sqrt(a)) + 'km');
    var distant = Math.ceil(12742 * Math.asin(Math.sqrt(a)));
    // var x = Math.ceil(distant);
    this.setState({distant: distant});
    // console.log(Math.ceil(distant) + ' ' + 'Km');
  }

  render() {
    return (
      <>
        <StatusBar
          backgroundColor={COLORS.primary}
          barStyle={'light-content'}
        />
        {/* -------Header------- */}
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 50,
            backgroundColor: COLORS.primary,
            paddingHorizontal: '5%',
            justifyContent: 'space-between',
            // marginBottom: 15,
          }}>
          <TouchableOpacity
            style={{
              width: '10%',
              //   backgroundColor: 'blue',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="bars" size={28} color={'#FFF'} />
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
            <Text style={{fontWeight: '700', fontSize: 18, color: '#fff'}}>
              Seif ElDeen Wael
            </Text>
            <Icon
              name="user-circle-o"
              size={28}
              color={'#fff'}
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '10%',
              //   backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon name="bell" size={28} color={'#fff'} />
          </TouchableOpacity>
        </View>
        {/* -------------- */}

        <View style={styles.container}>
          <MapView
            // followsUserLocation
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            ref={map => (this._map = map)}
            showsUserLocation={true}
            initialRegion={this.state.initalPosition}>
            {this.state.coordinates.map((marker, index) => (
              <Marker
                key={marker.id}
                ref={ref => (this.state.markers[index] = ref)}
                onPress={() => this.onMarkerPressed(marker, index)}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}>
                <Callout
                  onPress={() => {
                    // this.showwelcomemessage(marker);
                    this.calcalutthedistant(marker);
                    // this.get_beds(marker);
                    this.setState({modalvisiable: true, details: marker});
                    // alert(JSON.stringify(marker));
                  }}>
                  <Text>{marker.name}</Text>
                </Callout>
              </Marker>
            ))}
          </MapView>

          {/* <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.coordinates}
            containerCustomStyle={styles.carousel}
            renderItem={this.renderCarouselItem}
            sliderWidth={Dimensions.get('screen').width}
            itemWidth={300}
            // removeClippedSubviews={false}
            onSnapToItem={index => this.onCarouselItemChange(index)}
          /> */}
        </View>

        {/* ------bottom-------- */}
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            position:"absolute",
            bottom:0
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
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 48,
  },
  cardContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 200,
    width: 300,
    padding: 24,
    borderRadius: 24,
  },
  cardImage: {
    height: 120,
    width: 300,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    resizeMode: 'stretch',
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
  },
});
