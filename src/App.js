import { Routes, Route, Navigate } from 'react-router-dom'

import { PokemonList } from './components/pokemon/list'
import PokemonDetail from './components/pokemon/detail'
import { ItemList } from './components/items/list'
import ItemDetail from './components/items/detail'

function App() {
  return (
    <div style={{ paddingBottom: '30px', paddingTop: '30px' }}>
      <Routes>
        <Route path="/" element={<Navigate to="/pokemon" replace />} />
        <Route index path="pokemon" element={<PokemonList favs={false} />} />
        <Route index path="favourites" element={<PokemonList favs={true} />} />
        <Route index path="berry" />
        <Route index path="items" element={<ItemList />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
        <Route path="/item/:name" element={<ItemDetail />} />
        <Route path="*" element={<Navigate to="/pokemon" replace />} />
      </Routes>
    </div>
  )
}

export default App
