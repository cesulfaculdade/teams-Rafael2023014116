import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEMBER_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";
import { MemberStorageDTO } from "./memberStorageDTO";
import { getMembersByTeam } from "./getMembersByTeam";

export async function createMembersOnTeam(newMember: MemberStorageDTO, team: string) {
    try {
        const members = await getMembersByTeam(team);


        const memberAlreadyExists = members.filter(member => member.type == newMember.type);

        if (memberAlreadyExists.length > 0) {
            throw new AppError('Esse membro já está adicionado')
        }

        const storage= JSON.stringify([...members, newMember])


        await AsyncStorage.setItem(`${MEMBER_COLLECTION}-${team}`, JSON.stringify(newMember))
    } catch (error) {
        throw error;
        
    }
}