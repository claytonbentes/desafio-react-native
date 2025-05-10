import { useState ,useCallback } from "react"; 
import { View, StyleSheet, StatusBar, TouchableOpacity, Alert, FlatList } from "react-native";
import { Header } from "@/components/header";
import { Content } from "@/components/content";
import { HeaderTitle } from "@/components/headerTitle";
import { HeaderText } from "@/components/headerText";
import { Button } from "@/components/button";
import { Medicines } from "@/components/medicines";
import { recipeStorage, RecipeStorage } from "@/storage/recipes-storage";
import { Plus, ArrowLeft} from "lucide-react-native"
import { colors } from "@/styles/theme";
import { router, useFocusEffect, Link } from "expo-router";




export default function Recipe() {

    const [recipes, setRecipes] = useState<RecipeStorage[]>([])

    async function getRecipes(){
        try{
            const response = await recipeStorage.getRecipes()
            setRecipes(response)

        }catch (error) {
            Alert.alert("Erro", "Não foi possível carregar as receitas")
            console.log(error)
        }
    }

    async function recipeRemove(id: string){
        try{
            await recipeStorage.removeRecipe(id)
            getRecipes()
        }catch (error) {
            Alert.alert("Erro", "Não foi possível remover a receita")
            console.log(error)
        }
    }

    async function handleRemove(id: string){
        Alert.alert("Remover", "Deseja realmente remover a receita?", [
                {
                    style: "cancel", text: "Cancelar"
                },
                {
                    text: "Sim", onPress: () => recipeRemove(id)
                }
            ])
    }

    useFocusEffect(useCallback(() => {
        getRecipes()
    }
    , []))

    return (
        <View style= {{flex:1}}>
            <StatusBar backgroundColor={colors.gray[600]} barStyle={"dark-content"}/>
            <Header>
                    
                    <View style={styles.align}>
                        <TouchableOpacity onPress={() => router.navigate("/home")}>
                            <ArrowLeft />
                        </TouchableOpacity>
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
                                }}>
                            
                            <Button.Icon icon={Plus} />
                        </Button>
                </View>
                <TouchableOpacity>
                <View style={styles.alignText}>
                    <HeaderTitle style={{color: colors.blue.base}} title="Minhas receitas"/>
                    <HeaderText style={{fontSize:14}}text="Acompanhe seus medicamentos cadastrados e gerencie lembretes"/>
                </View>
                </TouchableOpacity>
            </Header>
            <Content>
                <FlatList 
                    data={recipes} 
                    keyExtractor={(item) => item.id} 
                    renderItem={({item}) => (
                        
                        <TouchableOpacity onPress={() => router.navigate(`/recipe/${item.id}`)} >
                            <Medicines 
                            textTitle={item.nome}
                            textHour={item.horario}
                            textCicle={item.recorrencia}
                            id={item.id}
                            tomarAgora={item.tomarAgora}
                            onRemove={() => handleRemove(item.id)}
                            />
                        </TouchableOpacity>
                        
                )}
                style={styles.list}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
                />                
                
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
    },
    list: {
        flex:1,
        backgroundColor: colors.gray[800],
        width: "100%",
        height: "100%",
        maxWidth: 326,
        borderRadius: 12,
        gap:12,
    },
    
    linksContent: {
    
    paddingVertical: 8,
},
});