import React from 'react';

interface TagListProps {
  tags: string[];
  colors: string[]; 
}

const TagList: React.FC<TagListProps> = ({ tags, colors }) => {
  return (
    <div className="flex flex-wrap items-center my-4 gap-1 justify-center">
      {tags.map((tag, index) => (
        <div
          key={tag}
          className={`text-xs mb- py-1.5 px-4 text-gray-100 bg-opacity-60 ${colors[index]} dark:${colors[index]} dark:text-gray-100 rounded-2xl`}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default TagList;