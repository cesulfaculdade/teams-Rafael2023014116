import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from "../../assets/logo.png";
import { Container, Title, HeaderContainer} from './styles';

export function Teams() {
    return (
      <Container>
        {/*<Title>Equipes</Title> */}
        <HeaderContainer>
          <Image source={Logo}/>
        </HeaderContainer>
      </Container>
    );
}