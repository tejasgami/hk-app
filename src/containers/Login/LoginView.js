import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import ReduxField from "../../components/ReduxField";
import AppStyles from '../../config/styles';

class LoginView extends Component {
    navigate = () => {
        this.props.onLogin('tejasgami39@gmail.com', '123456');
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref={ref => this.scrollRef = ref}
                    style={[styles.scrollView, { backgroundColor: AppStyles.COLOR_WHITE }]}
                    contentContainerStyle={styles.contentContainerStyle}
                    bounces={false}
                    alwaysBounceVertical={false}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps='handled'
                >
                <Text>Login</Text>

                <ReduxField
                    refProp={ref => this.emailRef = ref}
                    name="email"
                    placeholder="Type here..."
                    label="Email"
                    changeSuccessColor={true}
                    info="Forgot email?"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType={"next"}
                    keyboardType={"email-address"}
                    ellipsizeMode='tail'
                    numberOfLines={1}
                    onEndEditing={() => this.passwordRef.isFocused() && this.scrollRef.scrollToEnd({ animated: true })}
                    onSubmitEditing={() => this.passwordRef.focus()}
                />
                <ReduxField
                    refProp={ref => this.passwordRef = ref}
                    _onFocus={() => this.scrollRef.scrollTo({ x: 0, y: 50, animated: true })}
                    name="password"
                    placeholder="Type here..."
                    label="Password"
                    secureTextEntry={true}
                    info="Forgot password?"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType={"done"}
                    onEndEditing={() => this.scrollRef.scrollToEnd({ animated: true })}
                    onSubmitEditing={() => {
                        this.scrollRef.scrollToEnd({ animated: true })
                    }}
                />
                </ScrollView>
                <TouchableOpacity onPress={this.navigate}>
                    <Text>Go to Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

LoginView.propTypes = {
    onLogin: PropTypes.func
};

export default LoginView;
