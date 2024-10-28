import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Name } from "./styles";

type Props = {
    name: string,
    onRemove: () => void;
}

export function MemberCard({name, onRemove}: Props) {
    return(
        <Container>
            <Name>
                {name}
            </Name>

            <ButtonIcon
            icon="delete-outline"
            type="SECONDARY"
            size="SM"
            borderRadius="RIGHT"
            onPress={onRemove}
        />
                
        </Container>
        

    )
}