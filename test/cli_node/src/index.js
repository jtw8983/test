console.log("자바스크립트")

import { Command } from 'commander';
import { addWord } from './cmd.js'
import { list } from './cmd.js'
import { remove } from './cmd.js'
import { update } from './cmd.js'

const program = new Command();

program
  .command('add <word>')
  .description('메모 추가')
  .action(addWord);

program
  .command('list')
  .description('목록 보기')
  .action(list);

program
  .command('remove <id>')
  .description('메모 삭제')
  .action(remove);

program
  .command('update <id> <word>')
  .description('메모 수정')
  .action(update);

program.parse(process.argv);