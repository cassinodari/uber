import React, { Component } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView style={{ flex: 1 }}
                    initialRegion={{
                        latitude: -28.387622,
                        longitude: -51.848139,
                        latitudeDelta: 0.009,
                        longitudeDelta: 0.009,
                    }}
                />
            </View>
        );
    }
}