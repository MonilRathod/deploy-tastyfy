import React, { useState, createContext } from 'react';

var RecipeContext = createContext();
var AuthContext = createContext();
var UserContext = createContext();
var RecipeDispatchContext = createContext();
var AuthDispatchContext = createContext();
var UserDispatchContext = createContext();

function AppProvider({ children }) {

    const [user, setUser] = useState({});
    const [recipes, setRecipes] = useState([]);
    const [isAuth, setisAuth] = useState(false);

    const setA = (aut) => {
        setisAuth(aut);
    }

    const setR = (rec) => {
        setRecipes(rec);
    }

    const setU = (use) => {
        setUser(use);
    }

    return (
        <AuthContext.Provider value={{isAuth}}>
            <UserContext.Provider value={{user}}>
                <RecipeContext.Provider value={{recipes}}>
                    <AuthDispatchContext.Provider value={{setA}}>
                        <UserDispatchContext.Provider value={{setU}}>
                            <RecipeDispatchContext.Provider value={{setR}}>
                                {children}
                            </RecipeDispatchContext.Provider>
                        </UserDispatchContext.Provider>
                    </AuthDispatchContext.Provider>
                </RecipeContext.Provider>
            </UserContext.Provider>
        </AuthContext.Provider>
    );
}

export { AppProvider, RecipeContext, AuthContext, UserContext , AuthDispatchContext, UserDispatchContext, RecipeDispatchContext};
