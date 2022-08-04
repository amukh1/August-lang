class Assember {
    constructor(code){
        this.code = code
    }

/*
No-Op - 0000
Halt - 0001
JMP - 0010
Branch - 0011
Input - 0100
Output - 0101
Store - 0110
Load - 0111 
Load IMDT (immediate) - 1000
Load ALU A - 1001
Load ALU B - 1010
Add - 1011
Sub - 1100
Bitwise - 1101
-Bitwise - 1110
*/

// /([^\?]*)\?$=(\d*)/

    compile() {
       let code = this.code.split('\n')
    //    final = final.replace('NO-OP', '0000')
    //      final = final.replace('HALT', '0001')
    //         final = final.replace('JMP', '0010')
    //             final = final.replace('BRANCH', '0011')
    //                 final = final.replace('INPUT', '0100')
    //                     final = final.replace('OUTPUT', '0101')
    //                         final = final.replace('STORE', '0110')
    //                                 final = final.replace('LOAD_IMDT', '1000')
    //                                     final = final.replace('LOAD_ALU_A', '1001')
    //                                         final = final.replace('LOAD_ALU_B', '1010')
    //                                             final = final.replace('ADD', '1011')
    //                                                 final = final.replace('SUB', '1100')
    //                                                     final = final.replace('BITWISE', '1101')
    //                                                         final = final.replace('-BITWISE', '1110')
    //                                                             final = final.replace('LOAD', '0111')
    //                                                                 final = final.replace('EOF', '')
    //                                                                     final = final.replace(/\$/g, '')
    //                                                                             final = final.replace(/ /g, '')


// final = final.replace(/(?<=$).+?(?=\$)/g, (match)=>{return (match - 0).toString(2).padStart(2, "0")})
// final = final.replace(/\d/g, (match)=>{return (match - 0).toString(2).padStart(4, "0")})
// final = final.replace(/\^/g, '')

let opcodesflipped = {
    '0000': 'No-Op',
    '0001': 'Halt',
    '0010': 'INPUT',
    '0011': 'OUTPUT',
    '0100': 'STORE',
    '0101': 'LOAD',
    '0110': 'ADD',
    '0111': 'SUB',
    '1000': 'BITWISE',
    '1001': '-BITWISE',
    '1010': 'LOAD_IMDT',
    '1011': 'JMP',
    '1100': 'BRANCH',
    '1101': 'CALL',
    '1110': 'RETURN',
    '1111': 'HIGH-MATH',
}

let opcodes = {
    'No-Op': '0000', 
    'Halt': '0001',
    'INPUT': '0010',
    'OUTPUT': '0011',
    'STORE': '0100',
    'LOAD': '0101',
    'ADD': '0110',
    'SUB': '0111',
    'BITWISE': '1000',
    '-BITWISE': '1001',
    'LOAD_IMDT': '1010',
    'JMP': '1011',
    'BRANCH': '1100',
    'CALL': '1101',
    'RETURN': '1110',
    'MATH': '1111',
}

let final = []

        for(let i =0; i<code.length; i++){
            let line = code[i]
            let opcode = opcodes[line.split(' ')[0]]
            let op = line.split(' ')[0]
            let operands // 12 digits
            if(op == 'Halt'){
                operands = '000000000000'
            }else if(op == 'No-Op'){
                operands = '000000000000'
            }else if(op == 'JMP'){
                operands = `0000${line.split(' ')[1]}`
            }else if(op == 'BRANCH'){
                operands = `00${line.split(' ')[1]}${line.split(' ')[2]}`
            }else if(op == 'INPUT'){
                operands = `${line.split(' ')[1]}00000000${line.split(' ')[2]}`
            }else if (op == 'OUTPUT'){
                operands = `0000${line.split(' ')[1]}${line.slice(10)}`
            }else if(op == 'STORE'){
                operands = `000000${line.split(' ')[1]}0${line.split(' ')[2]}`
            }else if(op == 'LOAD_IMDT'){
                operands = `${line.split(' ')[1]}00${line.slice(13)}`
            }else if(op == 'ADD') {
                operands = `${line.split(' ')[1]}${line.split(' ')[2]}`
            }else if(op == 'SUB') {
                operands = `${line.split(' ')[1]}000000${line.split(' ')[2]}00${line.split(' ')[3]}`
            }else if(op == 'LOAD'){
                operands = `${line.split(' ')[1]}0000000${line.split(' ')[2]}`
            }else if(op == 'BITWISE'){
                operands = `${line.split(' ')[1]}${line.split(' ')[2]}0000${line.split(' ')[3]}${line.split(' ')[4]}`
            }else if(op == '-BITWISE'){
                operands = `${line.split(' ')[1]}${line.split(' ')[2]}0000${line.split(' ')[3]}${line.split(' ')[4]}`
            }else if(op == 'MATH'){
                operands = `${line.split(' ')[1]}${line.split(' ')[2]}`
            }

            final.push(`${opcode}${operands}`)
        }

       return final.join('\n')
    }
}

export default Assember