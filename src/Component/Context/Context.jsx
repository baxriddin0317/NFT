import { createContext, useState} from 'react';

const ModalContext = createContext();

function ModalProvider({children}) {

    const [modal, setModal] = useState(false);
    const [ m, setM] = useState(false);

    return (
        <ModalContext.Provider value={{modal, setModal, m, setM}}>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalContext, ModalProvider}