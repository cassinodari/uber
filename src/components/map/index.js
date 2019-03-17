import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Search from '../search'
import Directions from '../directions';

export default class Map extends Component {

    state = {
        region: null,
        destination: null
    };

    handleLocationSelected = (data, details) => {
        console.log("-------------------- data --------------------");
        console.log(data);
        console.log("-------------------- details --------------------");
        console.log(details);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134
                    }
                });
            },
            () => { }, // erro
            {
                timeout: 10000,
                enableHighAccuracy: true,
                maximumAge: 1000, // guardar no máximo a localização por 1 segundo
            } // propriedades
        );
    }

    handleLocationSelected = (data, { geometry }) => { //desestruração JavaScript de details
        const { location: { lat: latitude, lng: longitude } } = geometry; //desestruração novamente
        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text
            }
        });
    }

    render() {

        const { region, destination } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <MapView style={{ flex: 1 }}
                    initialRegion={region}
                    showsUserLocation
                    ref={el => this.mapView = el}>
                    {destination && (
                        <Fragment>
                            <Directions
                                origin={region}
                                destination={destination}
                                onReady={result => {
                                    this.mapView.fitToCoordinates(
                                        result.coordinates, {
                                            edgePadding: {
                                                right: 50,
                                                left: 50,
                                                top: 150,
                                                bottom: 50,
                                            }
                                        }
                                    );
                                }}
                            />
                            <Marker
                                coordinate={destination}
                            />
                        </Fragment>
                    )}
                </MapView>
                <Search onLocationSelected={this.handleLocationSelected} />
            </View>
        );
    }
}