import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";

import PokemonList from "./components/pokemon/list";
import PokemonDetail from "./components/pokemon/detail";
import ItemList from "./components/items/list";
import ItemDetail from "./components/items/detail";

const AppWrapper = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
`;

function App() {

    return (
        <AppWrapper>
            <Routes>
                <Route index path="pokemon" element={<PokemonList favs={false}/>} />
                <Route index path="favourites" element={<PokemonList favs={true}/>} />
                <Route index path="items" element={<ItemList />} />
                <Route path="/pokemon/:name" element={<PokemonDetail />} />
                <Route path="/item/:name" element={<ItemDetail />} />
                <Route path="*" element={<Navigate to="pokemon" />} />
            </Routes>
        </AppWrapper>
    );
}

export default App;