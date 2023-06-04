import React from "react";
import { View, Text } from "react-native";
import styles from "../style";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>@copyright by Amand MESSE & Erwan SENECHAL</Text>
    </View>
  );
};

export default Footer;
