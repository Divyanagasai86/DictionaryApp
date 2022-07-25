import {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonRow,
    IonCol,
    IonLabel,
    IonTabButton,
    IonTabBar,
    IonButton,
    IonGrid,
    IonCard,
    IonText,
    useIonAlert,
    useIonRouter,
    IonAvatar, IonImg
} from "@ionic/react";
import { heart, personCircleOutline, search, statsChart, arrowBack } from 'ionicons/icons';
import { useState } from 'react';
import { UserAuth } from "../context/AuthContext";
import './profile.css';
const Profile = () => {
    const { googleUser } = UserAuth();
    const router = useIonRouter();

    // const backButton = () => {
    //     router.push("/Dashboard");
    // }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="dark">
                    <IonButton slot="start" fill="clear" routerLink="/Dashboard">
                        <IonIcon
                            icon={arrowBack}
                            style={{ float: "right", fontSize: "20px" }}
                            color="white">
                        </IonIcon>
                    </IonButton>
                    <IonText className="ion-padding" color="white">Profile</IonText>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="content-page ">
                <IonGrid className="dash-grid">
                    <IonCard className="card-content1">
                        <IonRow className="profile-heading ion-margin">
                            <IonLabel  >Welcome to User Profile</IonLabel>
                        </IonRow>

                        <IonRow className="avatar-img ion-margin">
                            <IonAvatar>
                                <IonImg src={googleUser.imageUrl} />
                            </IonAvatar>
                        </IonRow>

                        <IonRow className="google-email ion-margin">
                            <IonLabel>{googleUser.email}</IonLabel>
                        </IonRow>

                        <IonRow className="dash-btn1 ion-margin">
                            <IonButton className="dash-btn" routerLink="/Dashboard">Logout</IonButton>
                        </IonRow>
                    </IonCard>
                </IonGrid>
            </IonContent>
            <IonTabBar slot="bottom" color="dark">
                <IonTabButton tab="dashboard" href="/Dashboard" className="icon-color">
                    <IonIcon icon={statsChart} />
                </IonTabButton>
                <IonTabButton tab="search" className="icon-color">
                    <IonIcon icon={search} />
                </IonTabButton>
                <IonTabButton tab="favourites" className="icon-color" >
                    <IonIcon icon={heart} />
                </IonTabButton>
                <IonTabButton tab="profile" href="/profile" className="icon-color" >
                    <IonIcon icon={personCircleOutline} />
                </IonTabButton>
            </IonTabBar>
        </IonPage >
    )

}

export default Profile;