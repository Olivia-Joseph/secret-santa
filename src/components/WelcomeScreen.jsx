// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className=" w-full h-screen px-2 py-4  text-center space-y-6 text-cream flex flex-col justify-between items-center">
      <div className="flex justify-between w-full">
      <img src="./holly_deco.svg" alt="" />
      <img src="./holly_deco.svg" alt="" className="transform scale-x-[-1]" />
      </div>

      <div className="relative">
        <h1 className="text-5xl font-heading absolute top-11 left-17 -rotate-12">Secret</h1>
        <img src="./Santa.svg" alt="" />
        <button onClick={onStart} className="button text-lg px-8 py-2 font-body font-bold bg-red rounded-full text-cream">
        COMMENCER
      </button>
      </div>
      

      
      
      <div className="flex justify-between w-full">
      <img src="./holly_deco.svg" alt=""  className="transform scale-y-[-1]"/>
      <img src="./holly_deco.svg" alt=""  className="transform scale-y-[-1] transform scale-x-[-1]"/>
      </div>
    </div>
  );
}
