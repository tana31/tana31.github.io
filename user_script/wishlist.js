'use strict';
const userSet = {
    'script_name' : '行きたいところリスト'
}
function main() {

    const inputarea = document.getElementById("input");
    inputarea.innerHTML = el; 
    window.addEventListener("load", csvread, false);

    function csvread(){
        let input_text = document.getElementById('input').innerHTML;
        let csv_table = input_text.trim().split("\n");
        let result = [];
            for (let tr of csv_table){
                tr = tr.trim().split(",");
                result.push(tr);
            }
        let html = '';
        for (let tr of result){
            html += '<tr>'
            for (let td of tr){
                html += '<td>' + td + '</td>';
            }
            html += '</tr>'
        }

        let output = document.getElementById('output');
        output.innerHTML = '<table>' + html + '</table>';
    }


}
main();
