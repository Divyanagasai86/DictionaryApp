import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabButton,
    IonTabBar,IonText,IonIcon,IonGrid,IonButton } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { useRef, useState } from 'react';
import { NoFavourites } from '../components/NoFavourites';
import { WordCard } from '../components/WordCard';
import { WordStore } from '../store';
import { getFavourites } from '../store/Selectors';
import './Fav.css';
import { heart, personCircleOutline, search, statsChart, arrowBack,bookOutline } from 'ionicons/icons';
const Favourites = () => {
    return(
      <IonPage>
        <IonToolbar color="dark">
                <IonButton slot="start" fill="clear" routerLink="/Find">
                    <IonIcon
                        icon={arrowBack}
                        style={{ float: "right", fontSize: "20px" }}
                        color="white">
                    </IonIcon>
                </IonButton>
                <IonText className="ion-padding" color="white">Favourites</IonText>
            </IonToolbar>
            <IonContent fullscreen className="content-page">
            <IonGrid className="dash-grid ">

            </IonGrid>
            </IonContent>
            <IonTabBar slot="bottom" color="dark">
                <IonTabButton tab="dashboard" href="/dashboard" className="icon-color">
                    <IonIcon icon={statsChart} />
                </IonTabButton>
                <IonTabButton tab="search" href="/find"  className="icon-color">
                    <IonIcon icon={search} />
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