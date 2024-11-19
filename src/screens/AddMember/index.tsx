import { Header } from "@components/Header";
import { Container, Content, HeaderContainer, InputContainer, Tabs } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Tab } from "@components/Tab";
import { Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Tag } from "@components/Tag";
import { MemberCard } from "@components/MemberCard";
import { ListEmpty } from "@components/ListEmpty";
import { useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { createMembersOnTeam } from "@storage/member/createMemberOnTeam";
import { AppError } from "@utils/AppError";
import { MemberStorageDTO } from "@storage/member/memberStorageDTO";
import { getMembersByTypeAndTeam } from "@storage/member/getMembersByTypeAndTeam";

type RouteParms = {
  team: string;
}

export function AddMember() {
  const [newMemberName, setNewMemberName] = useState<string>("")
  const [tab, setTab] = useState<string>("Titular");
  const [members, setMembers] = useState<MemberStorageDTO[]>([]);

  const insets = useSafeAreaInsets();

  const route = useRoute();
  const { team } = route.params as RouteParms;

  async function handleAddMember() {
      if (newMemberName.trim().length === 0) {
          return Alert.alert("Novo membro","Informe o nome do membro para adicionar");
      }

      const newMember = {
          name: newMemberName,
          team: team,
          type: tab,
      }

      try {
          await createMembersOnTeam(newMember ,team);

          setNewMemberName("");

          fetchMembersByTypeAndTeam();
      } catch (error) {
          if (error instanceof AppError){
              Alert.alert("Novo erro", error.message)
          } else {
              Alert.alert("Novo membro", "Não foi possivel adiconar um novo membro.")
          }
      }
  }

  async function fetchMembersByTypeAndTeam () {
      try {
          const membersByTeam = await getMembersByTypeAndTeam(team, tab)
          setMembers(membersByTeam);
      } catch (error) {
          
      }
  }

  useEffect(() => {
      fetchMembersByTypeAndTeam();
  }, [tab])

  return (
      <Container style={{ paddingBottom: insets.bottom }} >
      <HeaderContainer style={{ paddingTop: insets.top }} >
          <Header showBackButton/>

          <Highlight
              title="Equipe 1"
              subtitle="Adicione os titulares e reservas"
          />
      </HeaderContainer>

      <Content>
          <InputContainer>
              <Input 
              style= {{ borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRightWidth: 0}}
              placeholder="Adicione um membro"
              onChangeText={setNewMemberName}
              value={newMemberName}
              autoCorrect={false}
              returnKeyType="done"
              onSubmitEditing={handleAddMember}
              /> 
              <ButtonIcon  
              style= {{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}
              icon="add-circle-outline"/>
          </InputContainer>

          <Tabs>
              <FlatList
                  data={['Titular','Reserva']}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                      <Tab
                          title={item}
                          isActive={item === tab}
                          onPress={() => setTab(item)}
                      />
                  )}
                  horizontal={true}
              />
              <Tag text={0} />
          </ Tabs>

          <FlatList
              data={members}
              keyExtractor={item => item.name}
              renderItem={({item}) => (
              <MemberCard 
                  name={item.name} 
                  onRemove={() => console.log("remove")} 
                  />
              )}
              ListEmptyComponent={<ListEmpty message="Não há membros adicionados."/>}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[{ paddingBottom: 100}, members.length === 0 && {flex: 1}]}
          />

          <Button title="Deletar Equipe" type="SECONDARY" />
      </Content>
  </Container>
  )
}