export interface TemplateCategory {
  id: 'translate' | 'recreate' | 'images';
  title: string;
  description: string;
}

export interface SampleProduct {
  id: string;
  name: string;
  originalScript: string;
  suggestedScripts: Record<string, string>; // Language code to script text
}

export interface RenderingStep {
  label: string;
  duration: number; // in milliseconds
}

export interface MarketingTip {
  region: string;
  tip: string;
  conversionBoost: string;
}

// Support types for other workspace components (fully compatible)
export interface UploadedVideo {
  id: string;
  vid: string;
  name: string;
  sizeStr: string;
  url?: string;
  duration: number; // number (uses .toFixed)
  localPlayUrl?: string;
  width?: number;
  height?: number;
  uploadedAt?: string | number;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  type: 'text' | 'loading' | 'video' | 'system';
  content: string;
  status?: 'Success' | 'Failed' | 'Processing' | 'Completed' | string; // compatible with 'Completed' check
  taskId?: string;
  vid?: string;
  playUrl?: string;
  skillType?: 'Vision' | 'Lipsync' | 'Trans';
  errorMsg?: string;
  raw?: any; // fully compatible with Message.raw
}
