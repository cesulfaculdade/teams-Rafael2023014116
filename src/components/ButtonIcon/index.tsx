import { Touchable, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import {  } from "@components/Button/styles";
import { MaterialIcons } from "@expo/vector-icons/"

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({ icon, type = "PRIMARY", ... rest }: Props ) {
    return(
        <Container type={type} {... rest}>
            <Icon 
            name={icon}/>
        </Container>
    )
}