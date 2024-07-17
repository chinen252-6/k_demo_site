//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on("load", function () {
    // MEMO: まずはHTML（DOM）から変更を与える部分を持ってくる
    var accordion = $(".question__accordion-area__flex");
    // MEMO: console.logで検証ツールの「コンソール」に出せる
    console.log("↓これがaccordion");
    // MEMO: accordionは3人組
    console.log(accordion);
    // MEMO: each文で1人ずつ処理する
    accordion.each(function (index, value) {
        // console.log("↓index");
        // console.log(index);
        // console.log("↓value");
        // console.log(value);
        var slideUpElm = $(value).next(".question__accordion-area__bottom"); //直後のアコーディオンを行うエリアを取得し
        $(slideUpElm).slideUp(); //アコーディオンの上下動作
    });
    // MEMO: 最初から閉じていることが望ましい・・
});

$(".question__accordion-area__flex").on("click", function () {
    //タイトル要素をクリックしたら
    var findElm = $(this).next(".question__accordion-area__bottom"); //直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle(); //アコーディオンの上下動作

    if ($(this).hasClass("close")) {
        //タイトル要素にクラス名closeがあれば
        $(this).removeClass("close"); //クラス名を除去し
    } else {
        //それ以外は
        $(this).addClass("close"); //クラス名closeを付与
    }
});
