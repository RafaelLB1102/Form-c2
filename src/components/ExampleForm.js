import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Image, ScrollView, TextInput, Pressable, Alert } from 'react-native';


export const ExampleForm = (
    { modalExampleForm,
        setModalExampleForm,
        dataArray,
        setdataArray,
        book: bookObj,
        setBook
    }
) => {

    const [id, setId] = useState("");
    const [bookName, setbookName] = useState("");
    const [numberOfPages, setnumberOfPages] = useState("");
    const [history, sethistory] = useState("");
    const [comments, setComments] = useState("");

    console.log(Object.keys(bookObj));

    useEffect(() => {
        console.log("Entre al useEffect");
        console.log("info del objeto user" + bookObj.id);
        if (Object.keys(bookObj).length > 0) {
            console.log("Entre al condicional del useEffect");
            setId(bookObj.id);
            setbookName(bookObj.bookName);
            setnumberOfPages(bookObj.numberOfPages);
            sethistory(bookObj.history);
            setComments(bookObj.comments);
        }
    }, [bookObj]);

    const handleBook = () => {

        console.log("Handling user...");

        const fields = {
            "Book Name": bookName,
            "Number of pages": numberOfPages,
            "History": history,
            "Comments": comments,
        };

        const emptyFields = Object.entries(fields)
            .filter(([, value]) => value === "")
            .map(([key]) => key);

        if (emptyFields.length > 0) {
            console.log("Error: Hay campos sin diligenciar:", emptyFields.join(", "));
            return;
        }

        if (![bookName, numberOfPages, history, comments].every(field => field !== "")) {
            console.log("Error: Hay campos sin diligenciar");
            setTimeout(() => {
                Alert.alert("Error", "Hay campos sin diligenciar");
            }, 100);
            return;
        }

        const newBook = {
            id: Date.now(),
            bookName,
            numberOfPages,
            history,
            comments
        };

        if (id) {
            // Editar
            newBook.id = id;
            console.log("Editando", newBook);
            const editedBook = dataArray.map((userState) => 
            userState.id === newBook.id ? newBook : userState)
            setdataArray(editedBook)
            console.log(editedBook)
            setBook({})
          } else {
            // Nuevo registro
            newBook.id = Date.now();
            setdataArray([...dataArray, newBook]);
        }

        /* setdataArray([...dataArray, newBook]); */
        setModalExampleForm(!modalExampleForm);

        setbookName("");
        setnumberOfPages("");
        sethistory("");
        setComments("");
    }


    return (
        <Modal animationType="slide" visible={modalExampleForm}>
            <Image style={styles.image}
                source={require("../assets/png/Logos_UAM-08.png")}
            />
            <ScrollView>
                <Text style={styles.title}>
                    Libros UAM sobre {""}
                    <Text style={styles.titleBold}>Brandon Sanderson</Text>
                </Text>

                <Pressable style={styles.btnExit}
                    onPress={() => setModalExampleForm(false)}
                >
                    <Text style={styles.btnTextExit}>X cerrar</Text>
                </Pressable>

                <View style={styles.campo}>
                    <Text style={styles.text}>Nombre del libro</Text>
                    <TextInput placeholder='Nombre del libro'
                        placeholderTextColor={"#F8F9F9"}
                        style={styles.input}
                        value={bookName}
                        onChangeText={setbookName}
                    >
                    </TextInput>
                </View>

                <View style={styles.campo}>
                    <Text style={styles.text}>Numero de páginas</Text>
                    <TextInput placeholder='# de paginas'
                        placeholderTextColor={"#F8F9F9"}
                        style={styles.input}
                        keyboardType="phone-pad"
                        value={numberOfPages}
                        onChangeText={setnumberOfPages}
                        maxLength={5}
                    >
                    </TextInput>
                </View>


                <View style={styles.campo}>
                    <Text style={styles.text}>Historia a la que pertenese</Text>
                    <TextInput placeholder='Historia'
                        placeholderTextColor={"#F8F9F9"}
                        style={styles.input}
                        value={history}
                        onChangeText={sethistory}
                    >
                    </TextInput>
                </View>



                <View styles={styles.campo}>
                    <TextInput
                        placeholder='Deja tus comentarios'
                        placeholderTextColor={'#F8F9F9'}
                        style={[styles.input, styles.inputCommnets]}
                        numberOfLines={6}
                        multiline={true}
                        value={comments}
                        onChangeText={setComments}
                    ></TextInput>
                </View>

                <Pressable style={styles.btnNewUser}
                    onPress={handleBook}>
                    <Text style={styles.btnTextNewUser}>Agregar Libro</Text>
                </Pressable>

            </ScrollView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        margin: 15,
        width: 75,
        height: 75,
        marginBottom: 15
    },
    backCover: {
        position: "absolute",
        marginTop: 0,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.7,
        backgroundColor: "rgba(52,52,52,alpha)"
    },
    title: {
        textAlign: "center",
        fontSize: 22,
        color: "#000000",
        marginHorizontal: 30,
        fontWeight: "600",
        marginBottom: 20
    },
    titleBold: {
        textAlign: "center",
        fontSize: 22,
        color: "#0069a3",
        marginHorizontal: 30,
        fontWeight: "600",
        marginBottom: 20
    },
    input: {
        backgroundColor: "#000000c0",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    text: {
        fontSize: 20,
        color: "#000000",
        marginBottom: 8,
        marginTop: 12
    },
    campo: {
        marginHorizontal: 30
    },
    inputCommnets: {
        height: 100,
        marginHorizontal: 30
    },
    inputDate: {
        textAlign: "center"
    },
    btnExit: {
        marginVertical: 30,
        backgroundColor: "#000000c0",
        marginHorizontal: 30,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#FFF"
    },
    btnTextExit: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 16
    },
    btnNewUser: {
        marginVertical: 50,
        backgroundColor: "#0069a3",
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnTextNewUser: {
        textAlign: "center",
        color: "#FFF",
        textTransform: "uppercase",
        fontWeight: "700",
        fontSize: 16
    }

});

