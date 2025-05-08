import { View, ViewProps } from "react-native";
import { styles } from "./styles";

type HeaderProps = ViewProps & {

}

export function Header({children, ...rest} : HeaderProps) {
    return (
        <View style={styles.container} {...rest}>
            {children}
        </View>
    );
}