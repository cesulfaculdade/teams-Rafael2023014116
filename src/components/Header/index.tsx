import { Image, Text, TouchableOpacity } from "react-native";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoimg from "../../assets/logo.png";


export function Header() {
    return(
        <Container>
            <BackButton>
                <BackIcon name="arrow-back-ios" color="#FFF"/>
            </BackButton>
            <Logo source={logoimg}/>
        </Container>
    )
}