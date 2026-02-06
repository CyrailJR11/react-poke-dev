import React, { useState } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    margin-left: 40px;
    margin-right: 40px;

    width: calc(100% - 80px);
    max-width: 900px;
    text-align: center;

    @media screen and (min-width: 420px) {
        margin-left: 75px;
        margin-right: 75px;
        width: calc(100% - 150px);
    }
    @media screen and (min-width: 900px) {
        margin-left: 120px;
        margin-right: 120px;
        width: calc(100% - 240px);
    }
    @media screen and (min-width: 1200px) {
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
`;

const InputBar = styled.input`
    min-width: 200px;
    width: 50%;
    height: 30px;
    border-radius: 20px;
    border: 1px solid grey;
    padding: 1px 10px;
`;

const TypesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    margin-top: 15px;
`;

const TypeButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 5px;
    border: 1px solid #aaa;
    cursor: pointer;
    text-transform: capitalize;
    background: ${({ active }) => (active ? "#ffcc00" : "#eee")};

    img {
        width: 20px;
        height: 20px;
    }
`;

const ALL_TYPES = [
    "fire", "water", "grass", "electric", "psychic",
    "ice", "dragon", "dark", "fairy", "normal",
    "fighting", "flying", "poison", "ground",
    "rock", "bug", "ghost", "steel"
];

// Mapeja cada tipus amb la seva icona
const TYPE_ICONS = {
    fire: "/assets/types/fire.png",
    water: "/assets/types/water.png",
    grass: "/assets/types/grass.png",
    electric: "/assets/types/electric.png",
    psychic: "/assets/types/psychic.png",
    ice: "/assets/types/ice.png",
    dragon: "/assets/types/dragon.png",
    dark: "/assets/types/dark.png",
    fairy: "/assets/types/fairy.png",
    normal: "/assets/types/normal.png",
    fighting: "/assets/types/fighting.png",
    flying: "/assets/types/flying.png",
    poison: "/assets/types/poison.png",
    ground: "/assets/types/ground.png",
    rock: "/assets/types/rock.png",
    bug: "/assets/types/bug.png",
    ghost: "/assets/types/ghost.png",
    steel: "/assets/types/steel.png",
};

function SearchFilter(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTypes, setSelectedTypes] = useState([]);

    const updateTextSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        props.onNameChange(value);
    };

    const toggleType = (type) => {
        const updatedTypes =
            selectedTypes.includes(type)
                ? selectedTypes.filter(t => t !== type)
                : [...selectedTypes, type];

        setSelectedTypes(updatedTypes);
        props.onTypesChange(updatedTypes);
    };

    return (
        <Wrapper>
            <InputBar
                placeholder="Search by name"
                type="text"
                value={searchTerm}
                onChange={updateTextSearch}
            />

            <TypesWrapper>
                {ALL_TYPES.filter(type => props.types.includes(type)).map(type => (
                    <TypeButton
                        key={type}
                        active={selectedTypes.includes(type)}
                        onClick={() => toggleType(type)}
                    >
                        <img src={TYPE_ICONS[type]} alt={type} />
                        {type}
                    </TypeButton>
                ))}
            </TypesWrapper>
        </Wrapper>
    );
}

SearchFilter.propTypes = {
    onNameChange: PropTypes.func.isRequired,
    onTypesChange: PropTypes.func.isRequired,
};

export default SearchFilter;