/*
 *
 * RegisterContainer actions
 *
 */

import {
  REGISTER,
} from './constants';

export function register(user) {
  return {
    type: REGISTER,
    user,
  };
}
