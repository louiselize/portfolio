import ProjectCard from './ProjectCard'; // Assuming you have a ProjectCard component
import React from 'react';
import chess from "../public/chessAI.png"
import vacuum from "../public/vaccum_robot.png"
import minesweeper from "../public/minesweeper.png"
import spotify from "../public/spotify.png"
import metropolIA from "../public/metropolIA.png"
import monnAI from "../public/monnAI.png"
import twitter from "../public/x.jpg"
// Assuming you have the ProjectCard component imported here

const PortfolioIA: React.FC = () => {
  
  return (
    <div className="text-center p-8 rounded-xl my-2 bg-palette-light dark:bg-gray-700">
      <h3 className='mb-2 text-3xl font-bold text-palette-blue dark:text-white'>
        Artificial Intelligence and Data Science
      </h3>
      
      <h5 className='mb-2 text-palette-blue-100 dark:text-bg-palette-blue500 font-semibold tracking-wide uppercase text-xl pt-7 pb-5'>
        Machine Learning
      </h5> 
      
      <div className='flex gap-14 lg:gap-20 text-center justify-center flex-wrap'>
        <ProjectCard
          imageSrc={spotify}
          altText="Spotify Image"
          projectTitle="Spotify Analysis"
          description="Classify songs into their respective genres"
          githubLink="https://github.com/louiselize/SpotifyDataAnalysis"
          showGitHubButton={true}
          isFavorited={true}
          tags={['Python', 'Classification', 'SupervisedLearning', 'NonSupervisedLearning']}
          tagColors={['bg-palette-blue', 'bg-palette-green', 'bg-palette-green', 'bg-palette-green']}
        />

        <ProjectCard
          imageSrc={twitter}
          altText="Twitter Image"
          projectTitle="Twitter Analysis"
          description="Forecast tweet influence using text information and user profile feature"
          githubLink="https://github.com/louiselize/TwitterAnalysis"
          showGitHubButton={true}
          isFavorited={false}
          tags={['Python', 'Prediction', 'NLP', 'WordEmbedding', 'Applied Research']}
          tagColors={['bg-palette-blue', 'bg-palette-green', 'bg-palette-green', 'bg-palette-green', 'bg-palette-green']}
        />

        <ProjectCard
          imageSrc={metropolIA}
          altText="metropolIA Image"
          projectTitle="IA Serious Game"
          description="Serious game designed to introduce high school students to ML"
          githubLink=""
          showGitHubButton={false}
          isFavorited={false}
          tags={['CSharp', 'Unity', 'Science Popularization', 'Machine Learning']}
          tagColors={['bg-palette-blue', 'bg-palette-blue', 'bg-palette-green', 'bg-palette-green']}
        />

        <ProjectCard
          imageSrc={monnAI}
          altText="monnAI Image"
          projectTitle="Currency Forecast"
          description="Predict the EUR/CAD exchange rate using machine learning techniques"
          githubLink=""
          showGitHubButton={false}
          isFavorited={false}
          tags={['Python', 'Time Series', 'Recurrent Neural Network', 'LSTM']}
          tagColors={['bg-palette-blue', 'bg-palette-green', 'bg-palette-green', 'bg-palette-green']}
        />
      </div>

      
      <h5 className='mb-2 text-palette-blue-100 dark:text-bg-palette-blue500 font-semibold tracking-wide uppercase text-xl pt-7 pb-5'>
        Intelligent Agent
      </h5> 
      
      <div className='flex flex-wrap justify-center gap-14 lg:gap-20'>
        <ProjectCard
          imageSrc={chess}
          altText="Chessboard Image"
          projectTitle="Chess AI"
          description="AI capable of playing chess"
          githubLink="https://github.com/louiselize/ChessAI"
          showGitHubButton={true}
          isFavorited={false}
          tags={['Java', 'MinMax', 'AlphaBeta']}
          tagColors={['bg-palette-blue', 'bg-palette-green', 'bg-palette-green']}
        />

        <ProjectCard
          imageSrc={vacuum}
          altText="Chessboard Image"
          projectTitle="Vaccum Cleaner AI"
          description="Cleaning robot in a castle"
          githubLink="https://github.com/louiselize/VacuumAI"
          showGitHubButton={true}
          isFavorited={false}
          tags={['CSharp', 'BDI', 'Non/Informed Search']}
          tagColors={['bg-palette-blue', 'bg-palette-green', 'bg-palette-green']}
        />

        <ProjectCard
          imageSrc={minesweeper}
          altText="Minesweeper Image"
          projectTitle="Minesweeper AI"
          description="IA able to play minesweeper"
          githubLink="https://github.com/louiselize/minesweeperAI"
          showGitHubButton={true}
          isFavorited={true}
          tags={['Python', 'SATSolver', 'LogicProgramming']}
          tagColors={['bg-palette-blue', 'bg-palette-green', 'bg-palette-green']}
        />
      </div>
    </div>
  );
};

