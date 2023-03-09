import React,{useState} from 'react';
import  {UserForm}  from './src/components/UserForm';
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalUserForm,setModalUserForm] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Registrate en la {""}
        <Text style={styles.titleBold}>UAM</Text>
      </Text>

      <Pressable onPress={() => {setModalVisible(true)}} style = {styles.btnNewUser}>
        <Text style = {styles.title}>Prueba Modal</Text>
      </Pressable>

      <Pressable onPress={() => {setModalUserForm(true)}} style = {styles.btnNewUser}>
        <Text style = {styles.title}>Nuevo Usuario</Text>
      </Pressable>
      <UserForm modalUserForm={modalUserForm} setModalUserForm={setModalUserForm}></UserForm>

      <Modal animationType='slide' visible={modalVisible}>
        <Text>Desde Modal</Text>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : "#0069a3",
    flex : 1
  },
  title : {
    textAlign : "center",
    fontSize : 22,
    color : "#FFFFFF"
  },
  titleBold : {
    fontWeight : "900",
    color : "#f4d73b"
  },
  btnNewUser : {
    backgroundColor : "#f4d73b",
    padding : 10,
    marginTop : 30,
    marginHorizontal : 20,
    borderRadius : 10
  },
  titleButton:{
    textAlign : "center",
    fontSize: 20,
    color : "#000000"
  }
});

