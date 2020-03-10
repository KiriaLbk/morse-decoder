const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str='';
    let s='';
    let completestr='';
    let ten=0;
    let arr=[];
    expr=expr.split('');
    for(let count=1;count<=expr.length/10;count++)
    {
        for(let c=ten;c<10+ten;c++)
        {
            str+=expr[c];
        }
        ten+=10;
        arr.push(str);    
        str='';
    }
    for(let num=0;num<arr.length;num++)
    {
        if(arr[num][0]=='*')
        {
            completestr+=' ';
            continue;    
        }
        let item=arr[num].indexOf('1');
        for(let number=item;number<10;number++)
        {
            str+=arr[num][number];
            if(str=='10')
            {
                s+='.';
                str='';
            }
            if(str=='11')
            {
                s+='-';
                str='';
            }
        }
        completestr+=MORSE_TABLE[s];
        s='';
    }
    return completestr;
}

module.exports = {
    decode
}