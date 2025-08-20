import type React from 'react';

export type ManifestCustomization = {
  id: string;
  name: string;
  iconId?: string;
};

export type ManifestSubject = {
  id: string;
  name: string;
  mode: 'sophie' | 'papi';
  iconId: string;
  difficulty: number;
  tags: string[];
  customizations: ManifestCustomization[];
};

export type Manifest = {
  version: string;
  subjects: ManifestSubject[];
};

export type SVGPathGuide = {
  shape: 'path';
  d: string;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
};

export type Guide = SVGPathGuide; // Can be expanded with Circle, Rect etc. later

export type DrawingStep = {
  step: number;
  name: string;
  instruction: string;
  hint?: string;
  checkpoint?: string;
  newGuides: Guide[];
};

export type Tutorial = {
  canvas: {
    width: number;
    height: number;
    origin: 'center' | 'top-left';
  };
  style: {
    stroke: string;
    fill: string;
    lineWidth: number;
    strokeLinecap: 'butt' | 'round' | 'square';
    strokeLinejoin: 'miter' | 'round' | 'bevel';
  };
  steps: DrawingStep[];
};

export type UserProfile = {
  name: string;
  email: string;
  picture: string;
};