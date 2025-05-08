import { View, Text, TextProps } from 'react-native';

import { styles } from './styles';

type Props = TextProps & {
    title: string
}

export function HeaderTitle( {title, style, ...rest}: Props) {
    return(
        <View>
            <Text style={[styles.title, style]}{...rest}>{title}</Text>
        </View>
    )
}