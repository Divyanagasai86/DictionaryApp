import { IonContent, IonPage, IonRow, IonGrid, IonTabButton, IonIcon, IonTabBar,IonText, IonCard, IonCardContent, IonCardTitle, IonCol, IonHeader,
     IonToolbar,IonCardSubtitle, IonTitle, IonButton } from "@ionic/react";
import './Dashboard.css';
import { bookOutline, heart, personCircleOutline, search, statsChart,arrowBack} from 'ionicons/icons';

const Dashboard = () => {

    return (
        <IonPage>
                <IonToolbar color="dark">
                    <IonButton slot="start" fill="clear" routerLink="/Login">
                        <IonIcon
                            icon={arrowBack}
                            style={{ float: "right", fontSize: "20px" }}
                            color="white">
                        </IonIcon>
                    </IonButton>
                    <IonText className="ion-padding" color="white">Dashboard</IonText>
                </IonToolbar>
            <IonContent fullscreen className="content-page">
                <IonGrid className="dash-grid ">
                    <IonRow>
                        <IonCol>
                            <IonCard className="card-content">
                                <IonCardContent >
                                    <IonIcon icon={bookOutline} className="dash-img" style={{ fontSize: "2rem" }} />
                                    <IonCardTitle className="dash-title1">English Dictionary App</IonCardTitle>
                                    <p>Based on the English language</p>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow >
                        <IonCol size="12">
                            <IonCard className="card-content">
                                <IonCardContent >
                                    <IonCardTitle className="dash-title1">Did you know?</IonCardTitle>
                                    <p>There are 171, 146 words in the English language!</p>
                                    <IonButton expand="block" className=" dash-btn ion-margin-top">Search now &rarr;</IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow >
                        <IonCol size="6">
                            <IonCard className="card-content">
                                <IonCardContent className="ion-text-center">
                                    <IonIcon icon={heart} className="dash-img" />
                                    <IonCardTitle color="white">0</IonCardTitle>
                                    <IonCardSubtitle>Favourites</IonCardSubtitle>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size="6">
                            <IonCard className="card-content">
                                <IonCardContent className="ion-text-center">
                                    <IonIcon icon={search}className="dash-img" />
                                    <IonCardTitle color="white">0</IonCardTitle>
                                    <IonCardSubtitle>Searches</IonCardSubtitle>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>


                </IonGrid>
            </IonContent>
            <IonTabBar slot="bottom" color="dark">
                <IonTabButton tab="dashboard" href="/dashboard" className="icon-color">
                    <IonIcon icon={statsChart} />
                </IonTabButton>
                <IonTabButton tab="search" className="icon-color">
                    <IonIcon icon={search} />
                </IonTabButton>
                <IonTabButton tab="favourites" className="icon-color" >
                    <IonIcon icon={heart} />
                </IonTabButton>
                <IonTabButton tab="profile" href="/profile" className="icon-color" >
                    <IonIcon  icon={personCircleOutline} />
                </IonTabButton>
            </IonTabBar>
        </IonPage>
    )

}
export default Dashboard;