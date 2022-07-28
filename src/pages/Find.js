import { IonButton, IonCol, IonContent, IonGrid, IonTabButton,IonIcon,IonText,IonTabBar, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { NoSearch } from '../components/NoSearch';
import { NoResultsWordCard, WordCard } from '../components/WordCard';
import { WordStore } from '../store';
import { searchWord } from '../utils';
import './Find.css';
import { useState } from 'react';
import { heart, personCircleOutline, search, statsChart, arrowBack, bookOutline } from 'ionicons/icons';
const Find = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState(false);
    const performSearch = async () => {

        const result = searchTerm !== "" ? await searchWord(searchTerm) : undefined;
        setTimeout(() => setSearchResult(result === undefined ? "none" : result), 250);
        WordStore.update(s => { s.searchCount++ });
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
                    <IonRow className="ion-align-items-center">
                        <IonCol size="9">
                            <IonSearchbar animated value={searchTerm} onIonChange={e => setSearchTerm(e.target.value)} />
                        </IonCol>

                        <IonCol size="1">
                            <IonButton className="dash-btn" onClick={performSearch}>Search</IonButton>
                        </IonCol>
                    </IonRow>

                    {(searchResult && searchResult !== "none") &&

                        <WordCard word={searchResult} />
                    }

                    {(searchResult && searchResult === "none") &&

                        <NoResultsWordCard word={searchResult} />
                    }

                    {!searchResult && <NoSearch />}
                </IonGrid>
            </IonContent>
            <IonTabBar slot="bottom" color="dark">
                <IonTabButton tab="dashboard" href="/dashboard" className="icon-color">
                    <IonIcon icon={statsChart} />
                </IonTabButton>
                <IonTabButton tab="search" href="/find" className="icon-color">
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

export default Find;