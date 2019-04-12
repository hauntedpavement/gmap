import React, { Component } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';


class Menu extends Component {
    state = {};

    render() {

        return (
            <IonMenu contentId="main" menuId="main" side="start">
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent padding>Menu Works</IonContent>
            </IonMenu>
        );

    }
}


export default Menu;