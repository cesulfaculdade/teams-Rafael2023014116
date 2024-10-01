import { TextInputProps } from "react-native";
import { Container } from "./styles";
import theme from "@theme/index";
import { useTheme } from "styled-components/native";
import { Colors } from "react-native/Libraries/NewAppScreen";


export function Input({... rest}: TextInputProps) {
    const {COLORS} = useTheme();
    return(
        <Container
        placeholderTextColor={COLORS.GRAY_300}
        {...rest}
        />
    )
}