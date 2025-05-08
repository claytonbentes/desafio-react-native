import { TouchableOpacity, TouchableOpacityProps, Text, TextProps, ActivityIndicator } from "react-native";
import {styles} from "./styles";
import { LucideProps as LucideIconProps } from "lucide-react-native";
import { colors } from "@/styles/theme";

type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean;
}


function Button({ children,style, isLoading, ...rest } : ButtonProps){
    return(
        <TouchableOpacity
            style={[styles.container, style]}
            activeOpacity={0.7} 
            disabled={isLoading} 
            {...rest}
            >
            {isLoading ? <ActivityIndicator size="small" color={colors.gray[800]} /> : children}
        </TouchableOpacity>
    )
}

function Title({ children } : TextProps){
    return <Text style={styles.text}>{children}</Text>
}

type LucideProps = {
    icon: React.ComponentType<LucideIconProps>;
}


function Icon({ icon: Icon } : LucideProps){
    return <Icon size={24} color={colors.gray[800]}/>
}

Button.Title = Title
Button.Icon = Icon

export { Button }