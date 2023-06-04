import React from "react";
import Header from "./header";
import Footer from "./footer";
import styles from "../style";
import { View, Text, TouchableHighlight, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class Accueil extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.content}>
          <TouchableHighlight
            style={styles.button1}
            onPress={() => navigation.navigate("Calcul")}
          >
            <ImageBackground source={require('../backbouton.png')} style={styles.imagebouton}>
              <Text style={styles.button1Text}>Start</Text>
            </ImageBackground>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.configButton}
            onPress={() => navigation.navigate("Configuration")}
          >
            <Text style={styles.button2Text}>Paramètres</Text>
          </TouchableHighlight>

          
          
        </View>
        <Footer />
      </View>
    );
  }
}

export default Accueil;
