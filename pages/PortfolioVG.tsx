import React from 'react';
import Image from 'next/image';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { MdVideogameAsset } from 'react-icons/md';
import victeams from "../public/victeams.jpg"

const PortfolioVG: React.FC = () => {

  return (
    
   <div>  
     <div className="text-center  p-8 rounded-xl my-2 bg-palette-light dark:bg-gray-700">
      <h3 className='mb-8 text-3xl font-bold text-palette-blue dark:text-white'>
          Video Games Development
      </h3>
      
      <div className='flex flex-wrap justify-center gap-14 lg:gap-20'>
      <div className="w-64 overflow-hidden shadow-lg rounded-2xl h-90 mb-8 dark:bg-gray-600">
          <video src="ic06.mp4" autoPlay={true} loop muted className=""/>
                      <div className="relative w-full p-4 dark:bg-gray-600 bg-white">
                      <a href='https://github.com/louiselize/God_s_Savior' target="_blank" rel="noreferrer">
                          <button aria-label="Go to article" type="button" className="absolute w-12 h-12 text-white bg-gray-700 rounded-full right-8 -top-6">
                          <MdVideogameAsset width="20"  height="20" fill="currentColor" className="w-6 h-6 mx-auto text-white"/>
                          </button>
                        </a>
                        <p className="dark:text-white mb-2 text-xl font-medium text-gray-800">
                              God&apos;s Savior
                          </p>
                          <p className="text-xs dark:text-gray-300 text-gray-600">
                          Acquiring the skills and knowledge necessary to both design and implement a game, while also becoming proficient with Godot game engine.
                          </p>
                          <div className="flex flex-wrap items-center mt-6 justify-starts">
                              <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                   Godot
                              </div>
                              
                              <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-palette-green   rounded-2xl">
                                   RPG
                              </div>
                              <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-palette-green   rounded-2xl">
                                   ZeldaLike
                              </div>
                          </div>
                      </div>
        </div>

        <div className="w-64 overflow-hidden shadow-lg rounded-2xl h-90 mb-8 dark:bg-gray-600">
                  <Image alt=""  src={victeams} className="rounded-lg object-cover"  layout="responsive"/>
                      <div className="relative w-full p-4 dark:bg-gray-600 bg-white">
                      <a href='https://anr.fr/en/latest-news/read/news/virtual-reality-to-train-medical-experts-in-team-management-in-crisis-situations-the-anr-victeams-p/' target="_blank" rel="noreferrer">
                      <button aria-label="Go to article" type="button" className="absolute w-12 h-12 text-white bg-gray-700 rounded-full right-12 -top-7">
                          <HiMagnifyingGlass width="20"  height="20" fill="currentColor" className="w-6 h-6 mx-auto text-white"/>
                          </button>
                        </a>
                        <p className="dark:text-white mb-2 text-xl font-medium text-gray-800">
                              VICTEAMS VR Project
                          </p>
                          <p className="text-xs dark:text-gray-300 text-gray-600">
                          Implementing a new feature to medical professionals simulation in stressful and crisis situations. Create additional challenges by creating a size limit on the stock.
                          </p>
                          <div className="flex flex-wrap items-center mt-6 justify-starts">
                              <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                   SteamVR
                              </div>
                              <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                   Unity
                              </div>
                              <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                   CSharp
                              </div>
                          </div>
                      </div>
        </div>

        <div className="w-64 overflow-hidden shadow-lg rounded-2xl h-90 mb-8 dark:bg-gray-600">
            <video src="amalgames.mp4" autoPlay={true} loop muted className=""/>
                      <div className="relative w-full p-4 dark:bg-gray-600 bg-white">
                          <p className="dark:text-white mb-2 text-xl font-medium text-gray-800">
                              Amalgames
                          </p>
                          <p className="text-xs dark:text-gray-300 text-gray-600">
                          Acquiring the skills and knowledge necessary to both design and implement a game, while also becoming proficient with Unity game engine.
                          </p>
                          <div className="flex flex-wrap items-center mt-6 justify-starts">
                              <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                   Unity2D
                              </div>
                              <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                   CSharp
                              </div>
                              <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-palette-green   rounded-2xl">
                                   Plateformer
                              </div>
                          </div>
                      </div>
        </div>
      </div>

    </div>

    
    <br></br>
    </div>
    
  );
};

export default PortfolioVG;
