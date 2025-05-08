import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    } from "react-native"
import { colors, fontFamily } from "@/styles/theme"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { TitleInput } from "@/components/titleInput"
import { Eye } from "lucide-react-native"
import * as Animatable from "react-native-animatable"
import { router } from "expo-router"


export default function SignIn() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.red.base} barStyle={"dark-content"}/>
            <View style={styles.containerLogo}>
                <Animatable.Image 
                animation="flipInY"
                source={require("@/assets/logo.png")}
                style={{ width: "50%"}}
                resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation={"fadeInUp"} style= {styles.containerForm}>
                <Text style={styles.text}>Entre para acessar suas receitas</Text>
                <TitleInput text={"E-mail"}/>
                <Input placeholder="Digite seu nome"/>
                <TitleInput text={"Senha"}/>
                <Input placeholder="Senha " icon={Eye}/>
                <Button onPress={() => {
                    router.navigate("/home");
                }}>
                    <Button.Title>Entrar</Button.Title>
                </Button>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.red.base,
    },
    containerLogo:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.red.base 
    },
    containerForm:{
        flex: 1,
        backgroundColor: colors.gray[800],
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: 32,
        paddingEnd: 32,
        gap:12
    },
    text:{
        fontSize: 16,
        height: 19,
        fontFamily: fontFamily.extrabold,
        color: colors.gray[100],
        marginTop: 40,
        marginBottom: 20,   
    },


})

