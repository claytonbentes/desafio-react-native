import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        height: 56,
        width: 326,
        borderRadius: 8,
        borderColor: colors.gray[400],
        fontSize: 14,
        paddingRight:16,
        paddingLeft: 16,
    },
    iconContainer: {
        position: "absolute",
        right: 16   , // Alinha o ícone à direita
        top: "50%",
        transform: [{ translateY: -12 }], // Centraliza verticalmente o ícone
    },
    
})