
export interface UploadedImage {
  file: File;
  base64: string;
}

export interface Era {
  value: string;
  label: string;
  prompt?: string;
}
