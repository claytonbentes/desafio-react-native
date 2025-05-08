import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 3.5,
        backgroundColor: colors.gray[800],
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: 32,
        paddingEnd: 32,
        gap:16,
        paddingTop: 40,
        paddingBottom: 10,
    }
});