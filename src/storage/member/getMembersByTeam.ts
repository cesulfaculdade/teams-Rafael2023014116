import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEMBER_COLLECTION } from "@storage/storageConfig";
import { MemberStorageDTO } from "./memberStorageDTO";

export async function getMembersByTeam(team: string){
    try {
        
        const storedMembers = await AsyncStorage.getItem(`${MEMBER_COLLECTION}-${team}`);

        const members: MemberStorageDTO[] = storedMembers ? JSON.parse(storedMembers) : [];

        return members;
    } catch (error) {
        throw error;
    }
}