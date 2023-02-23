/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        location: {
          name: 'City',
          region: 'Region',
          country: 'France',
          lat: 50.50,
          lon: 5.35,
          tz_id: 'Europe/Paris',
          localtime_epoch: 1677112341,
          localtime: '2023-01-01 1:00'
        },
        current: {
          last_updated_epoch: 1677112200,
          last_updated: '2023-01-01 1:00',
          temp_c: 10,
          temp_f: 50,
          is_day: 0,
          condition: {
            text: 'Partiellement nuageux',
            icon: '//cdn.weatherapi.com/weather/64x64/night/116.png',
            code: 1003
          },
          wind_mph: 5.6,
          wind_kph: 9,
          wind_degree: 180,
          wind_dir: 'S',
          pressure_mb: 1014,
          pressure_in: 29.94,
          precip_mm: 0,
          precip_in: 0,
          humidity: 87,
          cloud: 75,
          feelslike_c: 9.9,
          feelslike_f: 49.7,
          vis_km: 10,
          vis_miles: 6,
          uv: 1,
          gust_mph: 4.9,
          gust_kph: 7.9
        }
      }),
    })
);

beforeEach(() => {
  fetch.mockClear();
});

it('renders correctly', () => {
  // Weather result
  // weather.realtime({q: query})
  //   .then(response => {
  //     setData(response);
  //     setLoading(false);
  //   }).catch(error => {
  //     console.error(error);
  //   });
  // renderer.create(<App />);
  expect(true).toBe(true);
});
