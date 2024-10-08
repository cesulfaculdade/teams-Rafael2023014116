import { Header } from "@components/Header";
import { Container, Content, HeaderContainer } from "./styles";
import { Highlight } from "@components/Highlight";
import { FlatList, TextInput } from "react-native";
import { Teams } from "@screens/Teams";
import { TeamCard } from "@components/TeamCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewTeam(){
    return(<Container>
        <HeaderContainer>
          <Header showBackButton/>

          <Highlight
            title="Nova Equipe"
            subtitle="Crie uma nova equipe e adicione membros"
          />
        </HeaderContainer>
        <Content>
            <Input placeholder="Nome da equipe"
            />
            <Button title="Criar equipe" />
        </Content>
      </Container>

    )
}