import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Name } from "./styles";

type Props = {
    name: string
}

export function MemberCard({name}: Props) {
    return(
        <Container>
            <Name>
                {name}
            </Name>

            <ButtonIcon
            icon="delete-outline"
            type="SECONDARY"
            size="SM"
            borderRadius="RIGHT"/>
                
        </Container>
        

    )
}