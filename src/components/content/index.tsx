import { styles } from "./styles";
import { View, ViewProps } from "react-native";
import * as Animatable from "react-native-animatable"

type ContentProps = ViewProps & {

}

export function Content({children, ...rest} : ContentProps) {
    return (
        <Animatable.View delay={100} animation={"fadeInUp"} style={styles.container} {...rest} >
            {children}
            
        </Animatable.View>

        
    )
}