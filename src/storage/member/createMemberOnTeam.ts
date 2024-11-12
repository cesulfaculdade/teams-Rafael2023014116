import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEMBER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

type MemberStorageDTO = {
    name: string;
    type: string;
    team: string;
}

export async function createMembersOnTeam(newMember: MemberStorageDTO, team: string) {
    try {
        const storedMembers = await AsyncStorage.getItem(`${MEMBER_COLLECTION}-${team}`);



        const members: MemberStorageDTO[] = storedMembers ? JSON.parse(storedMembers) : [];

        const memberAlreadyExists = members.filter(members => members.name == newMember.name);

        if (memberAlreadyExists.length > 0) {
            throw new AppError('Esse membro já está adicionado')
        }

        const storage= JSON.stringify([...members, newMember])

        console.log(storage);

        await AsyncStorage.setItem(`${MEMBER_COLLECTION}-${team}`, JSON.stringify(newMember))
    } catch (error) {
        throw error;
        
    }
}