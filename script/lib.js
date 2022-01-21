'use strict';
function Lib_download(result){
    let blob = new Blob([ result ], { "type" : "text/plain" });
    const download_name_el = document.getElementById("download_name");

    const download_name = download_name_el.value;
    const download_content = window.URL.createObjectURL(blob);

    const download = document.getElementById("download");
    const make_el = document.createElement('a')
    make_el.setAttribute("href",download_content);
    make_el.setAttribute("download",download_name);
    download.appendChild(make_el); 
    make_el.innerHTML = "ダウンロード";

}
