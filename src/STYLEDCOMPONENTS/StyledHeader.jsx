import Styled from "styled-components";
import darkBg from "../images/bg-mobile-dark.jpg";
import lightBg from "../images/bg-mobile-light.jpg";

const StyledHeader = Styled.header`
    background-image: url(${darkBg});
    backround-repeat:no-repeat;
    background-size:cover;
    min-height:40vh;

   button{
    cursor:pointer;
  }
  
  button:active{
    transform: scale(.98);
  }

    &.lightBg{
        background-image: url(${lightBg});
    }

    .head{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:4rem 2rem 0;
    }

    h1{
        font-size:3rem;
        color:white;
        letter-spacing:1rem;
    }

    @media only screen and (min-width:600px){
        .head{
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:7rem 10rem 0;
            width:50rem;
            margin:0 auto;
        }
     }
`;

export default StyledHeader;
