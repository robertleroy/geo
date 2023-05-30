import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import publicIp from "public-ip";
// import Weather from './weather.json';

Vue.use(Vuex);

const MAX_RECENT_LOCATIONS = 6;

// #region storage ------------- //
const storagePlugin = (store) => {
  const store_key = "darkcloud";
  const Version = "0.1.0";

  store.subscribe((mutation, state) => {
    let obj = {
      version: state.version,
      savedLocations: state.savedLocations,
      recentLocations: state.recentLocations,
    };

    localStorage.setItem(store_key, JSON.stringify(obj));
  });

  let storage_obj = JSON.parse(localStorage.getItem(store_key));

  if (storage_obj) {
    if (storage_obj.version === Version) {
      Object.assign(store.state, storage_obj);
      // store.replaceState(storage_obj);
    } else {
      store.commit("updateVersion", Version);
    }
  }
};
// #endregion storage ------------- //

// @region store ------------- //
export default new Vuex.Store({
  plugins: [storagePlugin],

  state: {
    version: "0.1.0",
    loading: true,
    showSearchDialog: false,
    currentLocation: {},
    recentLocations: [],
    savedLocations: [],
    weather: {},
  },

  getters: {
    // #region app_getters /////////////
    loading(state) {
      return state.loading;
    },
    showSearchDialog(state) {
      return state.showSearchDialog;
    },
    // #endregion app_getters /////////////

    // #region location_getters /////////////
    currentLocation(state) {
      return state.currentLocation;
    },

    recentLocations(state) {
      return state.recentLocations;
    },

    savedLocations(state) {
      return state.savedLocations;
    },
    // #endregion location_getters /////////////

    // #region weather_getters /////////////
    current(state) {
      return state.weather.currently;
    },

    // minutely(state) {
    //   if ('minutely' in state.weather) {
    //     return state.weather.minutely;
    //   } else {
    //     return {};
    //   }
    // },

    hourly(state) {
      return state.weather.hourly.data;
    },

    daily(state) {
      return state.weather.daily.data.map((el) => {
        let str = el.icon;
        if (el.cloudCover > 0.6 && str.startsWith("partly"))
          str = str.replace("partly", "mostly");
        if (str === "rain" && el.precipIntensity < 0.035) str = "drizzle";
        if (str === "snow" && el.precipIntensity < 0.035) str = "flurries";

        return { ...el, icon: str };
      });
    },

    alerts(state) {
      if (state.weather.alerts) {
        return state.weather.alerts.map((d) => ({
          ...d,
          description: d.description
            .replace(/(WHAT\.\.\.)/, "<br>WHAT: &nbsp;")
            .replace(/(WHEN\.\.\.)/, "<br>WHEN: &nbsp;")
            .replace(/(WHERE\.\.\.)/, "<br>WHERE: &nbsp;")
            .replace(/\.{3}\s\*/g, "<br/><br/>")
            .replace(/\*/g, "<br/>")
            .replace(/\.{3}\s|\*/g, "<br/>")
            .replace(/(HAZARD\.\.\.)/, "<br><br>HAZARD: &nbsp;")
            .replace(/(SOURCE\.\.\.)/, "<br>SOURCE: &nbsp;")
            .replace(/(IMPACT\.\.\.)/, "<br>IMPACT: &nbsp;")
            .replace(/(IMPACTS\.\.\.)/, "<br>IMPACTS: &nbsp;")
            .replace(/(HAIL\.\.\.)/, "<br>HAIL: &nbsp;")
            .replace(/(WIND\.\.\.)/, "<br>WIND: &nbsp;")
            .replace(
              /(Locations impacted)/,
              "<br><br>Locations impacted: &nbsp;"
            )
            .replace(/(Forecast\.\.\.)/, "<br><br>Forecast: &nbsp;")
            .replace(/(Flood History\.\.\.)/, "<br><br>Flood History: &nbsp;")
            .replace(
              /(ADDITIONAL DETAILS\.\.\.)/,
              "<br><br>ADDITIONAL DETAILS: &nbsp;"
            )
            .replace(/(PRECAUTIONARY\.\.\.)/, "<br><br>PRECAUTIONARY")
            .replace(/(NEXT UPDATE)/, "<br><br>NEXT UPDATE")
            .replace(/(SITUATION OVERVIEW)/, "<br><br>SITUATION OVERVIEW")
            .replace(/(POTENTIAL IMPACTS)/, "<br><br>POTENTIAL IMPACTS")
            .replace(/(THREAT TO LIFE)/, "<br><br>THREAT TO LIFE")
            .replace(/(PLAN:)/, "<br><br>PLAN:")
            .replace(/(PREPARE:)/, "<br><br>PREPARE:")
            .replace(/(ACT:)/, "<br><br>ACT:")
            .replace(/\.{3}|\*/g, "&nbsp;&nbsp;")
            .trim(),
        }));
      }
    },

    summary(state) {
      let obj = {
        current: state.weather.currently.summary,
        hourly: state.weather.hourly.summary,
        today: state.weather.daily.data[0].summary,
        daily: state.weather.daily.summary,
      };
      if ("minutely" in state.weather) {
        obj.minutely = state.weather.minutely.summary;
      }
      return obj;
    },

    days(state) {
      const hours = state.weather.hourly.data;

      var x = 24 - new Date(hours[0].time * 1000).getHours();
      return [
        hours.slice(0, x),
        hours.slice(x, x + 24),
        hours.slice(x + 24, x + 48),
        hours.slice(x + 48, x + 72),
        hours.slice(x + 72, x + 96),
        hours.slice(x + 96, x + 120),
        hours.slice(x + 120, x + 144),
        hours.slice(x + 144),
      ];
    },

    weekRange(state) {
      const week = state.weather.daily.data;
      const highs = week.map((el) => el.temperatureHigh);
      const lows = week.map((el) => el.temperatureLow);

      return [Math.min.apply(null, lows), Math.max.apply(null, highs)];
    },

    minutes(state) {
      if ("minutely" in state.weather) {
        return state.weather.minutely.data
          .map((el) => {
            return { time: el.time * 1000, value: el.precipIntensity };
          })
          .filter((el, i) => {
            return i % 3 === 0;
          });
      } else {
        return;
      }
    },

    precipThisHour(state) {
      if ("minutely" in state.weather) {
        var bool = false;
        var str = state.weather.minutely.icon;

        if (
          str === "rain" ||
          str === "sleet" ||
          str === "hail" ||
          str === "snow"
        ) {
          bool = true;
        }
        return bool;
      } else return false;
    },
    // #endregion weather_getters /////////////
  }, // end getters //

  mutations: {
    // #region app_mutations /////////////
    updateVersion(state, payload) {
      state.version = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setShowSearchDialog(state, payload) {
      state.showSearchDialog = payload;
    },
    // #endregion app_mutations /////////////

    // #region weather_mutations /////////////
    setWeather(state, payload) {
      state.weather = { ...payload };
    },
    // #endregion weather_mutations /////////////

    // #region location_mutations /////////////
    setLocation(state, payload) {
      state.currentLocation = payload;
    },
    setSavedLocations(state, payload) {
      state.savedLocations = payload;
    },
    setRecentLocations(state, payload) {
      state.recentLocations = payload;
    },

    addLocation(state, obj) {
      const x_saved = state.savedLocations.findIndex((el) => {
        el.lat === obj.lat && el.lon === obj.lon;
      });
      const x_recent = state.recentLocations.findIndex((el) => {
        el.lat === obj.lat && el.lon === obj.lon;
      });
      if (x_saved > -1 || x_recent > -1) return;
      state.recentLocations.unshift(obj);
      state.recentLocations = state.recentLocations.slice(
        0,
        MAX_RECENT_LOCATIONS
      );
    },
    // #endregion location_mutations /////////////
  }, // mutations

  actions: {
    dispatchLocation({ dispatch, commit }, payload) {
      commit("setLocation", payload);
      dispatch("getWeather", payload);
    },

    async getIp({ dispatch, commit }) {
      // https://www.npmjs.com/package/public-ip
      const ipv4 = await publicIp.v4();

      if (ipv4) {
        axios({
          method: "POST",
          url: "./ip",
          data: ipv4,
        }).then((res) => {
          const data = res.data;
          const obj = {
            city: data.city,
            region: data.region,
            regionName: data.regionName,
            country: data.country,
            countryCode: data.countryCode,
            localName: data.city,
            lat: data.lat,
            lon: data.lon,
          };
          console.log("ipv4", obj);
          commit("setLocation", obj);
          dispatch("getWeather", obj);
        });
      }
    }, // getIp //

    getGeolocation({ dispatch }) {
      var getPosition = (options) => {
        return new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
      };

      getPosition()
        .then((position) => {
          const coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          return coords;
        })
        .then((coords) => {
          console.log("getGeolocation", coords);
          dispatch("getReverseTomtom", coords);
          // dispatch('getWeather', coords);
        })
        .catch((err) => {
          console.error("Error", err);
          // commit('setShowSearchDialog', true);
          dispatch("getIp");
        });
    }, // getGeolocation //

    getReverseTomtom({ dispatch, commit }, payload) {
      axios({
        method: "POST",
        url: "./reverseTomtom",
        data: `${payload.lat},${payload.lon}`,
      }).then((res) => {
        // console.log('reverseTomtom', res);
        const data = res.data.addresses[0].address;
        const obj = {
          city: data.localName || data.municipality,
          region: data.countrySubdivision,
          regionName: data.countrySubdivisionName,
          country: data.country,
          countryCode: data.countryCode,
          localName: data.localName
            ? data.localName
            : data.freeformAddress
            ? data.freeformAddress
            : data.countrySubdivisionName,
          lat: payload.lat,
          lon: payload.lon,
        };
        console.log("getReverseTomtom", obj);
        commit("setLocation", obj);
        dispatch("getWeather", obj);
      });
    }, // getReverseTomtom //

    getTomtom({ commit, dispatch }, payload) {
      axios
        .post("./tomtom", {
          searchTerm: payload,
        })
        .then((res) => {
          if (res.data.results.length < 1) return;
          console.log("getTomtom", res);
          const obj = formatTomtom(res.data.results[0]);
          // dispatch('dispatchLocation', obj);
          commit("setLocation", obj);
          dispatch("getWeather", obj);
          return obj;
        })
        .then((obj) => {
          commit("addLocation", obj);
        })
        .catch((err) => {
          console.log("Tomtom Request Failed: ", err);
          commit("setShowSearchDialog", true);
        });
    }, // getTomtom //

    getWeather({ commit }, payload) {
      axios({
        method: "POST",
        url: "./weather",
        data: `${payload.lat},${payload.lon}`,
      })
        .then((res) => {
          console.log("weather", res.data);
          commit("setWeather", res.data);
          commit("setShowSearchDialog", false);
          commit("setLoading", false);
        })
        .catch((err) => {
          console.log("Darksky Request Failed: ", err);
        });
    }, // getWeather //
  }, // actions //
});
// #endregion store ------------- //

// #region helper ------------- //
function formatTomtom(data) {
  let obj = {};
  obj.id = Date.now().toString(16).slice(-8);
  obj.city = data.address.municipalitySubdivision
    ? data.address.municipalitySubdivision
    : data.address.municipality
    ? data.address.municipality
    : "";
  obj.region = data.address.countrySubdivision
    ? data.address.countrySubdivision
    : "";
  obj.regionName = data.address.countrySubdivisionName
    ? data.address.countrySubdivisionName
    : data.address.countrySubdivision;

  obj.country = data.address.country;
  obj.countryCode = data.address.countryCode;
  obj.localName = data.address.localName
    ? data.address.localName
    : data.address.freeformAddress
    ? data.address.freeformAddress
    : data.address.countrySubdivisionName;
  obj.lat = data.position.lat;
  obj.lon = data.position.lon;

  return obj;
}
// #endregion helper ------------- //
