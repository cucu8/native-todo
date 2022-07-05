import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    addTodoInput: {
        backgroundColor: "#3B3B3B",
        borderRadius: 10,
        height: 50,
        fontSize: 18,
        color: "#CCCCCC",
        padding: 14,
        flex: 1
    },
    addTodoContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: 20
    },
    imageContainer: {
        height: "100%",
        marginTop: 182,
    },
    addIcon: {
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginLeft: 10,
        backgroundColor: "#3B3B3B",
    },
    todoListContainer: {
        flex: 1,
    },
    flatListContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20
    }
})