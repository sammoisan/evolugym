import './App.css';

import SubscriptionCard from './components/SubscriptionCard'

function App() {
  return (
    <div>

      <div className='relative h-screen flex flex-col justify-center overflow-hidden'>

        <div className='bg-image'></div>

        <div className='flex flex-col items-center justify-center text-center uppercase px-4 '>
          <p>
            <span className='block text-title text-6xl font-title md:text-9xl lg:text-10xl xl:text-11xl'>EvoluGym</span>
            <span className='block text-white text-lg tracking-widest font-black md:text-3xl lg:text-4xl xl:text-5xl'> On entrâine des résultats</span>
          </p>
        </div>

      </div>

      <section className='bg-black text-white' >

        <div data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="500">
          <h1 className='section-title'>À propos</h1>

          <p>Depuis son ouverture en septembre 2000, Évolugym offre à sa clientèle un service professionnel et personnalisé. Le co-propriétaire, Germain Bédard, est diplômé de l’Université Laval en kinésiologie et œuvre dans le domaine depuis plus de trente ans. Il s'est entouré d'une équipe d'entraîneurs dynamiques.</p>

          <br />

          <p>Évolugym propose un concept unique avec sa formule "Tout inclus" (voir l'onglet "Abonnements").</p>

          <br />

          <p>Le plateau d'entraînement, d'une superficie de 5000 pi carrés, est entièrement fenêtré. Plus de 80 postes d'entraînement y sont mis à votre disposition.</p>

          <br />

          <p> La clientèle est composée de "Monsieur et Madame Tout-le-monde". L'ambiance est amicale et décontractée. La propreté est aussi l'une de nos priorités.</p>

          <br />

          <p>Quels que soient vos objectifs, Évolugym saura répondre à vos attentes. Nous vous invitons donc à venir le constater en venant nous rencontrer.</p>
        </div>

      </section>

      <section>

        <div data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="500">
          <h1 className='section-title'>Abonnements</h1>

          <p className='text-center'>Lorsque vous vous abonnez chez Évolugym , vous n'avez que le prix de votre abonnement à  débourser, il n'y a aucuns frais cachés.</p>

          <div className='flex flex-col justify-center items-center space-y-8 pt-10 xl:flex-row xl:space-y-0 xl:flex-wrap xl:gap-10'>

            <SubscriptionCard subscriptionLength="4 Mois" price="200" evaluation={true} program={true} accessAll={false} revision={false} />

            <SubscriptionCard subscriptionLength="6 Mois" price="270" evaluation={true} program={true} accessAll={true} revision={false} />

            <SubscriptionCard subscriptionLength="12 Mois" price="480" evaluation={true} program={true} accessAll={true} revision={true} />

          </div>

          <p className='text-center pt-5'>Aucuns frais d'adhésion.</p>
        </div>

      </section>

      <div className='relative'>
        <div className='top'></div>
        <img className='gym-bg grayscale' src='/images/004.jpg' alt=''></img>
        <div className='bottom'></div>
      </div>

      <section className='bg-black text-white'>

        <div data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="500">
          <h1 className='section-title'>Services</h1>

          <div className='flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10'>

            <div className='px-4 py-10 text-center md:w-1/2'>
              <i class="fa-regular fa-calendar-days text-4xl pb-2"></i>
              <span className='block text-center text-xl text-title font-bold py-2'>Aucune réservation</span>
              <p>Section d'appareils cardio-vasculaire "LifeFitness" sans réservation.</p>
            </div>

            <div className='px-4 py-10 text-center md:w-1/2'>
              <i class="fa-solid fa-utensils text-4xl pb-2"></i>
              <span className='block text-center text-xl text-title font-bold py-2'>Nutrition</span>
              <p>Vente et conseils sur la prise de suppléments nutritionnels ainsi qu'un bar santé à votre disposition.</p>
            </div>

            <div className='px-4 py-10 text-center md:w-1/2'>
              <i class="fa-solid fa-dumbbell text-4xl pb-2"></i>
              <span className='block text-center text-xl text-title font-bold py-2'>Gamme complète</span>
              <p>Gamme complète d'appareils de musculation sélectifs "LifeFitness" et de musculation à plaques "Hammer Strength".</p>
            </div>

            <div className='px-4 py-10 text-center md:w-1/2'>
              <i class="fa-solid fa-heart text-4xl pb-2"></i>
              <span className='block text-center text-xl text-title font-bold py-2'>Programmes d'entraînement</span>
              <p>Différents programmes d'entraînement disponibles : général, spécifique, adapté ou rapide.</p>
            </div>

          </div>

          <p className='pt-10 text-center'>Pas assez de temps pour vous entraîner? Nos tout nouveaux appareils sélectifs permettent d'établir un programme rapide, complet et efficace. Demandez-le!</p>

          <span className='block text-center mx-auto border-2 font-bold tracking-wider px-10 py-5 mt-10 hover:text-black hover:bg-white transition duration-300 md:w-60'>Contactez-nous!</span>
        </div>

      </section>

      <section>

        <div data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="500">
          <h1 className='section-title'>Horaire</h1>

          <div className='flex flex-col space-y-10 justify-center md:flex-row md:space-y-0 md:space-x-10'>

            <div className='border-2 rounded-lg w-full shadow-md p-2 md:w-96'>

              <span className='block text-center font-bold pb-2'>Horaire régulier</span>

              <table className='table-auto w-full'>

                <tr>
                  <td>Lundi</td>
                  <td>7:00</td>
                  <td>21:00</td>
                </tr>

                <tr>
                  <td>Mardi</td>
                  <td>7:00</td>
                  <td>21:00</td>
                </tr>

                <tr>
                  <td>Mercredi</td>
                  <td>7:00</td>
                  <td>21:00</td>
                </tr>

                <tr>
                  <td>Jeudi</td>
                  <td>7:00</td>
                  <td>21:00</td>
                </tr>

                <tr>
                  <td>Vendredi</td>
                  <td>7:00</td>
                  <td>21:00</td>
                </tr>

                <tr>
                  <td>Samedi</td>
                  <td>7:00</td>
                  <td>17:00</td>
                </tr>

                <tr>
                  <td>Dimanche</td>
                  <td>7:00</td>
                  <td>17:00</td>
                </tr>
              </table>
            </div>

            <div className='border-2 rounded-lg w-full shadow-md p-2 md:w-96'>

              <span className='block text-center font-bold pb-2'>Horaire d'été de juin à août</span>

              <table className='table-auto w-full'>

                <tr>
                  <td>Lundi</td>
                  <td>7:00</td>
                  <td>21:00</td>
                </tr>

                <tr>
                  <td>Mardi</td>
                  <td>7:00</td>
                  <td>21:00</td>
                </tr>

                <tr>
                  <td>Mercredi</td>
                  <td>7:00</td>
                  <td>21:00</td>
                </tr>

                <tr>
                  <td>Jeudi</td>
                  <td>7:00</td>
                  <td>21:00</td>
                </tr>

                <tr>
                  <td>Vendredi</td>
                  <td>7:00</td>
                  <td>21:00</td>
                </tr>

                <tr>
                  <td>Samedi</td>
                  <td>7:00</td>
                  <td>21:00</td>
                </tr>

                <tr>
                  <td>Dimanche</td>
                  <td>7:00</td>
                  <td>14:00</td>
                </tr>
              </table>
            </div>

          </div>
        </div>



      </section>

      <div className='overflow-hidden relative -z-20 translate-y-12 md:translate-y-32 lg:translate-y-40 xl:translate-y-60'>
        <img src="/images/grunge.png" alt="" className='footer-grunge' />
      </div>

      <footer className='bg-black text-white flex flex-col'>

        <div className='flex flex-col  space-y-10 pb-10 lg:pb-20 lg:flex-row lg:space-y-0 lg:justify-between'>
          <div>
            <span className='footer-section-title'>Notre emplacement</span>
            <address>
              5121, boul. Chauveau O (angle Henri IV)
              Québec QC
            </address>
          </div>

          <div>
            <span className='footer-section-title'>Nous contacter</span>
            <span className='block'>418 877-7477</span>
            <span className='block'>info@evolugym.com</span>
          </div>

          <div>
            <span className='footer-section-title'>Suivez-nous</span>
            <i class="fa-brands fa-square-facebook text-4xl"></i>
          </div>
        </div>

        <span className='text-center text-xs opacity-40'>© 2023 – ÉvoluGym, tous droits réservés</span>

      </footer>

    </div>
  );
}

export default App;
