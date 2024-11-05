import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchAllTeams } from "./fetchAllTeams";
import { TEAM_COLLECTION } from "../storageConfig";

export async function createTeam(newTeam: string) {
    try {
    
        const storedTeams = await fetchAllTeams();

        const storage = JSON.stringify([... storedTeams, newTeam])
       await AsyncStorage.setItem(TEAM_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}