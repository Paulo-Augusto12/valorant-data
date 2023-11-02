import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import List from "./List";

function Home() {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="list" component={List} />
      </Stack.Navigator>
    </>
  );
}

export default React.memo(Home);
