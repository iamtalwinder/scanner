import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import React, { createContext, useReducer, useContext, Dispatch, ReactNode } from 'react';

export enum ScannedItemTypeEnum {
  Product = 'product',
  Url = 'Url',
  Barcode = 'Barcode',
  Text = 'Text'
}

export enum ScannedItemActionEnum {
  ADD_SCANNED_ITEM = 'ADD_SCANNED_ITEM',
  REMOVE_SCANNED_ITEM = 'REMOVE_SCANNED_ITEM',
  ADD_TO_FAVORITE = 'ADD_TO_FAVORITE',
  REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE'
}

export interface ScannedItems {
  id: string;
  type: ScannedItemTypeEnum;
  timestamp: string;
  isFavorite: boolean;
  text: string;
}

export type Action =
  | { type: ScannedItemActionEnum.ADD_SCANNED_ITEM; item: ScannedItems }
  | { type: ScannedItemActionEnum.REMOVE_SCANNED_ITEM; id: string }
  | { type: ScannedItemActionEnum.ADD_TO_FAVORITE; id: string }
  | { type: ScannedItemActionEnum.REMOVE_FROM_FAVORITE; id: string };


const scannedItems: ScannedItems[] = [
  {
    id: uuidv4(),
    type: ScannedItemTypeEnum.Url,
    timestamp: '05/09/2023 8:42:43 am,',
    text: 'QR_CODE exp://192.168.100.16:19000',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemTypeEnum.Product,
    timestamp: '07/08/2023 8:10:20 am,',
    text: 'Product exp://192.168.100.16:19000',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemTypeEnum.Barcode,
    timestamp: '03/08/2023 10:30:20 am,',
    text: 'Barcode exp://192.168.100.16:19000',
    isFavorite: false,
  },
  {
    id: uuidv4(),
    type: ScannedItemTypeEnum.Text,
    timestamp: '16/08/2023 05:10:30 pm,',
    text: 'Text exp://192.168.100.16:19000',
    isFavorite: false,
  }
];

export interface State {
  scannedItems: ScannedItems[];
}

const initialState: State = {
  scannedItems: scannedItems,
};

const ScannedItemsContext = createContext<{ state: State; dispatch: Dispatch<Action> } | undefined>(undefined);

const scannedItemsReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ScannedItemActionEnum.ADD_SCANNED_ITEM:
      return { ...state, scannedItems: [...state.scannedItems, action.item] };

    case ScannedItemActionEnum.REMOVE_SCANNED_ITEM:
      return {
        ...state,
        scannedItems: state.scannedItems.filter((item) => item.id !== action.id),
      };

    case ScannedItemActionEnum.ADD_TO_FAVORITE:
      return {
        ...state,
        scannedItems: state.scannedItems.map((item) =>
          item.id === action.id ? { ...item, isFavorite: true } : item
        ),
      };

    case ScannedItemActionEnum.REMOVE_FROM_FAVORITE:
      return {
        ...state,
        scannedItems: state.scannedItems.map((item) =>
          item.id === action.id ? { ...item, isFavorite: false } : item
        ),
      };

    default:
      return state;
  }
};

export const ScannedItemsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(scannedItemsReducer, initialState);

  return <ScannedItemsContext.Provider value={{ state, dispatch }}>{children}</ScannedItemsContext.Provider>;
};

export const useScannedItems = () => {
  const context = useContext(ScannedItemsContext);
  if (context === undefined) {
    throw new Error('useScannedItems must be used within a ScannedItemsProvider');
  }
  return context;
};
