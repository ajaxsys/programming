
//
// ネコの初期設定
//
var cat;
var catTop = 100;
var catLeft = 100;
var rotate = 0;
var hue = 0;

// 全部のファイル読み込まれたときに実行されるところ
window.onload = function() {
    cat = document.getElementById("cat");
    updateCat();
};

// ボタンが押された時に実行されるところ
function onButtonClick() {
    //
    // ここにプログラムを書いていこう
    //
}

// ネコの状態を更新する
function updateCat() {
    cat.style.top = catTop + 'px';
    cat.style.left = catLeft + 'px';
    cat.style.transform =  'rotate(' + rotate + 'deg)';
    cat.style.filter =  'hue-rotate(' + hue + 'deg)';
}
