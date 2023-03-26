export type ImageReference = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  crop?: {
    _type: string;
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    _type: string;
    height: number;
    width: number;
    x: number;
    y: number;
  };
};
