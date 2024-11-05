import AsyncStorage from "@react-native-async-storage/async-storage";

export async function createTeam(newTeam: string) {
    try {
    
        const storage = await AsyncStorage.getItem("@cesul-teams:teams");
        const storedTeams = storage ? JSON.parse(storage) : [];

       await AsyncStorage.setItem("@cesul-teams:teams", JSON.stringify([... storedTeams, newTeam]))
    } catch (error) {
        throw error;
    }
}