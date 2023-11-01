import { ScannedItemQRCodeTypeEnum } from '../../context/ScannedItemsContext';
import { IconEnum, ICON_SIZE_M, ICON_SIZE_L } from '../Icons';

export const FILTER_MENU_ITEMS = [
  { title: 'Url', icon: IconEnum.link2, size: ICON_SIZE_L, type: ScannedItemQRCodeTypeEnum.Url },
  { title: 'Text', icon: IconEnum.formatText, size: ICON_SIZE_L, type: ScannedItemQRCodeTypeEnum.Text },
  { title: 'Wifi', icon: IconEnum.wifi, size: ICON_SIZE_M, type: ScannedItemQRCodeTypeEnum.Wifi },
  { title: 'Product', icon: IconEnum.shoppingBag, size: ICON_SIZE_L, type: ScannedItemQRCodeTypeEnum.Product },
  { title: 'Barcode', icon: IconEnum.barcode, size: ICON_SIZE_L, type: ScannedItemQRCodeTypeEnum.Barcode },
  { title: 'Phone', icon: IconEnum.phone, size: ICON_SIZE_L, type: ScannedItemQRCodeTypeEnum.Phone },
  { title: 'Contact', icon: IconEnum.contactsOutline, size: ICON_SIZE_L, type: ScannedItemQRCodeTypeEnum.Contact },
  { title: 'ISBN', icon: IconEnum.book, size: ICON_SIZE_L, type: ScannedItemQRCodeTypeEnum.ISBN },
  { title: 'Email', icon: IconEnum.email, size: ICON_SIZE_L, type: ScannedItemQRCodeTypeEnum.Email },
  { title: 'SMS', icon: IconEnum.sms, size: ICON_SIZE_L, type: ScannedItemQRCodeTypeEnum.Sms },
  { title: 'Geo', icon: IconEnum.locationOutline, size: ICON_SIZE_L, type: ScannedItemQRCodeTypeEnum.Geo },
  // { title: 'Calender', icon: IconEnum.calenderSharp, size: ICON_SIZE_L },
];
