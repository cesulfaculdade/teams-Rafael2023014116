import AsyncStorage from "@react-native-async-storage/async-storage";
import { TEAM_COLLECTION } from "@storage/storageConfig";


export async function fetchAllTeams() {
    try {
    
        const storage = await AsyncStorage.getItem(TEAM_COLLECTION);
        const teams = storage ? JSON.parse(storage) : [];

        return teams;
    } catch (error) {
        throw error;
    }
}