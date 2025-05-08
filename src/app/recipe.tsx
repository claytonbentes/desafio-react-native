import { View, StyleSheet, StatusBar } from "react-native";
import { Header } from "@/components/header";
import { Content } from "@/components/content";
import { HeaderTitle } from "@/components/headerTitle";
import { HeaderText } from "@/components/headerText";
import { Button } from "@/components/button";
import { Medicines } from "@/components/medicines";
import { Plus, ArrowLeft} from "lucide-react-native"
import { colors } from "@/styles/theme";
import { router } from "expo-router";



export default function Home() {
    return (
        <View style= {{flex:1}}>
            <StatusBar backgroundColor={colors.gray[600]} barStyle={"dark-content"}/>
            <Header>
                    
                    <View style={styles.align}>
                        <ArrowLeft />
                        <Button 
                            onPress={() => router.navigate("/newRecipe")}
                            style={{
                                width: 40,
                                height:40,
                                marginLeft: "auto",
                                backgroundColor: colors.blue.base,
                                justifyContent: "center",
                                alignItems: "center",
                                bottom:20,
                                }}>,
                            
                            <Button.Icon icon={Plus} />
                        </Button>
                </View>
                <View style={styles.alignText}>
                    <HeaderTitle style={{color: colors.blue.base}} title="Minhas receitas"/>
                    <HeaderText style={{fontSize:14}}text="Acompanhe seus medicamentos cadastrados e gerencie lembretes"/>
                </View>
            </Header>
            <Content>
                <Medicines textTitle="Nome do remédio" textHour="14:00" textCicle="A cada 12 horas"/>
                <Medicines textTitle="Nome do remédio" textHour="08:00" textCicle="A cada 7 dias"/>
                <Medicines textTitle="Nome do remédio" textHour="12:00" textCicle="A cada 1 dia"/>
            </Content>
            
        </View>
    )
}

const styles = StyleSheet.create({
    align:{
        flexDirection: "row",
        marginBottom: 10,
        marginTop: -5.
    },
    alignText:{
        bottom: 20,
        gap: 5,
    }
});