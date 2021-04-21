import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/hackerNewsApi';
import { Story } from '../components/Story';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {

      getStoryIds().then(data => setStoryIds(data));
  }, []);

    return (
        <>
            <h1> HackerNews Top Stories</h1>
            {storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)
            }
        </>
    );
}