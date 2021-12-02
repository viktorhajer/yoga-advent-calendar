import {DocumentModel} from '../models/document.model';
import {ASANAS} from './asanas.db';
import {STORIES} from './story.db';
import {DocumentSequenceModel} from '../models/document-sequence.model';

export const CALENDAR: DocumentModel[] | DocumentSequenceModel[] = [
  STORIES[0],
  ASANAS[1],
  STORIES[10],
  ASANAS[2],
  STORIES[1],
  ASANAS[3],
  STORIES[2],
  ASANAS[0],
  ASANAS[4],
  STORIES[3],
  ASANAS[5],
  STORIES[4],
  ASANAS[6],
  ASANAS[7],
  STORIES[5],
  ASANAS[8],
  STORIES[6],
  ASANAS[9],
  STORIES[8],
  ASANAS[10],
  STORIES[9],
  ASANAS[11],
  STORIES[7],
  ASANAS[12]
];
