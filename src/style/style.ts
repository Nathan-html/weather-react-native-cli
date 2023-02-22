import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    loading: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    localtime: {
        fontSize: 10
    },
    localisation: {
        fontSize: 24
    },
    currentTempContainer: {
        flexDirection: "row"
    },
    currentTemp: {
        fontSize: 124,
        verticalAlign: 'top'
    },
    tempType: {
        paddingTop: 32,
        fontSize: 24
    },
    feelsLike: {
        fontSize: 20
    },
    conditionText: {
        fontSize: 20,
    }
});

export default styles;