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
import { styles } from "./styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import mainPicture from "../../assets/images/main.png";

const Todos = ({
    addTodo,
    deleteTodo,
    todoComplete,
    deleteAllTodo,
    todoText,
    setTodoText,
    todoList,
    setTodoList,
    inputRef
}) => {
    const renderItem = ({ item }) => {
        return (
            <Todo
                item={item}
                deleteTodo={() => deleteTodo(item._id)}
                todoComplete={() => todoComplete(item._id, { completed: !item.completed })}
            />
        );
    };

    return (
        <View style={styles.todoListContainer}>
            <View style={styles.addTodoContainer}>
                <TextInput
                    placeholderTextColor={"#CCCCCC"}
                    style={styles.addTodoInput}
                    onChangeText={setTodoText}
                    placeholder="Create Todo"
                    onSubmitEditing={addTodo}
                    value={todoText}
                    ref={inputRef}
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
            {!todoList.length &&
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/images/main.png')}
                        style={{
                            width: "80%",
                        }}
                        resizeMethod={"resize"}
                        resizeMode={"contain"}
                    />
                </View>
            }
            {
                todoList.length ? (
                    <FlatList
                        data={todoList}
                        renderItem={renderItem}
                        contentContainerStyle={styles.flatListContainer}
                    />
                ) : null
            }
        </View>
    );
}

export default () => PageContainer(Todos);