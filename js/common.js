console.log("jsファイルからHello World");


// ------------twwetボタン------------

function twitText() {
	var s, url;
	s = "JSでTwitterを開いて投稿しているよ！";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}


// ------------tweetボタン------------


console.log("erika" + "miyagi");
console.log("SUNABACO".split("A"));
console.log("sumomo,mikan,tokyo,".split(","));

var students = "えりか";
console.log(students);
students = "みや";
console.log(students);

students = ["すずか","やすなり","うめグミ"]
console.log(students);

console.log(students[2]);
students[0] = "あきほ";
console.log(students);

var sunabaco = {"沖縄":"KOZA","北海道":"EBETSU","香川":"TAKAMATSU"}
console.log(sunabaco);
console.log(sunabaco["北海道"]);

//条件分 if文の基本構文

var licence_flag = 1;  //次の条件分で使うための下準備
var now = 14;

if (licence_flag == 1){
    console.log("車を運転できます");
}else if(now>22){
    console.log("電車で帰れます");
}else{
    console.log("免許がないので運転できません");
}


// 練習問題

var limit = 10;
var getup = 10;

if(limit<getup){
    console.log("遅刻です");
} else if(limit==getup){
    console.log("ギリギリセーフ！");
} else {
    console.log("よくがんばりました");
}

// 繰り返し文 for文

for (var i=1;i<=20;i++){
    console.log(i);
}

for (var i=0;i<=25;i++){
	console.log(i+"番目");
}


function greet(user_name){
	var massege = user_name + "さん、こんにちは";
	console.log(massege);
}

console.log(greet("えりか"));

