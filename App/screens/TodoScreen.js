import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {COLORS} from "../../constants";

const TodoApp = () => {
    const navigation = useNavigation();
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.trim() !== '') {
            setTodos([...todos, { id: todos.length + 1, text }]);
            setText('');
        }
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <View style={todostyle.container}>
            <Text style={todostyle.title}>To-Do List</Text>
            <View style={todostyle.inputContainer}>
                <TextInput
                    style={todostyle.input}
                    onChangeText={setText}
                    value={text}
                />
                <TouchableOpacity style={todostyle.addButton} onPress={addTodo}>
                    <Text style={todostyle.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => removeTodo(item.id)} style={todostyle.todoItem}>
                        <Text>{item.text}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

const todostyle = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.white,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    addButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    todoItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
    },
});

export default TodoApp