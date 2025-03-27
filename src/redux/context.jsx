import {createContext, useReducer} from "react";
import initialState from "./initialState";
import GuaridanEyeReducer from "./reducers";
import actions from "./actions";

export const GuardianEyeContext = createContext();
// inside component try this, const { getDomains } = React.useContext( GuardianEyeContext );

export const GuardianEyeProvider = ({ children }) => {
    //use this GuardianEyeProvider to wrap our root component as below
    // <GuardianEyeProvider> <App /> <GuardianEyeProvider>
    const [state, dispatch] = useReducer(GuaridanEyeReducer, initialState);

    const value = {
        guardianEyeData: state,
        setDomains: (payload) => {
            dispatch({ type: actions.SET_DOMAINS, payload });
        },
        setSummary: (payload) => {
            dispatch({ type: actions.SET_SUMMARY, payload });
        },
    };

    return (
        <GuardianEyeContext.Provider value={value}>
            {children}
        </GuardianEyeContext.Provider>
    );
};