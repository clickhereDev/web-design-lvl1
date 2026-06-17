import { createContext, useContext, useState, useCallback } from 'react';

const NavigationContext = createContext(undefined);

export function NavigationProvider({ children }) {
  const [activeTopicId, setActiveTopicId] = useState(null);
  const [activeTrack, setActiveTrack] = useState('html');

  const selectTopic = useCallback((topicId) => {
    setActiveTopicId(topicId);
    setActiveTrack(topicId && topicId.startsWith('css-') ? 'css' : 'html');
  }, []);

  const selectTrack = useCallback((track) => {
    setActiveTrack(track);
    setActiveTopicId(null);
  }, []);

  return (
    <NavigationContext.Provider
      value={{ activeTopicId, activeTrack, selectTopic, selectTrack }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) throw new Error('useNavigation must be used within NavigationProvider');
  return ctx;
}
