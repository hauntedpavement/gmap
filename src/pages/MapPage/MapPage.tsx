import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';
import MapComponent from '../../components/MapComponent/MapComponent';


class MapPage extends Component {
    state = {
        //js curly brackes, json, objects colon with space, array []
        defaultCenter: {lat: 43, lng: -87},
        defaultZoom: 13,

    };

    render() {

        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonMenuButton autoHide={true} menu="main" />
                        </IonButtons>
                        <IonTitle>Map</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <MapComponent
                        //for the div tags, JSX insertion, do not have a space between the {} and <>
                        //also, for attributes, eg style, double curly bracks (string interpolations in angular 
                        //the first set of curly bracekts denotes that it will be a JS expression, the second one is because we are passing a JSON value to

                        //backticks signify to just pass through the text, security to stop scripting attacks
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyA8VvDgXYmq08MWb_YibIo7zccmtRQSLOs&libraries=places`}
                        //css values are always strings, so 100% in quotations, this is the JS notation of JS
                        //hyphenated CSS properties do not work as JSON notation, use camelcaase, however many words combined into one, camel case word min-width becomes minWidth 
                        loadingElement={<div style={{height: "100%"}}/>}
                        containerElement={<div style={{height: "100%"}}/>}
                        mapElement={<div style={{height: "100%"}}/>}
                        center={this.state.defaultCenter}
                        zoom={this.state.defaultZoom}
                    />
                </IonContent>
            </IonPage>
        );
    }
}


export default MapPage;