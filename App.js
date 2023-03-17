import React,{useState} from 'react';
import  {UserForm}  from './src/components/UserForm';
import { FlatList, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { User } from './src/components/User';
import { ExampleForm } from './src/components/ExampleForm';
import { Book } from './src/components/Book';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalUserForm,setModalUserForm] = useState(false)
  const [modalExampleForm,setModalExampleForm] = useState(false)
  const [registeredUsers,setRegisterdUsers] = useState([])
  const [dataArray,setdataArray] = useState([])

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
      {
        registeredUsers.length === 0 ? (
          <Text style = {styles.textNoUser}>No hay usuarios Registrados</Text>
        ) : (
          <FlatList
            data = {registeredUsers}
            keyExtractor = {(item) => item.id}
            renderItem={ ({item}) => {
              console.log(item);
              return <User item = {item}/>
            }}
          />
        )
      }
      <UserForm 
        modalUserForm={modalUserForm} 
        setModalUserForm={setModalUserForm}
        registeredUsers = {registeredUsers}
        setRegisterdUsers = {setRegisterdUsers}
      ></UserForm>

      <Pressable onPress={() => {setModalExampleForm(true)}} style = {styles.btnNewUser}>
        <Text style = {styles.title}>Nuevo Libro</Text>
      </Pressable>
      {
        dataArray.length === 0 ? (
          <Text style = {styles.textNoUser}>No hay Libros Registrados</Text>
        ) : (
          <FlatList
            data = {dataArray}
            keyExtractor = {(item) => item.id}
            renderItem={ ({item}) => {
              console.log(item);
              return <Book item = {item}/>
            }}
          />
        )
      }
      <ExampleForm 
        modalExampleForm={modalExampleForm}
        setModalExampleForm={setModalExampleForm}
        dataArray={dataArray}
        setdataArray={setdataArray}
      />
      

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

