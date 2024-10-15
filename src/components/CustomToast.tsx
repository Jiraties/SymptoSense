import { View, Text } from "react-native";
import { SymbolView } from "expo-symbols";

const CustomToast = (props) => {
  let symbolName = "";
  let symbolColor = "";

  switch (props.type) {
    case "logout":
      symbolName = "person.crop.circle.badge.xmark";
      symbolColor = "#FF0000";
      break;
    case "warning":
      symbolName = "exclamationmark.triangle";
      symbolColor = "#FFD700";
      break;
    case "login":
      symbolName = "person.crop.circle.badge.checkmark";
      symbolColor = "#32CD32";
      break;
  }

  return (
    <View
      style={{
        backgroundColor: "#fdfdfd",
        padding: 20,
        borderRadius: 20,
        width: "auto",
        flexDirection: "row",
        gap: 15,
      }}
    >
      <SymbolView name={symbolName} tintColor={symbolColor} />
      <Text style={{ fontFamily: "SemiBold" }}>{props.text1}</Text>
    </View>
  );
};

export default CustomToast;
