import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import List from "./List";
import Data from "./Data";

function Home() {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="list" component={List} />
        <Stack.Screen name="data" component={Data} />
      </Stack.Navigator>
    </>
  );
}

export default React.memo(Home);
