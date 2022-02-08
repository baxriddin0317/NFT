import { createContext, useState} from 'react';

const ProstaContext = createContext();

function ProstaProvider({children}) {

    const [prosta, setProsta] = useState(false);

    return (
        <ProstaContext.Provider value={{prosta, setProsta}}>
            {children}
        </ProstaContext.Provider>
    )
}

export {ProstaContext, ProstaProvider}
