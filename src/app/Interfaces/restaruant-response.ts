import { Restaruant } from './restaruant';
import { RestaruantWrapper } from './restaruant-wraper';

export interface RestaruantResponse {
  results_found: number;
  results_start: number;
  results_shown: number;
  restaruants: Array<RestaruantWrapper>;
}
