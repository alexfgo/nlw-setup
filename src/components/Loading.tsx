import { ActivityIndicator, View } from "react-native";

export function Loading() {
    return (
        <View className="flex-1 bg-background justify-center items-center">
            <ActivityIndicator color="#7C3AED" />
        </View>
    );
}