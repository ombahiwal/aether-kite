
export interface ContentfulAssetLink {
  sys: {
    type: "Link";
    linkType: "Asset";
    id: string;
  };
}

export interface InfoBlock {
  infoImage?: ContentfulAssetLink;
  infoDesc?: string;
  infoTitle?: string;
}
