import { styles } from "./styles";
import { Text, TextProps } from "react-native";

type HeaderTextProps = TextProps & {
    text: string
}
export function HeaderText({text,style,...props}: HeaderTextProps) {
    return (
        <Text style={[styles.text, style]}{...props}>
            {text}
        </Text>
    )
}