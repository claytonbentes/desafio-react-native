import { forwardRef } from "react";
import { styles } from "./styles";
import { View, TextProps, TouchableOpacity} from "react-native";
import { HeaderTitle } from "../headerTitle";
import { HeaderText } from "../headerText"; 
import { Trash2, Clock, Repeat} from "lucide-react-native"
import { colors } from "@/styles/theme";
import { router } from "expo-router";

type Props = TextProps & {
    id: string  
    textTitle: string
    textHour: string
    textCicle: string,
    tomarAgora: boolean,
    onRemove: () => void; 
}

export const Medicines = forwardRef<View, Props> (({textTitle, textHour, textCicle, onRemove, id, tomarAgora=false}, ref) => {
  return (
    
    <View ref={ref} style={styles.container}>
      <View style={styles.alignItems}>
        <HeaderTitle style= {{fontSize: 16}} title={textTitle} />
        <View style={styles.alignContainers}>
          <View style={styles.hourContainer}>
            <View style={styles.alignContentContainers}>
              <Clock color={colors.gray[300]} size={14}/>
              <HeaderText style={{fontSize: 12, color: colors.gray[100]}} text={textHour} />
            </View>
          </View>
          <View style={styles.cicleContainer}>
            <View style={styles.alignContentContainers}>
              <Repeat color={colors.gray[300]} size={14}/>
              <HeaderText style={{fontSize: 12, color: colors.gray[100]}} text={textCicle} />
            </View>
          </View>
          <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
            <Trash2 size={22} style={styles.icon}/>
          </TouchableOpacity>
        </View>
        
      </View>
      
    </View>
    
  );
})