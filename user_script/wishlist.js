'use strict';
const userSet = {
    'script_name' : '行きたいところリスト'
}
function main() {

    const inputarea = document.getElementById("input");
    inputarea.innerHTML = data;  // 変数dataは、readdata/ 内データ
    window.addEventListener("load", csvread, false);

    function csvread(){
        let input_text = document.getElementById('input').innerText;

        // 改行コードで分割し、配列に格納
        let csv_table = input_text.trim().split("\n");

        // 二次元配列生成
        let dim_array = [];
        for (let tr of csv_table){
            tr = tr.trim().split(",");
            dim_array.push(tr);
        }
        // タイトル行削除、見出し
        const sp_h = dim_array.shift();

        // HTML生成
        let html = '';
        html += '<table class="tbl-r05">'
        for(let i=2;i<sp_h.length;i++){
            html += `<th>${sp_h[i]}</th>`;
        }

        for (let tr of dim_array){
            // const place = tr[3];
            // const pref = tr[2];
            html += "<tr>";
            for (let i=2;i<tr.length;i++){
                html += `<td data-label="${sp_h[i]}">${tr[i]}</td>`;
            }
            html += "</tr>";
        }
        html += '</table>'

        let output = document.getElementById('output');
        output.innerHTML = html;
    }


}
main();
