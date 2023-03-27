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

export type ImageReferenceWithAltAndCaption = ImageReference & {
  alt: string;
  caption?: string;
};

export type BlockReference = {
  _key: string;
  _type: "block";
  style: string;
  children: {
    _key: string;
    _type: string;
    text: string;
    marks: string[];
  }[];
  markDefs: {
    _key: string;
    _type: string;
  }[];
  listItem?: "bullet" | "number";
};

export type CodeReference = {
  _key: string;
  _type: "code";
  code: string;
  filename: string;
  language: string;
};

export type InlineCodeBlock = {
  _type: "span";
  _key: string;
  children: string[];
  mark: "code";
  markKey: "code";
};

export type ListBlock = {
  type: "bullet" | "number";
  level: number;
  children: [];
};
