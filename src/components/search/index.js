import React, { Component } from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {

    state = {
        searchFocused: false
    }

    render() {

        const { onLocationSelected } = this.props;
        const { searchFocused } = this.state;

        return (
            <GooglePlacesAutocomplete
                placeholder="Para onde?"
                placeholderTextColor="#333"
                onPress={onLocationSelected}
                query={{
                    key: "AIzaSyApPWaCUPzIjWlPqdMUVZihynA06DDMVR8",
                    language: "pt"
                }}
                fetchDetails
                enablePoweredByContainer={false}
                textInputProps={{
                    autoCapitalize: "none",
                    autoCorrect: false,
                    onFocus: () => { this.setState({ searchFocused: true }) },
                    onBlur: () => { this.setState({ searchFocused: false }) },
                }}
                listViewDisplayed={searchFocused}
                styles={{
                    container: {
                        position: 'absolute',
                        top: Platform.select({ ios: 60, android: 30 }), //em pixeis
                        width: '100%'
                    },
                    textInputContainer: {
                        flex: 1,
                        backgroundColor: 'transparent',
                        height: 54,
                        marginHorizontal: 20,
                        borderTopWidth: 0,
                        borderBottomWidth: 0
                    },
                    textInput: {
                        height: 54,
                        margin: 0,
                        borderRadius: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginTop: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        elevation: 5,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowOffset: { x: 0, y: 0 },
                        shadowRadius: 15,
                        borderWidth: 1,
                        borderColor: '#DDD',
                        fontSize: 18
                    },
                    listView: {
                        borderWidth: 1,
                        borderColor: "#DDD",
                        backgroundColor: "#FFF",
                        marginHorizontal: 20,
                        elevation: 5,
                        shadowColor: "#000",
                        shadowOpacity: 0.1,
                        shadowOffset: { x: 0, y: 0 },
                        shadowRadius: 15,
                        marginTop: 10
                    },
                    description: {
                        fontSize: 16
                    },
                    row: {
                        padding: 20,
                        height: 58
                    }
                }}
            />
        );
    }
}