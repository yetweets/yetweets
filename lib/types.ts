export type Tweet = {
  created_at: string;
  deleted?: boolean;
  favorite_count: number;
  hashtags: string[];
  id: number;
  id_str: string;
  lang: string;
  legacy_imported?: boolean;
  retrieved?: string;
  retweet_count: number;
  source: string;
  text: string;
  urls: string[];
  user: {
    id: number;
  };
  user_mentions: string[];
  extended_entities?: ExtendedEntities;
  coordinates?: Coordinates | null;
  entities?: Entities;
  geo?: any | null;
  place?: any | null;
  possibly_sensitive?: boolean;
  in_reply_to_screen_name?: string | null;
  in_reply_to_status_id?: number | null;
  in_reply_to_status_id_str?: string | null;
  in_reply_to_user_id?: number | null;
  in_reply_to_user_id_str?: string | null;
  is_quote_status?: boolean;
  truncated?: boolean;
  favorited?: boolean;
  retweeted?: boolean;
};

export type MinimalTweet = {
  created_at: string;
  id_str: string;
  text: string;
};

export type Media = {
  display_url?: string;
  expanded_url?: string;
  id?: number;
  id_str: string;
  indices?: number[];
  media_url: string;
  media_url_https: string;
  sizes?: {
    large: { h: number; resize: string; w: number };
    medium: { h: number; resize: string; w: number };
    small: { h: number; resize: string; w: number };
    thumb: { h: number; resize: string; w: number };
  };
  type?: string;
  url?: string;
};

export type ExtendedEntities = {
  media: Media[];
};

export type Url = {
  display_url: string;
  expanded_url: string;
  indices: number[];
  url: string;
};

export type Entities = {
  hashtags: string[];
  symbols: string[];
  user_mentions: string[];
  media: Media[];
  urls: Url[];
};

export type Coordinates = {
  coordinates: [number, number];
  type: string;
};


export type LinkPreviewMetaData = {
  title: string;
  description: string;
  image: string;
};