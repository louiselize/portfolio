import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => {
  return (
    <div>
      <h3 className="mt-2 text-4xl font-semibold leading-8 tracking-tight text-teal-500 sm:text-3xl dark:text-white">
        Artificial Intelligence and Data Science
      </h3>

      {/* Carrousel pour Intelligent Agent */}
      <h5 className="mb-2 text-black dark:text-teal-500 font-semibold tracking-wide uppercase text-xl pt-7 pb-5">
        Intelligent Agent
      </h5>
      <Carousel showArrows={true} infiniteLoop={true}>
        <div>
          {/* Votre contenu ici */}
        </div>
        <div>
          {/* Autre contenu pour la section Intelligent Agent */}
        </div>
        {/* Ajoutez d'autres diapositives si nécessaire */}
      </Carousel>

      {/* Carrousel pour Machine Learning */}
      <h5 className="mb-2 text-black dark:text-teal-500 font-semibold tracking-wide uppercase text-xl pt-7 pb-5">
        Machine Learning
      </h5>
      <Carousel showArrows={true} infiniteLoop={true}>
        <div>
          {/* Contenu pour la section Machine Learning */}
        </div>
        <div>
          {/* Autre contenu pour la section Machine Learning */}
        </div>
        {/* Ajoutez d'autres diapositives si nécessaire */}
      </Carousel>

      {/* Carrousel pour Value Added Features */}
      <h5 className="mb-2 text-black dark:text-indigo-400 font-semibold tracking-wide uppercase text-xl pt-7 pb-5">
        Value Added Features
      </h5>
      <Carousel showArrows={true} infiniteLoop={true}>
        <div>
          {/* Contenu pour la section Value Added Features */}
        </div>
        <div>
          {/* Autre contenu pour la section Value Added Features */}
        </div>
        {/* Ajoutez d'autres diapositives si nécessaire */}
      </Carousel>
    </div>
  );
};

export default App;
