import React, { } from 'react';
import { Text, View, Image, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Icon, Input, Button } from 'react-native-ui-kitten';


import LoginIcon from '../../assets/Login.png'

class Signin extends React.Component {


    state = {
        value: '',
        secureTextEntry: true,
    };

    onChangeText = (value) => {
        this.setState({ value });
    };

    onIconPress = () => {
        const secureTextEntry = !this.state.secureTextEntry;
        this.setState({ secureTextEntry });
    };



    render() {
        return (
            <ScrollView>
                <Image style={{ margin: 120, marginBottom: 10, height: 150, width: 150, alignSelf: 'center' }} source={LoginIcon} />
                <View style={{ margin: 50 }}>
                    <Input
                        label="Email"
                        style={styles.input}
                        size='small'
                        placeholder='Email'
                    />
                    <Input
                        label="Password"
                        style={[styles.input, { marginBottom: 0 }]}
                        size='small'
                        placeholder='Password'
                    />

                </View>
                <Button
                    style={{ marginLeft: 50, marginRight: 50 }}
                    status='success'
                >
                    Sign In
                    </Button>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    input: {
        height: 45,
        marginBottom: 40,
    }
})


export default Signin;