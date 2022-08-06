import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, Linking } from 'react-native';
import foto from "./assets/fotominha.jpg";
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function App() {

  function handleRedeSocial(rede_social){
      switch(rede_social){
        case "Linkedin":
          //Alert.alert("Meu linkedin","https://www.linkedin.com/in/kevin-marques-louren%C3%A7o-faisca-5a542b195/")
          Linking.openURL("https://www.linkedin.com/in/kevin-marques-louren%C3%A7o-faisca-5a542b195/");
          break
          
          case "GitHub":
          //Alert.alert("Meu GitHub","https://github.com/Faisca22")
          Linking.openURL("https://github.com/Faisca22");
          break
      }
  }

  return (


    <View style={styles.container}>
      <StatusBar backgroundColor={"white"}/>
      
      <View style={styles.containerCabecalho}>  
      <Image source={foto} style={styles.foto}></Image>
      <Text style={styles.textoNome}>Kevin Marques Lourenço Faisca</Text>
      <Text style={styles.textoFacul}>Auxiliar técnico de informática</Text>
      <Text style={styles.textoRedeSocial}>Email: kmlfaisca@gmail.com</Text>

    <View style = {styles.redesSociaisIcons}>
      
      <TouchableOpacity onPress={() => handleRedeSocial("GitHub")}>
      <FontAwesome5 name="github" size={24} color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => handleRedeSocial("Linkedin")}>
      <FontAwesome name="linkedin-square" size={24} color="white" />
      </TouchableOpacity>
    </View>
      
      </View>
      
      
    


      <View style={styles.cardContainer}>
        <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.textoTitulo}>Experiencia Profissional</Text>
          </View>
      
      <View style={styles.cardContent}>
      <Text style={styles.textocontent}>CNS Centro Nacional de Serviços e Comerceio de Informática</Text>
      </View> 
      </View>
      </View>



      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.textoTitulo}>Formação Academica</Text>
        </View>
          <View style={styles.cardContent}>
          <Text style={styles.textocontent}>FIT Faculdade Impacta Tecnologia</Text>
            <Text style={styles.textocontent}>Bacharelado Sistemas de informação</Text>
      </View>
      </View>
      </View>


    </View>
  );
}


//estilo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010409',
    padding: 20,
    alignItems: 'center'
  },

  androidSafeArea:{
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeigth: 0
  },

  redesSociaisIcons:{
    flexDirection: "row",
    justifyContent: "space-around",
    width: "35%",
    marginTop:20,
  },

  cardContainer:{
    width:"100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop:20,
  },

  button:{
    marginTop:30,
    backgroundColor: "white",
    padding:20,
  },

  card:{
    width: "60%",
    borderRadius: 5,
    borderWidth:2,
    borderColor: "white",
    padding:10,
    backgroundColor:"white"
    
  },

  cardContent:{
    marginTop: 10,
  },

  textoTitulo:{
    color: "black",
    fontWeight:"bold",
  },

  textocontent:{
    color: "gray",
  },

  textButton:{
    fontWeight:"bold",
    fontSize:16,
  },

  textoNome: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
  },


  textoFacul:{
    color: 'white',
    fontSize: 20,
    marginBottom: 15,
  },

  textoRedeSocial:{
    color: 'white',
    fontSize: 15,
  },

  containerCabecalho:{
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },

  icon:{
    width: 50,
    height: 20,
  },

  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: "white",
    borderWidth:1,
    },
});
