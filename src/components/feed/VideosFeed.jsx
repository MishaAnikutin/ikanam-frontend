import React from 'react'
import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import VideoCard from '../video/video_card/VideoCard'
import HeadBar from './head_bar/HeadBar';

const VideosFeed = ({ videos, selectedCategory }) => {
  const [selectedTag, setSelectedTag] = useState('Математический анализ');

  return (
    <Box className="videos-container">
      <HeadBar 
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />

      <Typography variant='h4' fontWeight='bold' mb={2} className="videos-title">
        {selectedCategory}
      </Typography>
      
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((video) => <VideoCard key={video.id} video={video}/>)}
      </Stack>
      
    </Box>
  );
};

export default VideosFeed