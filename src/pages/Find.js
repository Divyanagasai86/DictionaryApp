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
import './Find.css';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { heart, personCircleOutline, search, statsChart, arrowBack,bookOutline } from 'ionicons/icons';
const Find = () => {
    const [word,setWord] = useState("");
    const history = useHistory()

    const searchInput = (e) => {
          history.push('/Definition')
          setWord("");
    }
    return (
        <IonPage>
            <IonToolbar color="dark">
                <IonButton slot="start" fill="clear" routerLink="/Dashboard">
                    <IonIcon
                        icon={arrowBack}
                        style={{ float: "right", fontSize: "20px" }}
                        color="white">
                    </IonIcon>
                </IonButton>
                <IonText className="ion-padding" color="white">Search</IonText>
            </IonToolbar>
            <IonContent fullscreen className="content-page">
                <IonGrid className="dash-grid ">
                    <IonRow className="search_img">
                        <IonLabel className="book_img"> Search for a word in the English language</IonLabel>
                        <IonText className="search_text">This app will give you word meaninigs, phonetics, origin and also an audio clip so you can hear what it sounds like.</IonText>
                    </IonRow>
                    <IonRow className="search_input">
                        <IonCol size="9">
                        <IonInput className="logininput" type="search" value={word}
                        onIonChange={ e => setWord(e.target.value) }
                            placeholder="Search your Word">
                    </IonInput>
                        </IonCol>
                        <IonCol size="2">
                        <IonButton className="dash-btn" 
                          onClick={searchInput}
                           value={ word } >
                            Search
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
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

export default Find;