import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ({ onPress, icon, title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Icon name={icon} size={20} color="#FFFFFF" />
            <Text style={styles.label}>
                { title }
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5F9EA2',
        padding: 10,
        borderRadius: 8,
        marginTop: 15,
    },
    label: {
        textAlign:'center',
        marginLeft: 8,
        color: '#FFFFFF',
        fontSize: 16,
    },
}

export default IconButton;