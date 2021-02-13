export interface SpecialAbility {
  id: number;
  name: string;
  counters?: number[];
  rating: number;
  possiblePositions: number[];
  imageUrl: string;
  affects: number;
}
