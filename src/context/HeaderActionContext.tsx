import React, { ReactNode, createContext, useReducer, useContext, useCallback } from 'react';

export enum HeaderActionEnum {
  SET_ACTION = 'SET_ACTION',
  RESET_ACTION = 'RESET_ACTION',
}

type Action =
  | { type: HeaderActionEnum.SET_ACTION, actions: ReactNode }
  | { type: HeaderActionEnum.RESET_ACTION }

interface State {
  actions: ReactNode | null;
}

interface HeaderActionContextInterface {
  state: State,
  setActions: (actions: ReactNode) => void,
  resetActions: () => void,
}

const initialState: State = {
  actions: null
}

const HeaderActionContext = createContext<HeaderActionContextInterface | undefined>(undefined);

const headerActionReducer = (state: State, action: Action) => {
  switch(action.type) {
    case HeaderActionEnum.SET_ACTION:
      return { actions: action.actions }

    case HeaderActionEnum.RESET_ACTION:
      return { actions: null }
  }
}

export const HeaderActionProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(headerActionReducer, initialState);

  const setActions = useCallback((actions: ReactNode) => {
    dispatch({ type: HeaderActionEnum.SET_ACTION, actions: actions });
  }, []);

  const resetActions = useCallback(() => {
    dispatch({ type: HeaderActionEnum.RESET_ACTION });
  }, []);

  const value = {
    state,
    setActions,
    resetActions,
  }

  return <HeaderActionContext.Provider value={value}>{children}</HeaderActionContext.Provider>
}

export const useHeaderAction = () => {
  const context = useContext(HeaderActionContext);

  if (context === undefined) {
    throw new Error('useHeaderActionContext must be used within HeaderActionContext.provider');
  }

  return context;
}



