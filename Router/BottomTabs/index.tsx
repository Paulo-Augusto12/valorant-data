import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import home from "../../screens/home";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import maps from "../../screens/maps";
import guns from "../../screens/guns";

export function BottomTabs() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#0d1821", height: 70 },
      }}
      initialRouteName="home"
    >
      <Tabs.Screen
        name="home"
        component={home}
        options={{
          tabBarIcon: ({ color, size }) => {
            size = 30;
            return <MaterialIcons name="people" color={color} size={size} />;
          },
          tabBarLabel: "Agentes",
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }}
      />
      <Tabs.Screen
        name="maps"
        component={maps}
        options={{
          tabBarIcon: ({ color, size }) => {
            size = 30;
            return <MaterialIcons name="map" color={color} size={size} />;
          },
          tabBarLabel: "Mapas",
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }}
      />
      <Tabs.Screen
        name="guns"
        component={guns}
        options={{
          tabBarIcon: ({ color, size }) => {
            size = 30;
            return (
              <MaterialCommunityIcons name="target" color={color} size={size} />
            );
          },
          tabBarLabel: "Armas",
          tabBarLabelStyle: {
            fontSize: 15,
          },
        }}
      />
    </Tabs.Navigator>
  );
}
