import React, { Component } from 'react';

//google maps react package
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

class MapComponent extends Component<any,any> {
    state = {};

    render() {

        console.log(this.props);
        //array destructuring, is like getting this.props and this.center but doing it in class based component
        // this is done under the assumption that this will have a center and zoom passed to it
        const { center, zoom } = this.props

        return (
            <GoogleMap defaultCenter={center} defaultZoom={zoom} defaultClickableIcons={false} defaultOptions={{disableDefaultUI: true}} />
        );
    }
}


export default withScriptjs(withGoogleMap(MapComponent));