import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[700],
    width: "100%",
    maxWidth: 326,
    height: 90,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12, // Espaçamento entre os itens na FlatList
  },
  hourContainer: {
    backgroundColor: colors.gray[500],
    borderRadius: 20,
    width: 74,
    height: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  cicleContainer: {
    backgroundColor: colors.gray[500],
    borderRadius: 20,
    width: 130,
    height: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  alignContainers: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
  },
  alignItems: {
    gap: 12,
  },
  icon: {
    color: colors.red.base,
    marginLeft: "auto",
    bottom:35,
    
  },
  alignContentContainers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
});