import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEMBER_COLLECTION } from "@storage/storageConfig";
import { MemberStorageDTO } from "./memberStorageDTO";

export async function getMembersByTeam(team: string) {
    try {
        const storage = await AsyncStorage.getItem(`${MEMBER_COLLECTION}-${team}`) ?? '[]';
        const members: MemberStorageDTO[] = storage ? JSON.parse(storage) : [];

        return members;
    } catch (error) {
        throw error;
    }
}