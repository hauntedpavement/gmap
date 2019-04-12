import React, { Component } from 'react';

import { Route, Redirect } from "react-router-dom";

import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import MapPage from '../MapPage/MapPage';
import Tab2 from '../Tab2/Tab2';
import Tab3 from '../Tab3/Tab3';


class Tabs extends Component {
    state = {};

    render() {

        return (
            <IonTabs>
                <IonRouterOutlet>
                    <Route path="/:tab(map)" component={MapPage} exact />
                    <Route path="/:tab(tab2)" component={Tab2} exact />
                    <Route path="/:tab(tab3)" component={Tab3} exact />
                    <Route path="/" render={() => <Redirect to="/map" />} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom" color="primary">
                    <IonTabButton tab="map" href="/map">
                        <IonIcon name="map" />
                        <IonLabel>Map</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/tab2">
                        <IonIcon name="apps" />
                        <IonLabel>Tab2</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/tab3">
                        <IonIcon name="aperture" />
                        <IonLabel>Tab3</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        );
    }
}


export default Tabs;