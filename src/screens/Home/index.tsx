import { Text, View } from "react-native";
import requestWeatherAPI from "./request";
import { useEffect, useState } from "react";
import styles from "../../style/style";
import { API_WEATHER_TOKEN } from "@env";

function Home (): JSX.Element {
    const [data, setData] = useState<ResponseWeatherAPI | undefined>(undefined);
    const getWeatherData = () => {
        requestWeatherAPI({key: API_WEATHER_TOKEN, q: 'auto', lang: 'fr' })
            .then((res: ResponseWeatherAPI) => {
                setData(res);
            })
            .catch((error: Error) => {
                console.error(error);
            }) 
    }
    useEffect(() => {
        getWeatherData();
    }, [])
    return <View>
        <View style={{
            margin: 64
            }}>
            <Text style={styles.localisation}>{data?.location.name}</Text>
            <View style={styles.currentTempContainer}>
                <Text style={styles.currentTemp}>{data?.current.temp_c}<Text  style={styles.tempType}>°C</Text></Text>
            </View>
            <Text style={styles.feelsLike}>{data?.current.feelslike_c}</Text>
            <Text style={styles.conditionText}>{data?.current.condition.text}</Text>
        </View>

    </View>
}

export default Home;