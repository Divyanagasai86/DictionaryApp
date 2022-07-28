import { IonCol, IonLabel, IonRow } from "@ionic/react";

export const NoFavourites = () => (

    <IonRow className="ion-text-center ion-justify-content-center ion-margin-top ion-padding-top">
        <IonCol size="10" className="ion-padding-top ion-margin-top">
            <IonLabel className="ion-padding-top ion-margin-top">
                <h2>You don't have any favourites yet!</h2>
                <p>Any time you see the heart icon, press it to add the related word to your favourites and quickly access it from here.</p>
                
            </IonLabel>
        </IonCol>
    </IonRow>
);