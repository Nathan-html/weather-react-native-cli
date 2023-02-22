import { StyleSheet } from "react-native"

const black = 'rgb(0,0,0)';

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
        color: black,
        fontSize: 24
    },
    currentTempContainer: {
        flexDirection: "row"
    },
    currentTemp: {
        color: black, 
        fontSize: 124,
        verticalAlign: 'top'
    },
    tempType: {
        color: black, 
        paddingTop: 32,
        fontSize: 24
    },
    feelsLike: {
        fontSize: 20
    },
    conditionTextContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    conditionText: {
        color: black, 
        fontSize: 20,
    }
});

export default styles;