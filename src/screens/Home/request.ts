function requestWeatherAPI (props: RequestWeatherAPIProps): Promise<any> {
    return new Promise((resolve, reject) => {
        console.log('http://api.weatherapi.com/v1/current.json?'+new URLSearchParams(props as any).toString());
        fetch(new Request('http://api.weatherapi.com/v1/current.json?'+new URLSearchParams(props as any).toString()))
            .then(response => {
                if (response.status === 200) {
                    resolve(response.json());
                } else {
                    reject(new Error('Something went wrong on api server!'));
                }
            }).catch(error => {
                console.error(error);
                reject(error);
            });
    });
}

export default requestWeatherAPI;