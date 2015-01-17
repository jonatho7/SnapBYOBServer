var exampleGeometryJSON =
    { "type": "FeatureCollection",
        "features": [
            { "type": "Feature",
                "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
                "properties": {"prop0": "value0"}
            },
            { "type": "Feature",
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
                    ]
                },
                "properties": {
                    "prop0": "value0",
                    "prop1": 0.0
                }
            },
            { "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
                            [100.0, 1.0], [100.0, 0.0] ]
                    ]
                },
                "properties": {
                    "prop0": "value0",
                    "prop1": {"this": "that"}
                }
            }
        ]
    };

var earthquakeJSON =
    { "type": "FeatureCollection",
        "metadata": {
            "generated": 1421513434000,
            "url": "http://earthquake.usgs.gov/earthquakes/feed/geojsonp/2.5/week",
            "title": "USGS Magnitude 2.5+ Earthquakes, Past Week",
            "subTitle": "Real-time, worldwide earthquake list for the past week",
            "cacheMaxAge": 60
        },
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "108km SSE of Tondano, Indonesia",
                    "time": "1421510860310",
                    "updated": "1421511701600",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgru",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000tgru",
                    "ids": ",usc000tgru,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.01",
                    "rms": "1.29",
                    "gap": "40",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        125.3825,
                        0.4431,
                        64.42
                    ]
                },
                "id": "usc000tgru"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "11km NW of Honoka'a, Hawaii",
                    "time": "1421506213000",
                    "updated": "1421506458003",
                    "tz": -600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/hv60835146",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "96",
                    "net": "hv",
                    "code": "60835146",
                    "ids": ",hv60835146,",
                    "sources": ",hv,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,",
                    "nst": null,
                    "dmin": "0.233562",
                    "rms": "0.18",
                    "gap": "233.999981280001",
                    "magnitudeType": "md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -155.536,
                        20.1692,
                        42.8
                    ]
                },
                "id": "hv60835146"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.4,
                    "place": "11km SW of Yasuj, Iran",
                    "time": "1421494928660",
                    "updated": "1421496349635",
                    "tz": 210,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgqm",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "298",
                    "net": "us",
                    "code": "c000tgqm",
                    "ids": ",usc000tgqm,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "6.998",
                    "rms": "0.88",
                    "gap": "76",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        51.5066,
                        30.5951,
                        10
                    ]
                },
                "id": "usc000tgqm"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.6,
                    "place": "80km SW of Pagaralam, Indonesia",
                    "time": "1421494529310",
                    "updated": "1421501305470",
                    "tz": 420,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgqz",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "326",
                    "net": "us",
                    "code": "c000tgqz",
                    "ids": ",usc000tgqz,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.265",
                    "rms": "0.67",
                    "gap": "101",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        102.7569,
                        -4.5381,
                        67.29
                    ]
                },
                "id": "usc000tgqz"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "6km SSE of Guanica, Puerto Rico",
                    "time": "1421492660800",
                    "updated": "1421494625559",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15017003",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "112",
                    "net": "pr",
                    "code": "15017003",
                    "ids": ",pr15017003,",
                    "sources": ",pr,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "13",
                    "dmin": "0.05389892",
                    "rms": "0.15",
                    "gap": "194.4",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -66.8825,
                        17.9206,
                        15
                    ]
                },
                "id": "pr15017003"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.8,
                    "place": "81km WSW of Port-Vila, Vanuatu",
                    "time": "1421489422500",
                    "updated": "1421490678476",
                    "tz": 660,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgqe",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "354",
                    "net": "us",
                    "code": "c000tgqe",
                    "ids": ",usc000tgqe,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.468",
                    "rms": "0.78",
                    "gap": "103",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        167.5742,
                        -17.904,
                        16.67
                    ]
                },
                "id": "usc000tgqe"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.3,
                    "place": "103km ESE of Adak, Alaska",
                    "time": "1421487406140",
                    "updated": "1421488907365",
                    "tz": -720,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgq5",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": 3.3,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "284",
                    "net": "us",
                    "code": "c000tgq5",
                    "ids": ",usc000tgq5,ak11487545,",
                    "sources": ",us,ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.833",
                    "rms": "1.26",
                    "gap": "189",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -175.4011,
                        51.3694,
                        31.83
                    ]
                },
                "id": "usc000tgq5"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.1,
                    "place": "84km ENE of Cantwell, Alaska",
                    "time": "1421486679000",
                    "updated": "1421488925122",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11487521",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "148",
                    "net": "ak",
                    "code": "11487521",
                    "ids": ",ak11487521,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.81",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -147.314,
                        63.5837,
                        17
                    ]
                },
                "id": "ak11487521"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.6,
                    "place": "71km WNW of San Antonio de los Cobres, Argentina",
                    "time": "1421485671540",
                    "updated": "1421487147796",
                    "tz": -180,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgq2",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "326",
                    "net": "us",
                    "code": "c000tgq2",
                    "ids": ",usc000tgq2,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.281",
                    "rms": "1.24",
                    "gap": "55",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -67.011,
                        -24.0874,
                        173.58
                    ]
                },
                "id": "usc000tgq2"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.8,
                    "place": "Easter Island region",
                    "time": "1421481378920",
                    "updated": "1421510327673",
                    "tz": -420,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgps",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "354",
                    "net": "us",
                    "code": "c000tgps",
                    "ids": ",usc000tgps,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "4.78",
                    "rms": "0.84",
                    "gap": "94",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -112.11,
                        -23.044,
                        10
                    ]
                },
                "id": "usc000tgps"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.9,
                    "place": "17km ESE of Y, Alaska",
                    "time": "1421480507000",
                    "updated": "1421509454628",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11487492",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "129",
                    "net": "ak",
                    "code": "11487492",
                    "ids": ",ak11487492,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.72",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -149.5261,
                        62.1139,
                        0
                    ]
                },
                "id": "ak11487492"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.9,
                    "place": "47km WSW of Willow, Alaska",
                    "time": "1421477133000",
                    "updated": "1421506080267",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11487472",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "129",
                    "net": "ak",
                    "code": "11487472",
                    "ids": ",ak11487472,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.79",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -150.87,
                        61.5942,
                        59.4
                    ]
                },
                "id": "ak11487472"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.4,
                    "place": "8km ENE of Helena, Oklahoma",
                    "time": "1421476421600",
                    "updated": "1421478761645",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgpe",
                    "felt": 2,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "178",
                    "net": "us",
                    "code": "c000tgpe",
                    "ids": ",usc000tgpe,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.186",
                    "rms": "0.57",
                    "gap": "95",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -98.1909,
                        36.5875,
                        5
                    ]
                },
                "id": "usc000tgpe"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.3,
                    "place": "2km SSE of Bungahan, Philippines",
                    "time": "1421471360800",
                    "updated": "1421475572697",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgpb",
                    "felt": 1,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "432",
                    "net": "us",
                    "code": "c000tgpb",
                    "ids": ",usc000tgpb,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "8.946",
                    "rms": "1.05",
                    "gap": "59",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        120.6664,
                        13.9211,
                        141.9
                    ]
                },
                "id": "usc000tgpb"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.5,
                    "place": "124km ENE of Ndoi Island, Fiji",
                    "time": "1421467082990",
                    "updated": "1421496043544",
                    "tz": -720,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgp0",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "312",
                    "net": "us",
                    "code": "c000tgp0",
                    "ids": ",usc000tgp0,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "4.687",
                    "rms": "0.77",
                    "gap": "96",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -177.6583,
                        -20.1019,
                        410.6
                    ]
                },
                "id": "usc000tgp0"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "8km NNE of Tallaboa Alta, Puerto Rico",
                    "time": "1421466888300",
                    "updated": "1421495840294",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15017001",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "112",
                    "net": "pr",
                    "code": "15017001",
                    "ids": ",pr15017001,",
                    "sources": ",pr,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "15",
                    "dmin": "0.09701805",
                    "rms": "0.28",
                    "gap": "82.8",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -66.6692,
                        18.1212,
                        19
                    ]
                },
                "id": "pr15017001"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "145km WSW of Middleton Island, Alaska",
                    "time": "1421460317000",
                    "updated": "1421489272992",
                    "tz": -600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11487418",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "104",
                    "net": "ak",
                    "code": "11487418",
                    "ids": ",ak11487418,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.87",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -148.5171,
                        58.7708,
                        11.9
                    ]
                },
                "id": "ak11487418"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3,
                    "place": "26km S of Anthony, Kansas",
                    "time": "1421456657320",
                    "updated": "1421459065819",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgns",
                    "felt": 4,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "140",
                    "net": "us",
                    "code": "c000tgns",
                    "ids": ",usc000tgns,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.066",
                    "rms": "0.23",
                    "gap": "88",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -98.027,
                        36.9141,
                        5
                    ]
                },
                "id": "usc000tgns"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.3,
                    "place": "Kepulauan Barat Daya, Indonesia",
                    "time": "1421452553080",
                    "updated": "1421481501987",
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgnh",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "284",
                    "net": "us",
                    "code": "c000tgnh",
                    "ids": ",usc000tgnh,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "4.709",
                    "rms": "0.69",
                    "gap": "75",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        128.453,
                        -7.4939,
                        134.85
                    ]
                },
                "id": "usc000tgnh"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.8,
                    "place": "104km W of Cantwell, Alaska",
                    "time": "1421450241000",
                    "updated": "1421479197544",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11487400",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "121",
                    "net": "ak",
                    "code": "11487400",
                    "ids": ",ak11487400,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.86",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -151.0316,
                        63.5168,
                        8.8
                    ]
                },
                "id": "ak11487400"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "94km NW of Talkeetna, Alaska",
                    "time": "1421448801000",
                    "updated": "1421477758111",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11487394",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "112",
                    "net": "ak",
                    "code": "11487394",
                    "ids": ",ak11487394,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.62",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -151.3667,
                        62.9381,
                        121.6
                    ]
                },
                "id": "ak11487394"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.4,
                    "place": "25km SSE of Medford, Oklahoma",
                    "time": "1421447374000",
                    "updated": "1421458505162",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgmg",
                    "felt": 2,
                    "cdi": 2.7,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "178",
                    "net": "us",
                    "code": "c000tgmg",
                    "ids": ",usc000tgmg,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.64",
                    "gap": "64",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.6125,
                        36.6032,
                        5.645
                    ]
                },
                "id": "usc000tgmg"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "West Chile Rise",
                    "time": "1421445639350",
                    "updated": "1421474602500",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgma",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tgma",
                    "ids": ",usc000tgma,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "12.81",
                    "rms": "0.85",
                    "gap": "108",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -93.6187,
                        -38.1692,
                        10
                    ]
                },
                "id": "usc000tgma"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "8km NE of Luther, Oklahoma",
                    "time": "1421445044600",
                    "updated": "1421467285487",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgmf",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "112",
                    "net": "us",
                    "code": "c000tgmf",
                    "ids": ",usc000tgmf,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.5",
                    "gap": "81",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.1161,
                        35.7089,
                        6.199
                    ]
                },
                "id": "usc000tgmf"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.02,
                    "place": "66km ESE of Lakeview, Oregon",
                    "time": "1421436271824",
                    "updated": "1421465224447",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00477529",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "140",
                    "net": "nn",
                    "code": "00477529",
                    "ids": ",nn00477529,",
                    "sources": ",nn,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "7",
                    "dmin": "0.128",
                    "rms": "0.2119",
                    "gap": "120.94",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.6358,
                        41.9032,
                        7.4827
                    ]
                },
                "id": "nn00477529"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.4,
                    "place": "19km SE of Su'ao, Taiwan",
                    "time": "1421435535340",
                    "updated": "1421511537673",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgjl",
                    "felt": 0,
                    "cdi": 0,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "298",
                    "net": "us",
                    "code": "c000tgjl",
                    "ids": ",usc000tgjl,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,moment-tensor,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.448",
                    "rms": "0.94",
                    "gap": "25",
                    "magnitudeType": "mwr"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        121.9687,
                        24.4664,
                        32.94
                    ]
                },
                "id": "usc000tgjl"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "170km E of Chitina, Alaska",
                    "time": "1421434967000",
                    "updated": "1421463926513",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11487218",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "96",
                    "net": "ak",
                    "code": "11487218",
                    "ids": ",ak11487218,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.64",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -141.2406,
                        61.5605,
                        1.3
                    ]
                },
                "id": "ak11487218"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "60km NNE of Road Town, British Virgin Islands",
                    "time": "1421432945500",
                    "updated": "1421509479040",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15016000",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "96",
                    "net": "pr",
                    "code": "15016000",
                    "ids": ",pr15016000,usc000tgk2,",
                    "sources": ",pr,us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": "3",
                    "dmin": "0.5407858",
                    "rms": "0.2",
                    "gap": "331.2",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -64.3184,
                        18.8803,
                        6
                    ]
                },
                "id": "pr15016000"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.9,
                    "place": "71km NE of Cold Bay, Alaska",
                    "time": "1421432923800",
                    "updated": "1421509394387",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgli",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "129",
                    "net": "us",
                    "code": "c000tgli",
                    "ids": ",ak11487216,usc000tgli,",
                    "sources": ",ak,us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.814",
                    "rms": "0.55",
                    "gap": "161",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -161.8407,
                        55.5946,
                        163.61
                    ]
                },
                "id": "usc000tgli"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "110km WNW of Hofn, Iceland",
                    "time": "1421429902720",
                    "updated": "1421509135112",
                    "tz": 0,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tghi",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tghi",
                    "ids": ",usc000tghi,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "1.713",
                    "rms": "0.72",
                    "gap": "96",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -17.3593,
                        64.5906,
                        12.2
                    ]
                },
                "id": "usc000tghi"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "61km SW of Kokopo, Papua New Guinea",
                    "time": "1421428547460",
                    "updated": "1421508591706",
                    "tz": 600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgh6",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000tgh6",
                    "ids": ",usc000tgh6,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.605",
                    "rms": "0.94",
                    "gap": "71",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        151.8298,
                        -4.7006,
                        167.28
                    ]
                },
                "id": "usc000tgh6"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.9,
                    "place": "29km SSE of Redoubt Volcano, Alaska",
                    "time": "1421415773000",
                    "updated": "1421444726695",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11487140",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "129",
                    "net": "ak",
                    "code": "11487140",
                    "ids": ",ak11487140,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.58",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -152.5185,
                        60.2418,
                        108.8
                    ]
                },
                "id": "ak11487140"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3,
                    "place": "19km ENE of Mooreland, Oklahoma",
                    "time": "1421415692370",
                    "updated": "1421444648722",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgdp",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "138",
                    "net": "us",
                    "code": "c000tgdp",
                    "ids": ",usc000tgdp,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.14",
                    "rms": "0.41",
                    "gap": "171",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -99.0148,
                        36.5198,
                        5.19
                    ]
                },
                "id": "usc000tgdp"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.1,
                    "place": "37km NNW of Cap-Chat, Canada",
                    "time": "1421413528720",
                    "updated": "1421441328241",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgdg",
                    "felt": 3,
                    "cdi": 3.4,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": "1",
                    "sig": "260",
                    "net": "us",
                    "code": "c000tgdg",
                    "ids": ",at00ni9tp3,usc000tgdg,",
                    "sources": ",at,us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-link,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.8",
                    "gap": null,
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -66.7949,
                        49.4297,
                        18
                    ]
                },
                "id": "usc000tgdg"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.1,
                    "place": "7km SSE of Machala, Ecuador",
                    "time": "1421408363610",
                    "updated": "1421470537386",
                    "tz": -300,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgde",
                    "felt": 13,
                    "cdi": 5.6,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "407",
                    "net": "us",
                    "code": "c000tgde",
                    "ids": ",usc000tgde,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "3.847",
                    "rms": "0.8",
                    "gap": "113",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -79.9413,
                        -3.3334,
                        75.19
                    ]
                },
                "id": "usc000tgde"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.56,
                    "place": "6km NW of The Geysers, California",
                    "time": "1421404795610",
                    "updated": "1421438647353",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nc72382136",
                    "felt": 1,
                    "cdi": 2.2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "101",
                    "net": "nc",
                    "code": "72382136",
                    "ids": ",nc72382136,",
                    "sources": ",nc,",
                    "types": ",cap,dyfi,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
                    "nst": "75",
                    "dmin": "0.008197",
                    "rms": "0.06",
                    "gap": "22",
                    "magnitudeType": "md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.8196667,
                        38.8123333,
                        2.67
                    ]
                },
                "id": "nc72382136"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.8,
                    "place": "2km SSW of Pahala, Hawaii",
                    "time": "1421403901800",
                    "updated": "1421443977523",
                    "tz": -600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/hv60836677",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "AUTOMATIC",
                    "tsunami": null,
                    "sig": "121",
                    "net": "hv",
                    "code": "60836677",
                    "ids": ",hv60836677,",
                    "sources": ",hv,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,",
                    "nst": null,
                    "dmin": "0.04491576",
                    "rms": "0.24",
                    "gap": "154.8",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -155.488,
                        19.1885,
                        41.8
                    ]
                },
                "id": "hv60836677"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.5,
                    "place": "159km NNW of Hirara, Japan",
                    "time": "1421394305850",
                    "updated": "1421423263225",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgct",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "312",
                    "net": "us",
                    "code": "c000tgct",
                    "ids": ",usc000tgct,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.393",
                    "rms": "0.71",
                    "gap": "53",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        124.8604,
                        26.1853,
                        173.87
                    ]
                },
                "id": "usc000tgct"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "78km W of Port-Vila, Vanuatu",
                    "time": "1421392398230",
                    "updated": "1421421353615",
                    "tz": 660,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgci",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000tgci",
                    "ids": ",usc000tgci,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.419",
                    "rms": "1.1",
                    "gap": "69",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        167.5948,
                        -17.851,
                        17.81
                    ]
                },
                "id": "usc000tgci"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.8,
                    "place": "20km NW of Medford, Oklahoma",
                    "time": "1421391211590",
                    "updated": "1421393965881",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgce",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "121",
                    "net": "us",
                    "code": "c000tgce",
                    "ids": ",usc000tgce,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.056",
                    "rms": "0.41",
                    "gap": "41",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.9134,
                        36.9173,
                        3.9
                    ]
                },
                "id": "usc000tgce"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.3,
                    "place": "19km WNW of Puerto Madero, Mexico",
                    "time": "1421389370490",
                    "updated": "1421406995082",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgcb",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "285",
                    "net": "us",
                    "code": "c000tgcb",
                    "ids": ",usc000tgcb,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-text,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.904",
                    "rms": "0.81",
                    "gap": "177",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -92.5984,
                        14.757,
                        10
                    ]
                },
                "id": "usc000tgcb"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.9,
                    "place": "105km W of Cantwell, Alaska",
                    "time": "1421383635000",
                    "updated": "1421412594917",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11487013",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "129",
                    "net": "ak",
                    "code": "11487013",
                    "ids": ",ak11487013,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.85",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -151.0582,
                        63.3026,
                        0.7
                    ]
                },
                "id": "ak11487013"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.9,
                    "place": "60km WNW of Willow, Alaska",
                    "time": "1421381679000",
                    "updated": "1421410661518",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11486998",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "129",
                    "net": "ak",
                    "code": "11486998",
                    "ids": ",ak11486998,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.63",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -151.105,
                        61.9585,
                        55.5
                    ]
                },
                "id": "ak11486998"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.1,
                    "place": "5km SSE of Guthrie, Oklahoma",
                    "time": "1421380699910",
                    "updated": "1421390787117",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgbn",
                    "felt": 7,
                    "cdi": 2.8,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "150",
                    "net": "us",
                    "code": "c000tgbn",
                    "ids": ",usc000tgbn,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.158",
                    "rms": "0.78",
                    "gap": "29",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.4081,
                        35.8339,
                        7.3
                    ]
                },
                "id": "usc000tgbn"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.4,
                    "place": "37km ESE of Nikolski, Alaska",
                    "time": "1421376292140",
                    "updated": "1421405253542",
                    "tz": -600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgbk",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": "1",
                    "sig": "298",
                    "net": "us",
                    "code": "c000tgbk",
                    "ids": ",at00ni90ys,usc000tgbk,ak11486867,",
                    "sources": ",at,us,ak,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-link,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.335",
                    "rms": "1.44",
                    "gap": "168",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -168.3281,
                        52.8673,
                        56.6
                    ]
                },
                "id": "usc000tgbk"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.8,
                    "place": "176km ESE of Hirara, Japan",
                    "time": "1421375072960",
                    "updated": "1421404027236",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgbi",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "354",
                    "net": "us",
                    "code": "c000tgbi",
                    "ids": ",usc000tgbi,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "3.512",
                    "rms": "1.12",
                    "gap": "130",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        126.8363,
                        24.074,
                        10
                    ]
                },
                "id": "usc000tgbi"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "122km NW of Talkeetna, Alaska",
                    "time": "1421367361000",
                    "updated": "1421396313318",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11486845",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "112",
                    "net": "ak",
                    "code": "11486845",
                    "ids": ",ak11486845,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.92",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -151.5975,
                        63.1887,
                        9.1
                    ]
                },
                "id": "ak11486845"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "17km E of Cherokee, Oklahoma",
                    "time": "1421367298430",
                    "updated": "1421375276192",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgb2",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "104",
                    "net": "us",
                    "code": "c000tgb2",
                    "ids": ",usc000tgb2,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.247",
                    "rms": "0.48",
                    "gap": "107",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -98.1562,
                        36.7631,
                        5
                    ]
                },
                "id": "usc000tgb2"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.5,
                    "place": "59km WNW of Laiwui, Indonesia",
                    "time": "1421361503410",
                    "updated": "1421390465127",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgae",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "312",
                    "net": "us",
                    "code": "c000tgae",
                    "ids": ",usc000tgae,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.9",
                    "rms": "0.66",
                    "gap": "104",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        127.1843,
                        -1.1326,
                        31.37
                    ]
                },
                "id": "usc000tgae"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "7km S of Guthrie, Oklahoma",
                    "time": "1421360961700",
                    "updated": "1421370164923",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tgam",
                    "felt": 1,
                    "cdi": 2.2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "112",
                    "net": "us",
                    "code": "c000tgam",
                    "ids": ",usc000tgam,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.5",
                    "gap": "68",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.439,
                        35.816,
                        4.735
                    ]
                },
                "id": "usc000tgam"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.2,
                    "place": "Southern Mid-Atlantic Ridge",
                    "time": "1421353753370",
                    "updated": "1421382704396",
                    "tz": -60,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg7r",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "416",
                    "net": "us",
                    "code": "c000tg7r",
                    "ids": ",usc000tg7r,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "11.396",
                    "rms": "0.91",
                    "gap": "52",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -11.4731,
                        -26.0757,
                        10
                    ]
                },
                "id": "usc000tg7r"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.1,
                    "place": "10km ESE of Challis, Idaho",
                    "time": "1421352692130",
                    "updated": "1421362342156",
                    "tz": -420,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg7k",
                    "felt": 1,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "148",
                    "net": "us",
                    "code": "c000tg7k",
                    "ids": ",usc000tg7k,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-text,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "0.152",
                    "rms": "0.39",
                    "gap": "36",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -114.1038,
                        44.4692,
                        5
                    ]
                },
                "id": "usc000tg7k"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3,
                    "place": "5km E of Espino, Puerto Rico",
                    "time": "1421351793200",
                    "updated": "1421380749827",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15015002",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "138",
                    "net": "pr",
                    "code": "15015002",
                    "ids": ",pr15015002,usc000tgat,",
                    "sources": ",pr,us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": "3",
                    "dmin": "0.3117154",
                    "rms": "0.21",
                    "gap": "320.4",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -67.0719,
                        18.2695,
                        76
                    ]
                },
                "id": "pr15015002"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "8km S of Caldwell, Kansas",
                    "time": "1421351511200",
                    "updated": "1421370183284",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg9c",
                    "felt": 3,
                    "cdi": 2.7,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "97",
                    "net": "us",
                    "code": "c000tg9c",
                    "ids": ",usc000tg9c,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.74",
                    "gap": "69",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.6158,
                        36.9542,
                        5
                    ]
                },
                "id": "usc000tg9c"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "22km W of Perry, Oklahoma",
                    "time": "1421349760500",
                    "updated": "1421378740724",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg88",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "96",
                    "net": "us",
                    "code": "c000tg88",
                    "ids": ",usc000tg88,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.2",
                    "gap": "59",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.5387,
                        36.3212,
                        7.088
                    ]
                },
                "id": "usc000tg88"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.1,
                    "place": "76km N of Culebra, Puerto Rico",
                    "time": "1421347909400",
                    "updated": "1421357268040",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15015000",
                    "felt": 1,
                    "cdi": 2.2,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "148",
                    "net": "pr",
                    "code": "15015000",
                    "ids": ",pr15015000,usc000tg75,",
                    "sources": ",pr,us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": "14",
                    "dmin": "0.68092299",
                    "rms": "0.25",
                    "gap": "237.6",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -65.21,
                        18.9885,
                        24
                    ]
                },
                "id": "pr15015000"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.6,
                    "place": "8km S of Caldwell, Kansas",
                    "time": "1421347640800",
                    "updated": "1421357251653",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg6m",
                    "felt": 9,
                    "cdi": 3.8,
                    "mmi": 3.72,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "203",
                    "net": "us",
                    "code": "c000tg6m",
                    "ids": ",usc000tg6m,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.65",
                    "gap": "68",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.6149,
                        36.9524,
                        5.049
                    ]
                },
                "id": "usc000tg6m"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.8,
                    "place": "7km SSW of Guthrie, Oklahoma",
                    "time": "1421345215300",
                    "updated": "1421356992746",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg6h",
                    "felt": 2,
                    "cdi": 2.5,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "121",
                    "net": "us",
                    "code": "c000tg6h",
                    "ids": ",usc000tg6h,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.65",
                    "gap": "69",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.4511,
                        35.816,
                        6.709
                    ]
                },
                "id": "usc000tg6h"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "22km W of Perry, Oklahoma",
                    "time": "1421341584100",
                    "updated": "1421356073629",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg6c",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "112",
                    "net": "us",
                    "code": "c000tg6c",
                    "ids": ",usc000tg6c,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.35",
                    "gap": "59",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.5349,
                        36.3222,
                        6.646
                    ]
                },
                "id": "usc000tg6c"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "118km WSW of Banda Aceh, Indonesia",
                    "time": "1421341037990",
                    "updated": "1421507857597",
                    "tz": 360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg3x",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tg3x",
                    "ids": ",usc000tg3x,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.616",
                    "rms": "0.86",
                    "gap": "108",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        94.3204,
                        5.1738,
                        43.21
                    ]
                },
                "id": "usc000tg3x"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.8,
                    "place": "45km SW of Andalgala, Argentina",
                    "time": "1421339538740",
                    "updated": "1421507492276",
                    "tz": -180,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg3g",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "354",
                    "net": "us",
                    "code": "c000tg3g",
                    "ids": ",usc000tg3g,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.457",
                    "rms": "1.07",
                    "gap": "48",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -66.628,
                        -27.8825,
                        150.29
                    ]
                },
                "id": "usc000tg3g"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.9,
                    "place": "17km SE of Anthony, Kansas",
                    "time": "1421337886260",
                    "updated": "1421506189345",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg1w",
                    "felt": 5,
                    "cdi": 3.9,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "131",
                    "net": "us",
                    "code": "c000tg1w",
                    "ids": ",usc000tg1w,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-text,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.107",
                    "rms": "0.56",
                    "gap": "37",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.8916,
                        37.0483,
                        6.63
                    ]
                },
                "id": "usc000tg1w"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "18km N of Caldwell, Kansas",
                    "time": "1421337708050",
                    "updated": "1421505696824",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg73",
                    "felt": 3,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "113",
                    "net": "us",
                    "code": "c000tg73",
                    "ids": ",usc000tg73,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-text,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.099",
                    "rms": "0.43",
                    "gap": "28",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.5932,
                        37.202,
                        5.83
                    ]
                },
                "id": "usc000tg73"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "25km NNW of Road Town, British Virgin Islands",
                    "time": "1421335988600",
                    "updated": "1421505026040",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15015001",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "112",
                    "net": "pr",
                    "code": "15015001",
                    "ids": ",pr15015001,usc000tg7m,",
                    "sources": ",pr,us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": "4",
                    "dmin": "0.23086703",
                    "rms": "0.15",
                    "gap": "252",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -64.7457,
                        18.6147,
                        48
                    ]
                },
                "id": "pr15015001"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "24km S of Anthony, Kansas",
                    "time": "1421334356600",
                    "updated": "1421504325222",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg1m",
                    "felt": 1,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "96",
                    "net": "us",
                    "code": "c000tg1m",
                    "ids": ",usc000tg1m,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.49",
                    "gap": "105",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -98.021,
                        36.9293,
                        3.774
                    ]
                },
                "id": "usc000tg1m"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.2,
                    "place": "111km SSW of Pagaralam, Indonesia",
                    "time": "1421330511610",
                    "updated": "1421359464271",
                    "tz": 420,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg17",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "416",
                    "net": "us",
                    "code": "c000tg17",
                    "ids": ",usc000tg17,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.546",
                    "rms": "1.22",
                    "gap": "180",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        102.7164,
                        -4.8551,
                        62.61
                    ]
                },
                "id": "usc000tg17"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.59,
                    "place": "12km SW of Morton, Washington",
                    "time": "1421328172270",
                    "updated": "1421357125272",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/uw60947852",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "103",
                    "net": "uw",
                    "code": "60947852",
                    "ids": ",uw60947852,",
                    "sources": ",uw,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "26",
                    "dmin": "0.1276",
                    "rms": "0.12",
                    "gap": "57",
                    "magnitudeType": "md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.409,
                        46.4908333,
                        19.62
                    ]
                },
                "id": "uw60947852"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.6,
                    "place": "30km E of Sterling, Alaska",
                    "time": "1421325233000",
                    "updated": "1421354188285",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11486441",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "199",
                    "net": "ak",
                    "code": "11486441",
                    "ids": ",ak11486441,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.89",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -150.2052,
                        60.5704,
                        41.8
                    ]
                },
                "id": "ak11486441"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.6,
                    "place": "32km S of Ndoi Island, Fiji",
                    "time": "1421321507500",
                    "updated": "1421350458220",
                    "tz": -720,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tg0k",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "326",
                    "net": "us",
                    "code": "c000tg0k",
                    "ids": ",usc000tg0k,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "4.407",
                    "rms": "0.86",
                    "gap": "48",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -178.7182,
                        -20.9446,
                        570.05
                    ]
                },
                "id": "usc000tg0k"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "175km ESE of Nikolski, Alaska",
                    "time": "1421314816000",
                    "updated": "1421351383099",
                    "tz": -660,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11486371",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "104",
                    "net": "ak",
                    "code": "11486371",
                    "ids": ",ak11486371,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.31",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -166.5223,
                        52.2643,
                        41.5
                    ]
                },
                "id": "ak11486371"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.1,
                    "place": "16km SW of Medford, Oklahoma",
                    "time": "1421308048470",
                    "updated": "1421336995002",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfyn",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "148",
                    "net": "us",
                    "code": "c000tfyn",
                    "ids": ",usc000tfyn,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.22",
                    "rms": "0.57",
                    "gap": "85",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.8629,
                        36.7028,
                        5
                    ]
                },
                "id": "usc000tfyn"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "15km NE of Enid, Oklahoma",
                    "time": "1421307794780",
                    "updated": "1421336754806",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfyj",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "112",
                    "net": "us",
                    "code": "c000tfyj",
                    "ids": ",usc000tfyj,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.164",
                    "rms": "0.45",
                    "gap": "69",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.7792,
                        36.5093,
                        3.23
                    ]
                },
                "id": "usc000tfyj"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3,
                    "place": "22km W of Perry, Oklahoma",
                    "time": "1421307391180",
                    "updated": "1421336354723",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfyh",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "138",
                    "net": "us",
                    "code": "c000tfyh",
                    "ids": ",usc000tfyh,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.406",
                    "rms": "0.36",
                    "gap": "60",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.5344,
                        36.319,
                        2.91
                    ]
                },
                "id": "usc000tfyh"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "2km SSW of Guthrie, Oklahoma",
                    "time": "1421306630610",
                    "updated": "1421335591487",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfyf",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "104",
                    "net": "us",
                    "code": "c000tfyf",
                    "ids": ",usc000tfyf,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.243",
                    "rms": "0.72",
                    "gap": "37",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.4318,
                        35.8528,
                        4.33
                    ]
                },
                "id": "usc000tfyf"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.5,
                    "place": "111km WNW of Hofn, Iceland",
                    "time": "1421305827910",
                    "updated": "1421334779049",
                    "tz": 0,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfye",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "312",
                    "net": "us",
                    "code": "c000tfye",
                    "ids": ",usc000tfye,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "1.697",
                    "rms": "1.14",
                    "gap": "64",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -17.3981,
                        64.5859,
                        8.01
                    ]
                },
                "id": "usc000tfye"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.8,
                    "place": "10km S of Caldwell, Kansas",
                    "time": "1421305027870",
                    "updated": "1421333990850",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfyb",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "121",
                    "net": "us",
                    "code": "c000tfyb",
                    "ids": ",usc000tfyb,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.132",
                    "rms": "0.34",
                    "gap": "50",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.6125,
                        36.9358,
                        3.31
                    ]
                },
                "id": "usc000tfyb"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "67km ESE of False Pass, Alaska",
                    "time": "1421304621000",
                    "updated": "1421351386382",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11486316",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "112",
                    "net": "ak",
                    "code": "11486316",
                    "ids": ",ak11486316,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.47",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -162.4907,
                        54.5593,
                        41.3
                    ]
                },
                "id": "ak11486316"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "25km E of Honaunau-Napoopoo, Hawaii",
                    "time": "1421301827000",
                    "updated": "1421361028038",
                    "tz": -600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/hv60833601",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "96",
                    "net": "hv",
                    "code": "60833601",
                    "ids": ",hv60833601,",
                    "sources": ",hv,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,",
                    "nst": null,
                    "dmin": "0.02694946",
                    "rms": "0.25",
                    "gap": "68.4",
                    "magnitudeType": "Ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -155.6187,
                        19.4307,
                        47
                    ]
                },
                "id": "hv60833601"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "85km ENE of Amahai, Indonesia",
                    "time": "1421300941290",
                    "updated": "1421329923515",
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfxv",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tfxv",
                    "ids": ",usc000tfxv,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.644",
                    "rms": "0.87",
                    "gap": "79",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        129.6018,
                        -2.9798,
                        32.65
                    ]
                },
                "id": "usc000tfxv"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3,
                    "place": "79km S of Kiska Volcano, Alaska",
                    "time": "1421300621000",
                    "updated": "1421329571499",
                    "tz": 720,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11486291",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "138",
                    "net": "ak",
                    "code": "11486291",
                    "ids": ",ak11486291,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.68",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        177.4446,
                        51.3928,
                        8
                    ]
                },
                "id": "ak11486291"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "8km NNE of Melipilla, Chile",
                    "time": "1421299185280",
                    "updated": "1421380163038",
                    "tz": -180,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfxr",
                    "felt": 57,
                    "cdi": 4.2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "364",
                    "net": "us",
                    "code": "c000tfxr",
                    "ids": ",usc000tfxr,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.377",
                    "rms": "0.75",
                    "gap": "100",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -71.1744,
                        -33.6362,
                        81.42
                    ]
                },
                "id": "usc000tfxr"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.4,
                    "place": "95km W of Murghob, Tajikistan",
                    "time": "1421297913880",
                    "updated": "1421326872485",
                    "tz": 300,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfxp",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "298",
                    "net": "us",
                    "code": "c000tfxp",
                    "ids": ",usc000tfxp,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.11",
                    "rms": "0.67",
                    "gap": "87",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        72.878,
                        38.1836,
                        129.02
                    ]
                },
                "id": "usc000tfxp"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "11km SSW of Ciudad Altamirano, Mexico",
                    "time": "1421292091410",
                    "updated": "1421321046563",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfxj",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tfxj",
                    "ids": ",usc000tfxj,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.508",
                    "rms": "0.53",
                    "gap": "210",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -100.6828,
                        18.221,
                        62.5
                    ]
                },
                "id": "usc000tfxj"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.4,
                    "place": "87km W of San Antonio de los Cobres, Argentina",
                    "time": "1421291198220",
                    "updated": "1421320162941",
                    "tz": -180,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfxi",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "298",
                    "net": "us",
                    "code": "c000tfxi",
                    "ids": ",usc000tfxi,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.267",
                    "rms": "0.98",
                    "gap": "124",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -67.1801,
                        -24.2373,
                        188.31
                    ]
                },
                "id": "usc000tfxi"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.5,
                    "place": "124km ENE of Hachinohe, Japan",
                    "time": "1421285659250",
                    "updated": "1421314622927",
                    "tz": 600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfx5",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "312",
                    "net": "us",
                    "code": "c000tfx5",
                    "ids": ",usc000tfx5,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.062",
                    "rms": "0.68",
                    "gap": "194",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        142.8302,
                        40.9804,
                        35
                    ]
                },
                "id": "usc000tfx5"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.2,
                    "place": "40km W of Lunglei, India",
                    "time": "1421285588480",
                    "updated": "1421314544353",
                    "tz": 360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfx6",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "271",
                    "net": "us",
                    "code": "c000tfx6",
                    "ids": ",usc000tfx6,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.722",
                    "rms": "0.62",
                    "gap": "181",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        92.3438,
                        22.8688,
                        54.63
                    ]
                },
                "id": "usc000tfx6"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.2,
                    "place": "93km SW of Tinabogan, Indonesia",
                    "time": "1421280567660",
                    "updated": "1421309518768",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfwz",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "416",
                    "net": "us",
                    "code": "c000tfwz",
                    "ids": ",usc000tfwz,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.257",
                    "rms": "0.75",
                    "gap": "55",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        119.9864,
                        0.1301,
                        62.77
                    ]
                },
                "id": "usc000tfwz"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.51,
                    "place": "8km SE of Bend, Oregon",
                    "time": "1421271534590",
                    "updated": "1421298083354",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/uw60947742",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "97",
                    "net": "uw",
                    "code": "60947742",
                    "ids": ",uw60947742,",
                    "sources": ",uw,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "8",
                    "dmin": "0.08539",
                    "rms": "0.26",
                    "gap": "95",
                    "magnitudeType": "md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -121.2348333,
                        44.0138333,
                        0.01
                    ]
                },
                "id": "uw60947742"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4,
                    "place": "5km NNE of Aratoca, Colombia",
                    "time": "1421261466470",
                    "updated": "1421366830482",
                    "tz": -300,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfrv",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "246",
                    "net": "us",
                    "code": "c000tfrv",
                    "ids": ",usc000tfrv,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.297",
                    "rms": "0.64",
                    "gap": "100",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -72.9985,
                        6.7406,
                        164.21
                    ]
                },
                "id": "usc000tfrv"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3,
                    "place": "7km S of Langston, Oklahoma",
                    "time": "1421259791700",
                    "updated": "1421367049204",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfrx",
                    "felt": 5,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "140",
                    "net": "us",
                    "code": "c000tfrx",
                    "ids": ",usc000tfrx,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.6",
                    "gap": "69",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.2451,
                        35.8768,
                        5.296
                    ]
                },
                "id": "usc000tfrx"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "16km SW of Medford, Oklahoma",
                    "time": "1421243543200",
                    "updated": "1421257287553",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfmp",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "96",
                    "net": "us",
                    "code": "c000tfmp",
                    "ids": ",usc000tfmp,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.52",
                    "gap": "87",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.8802,
                        36.7128,
                        6.25
                    ]
                },
                "id": "usc000tfmp"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.65,
                    "place": "9km NNE of Cayucos, California",
                    "time": "1421241793280",
                    "updated": "1421294345565",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nc72381101",
                    "felt": 6,
                    "cdi": 3.5,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "110",
                    "net": "nc",
                    "code": "72381101",
                    "ids": ",nc72381101,",
                    "sources": ",nc,",
                    "types": ",cap,dyfi,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
                    "nst": "78",
                    "dmin": "0.03872",
                    "rms": "0.07",
                    "gap": "42",
                    "magnitudeType": "md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.8598333,
                        35.5275,
                        3.43
                    ]
                },
                "id": "nc72381101"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "27km S of Redoubt Volcano, Alaska",
                    "time": "1421239566000",
                    "updated": "1421268521133",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11486085",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "96",
                    "net": "ak",
                    "code": "11486085",
                    "ids": ",ak11486085,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "1.55",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -152.6505,
                        60.2452,
                        137.2
                    ]
                },
                "id": "ak11486085"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "16km SSW of Uglegorsk, Russia",
                    "time": "1421237375380",
                    "updated": "1421266331345",
                    "tz": 600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfln",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000tfln",
                    "ids": ",usc000tfln,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "2.05",
                    "rms": "0.8",
                    "gap": "42",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        141.9829,
                        48.9398,
                        575.38
                    ]
                },
                "id": "usc000tfln"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.28,
                    "place": "41km SW of Ferndale, California",
                    "time": "1421232275040",
                    "updated": "1421383745588",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nc72381011",
                    "felt": 12,
                    "cdi": 2.3,
                    "mmi": 1.75,
                    "alert": "green",
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "285",
                    "net": "nc",
                    "code": "72381011",
                    "ids": ",nc72381011,",
                    "sources": ",nc,",
                    "types": ",cap,dyfi,focal-mechanism,general-link,geoserve,losspager,moment-tensor,nearby-cities,origin,phase-data,scitech-link,shakemap,",
                    "nst": "47",
                    "dmin": "0.2507",
                    "rms": "0.12",
                    "gap": "233",
                    "magnitudeType": "mw"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.6121667,
                        40.3195,
                        16.62
                    ]
                },
                "id": "nc72381011"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.98,
                    "place": "41km SW of Ferndale, California",
                    "time": "1421231928200",
                    "updated": "1421292781758",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nc72381006",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "137",
                    "net": "nc",
                    "code": "72381006",
                    "ids": ",nc72381006,",
                    "sources": ",nc,",
                    "types": ",cap,dyfi,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
                    "nst": "47",
                    "dmin": "0.2608",
                    "rms": "0.15",
                    "gap": "234",
                    "magnitudeType": "md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.6253333,
                        40.3251667,
                        16.37
                    ]
                },
                "id": "nc72381006"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.9,
                    "place": "60km SE of Road Town, British Virgin Islands",
                    "time": "1421231581800",
                    "updated": "1421260528422",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15014002",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "129",
                    "net": "pr",
                    "code": "15014002",
                    "ids": ",pr15014002,",
                    "sources": ",pr,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "4",
                    "dmin": "0.54527738",
                    "rms": "0.21",
                    "gap": "291.6",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -64.1654,
                        18.0776,
                        121
                    ]
                },
                "id": "pr15014002"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.8,
                    "place": "70km ESE of Akutan, Alaska",
                    "time": "1421227430000",
                    "updated": "1421263243551",
                    "tz": -660,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11485970",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "222",
                    "net": "ak",
                    "code": "11485970",
                    "ids": ",ak11485970,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.56",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -164.8634,
                        53.7981,
                        67.7
                    ]
                },
                "id": "ak11485970"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "53km SW of Homer, Alaska",
                    "time": "1421225597000",
                    "updated": "1421254588983",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11485968",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "96",
                    "net": "ak",
                    "code": "11485968",
                    "ids": ",ak11485968,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.53",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -152.1047,
                        59.2499,
                        19.5
                    ]
                },
                "id": "ak11485968"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.6,
                    "place": "125km SW of Vaini, Tonga",
                    "time": "1421213379140",
                    "updated": "1421242334959",
                    "tz": -720,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfji",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "326",
                    "net": "us",
                    "code": "c000tfji",
                    "ids": ",usc000tfji,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "7.173",
                    "rms": "1.3",
                    "gap": "142",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -175.8896,
                        -22.1274,
                        120.59
                    ]
                },
                "id": "usc000tfji"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.3,
                    "place": "13km NE of Hepingyizu, China",
                    "time": "1421212899270",
                    "updated": "1421252543695",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfjg",
                    "felt": 12,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "436",
                    "net": "us",
                    "code": "c000tfjg",
                    "ids": ",usc000tfjg,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "8.011",
                    "rms": "0.7",
                    "gap": "43",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        103.1745,
                        29.343,
                        10
                    ]
                },
                "id": "usc000tfjg"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.4,
                    "place": "37km SSE of Little Sitkin Island, Alaska",
                    "time": "1421211864000",
                    "updated": "1421240816858",
                    "tz": -600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11485885",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "178",
                    "net": "ak",
                    "code": "11485885",
                    "ids": ",ak11485885,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.48",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        178.6343,
                        51.6185,
                        87.5
                    ]
                },
                "id": "ak11485885"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3,
                    "place": "11km SE of Cherokee, Oklahoma",
                    "time": "1421207152460",
                    "updated": "1421242406741",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfit",
                    "felt": 5,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "140",
                    "net": "us",
                    "code": "c000tfit",
                    "ids": ",usc000tfit,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.288",
                    "rms": "0.53",
                    "gap": "49",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -98.2567,
                        36.6916,
                        5
                    ]
                },
                "id": "usc000tfit"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "90km NE of Hihifo, Tonga",
                    "time": "1421206786680",
                    "updated": "1421235734750",
                    "tz": -720,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfis",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000tfis",
                    "ids": ",usc000tfis,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.984",
                    "rms": "1.44",
                    "gap": "55",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -173.2635,
                        -15.2845,
                        10
                    ]
                },
                "id": "usc000tfis"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.2,
                    "place": "91km NNW of Talkeetna, Alaska",
                    "time": "1421206583000",
                    "updated": "1421235529686",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11485842",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "158",
                    "net": "ak",
                    "code": "11485842",
                    "ids": ",ak11485842,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.64",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -150.96,
                        63.0416,
                        119.4
                    ]
                },
                "id": "ak11485842"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "10km WNW of Blackwell, Oklahoma",
                    "time": "1421201501500",
                    "updated": "1421378734634",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfr9",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "96",
                    "net": "us",
                    "code": "c000tfr9",
                    "ids": ",usc000tfr9,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.37",
                    "gap": "111",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.3856,
                        36.8583,
                        7.595
                    ]
                },
                "id": "usc000tfr9"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.9,
                    "place": "21km WNW of Perry, Oklahoma",
                    "time": "1421199756060",
                    "updated": "1421228707268",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfhw",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "129",
                    "net": "us",
                    "code": "c000tfhw",
                    "ids": ",usc000tfhw,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.412",
                    "rms": "0.45",
                    "gap": "60",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.5209,
                        36.3282,
                        3.69
                    ]
                },
                "id": "usc000tfhw"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "5km WNW of Mayaguez, Puerto Rico",
                    "time": "1421198523800",
                    "updated": "1421227478278",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15014000",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "112",
                    "net": "pr",
                    "code": "15014000",
                    "ids": ",pr15014000,",
                    "sources": ",pr,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "7",
                    "dmin": "0.22278219",
                    "rms": "0.1",
                    "gap": "216",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -67.1932,
                        18.2166,
                        104
                    ]
                },
                "id": "pr15014000"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.9,
                    "place": "49km ESE of Nago, Japan",
                    "time": "1421198139790",
                    "updated": "1421199835550",
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfhl",
                    "felt": 2,
                    "cdi": 2.9,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "370",
                    "net": "us",
                    "code": "c000tfhl",
                    "ids": ",usc000tfhl,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.46",
                    "rms": "1",
                    "gap": "56",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        128.425,
                        26.3945,
                        27.09
                    ]
                },
                "id": "usc000tfhl"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.1,
                    "place": "18km ESE of Medford, Oklahoma",
                    "time": "1421196387810",
                    "updated": "1421215068899",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfh9",
                    "felt": 5,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "149",
                    "net": "us",
                    "code": "c000tfh9",
                    "ids": ",usc000tfh9,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.267",
                    "rms": "0.38",
                    "gap": "30",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.5437,
                        36.7413,
                        3.55
                    ]
                },
                "id": "usc000tfh9"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "115km W of Naze, Japan",
                    "time": "1421196039950",
                    "updated": "1421225016374",
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfhf",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tfhf",
                    "ids": ",usc000tfhf,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "3.485",
                    "rms": "0.98",
                    "gap": "88",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        128.3297,
                        28.1713,
                        49.18
                    ]
                },
                "id": "usc000tfhf"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3,
                    "place": "6km S of Guthrie, Oklahoma",
                    "time": "1421194002590",
                    "updated": "1421208822274",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfh3",
                    "felt": 2,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "139",
                    "net": "us",
                    "code": "c000tfh3",
                    "ids": ",usc000tfh3,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.225",
                    "rms": "0.6",
                    "gap": "40",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.4225,
                        35.8242,
                        6.72
                    ]
                },
                "id": "usc000tfh3"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.3,
                    "place": "75km SW of Acajutla, El Salvador",
                    "time": "1421190456760",
                    "updated": "1421219411514",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfgm",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "284",
                    "net": "us",
                    "code": "c000tfgm",
                    "ids": ",usc000tfgm,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.21",
                    "rms": "1.02",
                    "gap": "199",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -90.3318,
                        13.1183,
                        35
                    ]
                },
                "id": "usc000tfgm"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "17km W of Stillwater, Oklahoma",
                    "time": "1421188086800",
                    "updated": "1421217039835",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfgh",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "104",
                    "net": "us",
                    "code": "c000tfgh",
                    "ids": ",usc000tfgh,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.6",
                    "gap": "59",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.2485,
                        36.1217,
                        5.47
                    ]
                },
                "id": "usc000tfgh"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "122km E of Chichi-shima, Japan",
                    "time": "1421184027670",
                    "updated": "1421212975082",
                    "tz": 600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfev",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tfev",
                    "ids": ",usc000tfev,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.125",
                    "rms": "0.72",
                    "gap": "95",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        143.4328,
                        27.2724,
                        25.99
                    ]
                },
                "id": "usc000tfev"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.5,
                    "place": "40km WNW of San Carlos, Argentina",
                    "time": "1421183825550",
                    "updated": "1421212771611",
                    "tz": -180,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfeh",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "312",
                    "net": "us",
                    "code": "c000tfeh",
                    "ids": ",usc000tfeh,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.757",
                    "rms": "0.53",
                    "gap": "57",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -65.5081,
                        -31.083,
                        170.71
                    ]
                },
                "id": "usc000tfeh"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "16km ESE of Medford, Oklahoma",
                    "time": "1421182926500",
                    "updated": "1421196527413",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tff8",
                    "felt": 1,
                    "cdi": 2.2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "104",
                    "net": "us",
                    "code": "c000tff8",
                    "ids": ",usc000tff8,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.55",
                    "gap": "65",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.5572,
                        36.7553,
                        6.87
                    ]
                },
                "id": "usc000tff8"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.2,
                    "place": "92km WNW of San Antonio de los Cobres, Argentina",
                    "time": "1421182442970",
                    "updated": "1421261507226",
                    "tz": -180,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfdl",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "271",
                    "net": "us",
                    "code": "c000tfdl",
                    "ids": ",usc000tfdl,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.121",
                    "rms": "0.74",
                    "gap": "120",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -67.2086,
                        -24.0515,
                        239.89
                    ]
                },
                "id": "usc000tfdl"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.9,
                    "place": "8km S of Guthrie, Oklahoma",
                    "time": "1421180317500",
                    "updated": "1421260468807",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfds",
                    "felt": 2,
                    "cdi": 2.2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "130",
                    "net": "us",
                    "code": "c000tfds",
                    "ids": ",usc000tfds,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.74",
                    "gap": "68",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.4139,
                        35.8073,
                        6.448
                    ]
                },
                "id": "usc000tfds"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "9km S of Caldwell, Kansas",
                    "time": "1421179638300",
                    "updated": "1421260091736",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfdb",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "96",
                    "net": "us",
                    "code": "c000tfdb",
                    "ids": ",usc000tfdb,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.68",
                    "gap": "66",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.622,
                        36.9477,
                        4.302
                    ]
                },
                "id": "usc000tfdb"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.2,
                    "place": "37km N of Lae, Papua New Guinea",
                    "time": "1421179438120",
                    "updated": "1421259417779",
                    "tz": 600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfcj",
                    "felt": 1,
                    "cdi": 3.4,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "416",
                    "net": "us",
                    "code": "c000tfcj",
                    "ids": ",usc000tfcj,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-text,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "2.995",
                    "rms": "0.9",
                    "gap": "16",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        147.0486,
                        -6.3918,
                        44.61
                    ]
                },
                "id": "usc000tfcj"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4,
                    "place": "43km ESE of Namie, Japan",
                    "time": "1421178647540",
                    "updated": "1421259835641",
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfce",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "246",
                    "net": "us",
                    "code": "c000tfce",
                    "ids": ",usc000tfce,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,moment-tensor,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.77",
                    "rms": "1.22",
                    "gap": "128",
                    "magnitudeType": "mwr"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        141.4164,
                        37.2806,
                        34.96
                    ]
                },
                "id": "usc000tfce"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "4km NW of Perkins, Oklahoma",
                    "time": "1421176621700",
                    "updated": "1421255913136",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tff7",
                    "felt": 1,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "96",
                    "net": "us",
                    "code": "c000tff7",
                    "ids": ",usc000tff7,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-text,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.66",
                    "gap": "62",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.0632,
                        36.0049,
                        4.813
                    ]
                },
                "id": "usc000tff7"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "134km E of Chichi-shima, Japan",
                    "time": "1421172223240",
                    "updated": "1421253846788",
                    "tz": 600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfar",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000tfar",
                    "ids": ",usc000tfar,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.233",
                    "rms": "0.79",
                    "gap": "64",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        143.5677,
                        27.1373,
                        27.11
                    ]
                },
                "id": "usc000tfar"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "8km S of Caldwell, Kansas",
                    "time": "1421171595200",
                    "updated": "1421253593183",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfbd",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "96",
                    "net": "us",
                    "code": "c000tfbd",
                    "ids": ",usc000tfbd,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.6",
                    "gap": "68",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.617,
                        36.9529,
                        5
                    ]
                },
                "id": "usc000tfbd"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "115km WNW of Hofn, Iceland",
                    "time": "1421171520690",
                    "updated": "1421253267619",
                    "tz": 0,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfag",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tfag",
                    "ids": ",usc000tfag,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "1.673",
                    "rms": "1.55",
                    "gap": "130",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -17.4468,
                        64.6188,
                        8.25
                    ]
                },
                "id": "usc000tfag"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "121km N of Raoul Island, New Zealand",
                    "time": "1421171236950",
                    "updated": "1421252979155",
                    "tz": -720,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfa7",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000tfa7",
                    "ids": ",usc000tfa7,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.068",
                    "rms": "1.4",
                    "gap": "90",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -178.1163,
                        -28.1859,
                        193.23
                    ]
                },
                "id": "usc000tfa7"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.8,
                    "place": "6km SSE of Yamada, Japan",
                    "time": "1421171204050",
                    "updated": "1421252523322",
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfa5",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "354",
                    "net": "us",
                    "code": "c000tfa5",
                    "ids": ",usc000tfa5,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,moment-tensor,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.692",
                    "rms": "0.9",
                    "gap": "108",
                    "magnitudeType": "mwr"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        141.9659,
                        39.4138,
                        46.53
                    ]
                },
                "id": "usc000tfa5"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.74,
                    "place": "69km ESE of Lakeview, Oregon",
                    "time": "1421170639449",
                    "updated": "1421250754040",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00476960",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "116",
                    "net": "nn",
                    "code": "00476960",
                    "ids": ",nn00476960,uw60947452,usc000tfa0,",
                    "sources": ",nn,uw,us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "6",
                    "dmin": "0.152",
                    "rms": "0.1705",
                    "gap": "123.01",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.6357,
                        41.8594,
                        10.6637
                    ]
                },
                "id": "nn00476960"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.8,
                    "place": "12km NE of Edmond, Oklahoma",
                    "time": "1421168825000",
                    "updated": "1421249799673",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfa3",
                    "felt": 2,
                    "cdi": 2.7,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "121",
                    "net": "us",
                    "code": "c000tfa3",
                    "ids": ",usc000tfa3,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-text,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.59",
                    "gap": "82",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.3875,
                        35.739,
                        5.433
                    ]
                },
                "id": "usc000tfa3"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "184km ENE of Hachinohe, Japan",
                    "time": "1421168649700",
                    "updated": "1421249187676",
                    "tz": 600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf9k",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tf9k",
                    "ids": ",usc000tf9k,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.165",
                    "rms": "1.09",
                    "gap": "137",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        143.6181,
                        40.901,
                        12.99
                    ]
                },
                "id": "usc000tf9k"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "16km NNE of Cherokee, Oklahoma",
                    "time": "1421166244200",
                    "updated": "1421195196436",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tfaf",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "104",
                    "net": "us",
                    "code": "c000tfaf",
                    "ids": ",usc000tfaf,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.43",
                    "gap": "119",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -98.2869,
                        36.8955,
                        4.968
                    ]
                },
                "id": "usc000tfaf"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.2,
                    "place": "75km NE of Calama, Chile",
                    "time": "1421165978000",
                    "updated": "1421194954908",
                    "tz": -180,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf7y",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "271",
                    "net": "us",
                    "code": "c000tf7y",
                    "ids": ",usc000tf7y,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "1.36",
                    "gap": null,
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -68.498,
                        -21.918,
                        114
                    ]
                },
                "id": "usc000tf7y"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "26km WSW of Perry, Oklahoma",
                    "time": "1421165731700",
                    "updated": "1421194683685",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf85",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "104",
                    "net": "us",
                    "code": "c000tf85",
                    "ids": ",usc000tf85,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.44",
                    "gap": "57",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.5693,
                        36.2254,
                        5.054
                    ]
                },
                "id": "usc000tf85"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "31km NNW of Bugko, Philippines",
                    "time": "1421163208950",
                    "updated": "1421192163611",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf7p",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tf7p",
                    "ids": ",usc000tf7p,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "9.743",
                    "rms": "0.5",
                    "gap": "112",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        124.7045,
                        12.8027,
                        57.12
                    ]
                },
                "id": "usc000tf7p"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.4,
                    "place": "113km S of Akureyri, Iceland",
                    "time": "1421161246830",
                    "updated": "1421190202581",
                    "tz": 0,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf7c",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "298",
                    "net": "us",
                    "code": "c000tf7c",
                    "ids": ",usc000tf7c,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "1.396",
                    "rms": "1.16",
                    "gap": "143",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -18.0819,
                        64.6671,
                        10
                    ]
                },
                "id": "usc000tf7c"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "2km NE of Medford, Oklahoma",
                    "time": "1421157998000",
                    "updated": "1421186956298",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf78",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "96",
                    "net": "us",
                    "code": "c000tf78",
                    "ids": ",usc000tf78,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.48",
                    "gap": "68",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.7067,
                        36.8222,
                        5.433
                    ]
                },
                "id": "usc000tf78"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.8,
                    "place": "9km S of Caldwell, Kansas",
                    "time": "1421157340700",
                    "updated": "1421170309176",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf74",
                    "felt": 2,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "121",
                    "net": "us",
                    "code": "c000tf74",
                    "ids": ",usc000tf74,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.66",
                    "gap": "66",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.6217,
                        36.9483,
                        4.053
                    ]
                },
                "id": "usc000tf74"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.8,
                    "place": "21km WNW of Perry, Oklahoma",
                    "time": "1421150436300",
                    "updated": "1421188485794",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf7s",
                    "felt": 1,
                    "cdi": 2.2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "121",
                    "net": "us",
                    "code": "c000tf7s",
                    "ids": ",usc000tf7s,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-text,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.33",
                    "gap": "57",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.5183,
                        36.3318,
                        7.267
                    ]
                },
                "id": "usc000tf7s"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.63,
                    "place": "13km WSW of Portola, California",
                    "time": "1421149863870",
                    "updated": "1421202904305",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nc72380496",
                    "felt": 4,
                    "cdi": 2.2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "107",
                    "net": "nc",
                    "code": "72380496",
                    "ids": ",nc72380496,nn00476886,",
                    "sources": ",nc,nn,",
                    "types": ",cap,dyfi,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
                    "nst": "19",
                    "dmin": "0.07322",
                    "rms": "0.08",
                    "gap": "87",
                    "magnitudeType": "md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -120.6158333,
                        39.7556667,
                        7.64
                    ]
                },
                "id": "nc72380496"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.81,
                    "place": "11km WNW of Montpelier, Idaho",
                    "time": "1421149347250",
                    "updated": "1421234748801",
                    "tz": -420,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/uu60098417",
                    "felt": 6,
                    "cdi": 2.9,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "123",
                    "net": "uu",
                    "code": "60098417",
                    "ids": ",uu60098417,",
                    "sources": ",uu,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": "21",
                    "dmin": "0.422",
                    "rms": "0.21",
                    "gap": "129",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -111.4316667,
                        42.3543333,
                        -2.43
                    ]
                },
                "id": "uu60098417"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.8,
                    "place": "54km WSW of Te Anau, New Zealand",
                    "time": "1421149201100",
                    "updated": "1421180714200",
                    "tz": 780,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf5v",
                    "felt": 4,
                    "cdi": 3.4,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "356",
                    "net": "us",
                    "code": "c000tf5v",
                    "ids": ",usc000tf5v,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.107",
                    "rms": "0.98",
                    "gap": "71",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        167.0394,
                        -45.5355,
                        82.29
                    ]
                },
                "id": "usc000tf5v"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.8,
                    "place": "40km S of Gytheion, Greece",
                    "time": "1421147949570",
                    "updated": "1421176911240",
                    "tz": 120,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf5s",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "354",
                    "net": "us",
                    "code": "c000tf5s",
                    "ids": ",usc000tf5s,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.946",
                    "rms": "1.42",
                    "gap": "160",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        22.5755,
                        36.3878,
                        64.48
                    ]
                },
                "id": "usc000tf5s"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.8,
                    "place": "8km NNW of Cristobal, Dominican Republic",
                    "time": "1421147789090",
                    "updated": "1421171947171",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf5r",
                    "felt": 6,
                    "cdi": 4.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "357",
                    "net": "us",
                    "code": "c000tf5r",
                    "ids": ",usc000tf5r,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,moment-tensor,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.617",
                    "rms": "1.16",
                    "gap": "81",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -71.32,
                        18.362,
                        10
                    ]
                },
                "id": "usc000tf5r"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.62,
                    "place": "45km SW of Ferndale, California",
                    "time": "1421147529880",
                    "updated": "1421446264161",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nc72380471",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "106",
                    "net": "nc",
                    "code": "72380471",
                    "ids": ",nc72380471,",
                    "sources": ",nc,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
                    "nst": "37",
                    "dmin": "0.3023",
                    "rms": "0.18",
                    "gap": "266",
                    "magnitudeType": "md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.6796667,
                        40.3203333,
                        17.78
                    ]
                },
                "id": "nc72380471"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "10km SE of Leilani Estates, Hawaii",
                    "time": "1421146636100",
                    "updated": "1421175128354",
                    "tz": -600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/hv60832276",
                    "felt": 3,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "113",
                    "net": "hv",
                    "code": "60832276",
                    "ids": ",hv60832276,",
                    "sources": ",hv,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,",
                    "nst": null,
                    "dmin": "0.08983153",
                    "rms": "0.11",
                    "gap": "277.2",
                    "magnitudeType": "Ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -154.8427,
                        19.4047,
                        7.2
                    ]
                },
                "id": "hv60832276"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "7km NNE of Amukta Island, Alaska",
                    "time": "1421146304000",
                    "updated": "1421178597132",
                    "tz": -600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11485255",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "104",
                    "net": "ak",
                    "code": "11485255",
                    "ids": ",ak11485255,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.8",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -171.2195,
                        52.548,
                        25.7
                    ]
                },
                "id": "ak11485255"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.6,
                    "place": "3km E of Medford, Oklahoma",
                    "time": "1421143186700",
                    "updated": "1421197875204",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf5f",
                    "felt": 2,
                    "cdi": 3.1,
                    "mmi": 4.17,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "200",
                    "net": "us",
                    "code": "c000tf5f",
                    "ids": ",usc000tf5f,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.136",
                    "rms": "0.27",
                    "gap": "43",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.7,
                        36.8039,
                        4.59
                    ]
                },
                "id": "usc000tf5f"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3,
                    "place": "67km ESE of Lakeview, Oregon",
                    "time": "1421142843310",
                    "updated": "1421180419970",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00476895",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "138",
                    "net": "nn",
                    "code": "00476895",
                    "ids": ",nn00476895,uw60947337,",
                    "sources": ",nn,uw,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "6",
                    "dmin": "0.134",
                    "rms": "0.1736",
                    "gap": "130.86",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.6342,
                        41.8921,
                        9.5633
                    ]
                },
                "id": "nn00476895"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.72,
                    "place": "69km ESE of Lakeview, Oregon",
                    "time": "1421137115089",
                    "updated": "1421173672990",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00476874",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "114",
                    "net": "nn",
                    "code": "00476874",
                    "ids": ",nn00476874,uw60947332,",
                    "sources": ",nn,uw,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "6",
                    "dmin": "0.136",
                    "rms": "0.1713",
                    "gap": "121.69",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.629,
                        41.8943,
                        9.4831
                    ]
                },
                "id": "nn00476874"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "116km ENE of Kimbe, Papua New Guinea",
                    "time": "1421134219600",
                    "updated": "1421163187599",
                    "tz": 600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf4a",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tf4a",
                    "ids": ",usc000tf4a,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.42",
                    "rms": "0.58",
                    "gap": "62",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        151.1222,
                        -5.1677,
                        138.07
                    ]
                },
                "id": "usc000tf4a"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.66,
                    "place": "71km ESE of Lakeview, Oregon",
                    "time": "1421134151994",
                    "updated": "1421180991390",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00476863",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "109",
                    "net": "nn",
                    "code": "00476863",
                    "ids": ",nn00476863,uw60947317,",
                    "sources": ",nn,uw,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "5",
                    "dmin": "0.144",
                    "rms": "0.1614",
                    "gap": "122.32",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.6241,
                        41.886,
                        8.5285
                    ]
                },
                "id": "nn00476863"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.57,
                    "place": "66km ESE of Lakeview, Oregon",
                    "time": "1421133893501",
                    "updated": "1421162846338",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00476862",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "102",
                    "net": "nn",
                    "code": "00476862",
                    "ids": ",nn00476862,",
                    "sources": ",nn,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "6",
                    "dmin": "0.125",
                    "rms": "0.1353",
                    "gap": "129.83",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.6343,
                        41.9115,
                        7.5959
                    ]
                },
                "id": "nn00476862"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.08,
                    "place": "71km ESE of Lakeview, Oregon",
                    "time": "1421133746095",
                    "updated": "1421181362560",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00476861",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "146",
                    "net": "nn",
                    "code": "00476861",
                    "ids": ",nn00476861,uw60947307,",
                    "sources": ",nn,uw,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "6",
                    "dmin": "0.133",
                    "rms": "0.1627",
                    "gap": "121.27",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.6261,
                        41.9058,
                        7.2603
                    ]
                },
                "id": "nn00476861"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.9,
                    "place": "Southern East Pacific Rise",
                    "time": "1421133677120",
                    "updated": "1421162631603",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf49",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "369",
                    "net": "us",
                    "code": "c000tf49",
                    "ids": ",usc000tf49,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "7.616",
                    "rms": "0.94",
                    "gap": "192",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -112.5788,
                        -34.236,
                        10
                    ]
                },
                "id": "usc000tf49"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "39km ESE of Nishinoomote, Japan",
                    "time": "1421126819420",
                    "updated": "1421155769805",
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf3a",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000tf3a",
                    "ids": ",usc000tf3a,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.201",
                    "rms": "0.88",
                    "gap": "124",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        131.3926,
                        30.6164,
                        45.03
                    ]
                },
                "id": "usc000tf3a"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.9,
                    "place": "34km SE of Madang, Papua New Guinea",
                    "time": "1421126687610",
                    "updated": "1421155636569",
                    "tz": 600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf3b",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "369",
                    "net": "us",
                    "code": "c000tf3b",
                    "ids": ",usc000tf3b,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "4.125",
                    "rms": "1.43",
                    "gap": "51",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        146.0464,
                        -5.4041,
                        66.53
                    ]
                },
                "id": "usc000tf3b"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "31km NNW of Road Town, British Virgin Islands",
                    "time": "1421124489000",
                    "updated": "1421153447263",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15013001",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "96",
                    "net": "pr",
                    "code": "15013001",
                    "ids": ",pr15013001,",
                    "sources": ",pr,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "7",
                    "dmin": "0.28386763",
                    "rms": "0.1",
                    "gap": "262.8",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -64.7509,
                        18.6714,
                        48
                    ]
                },
                "id": "pr15013001"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "25km ESE of Anchorage, Alaska",
                    "time": "1421124214000",
                    "updated": "1421129433622",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11485185",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "96",
                    "net": "ak",
                    "code": "11485185",
                    "ids": ",ak11485185,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "41",
                    "dmin": null,
                    "rms": "0.65",
                    "gap": "64.7999948160004",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -149.4845,
                        61.1007,
                        24.3
                    ]
                },
                "id": "ak11485185"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.61,
                    "place": "68km ESE of Lakeview, Oregon",
                    "time": "1421123467859",
                    "updated": "1421152416494",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00476837",
                    "felt": null,
                    "cdi": null,
                    "mmi": 3.34,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "200",
                    "net": "nn",
                    "code": "00476837",
                    "ids": ",nn00476837,",
                    "sources": ",nn,",
                    "types": ",cap,dyfi,general-link,geoserve,moment-tensor,nearby-cities,origin,phase-data,shakemap,",
                    "nst": "5",
                    "dmin": "0.145",
                    "rms": "0.1922",
                    "gap": "221.65",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.6372,
                        41.8694,
                        7.6135
                    ]
                },
                "id": "nn00476837"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.78,
                    "place": "69km ESE of Lakeview, Oregon",
                    "time": "1421123382824",
                    "updated": "1421174754980",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00476835",
                    "felt": null,
                    "cdi": null,
                    "mmi": 3.55,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "220",
                    "net": "nn",
                    "code": "00476835",
                    "ids": ",nn00476835,uw60947247,",
                    "sources": ",nn,uw,",
                    "types": ",cap,dyfi,general-link,geoserve,moment-tensor,nearby-cities,origin,phase-data,shakemap,",
                    "nst": "6",
                    "dmin": "0.147",
                    "rms": "0.1764",
                    "gap": "143.21",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.6235,
                        41.8791,
                        9.3519
                    ]
                },
                "id": "nn00476835"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.88,
                    "place": "72km ESE of Lakeview, Oregon",
                    "time": "1421123177107",
                    "updated": "1421186504860",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00476814",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "128",
                    "net": "nn",
                    "code": "00476814",
                    "ids": ",nn00476814,uw60947242,",
                    "sources": ",nn,uw,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "5",
                    "dmin": "0.139",
                    "rms": "0.1757",
                    "gap": "121.93",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.6276,
                        41.8905,
                        9.9743
                    ]
                },
                "id": "nn00476814"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.27,
                    "place": "66km ESE of Lakeview, Oregon",
                    "time": "1421122432411",
                    "updated": "1421471070160",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00477560",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": 3,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "165",
                    "net": "nn",
                    "code": "00477560",
                    "ids": ",uw60104408,nn00477560,",
                    "sources": ",uw,nn,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,shakemap,",
                    "nst": "4",
                    "dmin": "0.121",
                    "rms": "0.0314",
                    "gap": "318.79",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.655,
                        41.8913,
                        10.8169
                    ]
                },
                "id": "nn00477560"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.24,
                    "place": "66km SE of Lakeview, Oregon",
                    "time": "1421122414520",
                    "updated": "1421188975732",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/uw60104308",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "162",
                    "net": "uw",
                    "code": "60104308",
                    "ids": ",uw60104308,",
                    "sources": ",uw,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "5",
                    "dmin": "0.4623",
                    "rms": "0.63",
                    "gap": "192",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.6876667,
                        41.852,
                        0.02
                    ]
                },
                "id": "uw60104308"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.03,
                    "place": "71km ESE of Lakeview, Oregon",
                    "time": "1421122383346",
                    "updated": "1421188508640",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00476828",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "141",
                    "net": "nn",
                    "code": "00476828",
                    "ids": ",nn00476828,uw60947237,",
                    "sources": ",nn,uw,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "6",
                    "dmin": "0.136",
                    "rms": "0.2106",
                    "gap": "101.92",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.6246,
                        41.9015,
                        8.2893
                    ]
                },
                "id": "nn00476828"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.8,
                    "place": "6km SSE of Langston, Oklahoma",
                    "time": "1421115025240",
                    "updated": "1421121823456",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf2l",
                    "felt": 3,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "121",
                    "net": "us",
                    "code": "c000tf2l",
                    "ids": ",usc000tf2l,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.319",
                    "rms": "0.51",
                    "gap": "115",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.2377,
                        35.8911,
                        5
                    ]
                },
                "id": "usc000tf2l"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "241km E of Pagan, Northern Mariana Islands",
                    "time": "1421110897680",
                    "updated": "1421139843709",
                    "tz": 600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf2j",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tf2j",
                    "ids": ",usc000tf2j,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "3.285",
                    "rms": "0.62",
                    "gap": "141",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        148.0215,
                        17.7455,
                        33.64
                    ]
                },
                "id": "usc000tf2j"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.5,
                    "place": "5km WSW of Shibushi, Japan",
                    "time": "1421106695620",
                    "updated": "1421135649140",
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf2a",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "312",
                    "net": "us",
                    "code": "c000tf2a",
                    "ids": ",usc000tf2a,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.513",
                    "rms": "1.3",
                    "gap": "128",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        131.0491,
                        31.4441,
                        55.8
                    ]
                },
                "id": "usc000tf2a"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "21km SSE of Medford, Oklahoma",
                    "time": "1421101590700",
                    "updated": "1421109942237",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf1e",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "112",
                    "net": "us",
                    "code": "c000tf1e",
                    "ids": ",usc000tf1e,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.62",
                    "gap": "57",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.6007,
                        36.6472,
                        5.136
                    ]
                },
                "id": "usc000tf1e"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.6,
                    "place": "73km SSW of Bengkulu, Indonesia",
                    "time": "1421099518570",
                    "updated": "1421128467746",
                    "tz": 420,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tezw",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "326",
                    "net": "us",
                    "code": "c000tezw",
                    "ids": ",usc000tezw,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.832",
                    "rms": "1.09",
                    "gap": "169",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        102.1257,
                        -4.4468,
                        53.29
                    ]
                },
                "id": "usc000tezw"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "17km NNE of Stillwater, Oklahoma",
                    "time": "1421095109300",
                    "updated": "1421363791582",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tezc",
                    "felt": 2,
                    "cdi": 3.4,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "105",
                    "net": "us",
                    "code": "c000tezc",
                    "ids": ",usc000tezc,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-text,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.76",
                    "gap": "77",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.0173,
                        36.2674,
                        5.711
                    ]
                },
                "id": "usc000tezc"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.5,
                    "place": "37km NW of Dobo, Indonesia",
                    "time": "1421094313850",
                    "updated": "1421364243462",
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tewz",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": 4.46,
                    "alert": "green",
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "465",
                    "net": "us",
                    "code": "c000tewz",
                    "ids": ",usc000tewz,gcmt20150112202514,",
                    "sources": ",us,gcmt,",
                    "types": ",cap,dyfi,general-link,geoserve,losspager,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": "3.115",
                    "rms": "0.82",
                    "gap": "18",
                    "magnitudeType": "mwb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        133.9712,
                        -5.536,
                        18.4
                    ]
                },
                "id": "usc000tewz"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.57,
                    "place": "59km S of Baker, California",
                    "time": "1421094022390",
                    "updated": "1421173721880",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ci37304744",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "102",
                    "net": "ci",
                    "code": "37304744",
                    "ids": ",ci37304744,",
                    "sources": ",ci,",
                    "types": ",cap,dyfi,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
                    "nst": "30",
                    "dmin": "0.1463",
                    "rms": "0.16",
                    "gap": "75",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -115.9841667,
                        34.7321667,
                        6.03
                    ]
                },
                "id": "ci37304744"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "3km ESE of Perry, Oklahoma",
                    "time": "1421091881900",
                    "updated": "1421364333972",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000texs",
                    "felt": 3,
                    "cdi": 3.8,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "105",
                    "net": "us",
                    "code": "c000texs",
                    "ids": ",usc000texs,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-text,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.41",
                    "gap": "60",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.2518,
                        36.2742,
                        4.404
                    ]
                },
                "id": "usc000texs"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "7km S of Guthrie, Oklahoma",
                    "time": "1421091169600",
                    "updated": "1421364537376",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tex7",
                    "felt": 1,
                    "cdi": 2.2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "96",
                    "net": "us",
                    "code": "c000tex7",
                    "ids": ",usc000tex7,",
                    "sources": ",us,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.45",
                    "gap": "101",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.4394,
                        35.8147,
                        6.636
                    ]
                },
                "id": "usc000tex7"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.6,
                    "place": "173km SW of Sarangani, Philippines",
                    "time": "1421091110660",
                    "updated": "1421364957528",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tevw",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "326",
                    "net": "us",
                    "code": "c000tevw",
                    "ids": ",usc000tevw,",
                    "sources": ",us,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "4.642",
                    "rms": "0.64",
                    "gap": "61",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        124.3363,
                        4.3153,
                        352.26
                    ]
                },
                "id": "usc000tevw"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.6,
                    "place": "55km SSW of Sola, Vanuatu",
                    "time": "1421090568550",
                    "updated": "1421365520798",
                    "tz": 660,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tevv",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "326",
                    "net": "us",
                    "code": "c000tevv",
                    "ids": ",usc000tevv,",
                    "sources": ",us,",
                    "types": ",dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.097",
                    "rms": "0.56",
                    "gap": "108",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        167.3777,
                        -14.356,
                        192.27
                    ]
                },
                "id": "usc000tevv"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.5,
                    "place": "122km S of Akureyri, Iceland",
                    "time": "1421087426500",
                    "updated": "1421365831770",
                    "tz": 0,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000teve",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "312",
                    "net": "us",
                    "code": "c000teve",
                    "ids": ",usc000teve,",
                    "sources": ",us,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "1.522",
                    "rms": "1.01",
                    "gap": "111",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -17.8055,
                        64.59,
                        8.91
                    ]
                },
                "id": "usc000teve"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "12km NNW of Brenas, Puerto Rico",
                    "time": "1421085861600",
                    "updated": "1421365906040",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15012002",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "112",
                    "net": "pr",
                    "code": "15012002",
                    "ids": ",pr15012002,usc000tev9,",
                    "sources": ",pr,us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": "11",
                    "dmin": "0.15001865",
                    "rms": "0.21",
                    "gap": "237.6",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -66.4004,
                        18.566,
                        44
                    ]
                },
                "id": "pr15012002"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "4km SE of Perry, Oklahoma",
                    "time": "1421073804900",
                    "updated": "1421092547758",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tetm",
                    "felt": 2,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "104",
                    "net": "us",
                    "code": "c000tetm",
                    "ids": ",usc000tetm,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.44",
                    "gap": "84",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.2478,
                        36.2593,
                        5.803
                    ]
                },
                "id": "usc000tetm"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.73,
                    "place": "12km E of Coburg, Oregon",
                    "time": "1421068579710",
                    "updated": "1421114016792",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/uw60946952",
                    "felt": 4,
                    "cdi": 2.4,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "116",
                    "net": "uw",
                    "code": "60946952",
                    "ids": ",uw60946952,usc000tet9,",
                    "sources": ",uw,us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "20",
                    "dmin": "0.07738",
                    "rms": "0.26",
                    "gap": "57",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -122.8991667,
                        44.1518333,
                        8.32
                    ]
                },
                "id": "uw60946952"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "5km NE of Stillwater, Oklahoma",
                    "time": "1421067990700",
                    "updated": "1421257989981",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tet8",
                    "felt": 7,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "106",
                    "net": "us",
                    "code": "c000tet8",
                    "ids": ",usc000tet8,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.41",
                    "gap": "72",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.0066,
                        36.1462,
                        5.664
                    ]
                },
                "id": "usc000tet8"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.9,
                    "place": "110km E of Hasaki, Japan",
                    "time": "1421066348960",
                    "updated": "1421095304003",
                    "tz": 540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tet2",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "369",
                    "net": "us",
                    "code": "c000tet2",
                    "ids": ",usc000tet2,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.566",
                    "rms": "1.07",
                    "gap": "122",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        142.0487,
                        35.8003,
                        34.47
                    ]
                },
                "id": "usc000tet2"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.3,
                    "place": "1km ESE of Wauregan, Connecticut",
                    "time": "1421062598920",
                    "updated": "1421464644114",
                    "tz": -300,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tesx",
                    "felt": 388,
                    "cdi": 5,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "362",
                    "net": "us",
                    "code": "c000tesx",
                    "ids": ",usc000tesx,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.244",
                    "rms": "0.36",
                    "gap": "89",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -71.8937,
                        41.7413,
                        6.78
                    ]
                },
                "id": "usc000tesx"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "166km WNW of Ile Hunter, New Caledonia",
                    "time": "1421058233140",
                    "updated": "1421087192439",
                    "tz": 660,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tesp",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000tesp",
                    "ids": ",usc000tesp,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "3.844",
                    "rms": "0.9",
                    "gap": "99",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        170.5732,
                        -21.7833,
                        85.83
                    ]
                },
                "id": "usc000tesp"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "56km SSW of Redoubt Volcano, Alaska",
                    "time": "1421057354000",
                    "updated": "1421087050413",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11484794",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "96",
                    "net": "ak",
                    "code": "11484794",
                    "ids": ",ak11484794,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "21",
                    "dmin": "0.1356456",
                    "rms": "0.78",
                    "gap": "266.399978688002",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -153.2789,
                        60.0558,
                        116.8
                    ]
                },
                "id": "ak11484794"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "15km SSW of Talkeetna, Alaska",
                    "time": "1421051875000",
                    "updated": "1421087043627",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11484741",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "112",
                    "net": "ak",
                    "code": "11484741",
                    "ids": ",ak11484741,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "67",
                    "dmin": "0.2093075",
                    "rms": "0.94",
                    "gap": "35.9999971200002",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -150.2412,
                        62.1964,
                        41.7
                    ]
                },
                "id": "ak11484741"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.4,
                    "place": "16km SE of Pijijiapan, Mexico",
                    "time": "1421049450040",
                    "updated": "1421246839551",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tes3",
                    "felt": 6,
                    "cdi": 5.6,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "452",
                    "net": "us",
                    "code": "c000tes3",
                    "ids": ",usc000tes3,gcmt20150112075730,",
                    "sources": ",us,gcmt,",
                    "types": ",cap,dyfi,general-link,geoserve,moment-tensor,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.157",
                    "rms": "0.98",
                    "gap": "83",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -93.112,
                        15.5992,
                        102.57
                    ]
                },
                "id": "usc000tes3"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.6,
                    "place": "36km WSW of Willow, Alaska",
                    "time": "1421046720000",
                    "updated": "1421086934013",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11484695",
                    "felt": 4,
                    "cdi": 2.7,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "200",
                    "net": "ak",
                    "code": "11484695",
                    "ids": ",ak11484695,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "85",
                    "dmin": "0.150917",
                    "rms": "0.7",
                    "gap": "39.5999968320003",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -150.6648,
                        61.6095,
                        59.6
                    ]
                },
                "id": "ak11484695"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.9,
                    "place": "Southern Mid-Atlantic Ridge",
                    "time": "1421041312420",
                    "updated": "1421070273079",
                    "tz": -60,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tert",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "369",
                    "net": "us",
                    "code": "c000tert",
                    "ids": ",usc000tert,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "23.683",
                    "rms": "0.39",
                    "gap": "88",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -14.4271,
                        -16.8017,
                        10
                    ]
                },
                "id": "usc000tert"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3,
                    "place": "63km W of Talkeetna, Alaska",
                    "time": "1421037893000",
                    "updated": "1421087046944",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11484657",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "138",
                    "net": "ak",
                    "code": "11484657",
                    "ids": ",ak11484657,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "77",
                    "dmin": "0.3467497",
                    "rms": "0.61",
                    "gap": "82.7999933760005",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -151.3412,
                        62.315,
                        95.4
                    ]
                },
                "id": "ak11484657"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.4,
                    "place": "63km SSE of Boca de Yuma, Dominican Republic",
                    "time": "1421037660900",
                    "updated": "1421377518040",
                    "tz": -300,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15012000",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "178",
                    "net": "pr",
                    "code": "15012000",
                    "ids": ",pr15012000,usc000tes1,",
                    "sources": ",pr,us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": "12",
                    "dmin": "1.18218291",
                    "rms": "0.34",
                    "gap": "334.8",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -68.3424,
                        17.8645,
                        89
                    ]
                },
                "id": "pr15012000"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "13km NNE of Crescent, Oklahoma",
                    "time": "1421035543140",
                    "updated": "1421037567862",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000terd",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "96",
                    "net": "us",
                    "code": "c000terd",
                    "ids": ",usc000terd,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.519",
                    "rms": "0.41",
                    "gap": "43",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.5479,
                        36.0723,
                        3.82
                    ]
                },
                "id": "usc000terd"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4,
                    "place": "15km NNE of Tulum, Mexico",
                    "time": "1421034553950",
                    "updated": "1421360549910",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tf05",
                    "felt": 6,
                    "cdi": 3.4,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "248",
                    "net": "us",
                    "code": "c000tf05",
                    "ids": ",usc000tf05,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-text,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "0.82",
                    "rms": "1.43",
                    "gap": "99",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -87.4113,
                        20.3466,
                        14.06
                    ]
                },
                "id": "usc000tf05"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.6,
                    "place": "39km S of Intipuca, El Salvador",
                    "time": "1421034355760",
                    "updated": "1421104177113",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tera",
                    "felt": 2,
                    "cdi": 3.4,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "326",
                    "net": "us",
                    "code": "c000tera",
                    "ids": ",usc000tera,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.01",
                    "rms": "1.46",
                    "gap": "132",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -88.0768,
                        12.8369,
                        83.67
                    ]
                },
                "id": "usc000tera"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.6,
                    "place": "47km NNE of Lae, Papua New Guinea",
                    "time": "1421034262740",
                    "updated": "1421063212638",
                    "tz": 600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000terb",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "326",
                    "net": "us",
                    "code": "c000terb",
                    "ids": ",usc000terb,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "3.034",
                    "rms": "0.69",
                    "gap": "68",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        147.1995,
                        -6.3512,
                        46.86
                    ]
                },
                "id": "usc000terb"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "20km E of Cherokee, Oklahoma",
                    "time": "1421033796200",
                    "updated": "1421377332620",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tetn",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "96",
                    "net": "us",
                    "code": "c000tetn",
                    "ids": ",usc000tetn,",
                    "sources": ",us,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.71",
                    "gap": "102",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -98.131,
                        36.743,
                        5
                    ]
                },
                "id": "usc000tetn"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "3km SW of Medford, Oklahoma",
                    "time": "1421033259600",
                    "updated": "1421376843823",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000teup",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "96",
                    "net": "us",
                    "code": "c000teup",
                    "ids": ",usc000teup,",
                    "sources": ",us,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.53",
                    "gap": "63",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.7679,
                        36.7885,
                        6.049
                    ]
                },
                "id": "usc000teup"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "Southern Mid-Atlantic Ridge",
                    "time": "1421031860500",
                    "updated": "1421060811172",
                    "tz": -60,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000ter7",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000ter7",
                    "ids": ",usc000ter7,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "8.419",
                    "rms": "0.78",
                    "gap": "61",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -14.4702,
                        -16.8452,
                        10
                    ]
                },
                "id": "usc000ter7"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.4,
                    "place": "21km ENE of Pinotepa de Don Luis, Mexico",
                    "time": "1421031621260",
                    "updated": "1421060572117",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000ter5",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "298",
                    "net": "us",
                    "code": "c000ter5",
                    "ids": ",usc000ter5,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "4.538",
                    "rms": "0.78",
                    "gap": "222",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.7517,
                        16.5203,
                        48.52
                    ]
                },
                "id": "usc000ter5"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "5km ENE of Irving, Texas",
                    "time": "1421027166750",
                    "updated": "1421425769637",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000ter3",
                    "felt": 150,
                    "cdi": 4.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "158",
                    "net": "us",
                    "code": "c000ter3",
                    "ids": ",usc000ter3,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.027",
                    "rms": "0.66",
                    "gap": "64",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -96.8889,
                        32.8325,
                        7.18
                    ]
                },
                "id": "usc000ter3"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "137km ENE of Hirara, Japan",
                    "time": "1421024657940",
                    "updated": "1421053617977",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000teqv",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000teqv",
                    "ids": ",usc000teqv,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "3.325",
                    "rms": "0.88",
                    "gap": "86",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        126.606,
                        25.0907,
                        33.51
                    ]
                },
                "id": "usc000teqv"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.9,
                    "place": "26km ESE of Santa Maria Zacatepec, Mexico",
                    "time": "1421024363160",
                    "updated": "1421026848593",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000teqr",
                    "felt": 1,
                    "cdi": 2.2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "370",
                    "net": "us",
                    "code": "c000teqr",
                    "ids": ",usc000teqr,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.179",
                    "rms": "0.75",
                    "gap": "154",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.7619,
                        16.6633,
                        42.56
                    ]
                },
                "id": "usc000teqr"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.5,
                    "place": "123km NNE of Vik, Iceland",
                    "time": "1421022164330",
                    "updated": "1421051115091",
                    "tz": 0,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000teqf",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "312",
                    "net": "us",
                    "code": "c000teqf",
                    "ids": ",usc000teqf,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "1.494",
                    "rms": "1.01",
                    "gap": "92",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -17.9458,
                        64.4226,
                        7.62
                    ]
                },
                "id": "usc000teqf"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "Mauritius - Reunion region",
                    "time": "1421021998090",
                    "updated": "1421050964677",
                    "tz": 240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000teqp",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000teqp",
                    "ids": ",usc000teqp,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "10.014",
                    "rms": "1.25",
                    "gap": "56",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        66.3452,
                        -19.9241,
                        10
                    ]
                },
                "id": "usc000teqp"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "14km NNE of Crescent, Oklahoma",
                    "time": "1421021450380",
                    "updated": "1421023401881",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000teq7",
                    "felt": 2,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "97",
                    "net": "us",
                    "code": "c000teq7",
                    "ids": ",usc000teq7,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.509",
                    "rms": "0.58",
                    "gap": "67",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.5285,
                        36.0675,
                        1.64
                    ]
                },
                "id": "usc000teq7"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "67km W of Anchor Point, Alaska",
                    "time": "1421016883000",
                    "updated": "1421045833127",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11484512",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "104",
                    "net": "ak",
                    "code": "11484512",
                    "ids": ",ak11484512,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.73",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -153.0256,
                        59.804,
                        111.5
                    ]
                },
                "id": "ak11484512"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.9,
                    "place": "76km SSW of Coracora, Peru",
                    "time": "1421012377570",
                    "updated": "1421073106988",
                    "tz": -300,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tens",
                    "felt": 1,
                    "cdi": 3.8,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "370",
                    "net": "us",
                    "code": "c000tens",
                    "ids": ",usc000tens,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "4.661",
                    "rms": "0.73",
                    "gap": "148",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -73.9283,
                        -15.7143,
                        58.2
                    ]
                },
                "id": "usc000tens"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.4,
                    "place": "209km WSW of Longyearbyen, Svalbard and Jan Mayen",
                    "time": "1421008473050",
                    "updated": "1421037422383",
                    "tz": 60,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tenj",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "449",
                    "net": "us",
                    "code": "c000tenj",
                    "ids": ",usc000tenj,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "1.77",
                    "rms": "0.68",
                    "gap": "82",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        7.6454,
                        77.3918,
                        10
                    ]
                },
                "id": "usc000tenj"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "4km SSW of Comerio, Puerto Rico",
                    "time": "1421006683600",
                    "updated": "1421035636402",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15011007",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "112",
                    "net": "pr",
                    "code": "15011007",
                    "ids": ",pr15011007,",
                    "sources": ",pr,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "15",
                    "dmin": "0.1060012",
                    "rms": "0.28",
                    "gap": "100.8",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -66.2506,
                        18.183,
                        14
                    ]
                },
                "id": "pr15011007"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.8,
                    "place": "27km SW of Anaktuvuk Pass, Alaska",
                    "time": "1421004421000",
                    "updated": "1421033376805",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11484427",
                    "felt": null,
                    "cdi": null,
                    "mmi": 3.7,
                    "alert": "green",
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "222",
                    "net": "ak",
                    "code": "11484427",
                    "ids": ",usc000tenc,ak11484427,",
                    "sources": ",us,ak,",
                    "types": ",cap,dyfi,general-link,geoserve,losspager,nearby-cities,origin,phase-data,shakemap,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.63",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -152.7244,
                        68.0088,
                        8
                    ]
                },
                "id": "ak11484427"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3,
                    "place": "244km SE of Akutan, Alaska",
                    "time": "1421002351000",
                    "updated": "1421031311507",
                    "tz": -660,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11484421",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "138",
                    "net": "ak",
                    "code": "11484421",
                    "ids": ",ak11484421,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.36",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -163.2897,
                        52.5146,
                        108.5
                    ]
                },
                "id": "ak11484421"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "Southern Mid-Atlantic Ridge",
                    "time": "1421002040910",
                    "updated": "1421031000898",
                    "tz": -60,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000ten9",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000ten9",
                    "ids": ",usc000ten9,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "8.841",
                    "rms": "1.29",
                    "gap": "134",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -14.5007,
                        -16.8275,
                        10
                    ]
                },
                "id": "usc000ten9"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.9,
                    "place": "59km N of San Antonio, Puerto Rico",
                    "time": "1421001928900",
                    "updated": "1421008861361",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15011006",
                    "felt": 3,
                    "cdi": 2.2,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "130",
                    "net": "pr",
                    "code": "15011006",
                    "ids": ",pr15011006,",
                    "sources": ",pr,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "6",
                    "dmin": "0.55875211",
                    "rms": "0.25",
                    "gap": "331.2",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -67.2041,
                        19.0235,
                        10
                    ]
                },
                "id": "pr15011006"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.8,
                    "place": "42km ENE of Old Iliamna, Alaska",
                    "time": "1420993303000",
                    "updated": "1421022257669",
                    "tz": -540,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11484364",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "121",
                    "net": "ak",
                    "code": "11484364",
                    "ids": ",ak11484364,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.73",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -154.1923,
                        59.8449,
                        192.7
                    ]
                },
                "id": "ak11484364"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.8,
                    "place": "43km ENE of Hernani, Philippines",
                    "time": "1420992444670",
                    "updated": "1421021391852",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000ten1",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "354",
                    "net": "us",
                    "code": "c000ten1",
                    "ids": ",usc000ten1,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "25.915",
                    "rms": "0.66",
                    "gap": "126",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        125.9853,
                        11.4723,
                        35
                    ]
                },
                "id": "usc000ten1"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.69,
                    "place": "68km ESE of Lakeview, Oregon",
                    "time": "1420992013001",
                    "updated": "1421020972576",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nn00476536",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "111",
                    "net": "nn",
                    "code": "00476536",
                    "ids": ",nn00476536,usc000temz,",
                    "sources": ",nn,us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": "7",
                    "dmin": "0.14",
                    "rms": "0.1272",
                    "gap": "122.11",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -119.6344,
                        41.8802,
                        9.4186
                    ]
                },
                "id": "nn00476536"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.3,
                    "place": "37km SSW of Semisopochnoi Island, Alaska",
                    "time": "1420991904000",
                    "updated": "1421020858898",
                    "tz": 720,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11484357",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "168",
                    "net": "ak",
                    "code": "11484357",
                    "ids": ",ak11484357,",
                    "sources": ",ak,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.58",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        179.4722,
                        51.6228,
                        74
                    ]
                },
                "id": "ak11484357"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.5,
                    "place": "7km WNW of Mayaguez, Puerto Rico",
                    "time": "1420983051700",
                    "updated": "1421011999824",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15011003",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "96",
                    "net": "pr",
                    "code": "15011003",
                    "ids": ",pr15011003,usc000temv,",
                    "sources": ",pr,us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": "5",
                    "dmin": "0.12576414",
                    "rms": "0.07",
                    "gap": "223.2",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -67.2096,
                        18.2199,
                        17
                    ]
                },
                "id": "pr15011003"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.6,
                    "place": "6km S of Guthrie, Oklahoma",
                    "time": "1420972102160",
                    "updated": "1421113998853",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000temr",
                    "felt": 21,
                    "cdi": 4.3,
                    "mmi": 4.03,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "208",
                    "net": "us",
                    "code": "c000temr",
                    "ids": ",usc000temr,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.242",
                    "rms": "0.31",
                    "gap": "69",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.4188,
                        35.8239,
                        7.3
                    ]
                },
                "id": "usc000temr"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "12km S of Pahala, Hawaii",
                    "time": "1420969887100",
                    "updated": "1420998838951",
                    "tz": -600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/hv60830356",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "AUTOMATIC",
                    "tsunami": null,
                    "sig": "112",
                    "net": "hv",
                    "code": "60830356",
                    "ids": ",hv60830356,",
                    "sources": ",hv,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,",
                    "nst": null,
                    "dmin": "0.06288207",
                    "rms": "0.31",
                    "gap": "183.6",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -155.4688,
                        19.0902,
                        39.6
                    ]
                },
                "id": "hv60830356"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "Reykjanes Ridge",
                    "time": "1420966080070",
                    "updated": "1420995041073",
                    "tz": -120,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000teml",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000teml",
                    "ids": ",usc000teml,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "16.182",
                    "rms": "0.47",
                    "gap": "64",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -34.8207,
                        52.8306,
                        10
                    ]
                },
                "id": "usc000teml"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "176km ENE of Taron, Papua New Guinea",
                    "time": "1420965568480",
                    "updated": "1420994524955",
                    "tz": 600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000temj",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000temj",
                    "ids": ",usc000temj,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "8.026",
                    "rms": "0.78",
                    "gap": "63",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        154.3622,
                        -3.599,
                        74.02
                    ]
                },
                "id": "usc000temj"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.54,
                    "place": "3km NW of Pittsburg, California",
                    "time": "1420963619010",
                    "updated": "1421128144348",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nc72379081",
                    "felt": 5,
                    "cdi": 3.4,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "101",
                    "net": "nc",
                    "code": "72379081",
                    "ids": ",nc72379081,",
                    "sources": ",nc,",
                    "types": ",cap,dyfi,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
                    "nst": "95",
                    "dmin": "0.08694",
                    "rms": "0.22",
                    "gap": "41",
                    "magnitudeType": "md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -121.9091667,
                        38.048,
                        20.03
                    ]
                },
                "id": "nc72379081"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.6,
                    "place": "102km SSE of Akureyri, Iceland",
                    "time": "1420954057320",
                    "updated": "1420983008338",
                    "tz": 0,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tem8",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "326",
                    "net": "us",
                    "code": "c000tem8",
                    "ids": ",usc000tem8,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "1.722",
                    "rms": "0.78",
                    "gap": "113",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -17.309,
                        64.8249,
                        7.55
                    ]
                },
                "id": "usc000tem8"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "8km WNW of Helena, Oklahoma",
                    "time": "1420950717680",
                    "updated": "1420953114151",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tem5",
                    "felt": 1,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "104",
                    "net": "us",
                    "code": "c000tem5",
                    "ids": ",usc000tem5,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.307",
                    "rms": "0.62",
                    "gap": "85",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -98.3553,
                        36.5752,
                        5
                    ]
                },
                "id": "usc000tem5"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.7,
                    "place": "1km W of San Juan, Puerto Rico",
                    "time": "1420949673400",
                    "updated": "1420978646035",
                    "tz": -240,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/pr15011000",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "REVIEWED",
                    "tsunami": null,
                    "sig": "112",
                    "net": "pr",
                    "code": "15011000",
                    "ids": ",pr15011000,",
                    "sources": ",pr,",
                    "types": ",cap,dyfi,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": "4",
                    "dmin": "0.61085439",
                    "rms": "0.07",
                    "gap": "342",
                    "magnitudeType": "Md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -66.1232,
                        18.4696,
                        61
                    ]
                },
                "id": "pr15011000"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.9,
                    "place": "13km ENE of Anthony, Kansas",
                    "time": "1420934708710",
                    "updated": "1420951293105",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000telq",
                    "felt": 6,
                    "cdi": 3.1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "131",
                    "net": "us",
                    "code": "c000telq",
                    "ids": ",usc000telq,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.008",
                    "rms": "0.29",
                    "gap": "56",
                    "magnitudeType": "mb_lg"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -97.8874,
                        37.2031,
                        8.92
                    ]
                },
                "id": "usc000telq"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.96,
                    "place": "23km SSW of La Quinta, California",
                    "time": "1420932542790",
                    "updated": "1421085025250",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ci37304232",
                    "felt": 16,
                    "cdi": 2.7,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "139",
                    "net": "ci",
                    "code": "37304232",
                    "ids": ",ci37304232,",
                    "sources": ",ci,",
                    "types": ",cap,dyfi,focal-mechanism,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
                    "nst": "110",
                    "dmin": null,
                    "rms": "0.17",
                    "gap": "26",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -116.4376667,
                        33.4781667,
                        14.89
                    ]
                },
                "id": "ci37304232"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.2,
                    "place": "4km ENE of Challis, Idaho",
                    "time": "1420928916510",
                    "updated": "1420932746327",
                    "tz": -420,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tel7",
                    "felt": 4,
                    "cdi": 2,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "158",
                    "net": "us",
                    "code": "c000tel7",
                    "ids": ",usc000tel7,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "0.077",
                    "rms": "0.69",
                    "gap": "44",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -114.1815,
                        44.5198,
                        8.01
                    ]
                },
                "id": "usc000tel7"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.4,
                    "place": "41km ENE of Nikol'skoye, Russia",
                    "time": "1420928756840",
                    "updated": "1420957729040",
                    "tz": 720,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000telb",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "298",
                    "net": "us",
                    "code": "c000telb",
                    "ids": ",usc000telb,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "5.167",
                    "rms": "0.84",
                    "gap": "120",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        166.5712,
                        55.3756,
                        26.81
                    ]
                },
                "id": "usc000telb"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.5,
                    "place": "14km S of Jiquilillo, Nicaragua",
                    "time": "1420925327150",
                    "updated": "1420954289121",
                    "tz": -360,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tekk",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "312",
                    "net": "us",
                    "code": "c000tekk",
                    "ids": ",usc000tekk,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.394",
                    "rms": "0.74",
                    "gap": "136",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -87.4443,
                        12.615,
                        110.48
                    ]
                },
                "id": "usc000tekk"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3,
                    "place": "Gulf of Alaska",
                    "time": "1420922987000",
                    "updated": "1420951949129",
                    "tz": -600,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/ak11483925",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "automatic",
                    "tsunami": null,
                    "sig": "138",
                    "net": "ak",
                    "code": "11483925",
                    "ids": ",ak11483925,",
                    "sources": ",ak,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "0.97",
                    "gap": null,
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -143.274,
                        57.1958,
                        25.5
                    ]
                },
                "id": "ak11483925"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.5,
                    "place": "72km N of L'Esperance Rock, New Zealand",
                    "time": "1420922809820",
                    "updated": "1420951763797",
                    "tz": -720,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tejx",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "312",
                    "net": "us",
                    "code": "c000tejx",
                    "ids": ",usc000tejx,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "1.758",
                    "rms": "1.01",
                    "gap": "123",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -178.9239,
                        -30.7823,
                        212.44
                    ]
                },
                "id": "usc000tejx"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.8,
                    "place": "4km N of Mabayo, Philippines",
                    "time": "1420918322080",
                    "updated": "1421490549604",
                    "tz": 480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tejf",
                    "felt": 159,
                    "cdi": 4.9,
                    "mmi": 4.33,
                    "alert": "green",
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "595",
                    "net": "us",
                    "code": "c000tejf",
                    "ids": ",usc000tejf,gcmt20150110193202,",
                    "sources": ",us,gcmt,",
                    "types": ",cap,dyfi,general-link,geoserve,losspager,moment-tensor,nearby-cities,origin,phase-data,shakemap,tectonic-summary,",
                    "nst": null,
                    "dmin": "8.04",
                    "rms": "1.01",
                    "gap": "21",
                    "magnitudeType": "mwb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        120.279,
                        14.7705,
                        74.76
                    ]
                },
                "id": "usc000tejf"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.85,
                    "place": "143km W of Brookings, Oregon",
                    "time": "1420917446090",
                    "updated": "1421209863354",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/nc72378871",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "125",
                    "net": "nc",
                    "code": "72378871",
                    "ids": ",uw60946572,nc72378871,",
                    "sources": ",uw,nc,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,scitech-link,",
                    "nst": "10",
                    "dmin": "1.365",
                    "rms": "0.13",
                    "gap": "310",
                    "magnitudeType": "md"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -126.001,
                        41.8736667,
                        5.02
                    ]
                },
                "id": "nc72378871"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 2.6,
                    "place": "28km W of Trinidad, Colorado",
                    "time": "1420916660610",
                    "updated": "1420945613338",
                    "tz": -420,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000tej2",
                    "felt": null,
                    "cdi": null,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "104",
                    "net": "us",
                    "code": "c000tej2",
                    "ids": ",usc000tej2,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "0.325",
                    "rms": "1.08",
                    "gap": "90",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -104.8163,
                        37.1656,
                        3.19
                    ]
                },
                "id": "usc000tej2"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 4.7,
                    "place": "111km WNW of Hofn, Iceland",
                    "time": "1420914220980",
                    "updated": "1421170462818",
                    "tz": 0,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000teix",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "340",
                    "net": "us",
                    "code": "c000teix",
                    "ids": ",usc000teix,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,",
                    "nst": null,
                    "dmin": "1.691",
                    "rms": "0.48",
                    "gap": "101",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -17.4283,
                        64.541,
                        7.66
                    ]
                },
                "id": "usc000teix"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5.4,
                    "place": "96km NNE of Calama, Chile",
                    "time": "1420912503000",
                    "updated": "1421169690684",
                    "tz": -180,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000teil",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "449",
                    "net": "us",
                    "code": "c000teil",
                    "ids": ",usc000teil,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,impact-text,moment-tensor,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": null,
                    "rms": "1.06",
                    "gap": null,
                    "magnitudeType": "mwr"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -68.658,
                        -21.63,
                        109.8
                    ]
                },
                "id": "usc000teil"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 5,
                    "place": "75km W of Firuzabad, Iran",
                    "time": "1420909387460",
                    "updated": "1421162884980",
                    "tz": 210,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/usc000teic",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": null,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "385",
                    "net": "us",
                    "code": "c000teic",
                    "ids": ",usc000teic,",
                    "sources": ",us,",
                    "types": ",cap,dyfi,general-link,geoserve,nearby-cities,origin,phase-data,tectonic-summary,",
                    "nst": null,
                    "dmin": "3.603",
                    "rms": "0.91",
                    "gap": "40",
                    "magnitudeType": "mb"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        51.8163,
                        28.7145,
                        8.15
                    ]
                },
                "id": "usc000teic"
            },
            {
                "type": "Feature",
                "properties": {
                    "mag": 3.1,
                    "place": "30km WSW of Forks, Washington",
                    "time": "1420909153660",
                    "updated": "1421202362020",
                    "tz": -480,
                    "url": "http://earthquake.usgs.gov/earthquakes/eventpage/uw60946547",
                    "felt": 0,
                    "cdi": 1,
                    "mmi": 3.13,
                    "alert": null,
                    "status": "reviewed",
                    "tsunami": null,
                    "sig": "148",
                    "net": "uw",
                    "code": "60946547",
                    "ids": ",uw60946547,",
                    "sources": ",uw,",
                    "types": ",dyfi,general-link,geoserve,nearby-cities,origin,phase-data,shakemap,",
                    "nst": "25",
                    "dmin": "0.1872",
                    "rms": "0.41",
                    "gap": "202",
                    "magnitudeType": "ml"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -124.7316667,
                        47.7971667,
                        23.46
                    ]
                },
                "id": "uw60946547"
            }
        ]
    };