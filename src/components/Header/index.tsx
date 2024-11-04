import { Image, Text, TouchableOpacity } from "react-native";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import logoimg from "../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

type Props = {
    showBackButton?: boolean;
}


export function Header({showBackButton = false}: Props) {

const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate("teams");
  }
    return(
        <Container>
          {
            showBackButton &&
            <BackButton onPress={handleGoBack}>
                <BackIcon name="arrow-back-ios" />
            </BackButton>
          }

          <Logo source={logoimg}/>
        </Container>
    )
}