import { Text, TextProps } from "react-native";
import { styles } from "./styles";


type Props = TextProps & {
    text: string
}

export function TitleInput({ text,style, ...props } : Props) {
    return(
        <Text style={[styles.titleInput, style]}{...props}>{text}</Text>
    )
}
