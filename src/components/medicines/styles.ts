import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.gray[700],
        width: "100%",
        height: "100%",
        maxWidth: 326,
        maxHeight: 90,
        borderRadius: 12,
    },
    hourContainer: {
        backgroundColor: colors.gray[500],
        borderRadius:20,
        width: "100%",
        height: "100%",
        maxWidth: 74,
        maxHeight: 28,
        gap:8,
    },
    cicleContainer: {
        backgroundColor: colors.gray[500],
        borderRadius:20,
        width: "100%",
        height: "100%",
        maxWidth: 130,
        maxHeight: 28,
        gap:8,
    },
    alignContainers: {
        flex:1,
        flexDirection: "row",
        gap: 8,
    },
    alignItems: {
        flex:1,
        gap:12,
        marginTop: 12,
        marginLeft: 12,
    },
    icon:{
        width: 16,
        height: 16,
        color: colors.red.base,
        marginLeft: "auto",
        right:12,
        bottom: 35 
    },
    alignContentContainers: {
        flex:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingRight: 5,
        paddingBottom:2,
    }
});