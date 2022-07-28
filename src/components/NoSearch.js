import { IonCol, IonLabel, IonRow,IonGrid } from "@ionic/react";

export const NoSearch = () => (
    <IonGrid>

    <IonRow className="ion-text-center ion-justify-content-center ion-margin-top">
        <IonCol>
        <IonLabel color="white">Search for a word in the English language</IonLabel>
        <IonLabel color="white">This app will give you word meaninigs, phonetics, origin and also an audio clip so you ca
                    n hear what it sounds like.</IonLabel> 
                    
        </IonCol>
            
    </IonRow>
    </IonGrid>
);