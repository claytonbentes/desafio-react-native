import { useState } from "react"
import { View, TouchableOpacity, StyleSheet, StatusBar, Alert} from "react-native";
import { colors } from "@/styles/theme"
import { ArrowLeft, Check } from "lucide-react-native"
import { HeaderTitle } from "@/components/headerTitle";
import { HeaderText } from "@/components/headerText";
import { Input } from "@/components/input"
import { TitleInput } from "@/components/titleInput"
import { Button } from "@/components/button" 
import { Plus } from "lucide-react-native"
import { recipeStorage } from "@/storage/recipes-storage";
import { router } from "expo-router";

export default function NewRecipe() {

const [nome, setNome,] = useState("")
const [horario, setHorario] = useState("")
const [recorrencia, setRecorrencia] = useState("")
const [tomarAgora, setTomarAgora] = useState<boolean>(false)

async function handleRecipe(){
    try{
        if(!nome.trim() || !horario.trim() || !recorrencia.trim()){
            Alert.alert("Erro","Preencha todos os campos")
        }

        await recipeStorage.saveRecipe({
            id: new Date().getTime().toString(),
            nome,
            horario,
            recorrencia,
            tomarAgora
        })

    }catch (error) {
        Alert.alert("Erro", "Não foi possível salvar a receita")
        console.log(error)
    }


}



    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.gray[800]} barStyle={"dark-content"}/>
            <TouchableOpacity onPress={() => router.navigate("/recipe")}>
                <ArrowLeft size={24} color={colors.gray[100]}/>
            </TouchableOpacity>
            <View style={styles.textsHeader}>
                <HeaderTitle style={{color: colors.red.base}} title={"Nova Receita"}/>
                <HeaderText style={styles.text} text={"Adicione a sua prescrição médica para receber lembretes de quando tomar seu medicamento"}/>
            </View>
            <View style={styles.form}>
                <TitleInput text={"Remédio"}/>
                <Input placeholder="Nome do medicamento" onChangeText={setNome}/>
                <TitleInput text={"Horário"}/>
                <Input placeholder="00:00" onChangeText={setHorario}/>
                <TitleInput text={"Recorrência"}/>
                <Input placeholder="Selecione" onChangeText={setRecorrencia}/>

                <View style={styles.alignCheckbox}>

                    <TouchableOpacity
                        style={[
                            styles.checkbox,
                            tomarAgora && { backgroundColor: colors.red.base },
                        ]}
                        onPress={() => setTomarAgora(!tomarAgora)}
                    >
                        <Check color={colors.gray[800]} size={20}/>
                    </TouchableOpacity>
                    <TitleInput style={{fontSize:16}}text={"Tomar agora"}/>
                </View>
            </View>
            <View style={styles.button}>
                <Button onPress={() => {handleRecipe(), 
                                        Alert.alert("Sucesso", "Receita salva com sucesso", [{text: "Ok", onPress: () => router.navigate("/home")}])}} 
                                        style={{backgroundColor: colors.red.base, width: 200, height: 50, borderRadius: 8}}>
                    <Button.Icon icon={Plus} />
                    <Button.Title>Adicionar</Button.Title>
                </Button>
            </View> 
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: colors.gray[800],
        paddingLeft:32,
        paddingRight:32,
        paddingTop:32,
        gap:12,
    },
    text: {
        color: colors.gray[100],
        fontSize: 14,
    },
    checkbox: {
        height: 24,
          width: 24,
          borderWidth: 1,
          borderColor: colors.gray[400],
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
    },
    alignCheckbox: {
        flexDirection: "row",
        gap: 12,
    },
    textsHeader:{
        paddingTop:24,
        paddingBottom:24,
        gap:8
    },
    form: {
        gap:15
    },
    button: {
        marginTop: "auto",
        paddingBottom: 10,
    }
}
)