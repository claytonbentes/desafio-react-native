import { View, Image, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { Header } from "@/components/header";
import { Content } from "@/components/content";
import { ContentItem } from "@/components/contentItem";
import { Button } from "@/components/button";
import { HeaderText } from "@/components/headerText";
import { HeaderTitle } from "@/components/headerTitle";
import { colors } from "@/styles/theme";
import { Star, LogOut } from "lucide-react-native";
import { router } from "expo-router";
import { users } from "@/utils/users";

export default function Home() {
    return (
        <View style= {{flex:1}}>
            <StatusBar backgroundColor={colors.gray[600]} barStyle={"dark-content"}/>
            <Header>
                    <View style={styles.align}>
                    <View style={styles.perfilImage}>
                        <Image source={require("@/assets/avatar.png")} style={styles.image} />
                    </View>
                    <TouchableOpacity style={styles.icon} onPress={() => router.push("/")}>
                        <LogOut style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <HeaderText text="Boas Vindas"/>
                <HeaderTitle title={users[0].name} />
            </Header>
            <Content>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {router.navigate("/recipe");}}>
                    <ContentItem image={require("@/assets/Paper.png")} textTitle="Minhas Receitas" textDescription="Acompanhe os medicamentos e gerencie lembretes"/>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => {router.navigate("/newRecipe");}}>
                    <ContentItem image={require("@/assets/Pills.png")} textTitle= "Nova receita" textDescription="Cadastre novos lembretes de receitas"/>
                </TouchableOpacity>       
                        <Button style={{backgroundColor: colors.gray[100], marginTop: "auto", }}>
                            <Button.Icon icon={Star} />
                            <Button.Title>Avaliar</Button.Title>
                        </Button>
            </Content>
        </View>
    )
}

const styles = StyleSheet.create({
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
        overflow: "hidden", 
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