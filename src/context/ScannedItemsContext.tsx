import { v4 as uuidv4 } from 'uuid';
import React, { createContext, useReducer, useContext, Dispatch, ReactNode } from 'react';
import 'react-native-get-random-values';

export enum ScannedItemTypeEnum {
  Product = 'Product',
  Url = 'URL',
  Barcode = 'Barcode',
  Text = 'Text'
}

export enum ScannedItemQRCodeTypeEnum {
  Url = 'URL',
  Text = 'Text',
  Product = 'Product',
  Email = 'Email',
  Sms = 'SMS',
  Phone = 'Phone',
  Wifi = 'Wifi',
  Geo = 'Geo',
  Contact = 'Contact',
  Barcode = 'Barcode',
  ISBN = 'ISBN'
}

export enum ScannedItemBarCodeTypeEnum {
  Product = 'Product'
}

export enum ScannedItemActionEnum {
  ADD_SCANNED_ITEM = 'ADD_SCANNED_ITEM',
  REMOVE_SCANNED_ITEM = 'REMOVE_SCANNED_ITEM',
  ADD_TO_FAVORITE = 'ADD_TO_FAVORITE',
  REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE',
  TOOGLE_FAVORITE = 'TOOGLE_FAVORITE',
  ADD_FAVORITE_FILTER = 'ADD_FAVORITE_FILTER',
  REMOVE_FAVORITE_FILTER = 'REMOVE_FAVORITE_FILTER',
  ADD_HISTORY_FILLTER = 'ADD_HISTORY_FILLTER',
  REMOVE_HISTORY_FILTER = 'REMOVE_HISTORY_FILTER'
}

export interface ScannedItems {
  id: string;
  type: ScannedItemQRCodeTypeEnum;
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
  | { type: ScannedItemActionEnum.TOOGLE_FAVORITE; item: ScannedItems }
  | { type: ScannedItemActionEnum.ADD_FAVORITE_FILTER; filter: ScannedItemQRCodeTypeEnum }
  | { type: ScannedItemActionEnum.REMOVE_FAVORITE_FILTER; filter: ScannedItemQRCodeTypeEnum }
  | { type: ScannedItemActionEnum.ADD_HISTORY_FILLTER; filter: ScannedItemQRCodeTypeEnum }
  | { type: ScannedItemActionEnum.REMOVE_FAVORITE_FILTER; filter: ScannedItemQRCodeTypeEnum }


const scannedItems: ScannedItems[] = [
  {
    id: uuidv4(),
    type: ScannedItemQRCodeTypeEnum.Url,
    timeStamp: '2023-09-05T08:42:43Z',
    typeName: 'QR_CODE',
    text: 'exp://192.168.100.16:19000',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemQRCodeTypeEnum.Sms,
    timeStamp: '2023-08-07T08:10:20Z',
    typeName: 'UPC_A',
    text: 'this is the message',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemQRCodeTypeEnum.Product,
    timeStamp: '2023-06-07T08:10:20Z',
    typeName: 'UPC_E',
    text: 'exp://192.168.100.16:12000',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemQRCodeTypeEnum.Url,
    timeStamp: '2023-09-29T08:42:43Z',
    typeName: 'QR_CODE',
    text: 'exp://192.168.100.16:19000',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemQRCodeTypeEnum.Email,
    timeStamp: '2023-07-03T10:30:20Z',
    typeName: 'QR_CODE',
    text: 'test123@gmail.com',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemQRCodeTypeEnum.Phone,
    timeStamp: '2023-07-03T11:30:20Z',
    typeName: 'QR_CODE',
    text: '8657483854',
    isFavorite: true,
  },
  {
    id: uuidv4(),
    type: ScannedItemQRCodeTypeEnum.Text,
    timeStamp: '2023-08-16T05:20:30Z',
    typeName: 'CODE_128',
    text: 'qrCode',
    isFavorite: false,
  },
  {
    id: uuidv4(),
    type: ScannedItemQRCodeTypeEnum.Text,
    timeStamp: '2023-08-20T05:10:20Z',
    typeName: 'CODE_93',
    text: 'image-scanner',
    isFavorite: false,
  }
];

export interface State {
  scannedItems: ScannedItems[];
  selectedFavoritesFilters: ScannedItemQRCodeTypeEnum[];
  selectedHistoryFilters: ScannedItemQRCodeTypeEnum[];
}

const initialState: State = {
  scannedItems: scannedItems,
  selectedFavoritesFilters: [],
  selectedHistoryFilters: []
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

    case ScannedItemActionEnum.ADD_FAVORITE_FILTER:
      state.selectedFavoritesFilters.push(action.filter);

      return { ...state };

    case ScannedItemActionEnum.REMOVE_FAVORITE_FILTER:
      state.selectedFavoritesFilters = state.selectedFavoritesFilters.filter(
        (filter) => filter !== action.filter,
      );
      
      return { ...state };

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
