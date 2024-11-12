import { getMembersByTeam } from "./getMembersByTeam";
import { MemberStorageDTO } from "./memberStorageDTO";

export async function getMembersByTypeAndTeam(team: string, type: string) {
    try {
        const storedMembers = await getMembersByTeam(team);

        const members =storedMembers.filter(member => member.type == type);
        return members
    } catch (error) {
        
    }
    
}