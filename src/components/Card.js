import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.cardStyle}>
        {props.children}
        </View>
    );
};

export default Card;

const styles = {
    cardStyle: {
        borderWidth: 2,
        padding: 10
    }
};
