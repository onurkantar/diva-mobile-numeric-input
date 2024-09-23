import React from 'react';
import {
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
    View
} from 'react-native';

function _handlePress(callback){
    requestAnimationFrame(callback)
}

const Button = ({
    disabled = false,
    children = [],
    style = [],
    onPress = () => {}
}) => {
    return (
        Platform.OS === 'ios'
        ? <TouchableOpacity
            disabled={disabled}
            style={style}
            onPress={() => _handlePress(onPress)}
          >
            {children}
        </TouchableOpacity>
        : <TouchableNativeFeedback
            disabled={disabled}
            onPress={() => _handlePress(onPress)}
          >
            <View style={style}>{children}</View>
        </TouchableNativeFeedback>
    )
}

export default Button;
