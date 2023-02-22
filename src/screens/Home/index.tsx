import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import styles from "../../style/style";
import { API_WEATHER_TOKEN } from "@env";
import { Weather } from "weather-api.ts";
import { ResponseWeatherAPI } from "weather-api.ts/lib/types";

function Home (): JSX.Element {
    // const [data, setData] = useState<ResponseWeatherAPI | undefined>({"current": {"cloud": 75, "condition": {"code": 1183, "icon": "//cdn.weatherapi.com/weather/64x64/night/296.png", "text": "Pluie légère"}, "feelslike_c": 7.1, "feelslike_f": 44.9, "gust_kph": 12.2, "gust_mph": 7.6, "humidity": 87, "is_day": 0, "last_updated": "2023-02-21 23:15", "last_updated_epoch": 1677017700, "precip_in": 0, "precip_mm": 0, "pressure_in": 30.06, "pressure_mb": 1018, "temp_c": 8, "temp_f": 46.4, "uv": 1, "vis_km": 10, "vis_miles": 6, "wind_degree": 300, "wind_dir": "WNW", "wind_kph": 6.8, "wind_mph": 4.3}, "location": {"country": "Spain", "lat": 42.22, "localtime": "2023-02-21 23:17", "localtime_epoch": 1677017838, "lon": -2, "name": "Autol", "region": "La Rioja", "tz_id": "Europe/Madrid"}});
    // const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<ResponseWeatherAPI | undefined>();
    const [loading, setLoading] = useState<boolean>(true);
    const lang: string = 'fr';
    const query: string = 'cremieu';
    const weather = new Weather(API_WEATHER_TOKEN, lang, 'json')
    useEffect(() => {
        // Weather
        weather.realtime({q: query})
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
                    <Text style={styles.localtime}>dernier mis a jour {data?.location && new Date(data?.location?.localtime).toLocaleString(lang)}</Text>
                </View>
                <View style={styles.currentTempContainer}>
                    <Text style={styles.currentTemp}>{data?.current?.temp_c}</Text>
                    <Text style={styles.tempType}>°C</Text>
                </View>
                <View style={styles.conditionTextContainer}>
                    <Image
                        style = {{ width: 32, height: 32 }}
                        source={{uri: 'http:' + data?.current?.condition.icon}}
                    />
                    <Text style={styles.conditionText}>{data?.current?.condition.text}</Text>
                    {/* <Text style={styles.feelsLike}>{data?.current?.feelslike_c}</Text> */}
                </View>
            </View>
        </View>
    }
}

export default Home;