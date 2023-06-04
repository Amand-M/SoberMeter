import React, { useState } from "react";
import { View, Text, Slider, Button } from "react-native";
import Header from "./header";
import Footer from "./footer";
import styles from "../style";

const Configuration = () => {
  const [sexe, setSexe] = useState("Homme");
  const [taille, setTaille] = useState(160);
  const [poids, setPoids] = useState(60);

  const handleSave = () => {
    console.log("Sexe:", sexe);
    console.log("Taille:", taille);
    console.log("Poids:", poids);
  };

  const selectSexe = (selectedSexe) => {
    setSexe(selectedSexe);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.content}>
        <Text style={styles.label1}>Sexe:</Text>
        <View style={styles.radioContainer}>
          <RadioButton
            label="Homme"
            selected={sexe === "Homme"}
            onPress={() => selectSexe("Homme")}
          />
          <RadioButton
            label="Femme"
            selected={sexe === "Femme"}
            onPress={() => selectSexe("Femme")}
          />
        </View>

        <Text style={styles.label2}>Taille:</Text>
        <Slider
          style={styles.slider}
          minimumValue={120}
          maximumValue={200}
          step={1}
          value={taille}
          onValueChange={(value) => setTaille(value)}
        />
        <Text>{taille} cm</Text>

        <Text style={styles.label2}>Poids:</Text>
        <Slider
          style={styles.slider}
          minimumValue={40}
          maximumValue={110}
          step={1}
          value={poids}
          onValueChange={(value) => setPoids(value)}
        />
        <Text>{poids} kg</Text>

        <Button title="Enregistrer" onPress={handleSave} />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
};

const RadioButton = ({ label, selected, onPress }) => {
  return (
    <View style={styles.radioButtonContainer}>
      <Text style={styles.radioButtonLabel}>{label}</Text>
      <View
        style={[
          styles.radioButton,
          selected && styles.radioButtonSelected,
        ]}
      >
        {selected && <View style={styles.radioButtonInner} />}
      </View>
      <Button
        title={selected ? "Selected" : "Select"}
        onPress={onPress}
      />
    </View>
  );
};

export default Configuration;
