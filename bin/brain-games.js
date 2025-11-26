#!/usr/bin/env node
import { askName } from '../src/cli.js'

export function brainGames() {
  console.log('Welcome to the Brain Games!')
  return askName()
}
export const name = brainGames()
