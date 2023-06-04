import { StyleSheet, Dimensions } from "react-native";
import { FullWindowOverlay } from "react-native-screens";


const image = {url: 'backbouton.png'};

const dpToPx = (dp) => dp * (Dimensions.get("window").width / 400);

  
const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
  },
  header: {
    backgroundColor: "#2b5ea7",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    height: dpToPx(64),
  },
  logo: {
    width: 100,
    height: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdfbff",
  },
  footerText: {
    color: "mintcream",
    fontSize: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  logoContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  button1: {
    marginTop: dpToPx(16),
    height: 450,
    width: 350,
    borderRadius: dpToPx(12),
    // backgroundColor: "#d7e3ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    
  },
  imagebouton: {
    height: "100%",
    width: "100%",
    borderRadius: dpToPx(12),
    overflow: 'hidden',
  },

  button: {
    height: 50,
    width: 100,
    borderRadius: 25,
    backgroundColor: "#f5d9ff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#30004a",
  },
  button1Text: {
    color: "#2b5ea7",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    bottom: 5,
    left: 15,
    
    
  },

  button2Text: {
    color: "#2b5ea7",
    fontSize: 20,
    fontWeight: "bold",
    
  },
  
  counterText: {
    color: "black",

  },
  footer: {
    backgroundColor: "#2b5ea7",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: dpToPx(64)
  },
  doseText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  jauge: {
    marginTop: 30,
    height: dpToPx(4),
    width: 240,
    backgroundColor: "#e0e2ec",
    borderRadius: 0,
    marginBottom: 10,
  },
  jaugeFill: {
    height: "100%",
    width: "100%",
    backgroundColor: "green",
    borderRadius: 0,
  },
  jaugeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jaugeValue: {
    fontSize: 12,
    color: "#888",
  },
  doseValue: {
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
  },
  resetButton : {
    backgroundColor: "transparent",
    borderRadius: 50, // Update to fully rounded corner
    marginBottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    borderWidth: 1, // Add border width
    borderColor: "#1a1b1f", // Set border color
  },
  configButton: {
    backgroundColor: "transparent",
    borderRadius: 50, // Update to fully rounded corner
    marginBottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
    borderWidth: 1, // Add border width
    borderColor: "#1a1b1f", // Set border color
  },
  resetButtonText: {
    color: "#2b5ea7", // Set text color
    fontSize: 16,
    fontWeight: "bold",
  },
  compteur: {
    marginBottom:150,
    alignItems: 'center',
    justifyContent: 'center'

  },
  texte1Basique: {
    color: 'black',
    textAlign: 'center',
    fontSize:15,


  },

  texte2Basique: {
    color: 'red',
    textAlign: 'center',
    fontSize:30,
    marginTop:10,


  },

  label1:{
    marginTop:100,
  },

label1: {
  marginTop:100,
  fontSize: 16,
  fontWeight: "bold",
  marginBottom: 10,
},
label2: {
  fontSize: 16,
  fontWeight: "bold",
  marginBottom: 10,
},
radioContainer: {
  flexDirection: "row",
  marginBottom: 20,
},
radioButtonContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginRight: 10,
},
radioButton: {
  width: 20,
  height: 20,
  borderRadius: 10,
  borderWidth: 2,
  borderColor: "#000",
  justifyContent: "center",
  alignItems: "center",
  marginRight: 5,
},
radioButtonSelected: {
  width: 12,
  height: 12,
  borderRadius: 6,
  backgroundColor: "#000",
},
radioButtonLabel: {
  marginRight: 5,
},
slider: {
  marginBottom: 20,
},

});

export default styles;
