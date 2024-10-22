
import { Container, Text } from "./styles";

type Props = {
    text: string | number;
}

export function Tag({text}: Props) {
    return(
        <Container>
            <Text>
                {text}
            </Text>
        </Container>
    )
}