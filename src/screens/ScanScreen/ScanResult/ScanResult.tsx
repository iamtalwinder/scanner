import React from 'react';
import { ScannedItemTypeEnum } from '../../../context/ScannedItemsContext';
import { RenameComponent } from '../../../components/Rename';
import { ScanResultCard } from '../../../components/ScanResultCard/ScanResultCard';
import { IconEnum } from '../../../components';

export interface ScannedItemResult {
  logo: string,
  type: string,
  typeName: string,
  timeStamp: string,
  text: string
}

export const ScannedResultItem: ScannedItemResult = {
  logo: IconEnum.barcode,
  type: ScannedItemTypeEnum.Barcode,
  timeStamp: '2023-07-03T10:30:20Z',
  typeName: 'QR_CODE',
  text: 'exp://192.168.100.16:19000'
}


export interface ScanResultActionProps {
  item: ScannedItemResult;
}

const Actions: React.FC<ScanResultActionProps> = (item : ScanResultActionProps) => {
  return (
    <>
      {/* <HistoryFavorites item={item} /> */}
      <RenameComponent />
    </>
  )
}
export const ScanResult: React.FC = () => {
  return (
    <>
      <ScanResultCard item={ScannedResultItem} actions={(props: ScanResultActionProps) => <Actions {...props}/>}/>
    </>
  );
}

