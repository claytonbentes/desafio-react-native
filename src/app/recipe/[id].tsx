import { useLocalSearchParams } from "expo-router";
import { View, Text, StatusBar, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { recipeStorage } from "@/storage/recipes-storage";
import { Header } from "@/components/header";
import { Content } from "@/components/content";
import { Button } from "@/components/button";
import { colors, fontFamily } from "@/styles/theme";
import { router } from "expo-router";

type RecipeStorage = {
    id: string;
    nome: string;
    horario: string;
    recorrencia: string;
};

export default function RecipeDetails() {
    const { id } = useLocalSearchParams(); 
    const [recipe, setRecipe] = useState<RecipeStorage | null>(null); 

    useEffect(() => {
        async function fetchRecipe() {
            try {
                if (!id || typeof id !== "string") {
                    console.error("ID inválido");
                    return;
                }

                const recipes = await recipeStorage.getRecipes(); 
                const foundRecipe = recipes.find((item) => item.id === id); 
                setRecipe(foundRecipe || null); 
            } catch (error) {
                console.error("Erro ao buscar a receita:", error);
            }
        }

        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return (
            <View>
                <Text>Carregando...</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={colors.gray[600]} barStyle={"dark-content"}/>
            <Header style={styles.header}>
                <Image source={require("@/assets/medicamento.png")} style={styles.image} />
            </Header>
            
            <Content>
                <View>
                <Text style={styles.title}>Detalhes da Receita</Text>
                <Text style={styles.text}>Nome: {recipe.nome}</Text>
                <Text style={styles.text}>Horário: {recipe.horario}</Text>
                <Text style={styles.text}>Recorrência: {recipe.recorrencia}</Text>
                <Button onPress={() => router.navigate("/recipe")} style={{backgroundColor: colors.gray[100], width: 250, top: 250, }}>
                    <Button.Title>Voltar</Button.Title>
                </Button>
            </View>
            </Content>
            
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%", 
        height: "100%", 
        resizeMode: "cover", 
    },
    title: {
            fontFamily: fontFamily.extrabold,
            fontSize: 20,
            color: colors.gray[100],
            marginBottom:10
    },
    text: {
        fontSize: 16,
        color: colors.gray[200],
        fontFamily: fontFamily.regular,
        marginBottom:3
      },
      header: {
        width: "100%",
        height: 250,
        backgroundColor: colors.gray[700], 
        overflow: "hidden", 
    },
    button: {
        
    }

    
});