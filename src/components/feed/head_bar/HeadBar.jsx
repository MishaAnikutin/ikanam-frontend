import React from 'react';
import { Stack } from '@mui/material';
import { tags } from './tags'
import HeadBarElement from './HeadBarElement';
import './HeadBar.css'

const HeadBar = ({ selectedTag, setSelectedTag }) => {
  return (
    <Stack direction='row' className='headbar-list'>
        {tags.map((tag) => <HeadBarElement tag={tag} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />)}
    </Stack>
  )
}

export default HeadBar