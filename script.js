$(function () {
  searchWord = function(){
    var searchText = $(this).val(), // 検索ボックスに入力された値
        targetText;

    $('.target-area li').each(function() {
      targetText = $(this).text();

      // 検索対象となるリストに入力された文字列が存在するかどうかを判断
      if (targetText.indexOf(searchText) != -1) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
  };

  // searchWordの実行
  $('#search-text').on('input', searchWord);
});

//画像読み込み
var loadingmoucheimageHat;
var moucheimgHat;
var moucheimgNoHat;
var button;
var box;
function load3DModelScraamouche() {
	box = document.getElementById("3dmodel_scaramouche");
	
	box.insertAdjacentHTML('beforeend', '<cite>引用: <a href="https://twitter.com/lumie_lumie/status/1347651428668633088">Lumie</a></cite>');	
	box.style.display = "display";
	button = document.getElementById("3dmodel_scaramouche_button");
	button.style.visibility = "hidden";
	
	moucheimgHat = document.getElementById("3dmodel_scaramouche_hat");
    moucheimgHat.src = "https://github.com/giarchive/giarchive.github.io/blob/main/7843A755-165A-4731-92C9-ABA1DFE252C3.png?raw=true";

	moucheimgNoHat = document.getElementById("3dmodel_scaramouche_nohat");
    moucheimgNoHat.src = "https://github.com/giarchive/giarchive.github.io/blob/main/F24E47B5-BA39-478A-B347-D741D4EB69CB.png?raw=true";
}