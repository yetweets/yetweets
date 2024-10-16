import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { type Tweet } from "@/lib/types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function gracefullyTruncate(str: string): string {
  const maxLength = 40;
  const maxWordLength = 16;

  if (str.length <= maxLength) return str;
  
  let truncated = str.slice(0, maxLength);

  if (str[maxLength] !== ' ') {
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    if (lastSpaceIndex !== -1) truncated = truncated.slice(0, lastSpaceIndex);
  }

  if (truncated.length > 0 && truncated.length < str.length && (truncated.length - truncated.lastIndexOf(' ') - 1) < maxWordLength) truncated += '...';

  return truncated;
}

export function detectRetweet(text: string): boolean {
  return text.startsWith('RT @');
}

export function hasTcoLink(text: string): boolean {
  return text.includes('https://t.co/');
}

export function removeRetweetString(text: string): string {
  return text.replace(/^RT @\w+: /, '');
}

export function removeTcoLink(text: string): string {
  const tcoLinkRegex = /https:\/\/t\.co\/\w+/g;

  return text.replace(tcoLinkRegex, '').trim();
}

export function extractMediaIdentifier(data: Tweet): string | null {
  if (data.extended_entities && data.extended_entities.media.length > 0) {
    const mediaUrlHttps = data.extended_entities.media[0].media_url_https;
    const matches = mediaUrlHttps.match(/\/media\/([^.]+)/);
    
    if (matches && matches[1]) {
      return matches[1];
    }
  }
  return null;
}

export function truncateUrl(url: string, maxLength: number): string {
  if (url.length <= maxLength) {
    return url;
  }

  const startLength = Math.floor(maxLength / 2);
  const endLength = maxLength - startLength - 3;

  const truncatedUrl = `${url.substring(0, startLength)}...${url.substring(url.length - endLength)}`;

  return truncatedUrl;
}

export function truncateToDomain(url: string): string {
  try {
    const parsedUrl = new URL(url);    
    const hostname = parsedUrl.hostname;
    const parts = hostname.split('.');
    const tldLength = parts[parts.length - 2].length <= 3 ? 2 : 1;
    const domain = parts.slice(-1 - tldLength).join('.');

    return domain;
  } catch (error) {
    console.error('Invalid URL:', error);
    return '';
  }
}