import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput, Alert, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";

const Todo = ({ deleteTodo, todoComplete, item }) => {


    return (
        <TouchableOpacity
            onPress={todoComplete}
            onLongPress={deleteTodo}
        >
            <View style={!item.completed
                ? styles.todoContainer
                : { ...styles.todoContainer, borderColor: "#30BE71" }}
            >
                <Text style={styles.todoText}>
                    {item.text}
                </Text>
                {item.completed && <Icon name="check" size={16} color="#30BE71" />}

            </View >
        </TouchableOpacity >
    );
}

export default Todo;