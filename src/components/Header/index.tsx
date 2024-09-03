import { Image, Text, TouchableOpacity } from "react-native";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoimg from "../../assets/logo.png";

type Props = {
    showBackButton?: boolean;
}


export function Header({showBackButton = false}: Props) {
    return(
        <Container>
          {
            showBackButton &&
            <BackButton>
                <BackIcon name="arrow-back-ios" />
            </BackButton>
          }

          <Logo source={logoimg}/>
        </Container>
    )
}