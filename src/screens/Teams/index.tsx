import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Logo from "../../assets/logo.png";
import { Container, HeaderContainer, Content} from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { TeamCard } from '@components/TeamCard';
import { useCallback, useEffect, useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fetchAllTeams } from 'src/storage/team/fetchAllTeams';
import { api } from 'src/services/api';

export function Teams() {
  const [teams, setTeams] = useState<string[]>([]);

  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  function handleNewTeam() {
    navigation.navigate("newTeam");
  }

  async function handleFecthAllTeams() {
    try {
      
      //const data = await fetchAllTeams();
      const response = await api.get('/teams');
      setTeams(response.data.teams)
    } catch (error) {  
      throw console.log(error);
    }
    
  }

  function handleNavigateToMembers(team: string) {
    navigation.navigate('addMember', {team});
  }

  useFocusEffect(useCallback(() => {
     handleFecthAllTeams(); 
  }, [teams]));

    return (
      <Container style={{paddingBottom: insets.bottom}}>
        <HeaderContainer style={{paddingTop: insets.top}}>
          <Header />

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
              <TeamCard title= {item} onPress={() => handleNavigateToMembers(item)}/>

            )}
            ListEmptyComponent={() => (
              <ListEmpty message="Comece criando uma equipe!"/>
            )}
            contentContainerStyle={teams.length == 0 && {flex: 1}}
            />

            <Button 
            title="Criar uma nova equipe" 
            onPress={handleNewTeam}
            />
        </Content>
      </Container>
    );
}