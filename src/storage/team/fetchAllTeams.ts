import AsyncStorage from "@react-native-async-storage/async-storage";

export async function fetchAllTeams() {
    try {
    
        const storage = await AsyncStorage.getItem("@cesul-teams:teams");
        const teams = storage ? JSON.parse(storage) : [];

        return teams;
    } catch (error) {
        throw error;
    }
}