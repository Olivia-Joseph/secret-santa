import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";

export default function App() {
  // Tableau des participants
  const [participants, setParticipants] = useState([]);
  // Tableau des assignments
  const [assignments, setAssignments] = useState([]);
  // Etat de l'application welcome | input | assignments
  const [currentScreen, setCurrentScreen] = useState("welcome");

  // Fonction pour ajouter un participant
  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  // Fonction pour supprimer un participant
  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  // Fonction pour distribuer les cadeaux
  const distributeGifts = () => {
    // S'il n'y a pas assez de participants, on affiche une alerte
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    // On mélange le tableau des participants
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    // On crée un nouveau tableau d'assignments
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    // On met à jour le state des assignments
    setAssignments(newAssignments);
    // On affiche l'écran des assignments
    setCurrentScreen("assignments");
  };

  // Fonction pour recommencer l'application
  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
    <div className="bg-bg min-h-screen">
      <div>
        
        {currentScreen === "welcome" && (
          <WelcomeScreen onStart={() => setCurrentScreen("input")} />
        )}
        
        {currentScreen === "input" && (
          <>
          <div className="w-full min-h-screen px-2 py-4 justify-between text-center space-y-6 text-cream flex flex-col items-center">
            <div className="flex justify-between w-full">
              <img src="./holly_deco.svg" alt="" />
              <img src="./holly_deco.svg" alt="" className="transform scale-x-[-1]" />
            </div>
            <h2 className="text-5xl text-center font-heading absolute w-3/4 top-20">
              Ajoutez les participants
            </h2>
            <ParticipantInput
              onAddParticipant={addParticipant}
              participants={participants}
              onRemoveParticipant={removeParticipant}
            />
            <div className="mt-6">
              <button className="button w-64 leading-5 text-lg px-8 py-2 font-body font-bold bg-red rounded-full text-cream uppercase" onClick={distributeGifts}>
                Distribuer les cadeaux
              </button>
            </div>
            <div className="flex justify-between w-full">
              <img src="./holly_deco.svg" alt=""  className="transform scale-y-[-1]"/>
              <img src="./holly_deco.svg" alt=""  className="transform scale-y-[-1] transform scale-x-[-1]"/>
            </div>
          </div>
          
          </>
        )}
        {currentScreen === "assignments" && (
          <>
          <div className="w-full min-h-screen px-2 py-4 justify-between text-center space-y-6 text-cream flex flex-col items-center">
              <div className="flex justify-between w-full mb-20">
                  <img src="./holly_deco.svg" alt="" />
                  <img src="./holly_deco.svg" alt="" className="transform scale-x-[-1]" />
                </div>
                <h2 className="text-5xl text-center font-heading absolute w-3/4 top-24">
                  Attributions des cadeaux
                </h2>
                <AssignmentDisplay assignments={assignments} />
                <div className="mt-6">
                  <button className="button w-64 leading-5 text-lg px-8 py-2 font-body font-bold bg-red rounded-full text-cream uppercase" onClick={resetApp}>
                    Recommencer
                  </button>
                </div>
                <div className="flex justify-between w-full">
                  <img src="./holly_deco.svg" alt=""  className="transform scale-y-[-1]"/>
                  <img src="./holly_deco.svg" alt=""  className="transform scale-y-[-1] transform scale-x-[-1]"/>
                </div>
          </div>
          
          </>
        )}
      </div>
    </div>
  );
}
