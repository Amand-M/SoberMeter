import React from 'react';
import styles from '../style';
import { View, Text } from 'react-native';

const Header = () => {
  return (

      <View style={styles.header}>
        <Text style={styles.headerText}>SoberMeter</Text>
      </View>

  );
};

export default Header;