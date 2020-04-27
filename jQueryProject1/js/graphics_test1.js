    /* SVGで画像表示 */
    var $inc = 100;

    $(function(){
        /* Raphael.js:SVGを使うライブラリ */
        /* Raphaëlで円を表示。*/
        var paper = Raphael("container", 1400, 300); 
        var dot = paper.circle(250, 150, 70).attr({
        fill: "#DDA755", //#7F0
        stroke: "#110000", //#9F0
        "stroke-width": 2 
        });
    
        for(var i = 0; i < 5; i+=1) {
        var multiplier = i*5;
        paper.circle(250 + (2*multiplier), 150 + multiplier, 50 - multiplier);
        }
        
        $("#container").on('click', function(){
        	var $cx = dot.attr('cx');
        	if($cx <= 150){
        	    $cx = 150;
        		$inc *= -1;
        	}
        	if($cx >= 1070){
        	    $cx = 1070;
        		$inc *= -1;
        	}
	        dot.animate({'cx':$cx + $inc, 'cy':70}, 350, function(){this.animate({'cx':$cx + $inc * 2, 'cy':230}, 350)});
        });

        /* Mapaelで地図を表示。*/
        $(".container").mapael({
            map : {
            name : "japan"//world_countries"
            }
        });        
    });

    /* jQueryプラグイン JapanMap */
    /* canvasで日本地図を表示    */
    $(function(){
		//地域を設定
		//{"code":[地域のコード], "name": [地域の名前], "color":[地域につける色], "hoverColor":[地域をマウスでホバーしたときの色], "prefectures":[地域に含まれる都道府県のコード]}
		var areas = [
			{"code": 1 , "name":"北海道地方", "color":"#ca93ea", "hoverColor":"#e0b1fb", "prefectures":[1]},
			{"code": 2 , "name":"東北地方",   "color":"#a7a5ea", "hoverColor":"#d6d4fd", "prefectures":[2,3,4,5,6,7]},
			{"code": 3 , "name":"関東地方",   "color":"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[8,9,10,11,12,13,14]},
			{"code": 4 , "name":"北陸・甲信越地方",   "color":"#52d49c", "hoverColor":"#93ecc5", "prefectures":[15,16,17,18,19,20]},
			{"code": 4 , "name":"東海地方",   "color":"#77e18e", "hoverColor":"#aff9bf", "prefectures":[21,22,23,24]},
			{"code": 6 , "name":"近畿地方",   "color":"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[25,26,27,28,29,30]},
			{"code": 7 , "name":"中国地方",   "color":"#f9ca6c", "hoverColor":"#ffe5b0", "prefectures":[31,32,33,34,35]},
			{"code": 8 , "name":"四国地方",   "color":"#fbad8b", "hoverColor":"#ffd7c5", "prefectures":[36,37,38,39]},
			{"code": 9 , "name":"九州地方",   "color":"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[40,41,42,43,44,45,46]},
			{"code":10 , "name":"沖縄地方",   "color":"#ea89c4", "hoverColor":"#fdcae9", "prefectures":[47]}
		];
 
		//リンク先を連想配列で設定
		var areaLinks = {
			"北海道地方" : "area.php?area=北海道地方",
			"東北地方" : "area.php?area=東北地方&prefecture1=宮城&prefecture2=山形",
			"関東地方" : "area.php?area=" + encodeURIComponent('関東地方') + "&prefecture1=千葉&prefecture2=埼玉&latitude=35.664035&longitude=139.698212",
			"北陸・甲信越地方" : "area.php?area=北陸・甲信越地方&prefecture1=不明&prefecture2=不明",
			"東海地方" : "area.php?area=東海地方&prefecture1=静岡&prefecture2=不明",
			"近畿地方" : "area.php?area=近畿地方&prefecture1=大阪&prefecture2=京都&latitude=34.68639&longitude=135.52",
			"中国地方" : "area.php?area=中国地方&prefecture1=山口&prefecture2=広島&latitude=34.39639&longitude=132.45944",
			"四国地方" : "area.php?area=四国地方&prefecture1=徳島&prefecture2=高知&latitude=34.06583&longitude=134.55944",
			"九州地方" : "area.php?area=九州地方&prefecture1=鹿児島&prefecture2=埼玉&latitude=31.56028&longitude=130.55806",
			"沖縄地方" : "area.php?area=沖縄地方&prefecture1=那覇&prefecture2=八重山&latitude=26.2125&longitude=127.68111",
		};

		$("#mapJapan").japanMap(
			{
				areas  : areas, //上で設定したエリアの情報
				selection : "prefecture", //選ぶことができる範囲(県→prefecture、エリア→area)
				borderLineWidth: 0.25, //線の幅
				drawsBoxLine : false, //canvasを線で囲む場合はtrue
				movesIslands : true, //南西諸島を左上に移動させるときはtrue、移動させないときはfalse
				showsAreaName : true, //エリア名を表示しない場合はfalse
				width: 800, //canvasのwidth。別途heightも指定可。
				backgroundColor: "#ffffff", //canvasの背景色
				font : "MS Mincho", //地図に表示する文字のフォント
				fontSize : 12, //地図に表示する文字のサイズ
				fontColor : "areaColor", //地図に表示する文字の色。"areaColor"でエリアの色に合わせる
				fontShadowColor : "black", //地図に表示する文字の影の色
				onSelect:function(data){ //選択範囲をクリックしたときに実行
					alert(data.area.name + "に遷移します。");
					location.href = areaLinks[data.area.name]; //data.area.nameは選択したエリアの名前
				}
			}
		);
    /******** Leafletで地図を作成する *************/
    $(function(){alert($("#container").offset().top);
    	// 以下のようなクエリ文字列を配列に取得。
    	// ?area=関東地方&prefecture1=千葉&prefecture2=埼玉&latitude=35.664035&longitude=139.698212
		// 緯度:result[8],経度:result[10]
		// var map = L.map('map_leaflet2').setView([35.664035, 139.698212], 15);
    	var search = window.location.search ;
    	var result = search.split(/\?|=|&/);
		var map = L.map('map_leaflet2').setView([result[8], result[10]], 15);

        //OpenStreetMapレイヤー追加
//		var tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//        	maxZoom: 18,
//        	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//    	});

//        var tiles = L.tileLayer('http://tiles.mapc.org/basemap/{z}/{x}/{y}.png',{
//             attribution: 'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
//             maxZoom: 17,
//             minZoom: 9
//         });
        //地理院地図レイヤー追加
        var tiles = L.tileLayer(
	        'http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
	        {
		        attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>"
	        });
        //地理院地図(英語)レイヤー追加
//        var tiles = L.tileLayer(
//	        'http://cyberjapandata.gsi.go.jp/xyz/english/{z}/{x}/{y}.png',
//	        {
//		        attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>国土地理院</a>"
//	        });

	    map.addLayer(tiles);
	    L.marker([35.664035, 139.698212]).bindPopup("マーカーをクリックしました。").addTo(map);
	    L.marker([35.658182, 139.702043]).bindPopup("〒150-8319 東京都渋谷区渋谷２丁目２４ 渋谷駅").addTo(map);
	});

	    /*
	        var mymap = L.map('map_leaflet');
 
	    // タイルレイヤーを作成し、地図にセットする
	        L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
//	        L.tileLayer('https://cyberjapandata.gsi.go.jp/#4/34.518/139.065.png, {
	          maxZoom: 18,
	          attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',
	    }).addTo(mymap);*/
	});

	/* JapanMap上で地方リンクをクリックしたときの処理
	$(function(){
// 地図の中心座標とズームレベルを設定する
mymap.setView([37.508106, 139.930239], 13);		//リンク先を連想配列で設定
		var areaLinks = {
			"北海道地方" : "area.php?area=北海道地方",
			"東北地方" : "area.php?area=東北地方",
			"関東地方" : "area.php?area=関東地方",
			"北陸・甲信越地方" : "area.php?area=北陸・甲信越地方",
			"東海地方" : "area.php?area=東海地方",
			"近畿地方" : "area.php?area=近畿地方",
			"中国地方" : "area.php?area=中国地方",
			"四国地方" : "area.php?area=四国地方",
			"九州地方" : "area.php?area=九州地方",
			"沖縄地方" : "area.php?area=沖縄地方",
		};

		$("#mapJapan").japanMap(
			{
				onSelect:function(data){ //選択範囲をクリックしたときに実行
					location.href = areaLinks[data.area.name]; //data.area.nameは選択したエリアの名前
					alert(location.href);
				}
			}
		);
	}); */
