import { IonBadge, IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonIcon, IonNote, IonRow, useIonModal } from "@ionic/react";
import { checkmarkCircleOutline, chevronForward, closeCircleOutline } from "ionicons/icons";
import WordModal from "./WordModal";
import './WordCard.css';

export const WordCard = ({ word, pageRef }) => {

    const closeModal = () => {

        hideModal();
    }

    const openModal = () => {

        showModal({
            presentingElement: pageRef.current,
            onDidDismiss: hideModal
        });
    }

    const [showModal, hideModal] = useIonModal(WordModal, {

        dismiss: closeModal,
        word
    });

    return (
        <IonRow>
            <IonCol size="10">
                <IonCard className="card-content">
                    <IonCardContent>
                        <IonCardTitle color="white">{word.word}</IonCardTitle>
                        <div className="ion-padding-bottom ion-padding-top">
                            {word.meanings && word.meanings.map((meaning, index) => {

                                return (
                                    <span key={index}>
                                        <IonBadge color="white">{meaning.partOfSpeech}</IonBadge>
                                        &nbsp;
                                    </span>
                                );
                            })}
                        </div>
                        <IonNote color="white">{word.origin}</IonNote>

                        <IonRow className="ion-padding-top ion-align-items-center ion-justify-content-center ion-text-center">
                            <IonCol size="4">
                                <IonCardTitle  color="white">{word.meanings.length}</IonCardTitle>
                                <IonCardSubtitle>meanings</IonCardSubtitle>
                            </IonCol>

                            <IonCol size="4">
                                <IonCardTitle color="white">{word.phonetics.length}</IonCardTitle>
                                <IonCardSubtitle>phonetics</IonCardSubtitle>
                            </IonCol>
                            <IonCol size="4">
                                <IonCardTitle>
                                    <IonIcon  color="white" icon={(word.phonetics[0] && word.phonetics[0].audio) ? checkmarkCircleOutline : closeCircleOutline} />
                                </IonCardTitle>
                                <IonCardSubtitle  color="white">audio</IonCardSubtitle>
                            </IonCol>
                        </IonRow>

                        <IonRow>
                            <IonCol size="12">
                                <IonButton className="view-btn" expand="block" onClick={openModal}>
                                    View&nbsp;<IonIcon icon={chevronForward} />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    );
}

export const NoResultsWordCard = ({ word, animatedClass }) => {

    return (
        <IonRow >
            <IonCol size="12">
                <IonCard  className="card-content">
                    <IonCardContent>
                        <IonCardTitle>Whoops...</IonCardTitle>
                        <div className="ion-padding-bottom ion-padding-top">
                            <IonBadge color="primary">no results</IonBadge>&nbsp;
                            <IonBadge color="primary">found</IonBadge>
                        </div>
                        <IonNote color="white">
                            No results have been found for your search criteria! Please try another word.
                        </IonNote>

                        <IonRow className="ion-padding-top ion-align-items-center ion-justify-content-center ion-text-center">
                            <IonCol size="4">
                                <IonCardTitle>0</IonCardTitle>
                                <IonCardSubtitle>meanings</IonCardSubtitle>
                            </IonCol>

                            <IonCol size="4">
                                <IonCardTitle>0</IonCardTitle>
                                <IonCardSubtitle>phonetics</IonCardSubtitle>
                            </IonCol>
                            <IonCol size="4">
                                <IonCardTitle>
                                    <IonIcon icon={closeCircleOutline} />
                                </IonCardTitle>
                                <IonCardSubtitle>audio</IonCardSubtitle>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    );
}