import React, { useState } from 'react';
import avatar from "../public/avatar.png"
import Profile from './Profile';
import PortfolioIA from './PortfolioIA';
import PortfolioWeb from './PortfolioWeb';
import PortfolioVG from './PortfolioVG';

const TabbedInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile'); // Set the default active tab

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };


  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul className="px-3 flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
        {tabs.map((tab) => (
          <li key={tab.id} className="mr-2" role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === tab.id
                  ? 'bg-palette-blue text-white'
                  : 'hover:text-gray-600 text-white bg-palette-blue-100 hover:border-gray-300 dark:text-white dark:hover:text-gray-300 dark:bg-slate-600 dark:hover:bg-gray-500'
              }`}
              id={`${tab.id}-tab`}
              data-tabs-target={`#${tab.id}`}
              type="button"
              role="tab"
              aria-controls={tab.id}
              aria-selected={activeTab === tab.id}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div id="default-tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${
              activeTab === tab.id ? 'block' : 'hidden'
            } p-4 rounded-lg bg-palette-light dark:bg-gray-800`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            <div className="overflow-y-auto" style={{ maxHeight: '70vh'}}> {/* Ajustez la hauteur selon votre besoin */}
          {/* Votre contenu à l'intérieur du tab */}
          <div className="text-gray-500 dark:text-gray-400">{tab.content}</div>
        </div>
        </div>
        ))}
      </div>
    </div>
  );
};




const tabs = [
  {
    id: 'profile',
    label: 'Profile',
    content: <Profile avatar={avatar} />,
  },
  {
    id: 'portfolioIA',
    label: 'Portfolio IA',
    content: <PortfolioIA />,
  },
  {
    id: 'portfolioWebDev',
    label: 'Portfolio Web',
    content: <PortfolioWeb />
  },
  {
    id: 'portfolioVideoGames',
    label: 'Portfolio 🎮',
    content: <PortfolioVG />,      
  },
  {
    id: 'Stats',
    label: 'Stats 🏃',
    content: (
      <div className='text-center text-5xl'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      Work in progress 🛠
      {/* <StravaApi /> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
    )
  },
  
];


export default TabbedInterface;
