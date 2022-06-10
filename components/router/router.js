import React, {useEffect, useState} from "react";
import Main from "../screens/main";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/home";

export default function Router() {
  const Stack = createNativeStackNavigator();

  const [unlock, setUnlock] = useState(true);

  const unlockCar = () => {
    setUnlock(true);
  }

  return (
    <Stack.Navigator>
      {unlock ? (
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false
          }}
          component={() => (<Home />)}
        />
      ) : (
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false
          }}
          component={() => (
            <Main
              unlockCar={unlockCar}
            />
          )}
        />
      )}
    </Stack.Navigator>
  );
}