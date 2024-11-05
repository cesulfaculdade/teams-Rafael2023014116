import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./styles";
import { Highlight } from "@components/Highlight";
import { FlatList, TextInput } from "react-native";
import { Teams } from "@screens/Teams";
import { TeamCard } from "@components/TeamCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createTeam } from "@storage/team/createTeam";


export function NewTeam(){
  const [team, setTeam] = useState<string>("")
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  async function handleAddMembers() {
    await createTeam(team);
    navigation.navigate('addMember', {team})
  }

    return(<Container style={{paddingBottom: insets.bottom}}>
        <HeaderContainer style={{paddingTop: insets.top}}>
          <Header showBackButton />

          <Highlight
            title="Nova Equipe"
            subtitle="Crie uma nova equipe e adicione membros"
          />
        </HeaderContainer>
        <Content>
            <Input placeholder="Nome da equipe"
            onChangeText={setTeam}
            />
            <Button title="Criar equipe" 
             onPress={handleAddMembers}
            />
        </Content>
      </Container>

    )
}