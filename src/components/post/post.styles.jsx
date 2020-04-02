import styled from "styled-components";
import { colors } from "../../assets/colors";

export const PostContainer = styled.div`
    background-color: white;
    width: 80%;
    border-radius: 5px;
`;

export const PostHeader = styled.div`
    ${'' /* background-color: indigo; */}
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .5rem 1rem;

    .img{
        height: 50px;
        width: 50px;
        margin-right: 1rem;
        overflow: hidden;
        border-radius:  100%;
        object-fit: cover;
        -webkit-border-radius:  100%;
        -moz-border-radius:  100%;
        -ms-border-radius:  100%;
        -o-border-radius:  100%;
        border-right: 3px  solid $primary-color;
        border-bottom: 3px  solid $primary-color;
    }

    img{
        max-width: 100%;
        height: 100%;
        width: 100%;
        border-radius:  100%;
        object-fit: cover;
    }

    .name{
        font-size: 18px;
    }

    .timeStamp{
        color: grey;
        font-size: 14px;
    }
`;

export const PostText = styled.div`
    background-color: white;
    padding : 0 1rem;
    overflow-y: scroll;
    max-height: 300px;
`;