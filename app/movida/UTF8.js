/*
    Excel can be forced using UTF-8 for CSV with putting a BOM (Byte Order Mark) as first characters in the file. 
    The default BOM for UTF-8 is the byte sequence 0xEF,0xBB,0xBF. So one could think simply putting "\xEF\xBB\xBF"
    as first bytes to the string will be the solution. But surely that would be too simple, wouldn't it? ;-) 
    The problem with this is how to force JavaScript to not taking those bytes as characters. 
    The "solution" is using a "universal BOM" "\uFEFF" as mentioned in Special
    More: https://stackoverflow.com/questions/42462764/javascript-export-csv-encoding-utf-8-issue
*/
const link = document.createElement('a');
const makeUTF8DefaultAtExcel = "\uFEFF";
link.setAttribute('href', `data:text/csv;charset=utf-8,${makeUTF8DefaultAtExcel + encodeURIComponent(csv)}`);