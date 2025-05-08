import { TextInput, View } from "react-native";
import { styles } from "./styles";
import { LucideProps } from "lucide-react-native";

import { colors } from "@/styles/theme";

type Props = {
    placeholder: string,
    icon?: React.ComponentType<LucideProps>,
}

export function Input({ placeholder, icon: Icon }: Props) {
    return(
        <View>
            
            <TextInput placeholder = {placeholder} style={styles.input}/>
            {Icon && (
                <View style={styles.iconContainer}>
                    <Icon size={24} color={colors.blue.base} />
                </View>
            )}
        </View>
    )
}