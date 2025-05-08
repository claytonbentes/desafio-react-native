import {View, TouchableOpacity, StyleSheet, StatusBar} from "react-native";
import { colors } from "@/styles/theme"
import { ArrowLeft } from "lucide-react-native"
import { HeaderTitle } from "@/components/headerTitle";
import { HeaderText } from "@/components/headerText";
import { Input } from "@/components/input"
import { TitleInput } from "@/components/titleInput"
import { Button } from "@/components/button" 
import { Plus } from "lucide-react-native"

export default function NewRecipe() {
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.gray[800]} barStyle={"dark-content"}/>
            <ArrowLeft size={24} color={colors.gray[100]}/>
            
            <View style={styles.textsHeader}>
                <HeaderTitle style={{color: colors.red.base}} title={"Nova Receita"}/>
                <HeaderText style={styles.text} text={"Adicione a sua prescrição médica para receber lembretes de quando tomar seu medicamento"}/>
            </View>
            <View style={styles.form}>
                <TitleInput text={"Remédio"}/>
                <Input placeholder="Nome do medicamento"/>
                <TitleInput text={"Horário"}/>
                <Input placeholder="00:00"/>
                <TitleInput text={"Recorrência"}/>
                <Input placeholder="Selecione"/>

                <View style={styles.alignCheckbox}>
                    <TouchableOpacity style={styles.checkbox}/>
                    <TitleInput style={{fontSize:16}}text={"Tomar agora"}/>
                </View>
            </View>
            <View style={styles.button}>
                <Button>
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