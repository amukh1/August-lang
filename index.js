#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import {createSpinner} from 'nanospinner';
import fs from 'fs';
import fetch from 'node-fetch';
import {exec} from 'child_process';
import Assember from './assembler.js';
import Compiler from './compiler.js';

async function main() {
    figlet('AUGUST', function(err, data) {
console.log(gradient.pastel.multiline(data))
    });

    setTimeout(() => {
        console.clear();
        console.log(chalk.bold.yellow('Developed By: Amukh1'))
    const spinner = createSpinner('Compiling..').start()

    setTimeout(() => {
      spinner.success({text: 'Done!'})
    //   go()
    croc()
    }, 1000)
    // console.log('\n')
    }, 2000)
}

async function go() {
    const response = await inquirer.prompt({
        type:'input',
        name: 'File',
        message: 'Enter the file name:',
      }).then(function(a){
        handleAnswer(a)
      })

}

function handleAnswer(a) {
    // console.log(a)
    
    const file = a.File

}

function croc() {
    const args = process.argv.slice(2);
    // console.log(args[0])
    // fs readfile
    const code = fs.readFileSync(args[0].toString(), {encoding: 'utf-8'});
    // const assember = new Assember(code);

    // make folder dist if it doesnt exist already
    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
    }
    // assember.compile()
    if((args[0].toString()).slice(2).endsWith('.aug')){
        const compiler = new Compiler(code);
        fs.writeFileSync(`./dist/${((args[0].toString()).slice(2)).slice(0, -4)}.asm`, compiler.compile());
        const assember = new Assember(compiler.compile());
        fs.writeFileSync(`./dist/${((args[0].toString()).slice(2)).slice(0, -4)}.bin`, assember.compile());
    }else if((args[0].toString()).slice(2).endsWith('.asm')){
        const assember = new Assember(code);
        fs.writeFileSync(`./${((args[0].toString()).slice(2)).slice(0, -4)}.bin`, assember.compile());
    }else{
        console.error(chalk.bold.red(`FATAL ERROR: FILE TYPE NOT SUPPORTED`))
        throw new Error('FATAL ERROR: FILE TYPE NOT SUPPORTED')
    }

}

main()