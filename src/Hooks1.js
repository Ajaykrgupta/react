/*
What is hooks
Ans: Hooks is used to allow live cycle method in function component just like useState
All Hooks starting name before use
All Hooks List:-
1. useState
2. useCallback
3. useDebugValue
4. useEffect:- All life cycle method here
5. useImperativeHandle
6. useMemo
7. useReducer
8. useContext
9. useRef
*/

import React,{useState} from 'react';

function Hooks1(){

    const [name,setName] = useState("Ajay kumar");
    return(
        <div>
            <h1>Hooks First Part</h1>
            <h6>{name}</h6>
            <button onClick={()=>{setName("Raj kumar")}}>Click Me</button>
        </div>
    )
}

export default Hooks1;