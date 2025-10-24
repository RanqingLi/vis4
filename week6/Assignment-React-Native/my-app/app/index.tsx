import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text 
        style={{
        fontSize: 20,
        backgroundColor: "#9D9DBF",
        padding:30,
        borderRadius: 50,
      }}>Hello</Text>
    </View>
  );
}
