function showDiffDate( tYear, tMonth, tDay) {
    // 現在日時を数値に変換
   var nowDate = new Date();
   var dnumNow = nowDate.getTime();
 
   // 指定日時を数値に変換
   var targetDate = new Date( tYear, tMonth-1, tDay );  // 月の値は 1 を引く必要がある点に注意。(※1月は0、2月は1、……12月は11)
   var dnumTarget = targetDate.getTime();
 
   // 引き算して残日数を計算
   var diffMSec = dnumTarget - dnumNow;
   var diffDays = diffMSec / ( 1000 * 60 * 60 * 24 );
   var showDays = Math.ceil( diffDays ); // 小数点以下を切り上げる
 
   // 表示
   if( showDays > 0 ) {
	   document.getElementsByClassName('day-gacha')[0].innerHTML = "プレイアブルまであと" + (showDays + 1) + "日";
   } else if( showDays = 0 ) {
	   document.getElementsByClassName('day-gacha')[0].innerHTML = "本日プレイアブル！";
   }
}

//画像読み込み
var loadingmoucheimageHat;
var moucheimgHat;
var moucheimgNoHat;
var button;
var box;
function load3DModelScraamouche() {
	box = document.getElementById("3dmodel_scaramouche");
	
	box.insertAdjacentHTML('beforeend', '<cite>引用: <a target="_blank" href="https://twitter.com/lumie_lumie/status/1347651428668633088">Lumie</a></cite>、<a target="_blank" href="https://twitter.com/genshinBLANK/status/1587859890596450313">BLANK</a></cite>');	
	box.style.display = "display";
	button = document.getElementById("3dmodel_scaramouche_button");
	button.style.visibility = "hidden";
	
	moucheimgHat = document.getElementById("3dmodel_scaramouche_hat");
    moucheimgHat.src = "https://github.com/giarchive/giarchive.github.io/blob/main/7843A755-165A-4731-92C9-ABA1DFE252C3.png?raw=true";

	moucheimgNoHat = document.getElementById("3dmodel_scaramouche_nohat");
    moucheimgNoHat.src = "https://github.com/giarchive/giarchive.github.io/blob/main/F24E47B5-BA39-478A-B347-D741D4EB69CB.png?raw=true";
	
	wanderer = document.getElementById("3dmodel_wanderer");
    wanderer.src = "https://github.com/giarchive/3.2/blob/main/Img/27585D7D-0B3D-4522-B18B-3319792F2E28.png?raw=true";
}
