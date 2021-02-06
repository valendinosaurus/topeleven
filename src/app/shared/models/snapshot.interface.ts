import { SnapshotElement } from './snapshot-element.interface';

export interface Snapshot {
  id: number;
  timestamp: Date;
  user: string;
  values: SnapshotElement[];
}
