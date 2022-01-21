'use strict';

// ##### 外部JS読み込み用関数 ##### 
// パラメータ取得
function m_getParam_first(){
    let queryString = window.location.search;
    let queryObject = new Object();
    if(queryString){
      queryString = queryString.substring(1);
      let parameters = queryString.split('&');

      for (let i = 0; i < parameters.length; i++) {
        let element = parameters[i].split('=');

        let paramName = decodeURIComponent(element[0]);
        let paramValue = decodeURIComponent(element[1]);

        queryObject[paramName] = paramValue;
      }
    }
    return queryObject;
}

// scriptタグ生成
function m_makeScriptTag(filepath){
    const el = document.getElementById("script_load");
    const make_el = document.createElement('script')
    make_el.setAttribute("src",filepath);
    make_el.setAttribute("type",'text/javascript');
    el.appendChild(make_el);
}

// 外部JS読み込み(定義)
function m_importJs(){
    const param = m_getParam_first();
    const scriptName = param["s_n"];
    const dataName = param["d"];
    const userJs = 'user_script/'+scriptName+'.js';
    const dataJs = 'readdata/'+dataName+'.js';
    const libJs = 'script/lib.js';
    m_makeScriptTag(libJs);
    m_makeScriptTag(dataJs);
    m_makeScriptTag(userJs);
}


// 外部JS読み込み(実行)
m_importJs();


// ##### フレームワーク用関数 ##### 
function m_script_name(){
    const script_name = userSet.script_name;
    document.getElementById('scriptName').innerHTML = script_name;
    document.getElementsByTagName('title')[0].innerHTML = script_name + ' | WebScript';
}

function m_download_name(){
    let script_name = userSet.download_name;
    if(script_name==undefined){
        script_name = 'output.txt';
    }
    document.getElementById('download_name').value = script_name;
}


// ##### ページをすべて読み込み後に実行 ##### 
window.addEventListener('load', main_script,false);
function main_script(){
m_script_name();
m_download_name();
}
