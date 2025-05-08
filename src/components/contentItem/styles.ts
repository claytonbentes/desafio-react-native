import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.gray[700],
        borderRadius: 12,
        width: 326,
        height: 112,
        justifyContent: "center",
        gap: 16,
    },
    imageContainer:{
        width: 80,
        height: 88,
        borderRadius: 8,
        backgroundColor: colors.gray[600],
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        marginRight: 13,
        marginTop: 13
    },
    icon:{
        color: colors.gray[400],
        width: 20,
        height: 20,
        paddingTop:50,
        paddingRight: 28,
    
    },
    alignItems:{
        flex:1,
        borderRadius:12,
        flexDirection: "row",
    },
    
    alignTexts:{
        flex:2,
        paddingTop: 13,
        paddingLeft:0,
        gap: 8,
        maxWidth: 180,
    },
    title:{
        fontSize: 16,
        fontFamily: fontFamily.extrabold,
        color: colors.gray[100],
        textAlign: "auto",
    },
    text:{
        fontSize: 13,
        fontFamily: fontFamily.regular,
        color: colors.gray[200],
        textAlign: "auto",
    }
})
