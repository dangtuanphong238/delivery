export type PopupDialogType = {
  dialogTitle?: any,
  children: any,
};

export type DialogType = {
  width?: number,
  height?: number,
  haveOverlay: boolean,
  overlayPointerEvents?: string,
  overlayBackgroundColor?: string,
  overlayOpacity?: number,
  dialogAnimation?: Object,
  dialogStyle?: any,
  animationDuration?: number,
  dismissOnTouchOutside?: boolean,
  dismissOnHardwareBackPress?: boolean,
  show?: boolean,
  onShown?: Function,
  onDismissed?: Function,
  actions?: Array<any>,
  children: any,
};

export type OverlayType = {
  onPress: Function,
  backgroundColor?: string,
  opacity?: number,
  animationDuration?: number,
  showOverlay?: boolean,
  pointerEvents?: string,
};
