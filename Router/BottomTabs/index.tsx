import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import home from "../../screens/home";
import { MaterialIcons } from "@expo/vector-icons";

export function BottomTabs() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#3c096c", height: 70 },
      }}
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
    </Tabs.Navigator>
  );
}
