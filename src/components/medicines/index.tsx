import { styles } from "./styles";
import {View, Text} from "react-native";
import { HeaderTitle } from "../headerTitle";
import { HeaderText } from "../headerText"; 
import {Trash2, Clock, Repeat} from "lucide-react-native"
import { colors } from "@/styles/theme";

type Props = {
    textTitle: string
    textHour: string
    textCicle: string
}

export const Medicines = ({textTitle, textHour, textCicle}: Props) => {
  return (
    <View style={styles.container}>
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
          <Trash2 size={22} style={styles.icon}/>
        </View>
        
      </View>
      
    </View>
  );
}