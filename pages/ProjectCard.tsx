import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaGithub, FaHeart } from 'react-icons/fa';
import TagList from './ProjectTagList';
import 'styles/Home.module.css';
import heartStyle from 'styles/Heart.module.css';

interface ProjectCardProps {
  imageSrc: StaticImageData;
  altText: string;
  projectTitle: string;
  description: string;
  githubLink: string;
  showGitHubButton: boolean;
  isFavorited: boolean;
  tags: string[];
  tagColors: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  altText,
  projectTitle,
  description,
  githubLink,
  showGitHubButton,
  isFavorited,
  tags,
  tagColors,
}) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div className={`w-52 overflow-hidden shadow-lg rounded-2xl h-90 mb-8 bg-palette-light-200 dark:bg-gray-600`}>
      <div className={`relative rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-300 dark:bg-gray-600`}>
        <Image
          src={imageSrc}
          alt={altText}
          className={`rounded-lg object-cover opacity-30  dark:opacity-30`}
          layout="responsive"
        />
        <div className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center`}>
          {showGitHubButton && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              <button
                aria-label="Go to GitHub repository"
                type="button"
                className={`w-12 h-12 dark:bg-gray-700 bg-palette-blue rounded-full hover:bg-palette-blue-100`}
              >
                <FaGithub width="20" height="20" fill="currentColor" className={`w-6 h-6 mx-auto text-white`} />
              </button>
            </a>
          )}
          <div className={`absolute top-4 right-4`}>
            {isFavorited && (
              <FaHeart
                className={`w-6 h-6 mx-auto ${isHovered ? { heartStyle } : ''}`}
                fill="lightcoral"
                title="One of my favorite projects"
              />
            )}
          </div>
          <p className={`mb-2 mt-2 dark:text-white text-palette-blue  text-xl font-medium`}>
            {projectTitle}
          </p>
          <p className={`text-xs text-palette-blue-100 dark:text-gray-200 `}>
            {description}
          </p>
        </div>
      </div>

      <TagList tags={tags} colors={tagColors} />
    </div>
  );
};

export default ProjectCard;
