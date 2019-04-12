import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react';


class Tab2 extends Component {
    state = {};

    render() {

        return(
            <IonPage>
                <IonHeader>
                    <IonToolbar color="primary">
                        <IonButtons slot="start">
                            <IonMenuButton autoHide={true} menu="main" />
                        </IonButtons>
                        <IonTitle>Tab2</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent padding>
                tab2 page workrs
                </IonContent>
            </IonPage>
        );
    }
}


export default Tab2;