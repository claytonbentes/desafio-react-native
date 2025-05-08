import { StyleSheet } from "react-native"; 
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.gray[600],
        marginTop:47,
        paddingStart: 32,
        paddingEnd: 32,
        gap:4,
        
    },
    text: {
    },
    icon:{
        width: 24,
        height: 24,
        color: colors.red.base,
        marginLeft: "auto",
    },
    perfilImage: {
        width: 64,
        height: 64,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.blue.base,
        overflow: "hidden", // Garante que a imagem fique dentro do círculo
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    align:{
        flexDirection: "row",
        marginBottom: 10,
        marginTop: -5.

    }
    
});