import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../style';
import Header from './header';
import Footer from './footer';
import Jauge from './jauge';
import ImagePicker from 'react-native-image-picker';

class Calcul extends Component {
  state = {
    counters: [
      { id: 1, label: 'Bière', count: 0 },
      { id: 2, label: 'Vin', count: 0 },
      { id: 3, label: 'Cocktail', count: 0 },
      { id: 4, label: 'Shot', count: 0 },
      { id: 5, label: 'Champagne', count: 0 },
      { id: 6, label: 'Digestif', count: 0 },
    ],
    dose: 0,
    intervalId: null,
    tempsRestant: '0H 00min 00s',
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.updateTempsRestant(); // Mettre à jour le temps restant à chaque intervalle
    }, 1000); // Mettre à jour toutes les secondes

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  updateTempsRestant() {
    const { dose } = this.state;
    const seuil = 0.25;
    const diminutionParSeconde = 0.1 / 3600; // 0,1 mg/L par heure, lissé par secondes

    let tempsRestant;

    if (dose <= seuil) {
      tempsRestant = '0H 00min 00s';
    } else {
      const tempsEnSecondes = (dose - seuil) / diminutionParSeconde;
      const heures = Math.floor(tempsEnSecondes / 3600);
      const minutes = Math.floor((tempsEnSecondes % 3600) / 60);
      const secondes = Math.floor(tempsEnSecondes % 60);

      tempsRestant = `${heures}H ${minutes.toString().padStart(2, '0')}min ${secondes.toString().padStart(2, '0')}s`;
    }

    this.setState({
      tempsRestant,
      dose: dose - diminutionParSeconde,
    });
  }

  // handleTakePhoto = () => {
  //   Alert.alert(
  //     'Prendre une photo',
  //     'Souhaitez-vous prendre une photo ?',
  //     [
  //       {
  //         text: 'Non',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Oui',
  //         onPress: () => {
  //           // Ouvrir l'appareil photo
  //           ImagePicker.launchCamera({}, response => {
  //             // Traiter la réponse de la prise de photo
  //             if (response.didCancel) {
  //               console.log('Prise de photo annulée');
  //             } else if (response.error) {
  //               console.log('Erreur lors de la prise de photo:', response.error);
  //             } else {
  //               // Utiliser la photo capturée (response.uri)
  //               console.log('Chemin de la photo:', response.uri);
  //             }
  //           });
  //         },
  //       },
  //     ],
  //     { cancelable: false }
  //   );
  // };

  handleButtonPress = (itemId) => {
    this.setState((prevState) => {
      const updatedCounters = prevState.counters.map((counter) => {
        if (counter.id === itemId) {
          return { ...counter, count: counter.count + 1 };
        }
        return counter;
      });

      const dose = this.state.dose + 0.1;
      let alerte = 0;

      if (dose > 2 && alerte === 0) {
        Alert.alert('Attention', "Vous êtes déjà à 2mg/L ! Buvez de l'eau. ;)");
        alerte = 1;
        return prevState;
      }

      // if (dose > 0.25 && dose < 0.40) {
      //   Alert.alert('Attention', "Vous ne pouvez plus conduire pour le moment ;)");
      //   this.handleTakePhoto();
      // }

      return { counters: updatedCounters, dose: dose, alerte };
    });
  };

  handleResetCounters = () => {
    this.setState({
      counters: this.state.counters.map((counter) => ({ ...counter, count: 0 })),
      dose: 0,
      alerte: 0,
    });
  };

  render() {
    const { tempsRestant } = this.state;
    const countersGroup1 = this.state.counters.slice(0, 3);
    const countersGroup2 = this.state.counters.slice(3, 6);
    const dose = this.state.counters.reduce((acc, counter) => acc + counter.count * 0.1, 0); // Calculer la dose totale

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.content}>
          <Jauge value={dose} />
          <Text style={styles.texteBasique}>
            Dose d'alcool: {dose.toFixed(1)} mg/L
          </Text>
          <View style={styles.buttonWrapper}>
            <View style={styles.buttonGroup}>
              {countersGroup1.map((counter) => (
                <TouchableOpacity
                  key={counter.id}
                  style={styles.button}
                  onPress={() => this.handleButtonPress(counter.id)}
                >
                  <Text style={styles.buttonText}>{counter.label}</Text>
                  <Text style={styles.counterText}>{counter.count}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.buttonGroup}>
              {countersGroup2.map((counter) => (
                <TouchableOpacity
                  key={counter.id}
                  style={styles.button}
                  onPress={() => this.handleButtonPress(counter.id)}
                >
                  <Text style={styles.buttonText}>{counter.label}</Text>
                  <Text style={styles.counterText}>{counter.count}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <TouchableOpacity style={styles.resetButton} onPress={this.handleResetCounters}>
            <Text style={styles.resetButtonText}>Remise à zéro</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.compteur}>
          <Text style={styles.texte1Basique}>Temps nécessaire pour atteindre une dose d'alcool inférieure à 0.25 mg/L :</Text>
          <Text style={styles.texte2Basique}>{tempsRestant}</Text>
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    );
  }
}

export default Calcul;
