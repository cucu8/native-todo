import React from "react";
import {
    View,
    Text,
    Alert,
    Image,
    Button,
    FlatList,
    Pressable,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { Todos as PageContainer } from "../../pageContainer";
import { Todo } from "../../components";
import Icon from "react-native-vector-icons/MaterialIcons";
import mainPicture from "../../assets/images/main.png";
import { styles } from "./styles";

const Todos = ({
    addTodo,
    deleteTodo,
    todoComplete,
    deleteAllTodo,
    todoText,
    setTodoText,
    todoList,
    setTodoList,
}) => {

    const renderItem = ({ item }) => {
        return (
            <Todo
                item={item}
                deleteTodo={() => deleteTodo(item.id)}
                todoComplete={() => todoComplete(item.id, { completed: !item.completed })}
            />
        );
    };


    return (
        <View style={styles.todoListContainer}>
            <View style={styles.addTodoContainer}>
                <TextInput
                    style={styles.addTodoInput}
                    onChangeText={setTodoText}
                    value={todoText}
                    placeholder="Create Todo"
                    placeholderTextColor={"#CCCCCC"}
                    onSubmitEditing={addTodo}
                />
                <View style={styles.addIcon}>
                    <Icon
                        onPress={addTodo}
                        name="save"
                        size={24}
                        color="#FFFFFF"
                    />
                </View>
            </View>
            <FlatList
                data={todoList}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContainer}
            />
            {!todoList.length &&
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/images/main.png')}
                    />
                </View>
            }
        </View>
    );
}

export default () => PageContainer(Todos);