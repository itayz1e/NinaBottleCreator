export type BarcodeType = {
    id: number;
    label: string;
    value: string;
    volumeInOz: number;
  };

export type ImageBottle = {
  images: ImageData[];
};

export type ImageData = {
  s3Url: string;
  s3Key: string;
};

