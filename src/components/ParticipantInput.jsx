// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className=" w-full text-center space-y-6 text-cream flex flex-col items-center">

      <div className="flex  border border-gold w-64 mt-6 rounded-full py-2 pl-4 pr-2">
        <input
          type="text"
          className="input flex-grow font-body text-gold "
          placeholder="Entrez un nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        />
        <button className="button flex text-bg font-bold text-3xl text-center justify-center bg-gold w-10 h-10 rounded-full" onClick={addParticipant}>
          +
        </button>
        
      </div>
      
      <ul className=" bg-green w-64 border border-gold rounded-xl flex flex-col justify-center items-center">
        {participants.map((name, index) => (
          <li key={index} className="flex flex-row justify-between items-center w-11/12  p-3 [&:not(:last-child)]:border-b">
            {name}
            <div className="space-x-2">
              <button
                className="flex text-bg font text-3xl text-center items-center justify-center bg-cream w-6 h-6 pb-1 rounded-full"
                onClick={() => onRemoveParticipant(index)}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>

    
  );
}
