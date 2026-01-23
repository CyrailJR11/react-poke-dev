import { useNavigate } from "react-router-dom";
import { getItems } from "../../../utils/pokemonAPI";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../../utils/nav";
import SearchFilter from "../../utils/searchFilter";
import { isFavourite } from "../../../utils/favourites";
import FavouriteToggler from "../../utils/favouriteToggler";
import PropTypes from "prop-types";

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px 2vw;
    
    margin-left: 40px;
    margin-right: 40px;

    width: calc(100% - 80px);
    max-width: 900px;

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

const ItemCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    background: #FFF;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 30px 0px;

    width: 100%;
    height: 120px;
    
    @media screen and (min-width: 420px) {
        width: calc(50% - 2vw);
    }
    @media screen and (min-width: 900px) {
        width: calc(33.333% - 2vw);
    }

    font-family: Arial;
    font-weight: 600;
    text-transform: capitalize
`;

const ItemName = styled.div`
    margin-top: 25px;
    color: slategrey;
`;

const Logo = styled.img`
    width: 80%;
    max-width: 700px;
    display:block;
    margin:auto;
`;

const ItemImage = styled.img`
    display: block;
    margin: auto;
`;

function ItemList(props) {
    const { favs } = props;
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("");
    const navigate = useNavigate("");

    async function getData() {
        let data = await getItems(10);
        setItems(data.results);
    }

    useEffect(() => {
        getData();
    })

    return (
        <div>
            {items.length === 0 ?
                <div>Loading Items</div>
                :
                <div>
                    <Nav />
                    <SearchFilter onChange={setFilter}/>
                    <Wrapper>
                        {items.filter(item =>
                            ((filter === "" || item.name.includes(filter))))
                            .map(item => {
                                const img_url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/" + item.name + ".png"
                                const link_path = "/item/" + item.name
                                return (
                                    <ItemCard key={item.name} onClick={() => navigate(link_path)}>
                                        <img align="center" style={{ display: 'block', margin: 'auto' }} src={img_url}/>
                                        <ItemName>{item.name}</ItemName>
                                    </ItemCard>
                                )
                            })    
                        }
                    </Wrapper>
                </div>
            }
        </div>
    )
}

ItemList.propTypes = {
    favs: PropTypes.bool,
};

export default ItemList;