import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.red.base,
        borderRadius: 50,
        width: 326,
        height: 56,
        maxHeight: 56,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 12,
        marginTop: 15,
    },
    text:{
        fontSize: 16,
        fontFamily: fontFamily.extrabold,
        color: colors.gray[800],
    },
})