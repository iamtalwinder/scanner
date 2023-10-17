import { v4 as uuidv4 } from 'uuid';
import React, { createContext, useReducer, useContext, Dispatch, ReactNode } from 'react';
import 'react-native-get-random-values';

export enum ScannedItemTypeEnum {
  Product = 'Product',
  Url = 'URL',
  Barcode = 'Barcode',
  Text = 'Text'
}

export enum ScannedItemActionEnum {
  ADD_SCANNED_ITEM = 'ADD_SCANNED_ITEM',
  REMOVE_SCANNED_ITEM = 'REMOVE_SCANNED_ITEM',
  ADD_TO_FAVORITE = 'ADD_TO_FAVORITE',
  REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE',
  TOOGLE_FAVORITE = 'TOOGLE_FAVORITE'
}

export interface ScannedItems {
  id: string;
  type: ScannedItemTypeEnum;
  timeStamp: string;
  isFavorite: boolean;
  text: string;
  typeName?: string
}

export type Action =
  | { type: ScannedItemActionEnum.ADD_SCANNED_ITEM; item: ScannedItems }
  | { type: ScannedItemActionEnum.REMOVE_SCANNED_ITEM; id: string }
  | { type: ScannedItemActionEnum.ADD_TO_FAVORITE; id: string }
  | { type: ScannedItemActionEnum.REMOVE_FROM_FAVORITE; id: string }
  | { type: ScannedItemActionEnum.TOOGLE_FAVORITE; item: ScannedItems };


const scannedItems: ScannedItems[] = [
  {
    id: uuidv4(),
    type: ScannedItemTypeEnum.Url,
    timeStamp: '2023-09-05T08:42:43Z',
    typeName: 'QR_CODE',
    text: 'exp://192.168.100.16:19000',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemTypeEnum.Product,
    timeStamp: '2023-08-07T08:10:20Z',
    typeName: 'UPC_A',
    text: 'exp://192.168.100.16:19000',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemTypeEnum.Product,
    timeStamp: '2023-06-07T08:10:20Z',
    typeName: 'UPC_E',
    text: 'exp://192.168.100.16:12000',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemTypeEnum.Url,
    timeStamp: '2023-09-29T08:42:43Z',
    typeName: 'QR_CODE',
    text: 'exp://192.168.100.16:19000',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemTypeEnum.Barcode,
    timeStamp: '2023-07-03T10:30:20Z',
    typeName: 'QR_CODE',
    text: 'exp://192.168.100.16:19000',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemTypeEnum.Barcode,
    timeStamp: '2023-07-03T11:30:20Z',
    typeName: 'QR_CODE',
    text: 'exp://192.168.100.16:19000',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemTypeEnum.Text,
    timeStamp: '2023-08-16T05:20:30Z',
    typeName: 'CODE_128',
    text: 'exp://192.168.100.16:19000',
    isFavorite: false,
  },
  {
    id: uuidv4(),
    type: ScannedItemTypeEnum.Text,
    timeStamp: '2023-08-20T05:10:20Z',
    typeName: 'CODE_93',
    text: 'exp://192.168.100.16:17000',
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

    // case ScannedItemActionEnum.TOOGLE_FAVORITE:
    //   return {
    //     ...state,
    //     scannedItems: state.scannedItems.map((item) =>
    //       item.id === action.item.id ? { ...item, isFavorite: !action.item.isFavorite } : item
    //     ),
    //   };

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
