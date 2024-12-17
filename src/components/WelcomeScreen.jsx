// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center space-y-6 text-[var(--color-cream)]">
      <h1 className="text-4xl font-['Alex_Brush'] ">Secret Santa</h1>
      <p className="text-lg ">
        Bienvenue dans l'application Secret Santa ! Organisez facilement votre
        échange de cadeaux entre amis ou collègues.
      </p>
      <button onClick={onStart} className="button text-lg px-8 py-2 font-['Tinos'] bg-[var(--color-red)] rounded-full text-[var(--color-cream)]">
        Commencer
      </button>
    </div>
  );
}
