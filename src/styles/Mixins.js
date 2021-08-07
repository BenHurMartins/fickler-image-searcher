import {Dimensions} from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('screen').width;
export const IMAGE_CARD_SIZE = DEVICE_WIDTH / 2 - 25;
export const IMAGE_WIDTH = DEVICE_WIDTH - 20;
export const IMAGE_HEIGHT = DEVICE_WIDTH + 100;

export const FONT_SIZE_BIG = DEVICE_WIDTH * 0.05;
export const FONT_SIZE_REGULAR = DEVICE_WIDTH * 0.04;
export const FONT_SIZE_SMALL = DEVICE_WIDTH * 0.03;
