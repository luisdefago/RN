import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const TaskItem = ({ onPressItem, item }) => {
    return (
        <TouchableOpacity onPress={() => onPressItem(item)} style={styles.containerItem}>
            <Text style={styles.listItem}>{item.value}</Text>
            <Text style={styles.icon}>X</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    containerItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: "#D4D7ED",
        paddingHorizontal: 10,
        borderRadius: 10,
        color: "#212121",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginBottom: 10,
    },
    listItem: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#212121",
    },
    icon: {
        color: "red",
        fontSize: 16,
    },
});
export default TaskItem;