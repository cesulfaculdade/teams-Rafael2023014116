import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Logo from "../../assets/logo.png";
import { Container, Title, HeaderContainer, Content} from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { TeamCard } from '@components/TeamCard';
import { useState } from 'react';

export function Teams() {
  const [teams, setTeams] = useState<string[]>(['Equipe 1', 'Equipe 2', 'Equipe 1', 'Equipe 2','Equipe 1', 'Equipe 2','Equipe 1', 'Equipe 2','Equipe 1', 'Equipe 2']);

    return (
      <Container>
        <HeaderContainer>
          <Header/>

          <Highlight
            title="Equipes"
            subtitle="Preparem suas equipes"
          />
        </HeaderContainer>
        <Content>
          <FlatList 
            data={teams}
            keyExtractor={(item) => item}
            renderItem={({item}) => (
              <TeamCard title= {item}/>

            )}
            />

        </Content>
      </Container>
    );
}