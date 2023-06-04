import React from "react";
import { View, Text, Dimensions, Alert } from "react-native";
import PropTypes from "prop-types";
import styles from "../style";

const Jauge = ({ value }) => {
  const calculateWidth = () => {
    const maxWidth = 75; // Largeur maximale en pourcentage de l'écran
    const screenWidth = Dimensions.get("window").width;
    const width = (value / 2) * (screenWidth * maxWidth) / 100; // Calcul de la largeur en fonction de la valeur et de la largeur de l'écran
    const clampedWidth = Math.min((2 / 2) * (screenWidth * maxWidth) / 100, width); // Limiter la largeur à 75% de l'écran
    return clampedWidth;
    
  };

  

  const calculateColor = () => {
    const maxColor = [255, 0, 0]; // Couleur maximale (rouge)
    const minColor = [0, 255, 0]; // Couleur minimale (vert)
    const color = maxColor.map((maxValue, index) => {
      const minValue = minColor[index];
      const interpolatedValue = minValue + ((maxValue - minValue) * value) / 2; // Calcul de la valeur interpolée en fonction de la valeur
      return Math.round(interpolatedValue);
    });
    return color;
  };

  const jaugeFillStyles = {
    width: `${(value / 2) * 100}%`,
    backgroundColor: `rgb(${calculateColor().join(",")})`,
  };
  
  const thresholdLineStyle = {
    borderLeftWidth: 1,
    borderLeftColor: "red",
    position: "absolute",
    height: "100%",
    left: `${(0.25 / 2) * 100}%`,
  };

  if (value >= 2) {
    Alert.alert(
      "Attention",
      "Vous avez atteint la dose maximale renseignable dans l'application. Vous pourriez boire de l'eau ? ;)."
    );
  }

  return (
    <View style={styles.jaugeContainer}>
      <Text style={styles.jaugeValue}>0 mg/L</Text>
      <View style={[styles.jauge, { width: "75%" }]}>
        <View style={[styles.jaugeFill, jaugeFillStyles]} />
        <View style={thresholdLineStyle} />
      </View>
      <Text style={styles.jaugeValue}>2 mg/L</Text>
    </View>
  )
};

Jauge.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Jauge;
