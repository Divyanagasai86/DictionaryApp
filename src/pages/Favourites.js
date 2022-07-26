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
    IonAvatar, IonImg, IonInput
} from "@ionic/react";
import './Fav.css';
import { heart, personCircleOutline, search, statsChart, arrowBack,bookOutline } from 'ionicons/icons';
const Favourites = () => {
    return(
      <IonPage>
        <IonToolbar color="dark">
                <IonButton slot="start" fill="clear" routerLink="/Definition">
                    <IonIcon
                        icon={arrowBack}
                        style={{ float: "right", fontSize: "20px" }}
                        color="white">
                    </IonIcon>
                </IonButton>
                <IonText className="ion-padding" color="white">Favourites</IonText>
            </IonToolbar>
            <IonContent>

            </IonContent>
            <IonTabBar slot="bottom" color="dark">
                <IonTabButton tab="dashboard" href="/dashboard" className="icon-color">
                    <IonIcon icon={statsChart} />
                </IonTabButton>
                <IonTabButton tab="search" href="/find"  className="icon-color">
                    <IonIcon icon={search} />
                </IonTabButton>
                <IonTabButton tab="Definition" href="/definition" className="icon-color" >
                    <IonIcon icon={bookOutline} />
                </IonTabButton>
                <IonTabButton tab="favourites" href="/favourites" className="icon-color" >
                    <IonIcon icon={heart} />
                </IonTabButton>
                <IonTabButton tab="profile" href="/profile" className="icon-color" >
                    <IonIcon icon={personCircleOutline} />
                </IonTabButton>
            </IonTabBar>
      </IonPage>
    )
}

export default Favourites;