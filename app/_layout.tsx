import { Stack } from "expo-router";
import { View } from "react-native";

export default function Rootlayout() {
    return (
        <View>
            <Stack>
            <Stack.Screen 
            name="(tabs)" 
            options={{ headerShown: false }} 
            />
             </Stack>
          </View>
    )
}