import styled from "styled-components";

export const Section = styled.section`
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #ffffff;

    ::-webkit-scrollbar {
        width: 6px;
        height: 3px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
        padding: 2px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #ffffff;
        border-radius: 13px;
    }

    ul {
        padding: 0 40px;

        @media (min-width: 600px) {
            padding: 0 50px;
        }
    }
`;

export const Card = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    background: #ffffff;
    color: #2c2c2c;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 10px 2px;
    height: 220px;
    width: 100%;

    @media (max-width: 600px) {
        display: grid;
        grid-template-areas:
            "button button"
            "img img"
            "h4 h4"
            "div span";
        justify-items: center;
        align-items: baseline;
    }

    @media (min-width: 600px) {
        height: 100px;
        padding: 19px;
        margin-bottom: 28px;
    }

    img {
        grid-area: img;
        height: 100px;
        width: 100px;

        @media (min-width: 600px) {
            height: 60px;
            width: 60px;
        }
    }

    h4 {
        grid-area: h4;
        width: 113px;
        font-style: normal;
        font-weight: 400;

        @media (max-width: 599px) {
            margin: 0;
        }
    }

    .price {
        grid-area: span;
        font-weight: 700;

        @media (max-width: 599px) {
            background: #373737;
            border-radius: 6px;
            color: #ffffff;
            padding: 8px 12px;
        }
    }
`;

export const SumDiv = styled.div`
    grid-area: div;

    @media (min-width: 600px) {
        margin-bottom: 18px;
    }

    div {
        display: flex;
        align-items: center;
        background: #ffffff;
        border: 0.3px solid #bfbfbf;
        border-radius: 4px;
        padding: 2px;
        margin-top: 4px;

        @media (max-width: 767px) {
            height: 35px;
        }
    }

    small {
        font-size: 0.55rem;

        @media (max-width: 767px) {
            display: none;
        }
    }

    button {
        background: #ffffff;
        border: none;
    }

    .quantity {
        padding: 0 6px;
        font-size: 0.78rem;
    }

    .border {
        display: block;
        border-right: 0.2px solid #bfbfbf;
        height: 12px;
    }
`;

export const TotalDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 40px;
`;

export const Remove = styled.button`
    grid-area: button;
    position: relative;
    justify-self: self-end;
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 17px;
    border: none;
    background: none;
    padding: 0;
    left: 10px;

    img {
        height: 18px;
        widht: 18px;
    }

    @media (min-width: 600px) {
        left: 100%;
        bottom: 80%;
        font-size: 11px;
        color: #ffffff;
        background: #000;
        padding: 2px;
        width: 20px;
        border-radius: 20px;
    }
`;
