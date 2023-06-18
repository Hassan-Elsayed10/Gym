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

export default class Subscription extends Component {
    constructor() {
        super();
        this.state = {
            Data: [
                {
                    name: 'X Gym',
                    date: '25/06/2023'
                },
                {
                    name: 'Nutrition clinics',
                    date: '25/07/2023'
                },
                {
                    name: 'Physiotherapy ',
                    date: '25/08/2023'
                },
                {
                    name: 'Healthy food',
                    date: '25/09/2023'
                },
            ]
        }
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
                    <TouchableOpacity
                        style={styles.locationcontainer}>

                        <Icon name="bell" size={28} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
                {/* -------------- */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={images.About_Gym} style={{ width: 120, height: 120, borderRadius: 100, alignSelf: "center" }} />
                    <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 18, marginTop: 10 }}>Seif ElDeen Wael</Text>
                    <View style={{ width: "40%", height: 40, backgroundColor: COLORS.primary, borderRadius: 10, alignItems: "center", justifyContent: "center", alignSelf: 'center', marginTop: "10%", marginBottom: 15 }}>
                        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>My subscription</Text>
                    </View>
                    {/* -- */}
                    {this.state.Data.map((item, index) => {
                        return (
                            <>
                                <View style={{ width: "90%", height: 50, borderRadius: 30, flexDirection: "row", backgroundColor: "yellow", marginHorizontal: "5%", borderWidth: 1, borderColor: COLORS.primary, marginBottom: 15 }}>

                                    <View style={{ flex: 1, backgroundColor: "#fff", borderTopLeftRadius: 30, borderBottomLeftRadius: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{ color: COLORS.primary, fontWeight: "bold", fontSize: 18 }}>{item.name}</Text>

                                    </View>
                                    <View style={{ flex: 1, backgroundColor: COLORS.primary, borderTopRightRadius: 30, borderBottomRightRadius: 30, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{ color: "#fff", fontWeight: "bold" }}>Valid for {item.date}</Text>
                                    </View>
                                    {/* <TouchableOpacity style={{ width: "20%", height: 20, backgroundColor: COLORS.primary, borderRadius: 10, alignItems: "center", justifyContent: "space-between", flexDirection: "row", paddingHorizontal: "5%", position: 'absolute',bottom:-10 }}>
                              <Icon name="exclamation" size={18} color={"#fff"} />
                              <Text style={{ color: "#fff" }}>Details</Text>
                              </TouchableOpacity> */}
                                </View>
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
        width: '10%',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',

    }, bottomcontainer: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    }
})