export type Document = {
  id?: string;
  imgPath: string;
  name: string;
};

type Thumbnail = {
  height: number;
  width: number;
  url: string;
};

type File = {
  height: number;
  scale: number;
  thumbnails: Thumbnail[];
  url: string;
  width: number;
};

export type ArtBoard = {
  files: File[];
  isArtboard: boolean;
  name: string;
};
