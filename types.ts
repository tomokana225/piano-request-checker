export interface Song {
  title: string;
  artist: string;
}

export enum YamahaCheckResult {
  Available = 'Available',
  NotAvailable = 'NotAvailable',
  Unknown = 'Unknown',
}

export interface GroundingSource {
    web?: {
        uri: string;
        title: string;
    }
}

export interface YamahaAPIResponse {
    result: YamahaCheckResult;
    details: string;
    sources: GroundingSource[];
}