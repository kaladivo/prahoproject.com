import * as migration_20260214_003123_initial from './20260214_003123_initial';

export const migrations = [
  {
    up: migration_20260214_003123_initial.up,
    down: migration_20260214_003123_initial.down,
    name: '20260214_003123_initial'
  },
];
