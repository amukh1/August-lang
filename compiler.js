import chalk from 'chalk';

class Compiler {
    constructor(code) {
        this.code = code
    }
    compile() { 
           let functions = this.code.split(';')
           let result = []
        // console.log(functions)
            functions = functions.filter(function(e) {
                return String(e).trim();
            });

             functions.forEach((fun, index)=> {
                // console.log(func)
                let func = fun.split('\n').join('')
                func = fun.split('\n').join('')
                // console.log(func)
                let args = func.split(' ')
                // console.log(args)
                if(args[0].split('\r').join('') == 'null'||args[0].split('\r').join('') == 'nullset'||args[0].split('\r').join('') == 'Noop'){
                    result.push('No-Op')
                }else if(args[0].split('\r').join('') == 'End'){
                    result.push('Halt')
                }else if(args[0].split('\r').join('') == 'Jump'){
                    result.push(`JMP ${args[1]}`)
                }else if(args[0].split('\r').join('') == 'If'){
                    result.push(`BRANCH ${args[1]} ${args[2]}`)
                }else if(args[0].split('\r').join('') == 'Input'){
                    result.push(`INPUT ${args[1]} ${args[2]}`)
                }else if(args[0].split('\r').join('') == 'Output'){
                    result.push(`OUTPUT ${args[1]} ${args[2]}`)
                }else if(args[0].split('\r').join('') == 'Load'){
                    result.push(`LOAD_IMDT ${args[1]} ${func.slice(8)}`)
                }else if(args[0].split('\r').join('') == 'Save'){
                    result.push(`STORE ${args[1]} ${args[2]}`)
                }else if(args[0].split('\r').join('') == 'Fetch'){
                    result.push(`LOAD ${args[1]} ${args[2]}`)
                }else if(args[0].split('\r').join('') == 'Add'){
                    result.push(`ADD ${args[1]} ${args[2]}`)
                }else if(args[0].split('\r').join('') == 'Sub'){
                    result.push(`SUB ${args[1]} ${args[2]} ${args[3]}`)
                }else if(args[0].split('\r').join('') == 'BIT'){
                    result.push(`BITWISE ${args[1]} ${args[2]} ${args[3]} ${args[4]}`)
                }else if(args[0].split('\r').join('') == 'BTN'){
                    result.push(`-BITWISE ${args[1]} ${args[2]} ${args[3]} ${args[4]}`)
                }else if(args[0].split('\r').join('') == '#'){
                    console.log(chalk.bold.green(func))
                    return
                }else if(args[0].split('\r').join('') == 'STDOUT'){
                    // /(?<=a).*(?=b)/
                    let regex = /(?<=>>).*(?=>>)/
                    result.push(`LOAD_IMDT 07 ${func.match(regex)}`)
                    result.push(`OUTPUT 06 07`)
                }else if(args[0].split('\r').join('') == 'Math'){
                   result.push(`MATH ${args[1]} ${args[2]}`)
                }
            });

            // console.log(functions)
            return result.join('\n')
    }
}

export default Compiler