import { ActivityIndicator, Text, View } from "react-native";
import { useEffect, useState } from "react";
import styles from "../../style/style";
import { API_WEATHER_TOKEN } from "@env";
import { getWeatherData } from "weather-api.ts";
import { ResponseWeatherAPI } from "weather-api.ts/lib/types";

function Home (): JSX.Element {
    const [data, setData] = useState<ResponseWeatherAPI | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const lang: string = 'fr';
    const query: string = 'cremieu';
    useEffect(() => {
        getWeatherData({key: API_WEATHER_TOKEN, q: query, lang: lang })
            .then(response => {
                console.log('response', response);
                setData(response);
                setLoading(false);
                if (response.status === 200) {

                } else {

                }
            }).catch(error => {
                console.error(error);
            });
    }, [])

    if (loading) {
        return <View style={styles.loading}>
            <ActivityIndicator size="large" />
            <Text>Loading</Text>
        </View>
    } else {
        return <View>
            <View style={{
                margin: 64
                }}>
                <View style={styles.header}>
                    <Text style={styles.localisation}>{data?.location?.name}</Text>
                    <Text style={styles.localtime}>{data?.location && new Date(data?.location?.localtime).toLocaleString(lang)}</Text>
                </View>
                <View style={styles.currentTempContainer}>
                    <Text style={styles.currentTemp}>{data?.current?.temp_c}</Text>
                    <Text style={styles.tempType}>°C</Text>
                </View>
                <Text style={styles.feelsLike}>{data?.current?.feelslike_c}</Text>
                <Text style={styles.conditionText}>{data?.current?.condition.text}</Text>
            </View>
        </View>
    }
}

export default Home;