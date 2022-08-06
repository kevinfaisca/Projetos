import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable,Linking} from 'react-native';
import React from "react";


const colorGitHub = "#010409";
const imageProfileGitHub = "https://avatars.githubusercontent.com/u/99773396?s=400&u=c40f52c30cd220133a2e5ff6d5e0dc18f6b4f40a&v=4";
const colorFontGitHub = "#c9d1d9";
const colorDarkFontGitHub = "#4f565e";
const urlToMyGitHub = "https://github.com/Faisca22";

export default function App() {
  const hadlePressGoToGitHub = async () =>{
    const res = await Linking.canOpenURL(urlToMyGitHub);
    if(res){
      await Linking.openURL(urlToMyGitHub);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor={"DCDCDC"}></StatusBar>
    <View style={styles.content}>
      <Image accessibilityLabel='foto_perfil'  style={styles.avatar}source={{uri:imageProfileGitHub}}></Image>
      <Text accessibilityLabel='Nome Kfaisca' style={[styles.defaultText, styles.name]}>Kfaisca</Text> 
      <Text accessibilityLabel='Nickname Faisca22' style={[styles.defaultText,styles.nickname]}>Faisca22</Text> 
      <Text accessibilityLabel='Descrição' style={[styles.defaultText,styles.descricao]}>Descrição</Text>
      <Pressable onPress={hadlePressGoToGitHub}>
      <View style = {styles.button}>
        <Text style ={[styles.defaultText, styles.textButton]}>Open in GithHub</Text>
      </View>
      </Pressable>
    </View>
    </SafeAreaView>
  );
}


//Estilo
const styles = StyleSheet.create({
  container: { 
    //Exibidos por coluna
    flex: 1, //Expandir para a tela inteira
    backgroundColor: colorGitHub,
    justifyContent: "center",
  },

  content:{
    alignItems:'center',
    padding:20,
  },


 avatar:{
  height: 200,
  width: 200,
  borderRadius: 100,
  borderColor: "white",
  borderWidth: 1,
 },

 defaultText:{
  color:"white",
 },

 name:{
  marginTop:20,
  fontSize: 24,
  fontWeight:'bold',
  color: colorFontGitHub,
 },

 nickname:{
  fontSize: 18,
  color: colorDarkFontGitHub,
 },

 descricao:{
  fontSize: 14,
  fontWeight:'bold',
 },

 button:{
  marginTop:20,
  backgroundColor:colorDarkFontGitHub,
  borderRadius: 10,
  padding:20,
 },
 textButton:{
  fontWeight:'bold',
  fontSize: 16,
 },
});
