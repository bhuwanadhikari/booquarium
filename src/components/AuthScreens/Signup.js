import React, { } from 'react';
import { Text, View, Image, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Icon, Input, Button } from 'react-native-ui-kitten';


import SignupIcon from '../../assets/Signup.png'

class Signup extends React.Component {


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
                <Image style={{ display: 'flex', margin: 120, marginBottom: 10, height: 150, width: 150, alignSelf: 'center' }} source={SignupIcon} />
                <View style={{ margin: 50 }}>
                    <Input

                        label="Email"
                        style={styles.input}
                        size='small'
                        placeholder='Email'
                    />
                    <Input
                        label="Password"
                        style={[styles.input]}
                        size='small'
                        placeholder='Password'
                    />
                    <Input
                        label="Confirm Password"
                        style={[styles.input, { marginBottom: 0 }]}
                        size='small'
                        placeholder='Password'
                    />

                </View>
                <Button
                    style={{ marginLeft: 50, marginRight: 50 }}
                    status='success'
                >
                    Sign Up
                    </Button>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    input: {
        height: 45,
        marginBottom: 40,
        flex: 1
    }
})


export default Signup;