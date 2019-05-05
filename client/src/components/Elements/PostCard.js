import styled from 'styled-components';

export const PostCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 700px;
    padding: 25px;
`;

export const PostCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 15px;
    border: 1px solid black;
    margin: 5px;
`;

export const PostCardBody = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const PostCardLabels = styled.div`
    width: 150px;
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
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    font-weight: bold;
    padding: 10px 0 10px 15px;
`;