import Styled from "styled-components";

const StyledBody = Styled.section`
    background:var(--primary-color);
    height:60vh;
    padding:2rem;

    .container{
       margin-top:-12rem;
    }

    form{
        display:flex;
        padding:1rem 2rem;
        border-radius:4px;
        background:var(--secondary-color);
        box-shadow:0 0 1rem rgba(0, 0, 0, .2);
    }

    .circle{
        border:1px solid var(--tetiary-color);
        width:2rem;
        height:2rem;
        border-radius:50%;
    }

    input{
        margin-left:2rem;
        color:var(--tetiary-color);
    }

    input::placeholder{
        color:var(--tetiary-color);
    }

    ul .todos{
        background:var(--secondary-color);
        border-top-left-radius:4px;
        border-top-right-radius:4px;
        margin-top:2rem;
        box-shadow:0 0 1rem rgba(0, 0, 0, .2);
        max-height:20rem;
        overflow:auto;
    }

    li{
        border-bottom:1px solid hsl(236, 73%, 92%);
        padding:1.2rem 2rem;
        color:var(--text-color);
        display:flex;
        align-items:center;
        font-size:1.3rem;
        justify-content:space-between;
        position:relative;
        z-index:9;
    }

    li div{
        display:flex;
    }

    li .btn{
        margin-right:1rem;
    }

    li .btn:hover{
        border:1px solid hsl(280, 87%, 65%);
    }

    li .styled{
       background:linear-gradient(to left, hsl(192, 100%, 67%) , hsl(280, 87%, 65%));
       
    }

    li.complete{
       text-decoration:line-through;
       color:var(--tetiary-color);
    }

    .bottom{
        color:var(--tetiary-color);
        padding:1.2rem 2rem;
        display:flex;
        align-items:center;
        font-size:1.3rem;
        justify-content:space-between;
        position:sticky;
        background:var(--secondary-color);
        border-bottom-left-radius:4px;
        border-bottom-right-radius:4px;
        box-shadow:0 0  1rem rgba(0, 0, 0, .2);
        z-index:0;
    }

    .bottom button{
        color:inherit;
        font-size:inherit;
    }

    .filters{
        display:flex;
        justify-content:center;
        padding:1.2rem 2rem;
        border-radius:4px;
        background:var(--secondary-color);
        margin-top:2rem;
        box-shadow:0 0 1rem rgba(0, 0, 0, .4);
    }

    .desktopfilters{
        display:none;
    }

    .filters button{
        margin: 0 1rem;
        color:var(--tetiary-color);
        cursor:pointer;
    }

    .filters button.active{
        color:hsl(220, 98%, 61%);
    }

    button:hover{
        color:var(--text-color);
        cursor:pointer;
    }

    p{
        text-align:center;
        color:var(--tetiary-color);
        margin-top:4rem;
        font-size:1.3rem;
    }

    @media only screen and (min-width:600px){
        .container{
          padding:2rem 10rem;
           width:50rem;
           margin:-12rem auto 0;
        }

        .desktopfilters{
            display:block;
            margin-top:unset;
            box-shadow:unset
        }

        .desktopfilters button{
            margin: 0 1rem;
        }

        .mobilefilters{
            display:none;
        }
    }
`;

export default StyledBody;