export default PortfolioIA;

{/* <div className="container p-6 px-6 rounded-2xl bg-white dark:bg-gray-800">
        <div className="mb-2 text-center">
          <h5 className='mb-2 text-black dark:text-indigo-400 font-semibold tracking-wide uppercase text-xl pt-7 pb-5'>
              Value Added Features
          </h5> 
        </div>
        
<div className="flex flex-wrap mb-12 dark:text-white">
    <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3">
        <div className="flex items-center mb-6">
            <FaPlusSquare className='w-6 h-6 text-indigo-500'/>
            <div className="ml-4 text-xl">
              Metaheuristics
            </div>
        </div>
        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
          Exploration of Metaheuristic Algorithms: Genetic Algorithms, Simulated Annealing, Tabu Search, Hill Climbing, Ant Colony Optimization
        </p>
    </div>
    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r">
        <div className="flex items-center mb-6">
            <FaEye className='w-6 h-6 text-indigo-500'/>
            <div className="ml-4 text-xl">
                Computer Vision
            </div>
        </div>
        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
        Image manipulation and transformation, familiarization with Artificial vision and image processing modules : NumPy, OpenCV, scikit-image, scikit-learn, TensorFlow, Keras.
        </p>
    </div>
    <div className="w-full p-8 border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0">
        <div className="flex items-center mb-6">
            <GoGraph className='w-6 h-6 text-indigo-500'/>
            <div className="ml-4 text-xl">
                Statistic
            </div>
        </div>
        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
          Advanced statistics course covering : estimation, hypothesis testing, analysis of variance, linear regression, and confidence intervals.
        </p>
    </div>
    <div className="w-full p-8 border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0">
    <div className="flex items-center mb-6">
            <FaDatabase className='w-6 h-6 text-indigo-500'/>
            <div className="ml-4 text-xl">
                Database
            </div>
        </div>
        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
          Familiar with database conception and implementation with SQL, PostgreSQL, and PlantUML tools.
        </p>
    </div>
    <div className="w-full p-8 border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0">
        <div className="flex items-center mb-6">
            <FaTrophy className="w-6 h-6 text-indigo-500"/>
            <div className="ml-4 text-xl">
                AI Competition
            </div>
        </div>
        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
          Member of the UQAC AI competition team called OCIAN.
          Participation in AI Hackathon
        </p>
    </div>
    <div className="w-full p-8 md:w-1/2 lg:w-1/3">
        <div className="flex items-center mb-6">
            <FaGraduationCap className="w-6 h-6 text-indigo-500"/>
            <div className="ml-4 text-xl">
              University Tutor
            </div>
        </div>
        <p className="leading-loose text-gray-500 dark:text-gray-200 text-md">
          University student job : tutor students who faced difficulties in advanced statistics course.
        </p>
    </div>
</div>
          </div> */}
      
      