import { Button, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

export default function InputTask ({
    borderColor,
    onHandlerFocus,
    onHandlerBlur,
    onHandlerChangeText,
    task,
    onHandlerCreateTask,
}) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.input, { borderColor }]}
                placeholder="add new tasks"
                autoCapitalize="none"
                autoCorrect={false}
                cursorColor="#424D9E"
                selectionColor="#D4D7ED"
                placeholderTextColor="#C5C9E7"
                onFocus={onHandlerFocus}
                onBlur={onHandlerBlur}
                onChangeText={onHandlerChangeText}
                value={task}
            />
            <Button
                disabled={task.length === 0}
                title="Create"
                color="#424D9E"
                onPress={onHandlerCreateTask}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        flex: 0.95,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: "#212121",
        fontSize: 14,
    },
});