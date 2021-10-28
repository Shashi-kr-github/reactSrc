import { Children } from "react";

export default function Forms({Children}){
    return (
        <form
         style= {{
            border: '1px solid blue',
            borderRadius: '5%',
            display : 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: '50%',
            margin: "0 auto",
            marginTop: 10,
        }}>
            {Children}
        </form>
    )
}