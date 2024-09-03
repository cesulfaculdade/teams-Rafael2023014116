import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Logo from "../../assets/logo.png";
import { Container, Title, HeaderContainer} from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

export function Teams() {
    return (
      <Container>
        {/*<Title>Equipes</Title> */}
        <HeaderContainer>
          <Header/>

          <Highlight
            title="Equipes"
            subtitle="Preparem suas equipes"
          />
        </HeaderContainer>
      </Container>
    );
}