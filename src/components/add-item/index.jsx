import React from "react";
import { View, TextInput, Button } from 'react-native';
import { styles } from './styles';

const AddItem = ({
    placeholder,
    task,
    onHandlerChange,
    buttonText,
    buttonColor,
    onHandlerSubmit
}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                autoComplete="off"
                autoCorrect={false}
                autoCapitalize="none"
                value={task}
                onChangeText={onHandlerChange}
            />
            <Button
                title={buttonText}
                color={buttonColor}
                onPress={onHandlerSubmit}
                disabled={!task}
            />
        </View>
    )
};

export default AddItem;