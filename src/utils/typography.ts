import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const typography = {
  baseFontSize: 16,
  smallScreenScale: 0.8,
  mediumScreenScale: 1,
  largeScreenScale: 1.2,
  get fontSize() {
    if (width < 375) {
      return this.baseFontSize * this.smallScreenScale;
    } else if (width < 768) {
      return this.baseFontSize * this.mediumScreenScale;
    } else {
      return this.baseFontSize * this.largeScreenScale;
    }
  },
};

export default typography;

export const getResponsiveFontSize = (size: number) => {
  return (typography.fontSize * size) / typography.baseFontSize;
};
