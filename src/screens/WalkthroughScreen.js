import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Images from '../images';
import Swiper from 'react-native-swiper'

export default function WalkthroughScreen() {
    const walkthroughList = [
        {id: 1, title:'Welcome to Pof-Pof', image: Images.building},
        {id: 2, title:'Looking for the new style?', image: Images.buzon},
        {id: 3, title:'Beautiful and funny', image: Images.camera},
    ]
    return (
        <View style={{flex: 1}}>
            <Swiper
                paginationStyle={{
                    position: 'absolute',
                    bottom: '20%',
                }}
                activeDotColor='#FC7DC0'
                activeDotStyle={{width: 20, height: 0}}
            >
                {walkthroughList.map(i => {
                    return (
                        <View style={{justifyContent:'center', alignItems: 'center', height: '100%'}}>
                            <Text style={styles.textStyle}>{i.title}</Text>
                            <Image source={i.image} style={styles.imageContainer}/>
                        </View>
                    )
                })}
            </Swiper>
            <View style={{
                position:'absolute',
                bottom: '5%',
                left: 0,
                right: 0,
                justifyContent:'center',
                alignItems:'center',
            }}>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.textStartedStyle}>Get Started</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{fontSize:20,color:'grey'}}>skip</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        width: '40%',
        textAlign:'center',
    },
    imageContainer: {
        height:'70%',
        width:'100%',
        resizeMode:'contain',
        marginHorizontal:15
    },
    buttonStyle:{
        backgroundColor:'yellow',
        paddingHorizontal: 100,
        justifyContent:'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 20,
        marginBottom: 20,
    },
    textStartedStyle:{
        fontWeight: 'bold'
    }
})

