import { styles } from "./styles"; 
import { View, Text, Image, ImageProps, TouchableOpacity } from "react-native";
import { ChevronRight, Icon } from "lucide-react-native"
import { router } from "expo-router";

type Props = {
    textTitle: string
    textDescription: string
    image: ImageProps
}

export const ContentItem = ({textTitle, textDescription, image}: Props) => {
    return(
        
        <View style={styles.container} >
            <View style={styles.alignItems}>
                <View style={styles.imageContainer}>
                    <Image source={image}/>
                </View>
                <View style={styles.alignTexts}>
                    <Text style={styles.title}>{textTitle}</Text>
                    <Text style={styles.text}>{textDescription}</Text>
                </View>
                <ChevronRight style={styles.icon} />
                
            </View>
        </View>
    )
}