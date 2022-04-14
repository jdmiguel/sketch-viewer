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

export type Artboard = {
  files: File[];
  isArtboard: boolean;
  name: string;
};

export type ArtboardsQueryData = {
  share: {
    identifier: string;
    version: {
      document: {
        name: string;
        artboards: {
          entries: Artboard[];
        };
      };
    };
  };
};

export type ArtboardsQueryVars = {
  id?: string;
};

export type Document = {
  id?: string;
  imgPath: string;
  name: string;
};

export type ThemeMode = 'LIGHT' | 'DARK';
