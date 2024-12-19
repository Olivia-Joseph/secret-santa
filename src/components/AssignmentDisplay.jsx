import { useState } from "react";
import { motion } from "framer-motion";

export function AssignmentDisplay({ assignments }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWaitingForNext, setIsWaitingForNext] = useState(true);

  const handleNextPerson = () => {
    setIsWaitingForNext(false);
  };

  const prepareNextPerson = () => {
    if (currentIndex < assignments.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsWaitingForNext(true);
    } else {
      setCurrentIndex(0); // Reset for a new round if needed
      setIsWaitingForNext(true);
    }
  };

  return (
    <div className="space-y-4 text-center">
      {isWaitingForNext ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2 bg-cream p-4 rounded-lg shadow-md"
        >
          <p className="text-lg text-bg">
            🎅 Passe le téléphone à <br /> <span className="font-bold">{assignments[currentIndex].giver}</span> 🎄
          </p>
          <button
            onClick={handleNextPerson}
            className="button w-64 leading-5 text-lg px-4 py-2 font-body bg-bg rounded-full text-gold m-2 uppercase"
          >
            Ho Ho Ho! C'est Fait!
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="border p-4 rounded shadow-md bg-green text-cream border-gold w-64"
          >
            <p className="text-lg ">
              🎁 <span className="font-bold">{assignments[currentIndex].giver}</span>,<br /> tu offres un beau cadeau à <br /> {" "}
              <span className="font-bold">{assignments[currentIndex].receiver}</span>! 🎉
            </p>
          </motion.div>
          <button
            onClick={prepareNextPerson}
            className="button w-56 leading-5 text-lg px-4 py-2 font-body bg-gold rounded-full text-bg uppercase"
          >
            Prochain Lutin 🎄
          </button>
        </motion.div>
      )}
    </div>
  );
}


