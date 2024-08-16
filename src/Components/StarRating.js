import React, { useState } from 'react';
import { Box, Icon, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const StarRating = ({ rating, onRatingChange }) => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);
  const handleClick = (index) => onRatingChange(index + 1);

  return (
    <Box display="flex" alignItems="center">
      {Array(5).fill(null).map((_, index) => (
        <Icon
          key={index}
          as={StarIcon}
          color={(hovered !== null ? hovered : rating) > index ? 'yellow.400' : 'yellow.400'}
          boxSize={5}
          cursor="pointer"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          ml={1}
        />
      ))}
      
    </Box>
  );
};

export default StarRating;
