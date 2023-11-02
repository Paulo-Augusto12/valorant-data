import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get("screen").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223843",
    flexDirection: "column",
    gap: 16,
  },
  agentImagesContainer: {
    height: (60 / 100) * height,
    width: "100%",
    alignItems: "center",
    borderRadius: 32,
    padding: 32,
  },
  backgroundImage: {
    width: "100%",
  },
  agentImage: {
    width: "100%",
    height: "80%",
  },
  agentName: {
    color: "#FFFF",
    fontSize: 44,
    fontWeight: "bold",
  },
  agentRole: {
    color: "#FFFF",
    fontSize: 24,
    fontWeight: "600",
  },
  abilitiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataContainer: {
    paddingHorizontal: 10,
    flexDirection: "column",
    gap: 16,
    marginTop: 16,
  },
  abilitiesHeader: { fontSize: 16, color: "#FFFF", fontWeight: "600" },
  abiityCard: {
    width: 60,
    height: 60,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#FFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  skillContainer: { flexDirection: "column", gap: 8, paddingBottom: 16 },
  skillName: { fontSize: 20, color: "#FFFF", fontWeight: "900" },
  skillDescription: { fontWeight: "600", color: "#FFFF" },
});
