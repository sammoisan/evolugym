import './SubscriptionCard.css'

function SubscriptionCard(props) {

  const iconEvaluation = renderIcon(props.evaluation);
  const iconProgram = renderIcon(props.program);
  const iconRevision = renderIcon(props.revision);
  const iconAccessAll = renderIcon(props.accessAll);


  return (
    <div className='border bg-zinc-900 text-white rounded-xl shadow-lg text-center px-4 py-12 w-full hover:scale-105 hover:border-2 hover:border-title transition duration-300 md:px-10 md:w-96'>
      <span className='block text-4xl font-bold text-title'>{props.subscriptionLength}</span>
      <span className='block text-2xl'>{props.price}$</span>
      <ul className='text-xs text-left space-y-1 pt-4 md:text-sm'>

        <li>
          {iconEvaluation}
          <span>Évaluation de départ</span>
        </li>

        <li>
          {iconProgram}
          <span>Programme d'entraînement personnalisé</span>
        </li>

        <li>
          {iconAccessAll}
          <span>Accès à l'ensemble des sections d'appareils d'entraînement</span>
        </li>

        <li>
          {iconRevision}
          <span>Révision de votre programme aux 8 semaines.</span>
        </li>
       
      </ul>
    </div>
  );
}

function renderIcon(isInclude) {
  if (isInclude) {
    return <i class="fa-solid fa-check text-green-600 pr-1"></i>
  }
  else {
    return <i class="fa-solid fa-xmark text-red-600 pr-1"></i>
  }
}

export default SubscriptionCard;