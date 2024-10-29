import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NewTeam } from "@screens/NewTeam"
import { Teams } from "@screens/Teams"

const {Navigator, Screen} = createNativeStackNavigator()


export function AppRoutes() {
    return(
      <Navigator
      initialRouteName="teams"
      screenOptions={{headerShown: false}}>
        
        <Screen 
         name="teams"
         component={Teams}
        
        />

        <Screen 
         name="newTeam"
         component={NewTeam}
        
        />
       
      </Navigator>
    )
}