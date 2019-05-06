import styled from 'styled-components';

export const PostCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1000px;

`;

export const PostCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 15px;
    padding-bottom: 5px;
    border: 1px solid black;
    margin: 10px;
    -moz-box-shadow:    3px 3px 7px 2px #ccc;
    -webkit-box-shadow: 3px 3px 7px 2px #ccc;
    box-shadow:         3px 3px 7px 2px #ccc;
    border-radius: 4px;
`;

export const PostCardBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const PostCardLabels = styled.div`
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-weight: bold;
    padding: 10px 0;
`;

export const PostCardSingleLabel = styled.span`
    font-size: 18px;
    padding: 10px 0;
`;

export const PostCardInformation = styled.div`
    width: 325px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    font-weight: bold;
    padding: 10px 0 10px 15px;
`;