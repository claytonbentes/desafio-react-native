import { useState } from "react"
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    KeyboardAvoidingView,
    Alert,
    TouchableOpacity,
    } from "react-native"
import { colors, fontFamily } from "@/styles/theme"
import { Button } from "@/components/button"
import { Input } from "@/components/input"
import { TitleInput } from "@/components/titleInput"
import { Eye, EyeOff } from "lucide-react-native"
import * as Animatable from "react-native-animatable"
import { router } from "expo-router"
import { users } from "@/utils/users"


export default function SignIn() {


const [login, setLogin] = useState<string>()
const [senha, setSenha] = useState<string>()

const [isPasswordVisible, setIsPasswordVisible] = useState(false);


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


            <KeyboardAvoidingView behavior="height" style={{ flex: 1}}>
            <Animatable.View delay={600} animation={"fadeInUp"} style= {styles.containerForm}>
                <Text style={styles.text}>Entre para acessar suas receitas</Text>
                <TitleInput text={"E-mail"}/>
                <Input placeholder="Digite seu nome" onChangeText={setLogin}/>
                <TitleInput text={"Senha"}/>
                <Input placeholder="Senha " onChangeText={setSenha} secureTextEntry={!isPasswordVisible} >
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        {!isPasswordVisible ? (
                            <EyeOff color={colors.blue.base} style={styles.iconInput} />
                        ) : (
                            <Eye color={colors.blue.base} style={styles.iconInput} />
                        )}
                    </TouchableOpacity>
                </Input>
                <Button onPress={() => {
                    if (login === users[0].login && senha === users[0].senha) {
                        router.push("/home")
                    }else{
                        Alert.alert("Atenção", "Usuário ou senha inválidos")
                    }
                }}>
                    <Button.Title>Entrar</Button.Title>
                </Button>
            </Animatable.View>
            </KeyboardAvoidingView>
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
    iconInput: {
        position: "absolute",
        alignSelf: "flex-end",
        marginRight: "7%",
        bottom: 15,
    },


})

