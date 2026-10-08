import { Case, CaseItem } from '../../types';
import { BATCH_1_CASES } from './batch1';
import { BATCH_2_CASES } from './batch2';
import { BATCH_3_CASES } from './batch3';
import { batch4Cases } from './batch4';
import { batch5Cases } from './batch5';

export const batch1Cases: Case[] = BATCH_1_CASES as Case[];
export const batch2Cases: Case[] = BATCH_2_CASES as Case[];
export const batch3Cases: Case[] = BATCH_3_CASES as Case[];

export const all100Cases: Case[] = [
  ...batch1Cases,
  ...batch2Cases,
  ...batch3Cases,
  ...batch4Cases,
  ...batch5Cases,
];

export { BATCH_1_CASES, BATCH_2_CASES, BATCH_3_CASES, batch4Cases, batch5Cases };
