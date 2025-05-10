import AsyncStorage from '@react-native-async-storage/async-storage';

const RECIPES_STORAGE_KEY = 'recipes-storage'

export type RecipeStorage = {
    id: string
    nome: string
    horario: string
    recorrencia: string
    tomarAgora: boolean
}

async function getRecipes(): Promise<RecipeStorage[]> {
    const storage = await AsyncStorage.getItem(RECIPES_STORAGE_KEY)
    const response = storage ? JSON.parse(storage) : []
    return response
}


async function saveRecipe(newRecipe: RecipeStorage) {
    try{
        const storage = await getRecipes()
        const updated = JSON.stringify([...storage, newRecipe])

        await AsyncStorage.setItem(RECIPES_STORAGE_KEY, updated)

    }catch (error) {    
        throw error
    }
}

async function removeRecipe(id: string){
    try{
        const storage = await getRecipes()
        const updated = storage.filter((item) => item.id !== id)

        await AsyncStorage.setItem(RECIPES_STORAGE_KEY, JSON.stringify(updated))

    }catch (error) {
        throw error
    }
}

export const recipeStorage = { getRecipes, saveRecipe, removeRecipe}