import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';


class Tab3 extends Component {
    state = {};

    render() {

        return(
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonMenuButton autoHide={true} menu="main" />
                        </IonButtons>
                        <IonTitle>Tab3</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent padding>
                Tab3 page workrs
                </IonContent>
            </IonPage>
        );
    }
}


export default Tab3;