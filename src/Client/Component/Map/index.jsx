import React, {Component} from "react";
import { Map, Marker, GoogleApiWrapper} from "google-maps-react";
import PlacesAutocomplete, {geocodeByAddress, getLatLng,} from 'react-places-autocomplete';
import {Spinner} from "react-bootstrap";

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '' ,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            mapCenter: {
                lat:49.2827291,
                lng:-123.1207375
            }
        };

    }
    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    }

    render() {
        return (
            <>
                <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                })}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Chargement<Spinner animation="border" variant="info" /></div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    // inline style for demonstration purpose
                                    const style = suggestion.active
                                        ? { backgroundColor: '#000000', cursor: 'pointer' }
                                        : { backgroundColor: '#5ce1e6', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
                <Map
                    google={this.props.google}
                    initialCenter={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng,
                    }}
                    center={ {
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng,
                    } }
                >
                    <Marker onClick={this.onMarkerClick}
                            position={{
                                lat: this.state.mapCenter.lat,
                                lng: this.state.mapCenter.lng,
                            }
                            }
                    />
                </Map>
            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAk9QMxW7LuVReF-JfCdpIUUBg2BjrggJo'),
    libraries: ["places"]
})(MapContainer)