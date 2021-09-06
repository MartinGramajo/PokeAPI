import React from 'react';

const FavoriteContext = React.createContext({
    favoritePokemons: [], 
})

export const FavoriteProvider = FavoriteContext.Provider; 