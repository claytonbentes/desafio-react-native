import { TextInput, View, TextInputProps} from "react-native";
import { styles } from "./styles";
import { LucideProps } from "lucide-react-native";

import { colors } from "@/styles/theme";

type Props = TextInputProps & { 
    placeholder: string,
    icon?: React.ComponentType<LucideProps>,
}

export function Input({children, placeholder, icon: Icon, ...props }: Props) {

    return(
        <View>
            
            <TextInput placeholder = {placeholder} style={styles.input} {...props}/>
            {children}
            {Icon && (
                <View style={styles.iconContainer}>
                        <Icon size={24} color={colors.blue.base}/>
                </View>
            )}
        </View>
    )
}

