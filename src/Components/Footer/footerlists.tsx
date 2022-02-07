import React from 'react';

const FooterLists : React.FC<{ list : string[] }> = (props) =>
{
    const list = props.list;
    console.log(list);
    return(
        <>
        <ul>
            {list.map((x) => (<li key={x}>{x}</li>))}
        </ul>
        </>
    );
}

export default FooterLists;