import React from 'react';
import Image from 'next/image';
import olvid from "../public/olvid.jpg"
import resume from "../public/resume.png"
import simulut from "../public/simulut.png"
import { AiOutlineLink } from 'react-icons/ai';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const PortfolioWeb: React.FC = () => {

  return (
        
    <div className="text-center p-4 rounded-xl my-2 bg-palette-light dark:bg-gray-700">
        
        <h3 className='mb-8 text-3xl font-bold text-palette-blue dark:text-white'>
          Web Development
        </h3>
        <div className='flex flex-wrap items-baseline justify-center gap-14 lg:gap-20'>
          <div className="w-64 overflow-hidden shadow-lg rounded-2xl h-90 mb-8 dark:bg-gray-600">
                    <Image alt=""  src={resume} className="rounded-lg object-cover"  layout="responsive"/>
                        <div className="relative w-full p-4 dark:bg-gray-600 bg-white">
                        <a href='https://louiselize.github.io/  ' target="_blank" rel="noreferrer">
                        <button aria-label="Go to article" type="button" className="absolute w-12 h-12 text-white bg-gray-700 rounded-full right-12 -top-7">
                            <AiOutlineLink width="20"  height="20" fill="currentColor" className="w-6 h-6 mx-auto text-white"/>
                            </button>
                          </a>
                          <p className="dark:text-white mb-2 text-xl font-medium text-gray-800">
                                Resume Website
                            </p>
                            <p className="text-xs dark:text-gray-300 text-gray-600">
                            I took on this project as my first personal venture, with the goal of improving my skills and having fun along the way.
                            </p>
                            <div className="flex flex-wrap items-center mt-6 justify-starts">
                                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                      VueJS
                                </div>
                                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                      BootstrapVue
                                </div>
                                
                                <div className="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-amber-200 rounded-2xl">
                                      PersonalProject
                                </div>
                            </div>
                        </div>
          </div>
          <div className="w-96 overflow-hidden shadow-lg rounded-2xl h-90 mb-8 dark:bg-gray-600">
                    <Image alt=""  src={olvid} className="rounded-lg object-cover"  layout="responsive"/>
                        <div className="relative w-full p-4 dark:bg-gray-600 bg-white">
                        <a href='https://olvid.io/faq/olvid-management-console/' target="_blank" rel="noreferrer">
                        <button aria-label="Go to article" type="button" className="absolute w-12 h-12 text-white bg-gray-700 rounded-full right-12 -top-7">
                            <HiMagnifyingGlass width="20"  height="20" fill="currentColor" className="w-6 h-6 mx-auto text-white"/>
                            </button>
                          </a>
                          <p className="dark:text-white mb-2 text-xl font-medium text-gray-800">
                              Full Stack Developer Intern
                            </p>
                            <p className="text-xs dark:text-gray-300 text-gray-600">
                            <span className='text-gray-600 italic font-thin dark:text-gray-300'>  Sept. 2021 - Feb. 2022 </span>
                              <br></br><br></br>
                              <b>6-month</b> internship at <a href='https://olvid.io/en/' target="_blank" rel="noreferrer" className='text-blue-700 dark:text-blue-300'>Olvid</a>, french start-up specialized in providing highly secure messaging services. 
                              <br></br>
                              Creation of a web application for company admins. The app was designed to allow the administrators of Olvid&apos;s client companie to create and manage groups, add or remove workers, configure settings, restrict visibility, and revoke keys as needed.
                            </p>
                            <div className="flex flex-wrap items-center mt-6 justify-starts">
                                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                      VueJS
                                </div>
                                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                      Java
                                </div>
                                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                      BootsrapVue
                                </div>
                                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                      GitLab
                                </div>
                                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                      Liquibase
                                </div>
                                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                      Keycloak
                                </div>
                            </div>
                        </div>
          </div>
          <div className="w-64 overflow-hidden shadow-lg rounded-2xl h-90 mb-8 dark:bg-gray-600">
                    <Image alt=""  src={simulut} className="rounded-lg object-cover"  layout="responsive"/>
                        <div className="relative w-full p-4 dark:bg-gray-600 bg-white">
                        <a href='http://www.utc.fr/si28/ProjetsUpload/P2021_si28p003/index.html' target="_blank" rel="noreferrer">
                        <button aria-label="Go to article" type="button" className="absolute w-12 h-12 text-white bg-gray-700 rounded-full right-12 -top-7">
                            <AiOutlineLink width="20"  height="20" fill="currentColor" className="w-6 h-6 mx-auto text-white"/>
                            </button>
                          </a>
                            <p className="dark:text-white mb-2 text-xl font-medium text-gray-800">
                                Simul&apos;UT
                            </p>
                            <p className="text-xs dark:text-gray-300 text-gray-600">
                            Creating an interactive and multimedia project. 
                            Project within a <b>social sciences</b> framework rather than technical sciences.

                            </p>
                            <div className="flex flex-wrap items-center mt-6 justify-starts">
                                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                      Twine
                                </div>
                                <div className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-green-200 rounded-2xl">
                                      CSS
                                </div>
                                <div className="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-amber-200 rounded-2xl">
                                      SocialSciences
                                </div>
                            </div>
                        </div>
          </div>
        </div>

      </div>

  );
};

export default PortfolioWeb;
