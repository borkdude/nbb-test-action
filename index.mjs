import { loadFile } from 'nbb';
import { resolve, dirname } from 'path';
import * as actionsCore from '@actions/core';
import * as actionsGithub from '@actions/github';

const __dirname = dirname(".");
const theFile = resolve(__dirname,'action.cljs');
const { action } = await loadFile(theFile);
action(actionsCore,actionsGithub);
