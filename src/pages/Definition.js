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
   
} from "@ionic/react";
import './Definition.css';
import {useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { heart, personCircleOutline, search, statsChart, caretForwardCircleOutline, arrowBack, bookOutline } from 'ionicons/icons';
const Definition = () => {
    const {word} = useParams();
    const history = useHistory();
    
    useEffect(() => {
        const fetchDefinition = async () => {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        console.log(response.data);
    }
    fetchDefinition();
    }, [])
    
    return (
        <IonPage>
            <IonToolbar color="dark">
                <IonButton slot="start" fill="clear" routerLink="/Find">
                    <IonIcon
                        icon={arrowBack}
                        style={{ float: "right", fontSize: "20px" }}
                        color="white">
                    </IonIcon>
                </IonButton>
                <IonText className="ion-padding" color="white">Definition</IonText>
                <IonButton slot="end" fill="clear" >
                    <IonIcon
                        icon={heart}
                        style={{ float: "right", fontSize: "20px" }}
                        color="white">
                    </IonIcon>
                </IonButton>

            </IonToolbar>
            <IonContent fullscreen className="content-page">
                <IonGrid className="dash-grid ">
                    <IonCard className="cardcontent ion-margin">
                        <IonRow className="def_con ">
                           <IonCol>
                           <IonText  color="white" className="def_text">{word}</IonText>
                           </IonCol>
                           <IonCol><IonButton fill="clear">
                                <IonIcon
                                    icon={caretForwardCircleOutline}
                                    style={{ float: "right", fontSize: "20px" }}
                                     className="play-icon">
                                </IonIcon>
                            </IonButton></IonCol>
                        </IonRow>
                    </IonCard>
                    
                  
                </IonGrid>
            </IonContent>
            <IonTabBar slot="bottom" color="dark">
                <IonTabButton tab="dashboard" href="/dashboard" className="icon-color">
                    <IonIcon icon={statsChart} />
                </IonTabButton>
                <IonTabButton tab="search" href="/find" className="icon-color">
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

export default Definition;