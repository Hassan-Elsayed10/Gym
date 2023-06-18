import React, { Component } from 'react'
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

export default class Gymdetails extends Component {
    constructor() {
        super();
        this.state = {
            Gym_offers: [
                {
                    offer1: "Offer a 6-month subscription + 20% discount in the nutrition clinic.",
                    offer2: "Special discount on subscription for a period of 6 months through the application and get a 20% discount at the X Nutrition Clinic."
                },
                {
                    offer1: "Offer a 6-month subscription .",
                    offer2: "Special discount on subscription for a period of 6 months through the application."
                },
                {
                    offer1: "Offer a 6-month subscription + 20% discount in the nutrition clinic.",
                    offer2: "Special discount on subscription for a period of 6 months through the application and get a 20% discount at the X Nutrition Clinic."
                },
                {
                    offer1: "Offer a 6-month subscription .",
                    offer2: "Special discount on subscription for a period of 6 months through the application."
                },
                {
                    offer1: "Offer a 6-month subscription + 20% discount in the nutrition clinic.",
                    offer2: "Special discount on subscription for a period of 6 months through the application and get a 20% discount at the X Nutrition Clinic."
                },

            ],
            name: '',
            image: ''
        }
    }

    componentDidMount() {
        let image = this.props.route.params.image
        let name = this.props.route.params.name

        this.setState({
            image, name
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
                </View>
                {/* -------------- */}
                <View
                    style={styles.sportstyle}>
                    <ImageBackground
                        source={{
                            uri: this.state.image
                            // uri: item.image,
                            // uri: 'https://www.shutterstock.com/image-photo/modern-light-gym-sports-equipment-260nw-721723381.jpg',
                        }}
                        style={styles.groundstyle}>
                        <View style={{ width: "50%", height: 40, backgroundColor: COLORS.primary, borderRadius: 20, alignItems: "center", justifyContent: "center", marginTop: 5 }}>
                            <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 16, }}> {this.state.name}</Text>
                        </View>
                        <View style={{ flexDirection: "row", position: "absolute", bottom: -10, width: "100%", alignItems: "center", justifyContent: "center" }}>
                            <TouchableOpacity style={{  height: 25, backgroundColor: COLORS.primary, borderRadius: 20, alignItems: "center", justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 10, marginRight: 10 }}
                                onPress={() => {
                                    this.props.navigation.navigate('Aboutgym', {
                                        name: this.state.name
                                    });
                                }}
                            >
                                <Icon name="exclamation" size={18} color={"#fff"} />
                                <Text style={{ fontWeight: "500", color: "#fff", fontSize: 15, }}>about club</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 25, backgroundColor: COLORS.primary, borderRadius: 20, alignItems: "center", justifyContent: "space-between", flexDirection: "row", paddingHorizontal: 10 }}
                                onPress={() => {
                                    this.props.navigation.navigate('Connect');
                                }}
                            >
                                <Icon name="user" size={18} color={"#fff"} />
                                <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 16, }}> Connect</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                {/* -------------------------- */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.state.Gym_offers.map((item, index) => {
                        return (
                            <>
                                <TouchableOpacity style={{ width: "90%",  backgroundColor: index % 2 == 0 ? "#f4f4f4" : "#4750e4", marginHorizontal: "5%", borderRadius: 10, borderWidth: 1, borderColor: "#b4b4b4", padding: "2%", marginBottom: 10 }}
                                    onPress={() => {
                                    }}
                                >
                                    <Text style={{ fontWeight: "bold", color: index % 2 == 0 ? "#808080" : "#fff" }}>{item.offer1}</Text>
                                    <Text style={{ fontWeight: "400", color: index % 2 == 0 ? "#a3a3a3" : "#fff" }}>{item.offer2}</Text>
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
        )
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
        alignItems: "center"
    }, bottomcontainer: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    }
})      
