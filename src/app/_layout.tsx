import { Stack } from "expo-router"
import { colors } from "@/styles/theme"
import { useFonts,
         NunitoSans_400Regular,
         NunitoSans_800ExtraBold,
         NunitoSans_600SemiBold
        } from '@expo-google-fonts/nunito-sans'

import { Loading } from "@/components/loading"

export default function Layout() {
    const [fontsLoaded] = useFonts({
        NunitoSans_400Regular,
        NunitoSans_800ExtraBold,
        NunitoSans_600SemiBold
    })

    if (!fontsLoaded) {
        return <Loading />
    }
    
    return (
        <Stack 
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: colors.gray[600] },

            }}
        />
    )
}