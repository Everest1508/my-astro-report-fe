export interface BirthDetails {
  date: string;
  time: string;
  location: string;
  latitude: string;
  longitude: string;
}

export interface ChartData {
  ascendant: string;
  houses: House[];
  planets: Planet[];
}

export interface House {
  number: number;
  sign: string;
  degree: number;
}

export interface Planet {
  name: string;
  sign: string;
  degree: number;
  house: number;
}

export interface AstrologicalReport {
  remedies: Remedy[];
  predictions: Prediction[];
  doshas: Dosha[];
  gemstones: Gemstone[];
  numerology: NumerologyInfo;
}

export interface Remedy {
  type: string;
  description: string;
  procedure: string;
  benefits: string[];
}

export interface Prediction {
  aspect: string;
  description: string;
  timeframe: string;
}

export interface Dosha {
  name: string;
  level: string;
  description: string;
  balancingTips: string[];
}

export interface Gemstone {
  name: string;
  benefits: string[];
  wearingMethod: string;
}

export interface NumerologyInfo {
  lifePath: number;
  destiny: number;
  soul: number;
  interpretation: string;
}