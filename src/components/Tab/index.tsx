import { TouchableOpacityProps } from "react-native";
import { Container, TabStyleProps, Title } from "./styles";

type Props = TouchableOpacityProps & TabStyleProps & {
    title: string;
}

export function Tab({title, isActive = false, ...rest}: Props ) {
    return(
        <Container isActive={isActive}{...rest}>
            <Title>
                {title}
            </Title>

        </Container>
    )
}