import React from 'react';

const Button = () => {
    return (
        <Input
            placeholder='Password'
            value={this.state.value}
            secureTextEntry={this.state.secureTextEntry}
            onChangeText={this.onChangeText}
            onIconPress={this.onIconPress}
        />
    )
}

export default Button;