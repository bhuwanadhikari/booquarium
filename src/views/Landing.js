import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Dimensions, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-ui-kitten';

const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').width);

const Landing = () => {
    const _signIn = () => { }
    return (

        <ImageBackground
            style={{ flex: 1, resizeMode: 'cover' }}
            source={require('../assets/landing.jpg')}
        >
            <View style={{ marginTop: '55%', marginLeft: .5 * width - 100 }}>
                <Image
                    style={{ width: 200, height: 200, }}
                    source={require('../assets/logo.png')}
                />
            </View>


            <View style={{ display: 'flex', flexDirection: 'column', width: '90%', position: 'absolute', margin: 20, bottom: 30, zIndex: 10 }}>
                <View>
                    <Button
                        style={{ flex: 1, margin: 5 }}
                        status='warning'
                    >
                        <Image source={require('../assets/Googleboundary.png')} style={{ height: 16, width: 16 }} />
                        {" "}{" "}{" "}Sign In with Google
                        </Button>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Button
                        color='warning'
                        style={{ margin: 5, flex: 1 }}
                        onPress={_signIn}
                    >
                        Sign In
                        </Button>
                    <Button
                        style={{ flex: 1, margin: 5 }}
                    >
                        Sign Up
                        </Button>
                </View>
            </View>

            <View>

            </View>
        </ImageBackground>
    );

}
}


const styles = StyleSheet.create({

})

export default Landing;