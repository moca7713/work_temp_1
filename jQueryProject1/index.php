<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" type="text/css" href="./css/style.css">
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />
<script type="text/javascript" src="./js/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="js/sample.js"></script>

<!-- 以下TableExportに必要なスクリプト -->
<script src="./js/FileSaver.min.js"></script>
<script src="./js/xlsx.mini.js"></script>
<script src="./js/tableexport.min.js"></script>

<!-- 以下mapaelに必要なスクリプト -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js" charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js" charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js" charset="utf-8"></script>
<script src="./js/jquery.mapael.js"></script>
<script src="./js/maps/france_departments.js" charset="utf-8"></script>
<script src="./js/maps/world_countries.js" charset="utf-8"></script>
<script src="./js/maps/usa_states.js" charset="utf-8"></script>
<script src="./js/maps/japan.js" charset="utf-8"></script>

<!-- 以下JapanMapに必要なスクリプト -->
<script type="text/javascript" src="./js/jquery.japan-map.min.js"></script>

<script type="text/javascript" src="./js/graphics_test1.js"></script>

<!-- 以下Leafletに必要なスクリプト -->
<script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"></script>


<!--別ファイルから読み込まずにscriptタグ内に記述する場合 -->
<script type="text/javascript">
    // same as $(function($))
    $(function ($) {
    });
</script>
<title>jQuery Test Page 1</title>
</head>
<body>
    <div class="container1">
    <pre>
/***** Raphaëlで円を表示。*****/
var paper = Raphael("container", 1400, 300); 
var dot = paper.circle(250, 150, 70).attr({
fill: "#7F0", 
stroke: "#9F0", 
"stroke-width": 1 
});
    </pre>
    &lt;div id="container" style="border:thin solid #000000;"&gt;
    <div id="container"></div>
    &lt;/div&gt;
    </div><br/>
    <hr>
    <pre>
/***** Mapaelで地図を表示。*****/<br/>
$(".container").mapael({
    map : {
    name : "japan"//world_countries"
    }
});
    </pre>
    <pre>&lt;div class="container"&gt;</pre>
    <div class="container">
        <div class="map">Alternative content</div>
    </div>
    <pre>&lt;/div&gt;</pre><br/>
    <hr><br/>
    <div class="container1 container3">
        <pre>
/***** SVGを直接インラインで画像表示 *****/
&lt;svg width="80" height="80"&gt; 
    &lt;circle cx="40" cy="40" r="30" stroke="#000" stroke-width="1" fill="#FFF" /&gt; 
        </pre>
        <svg width="80" height="80"> 
            /* filterで影をつける */
            <defs>
              <filter id="f3" x="0" y="0" width="200%" height="200%">
                <feOffset result="offOut" in="SourceAlpha" dx="10" dy="10" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
              </filter>
            </defs>
            <circle cx="40" cy="40" r="30" stroke="#FFF" stroke-width="1" fill="#DDA755" filter="url(#f3)" />
            <line x1="50" y1="45" x2="150" y2="100" stroke="#000000" />
            <rect x="160" y="10" width="100" height="100" fill="#880000" stroke="#FFFFFF" stroke-width="2" filter="url(#f3)"  />
        </svg><br/>
        &lt;/svg&gt;
    </div><br/>
    <hr><br/>
    <div class="container1 container2">
        <pre>
/***** jQueryプラグイン JapanMap *****/
/***** canvasで日本地図を表示    *****/
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
        </pre>
        &lt;div id="mapJapan"&gt;
        <div id="mapJapan"></div>
        &lt;/div&gt;
        <br/>
        <table id="table1" class="color_table" border="1" style="border-collapse: collapse">
            <tr>
                <th>言語</th>
                <td>Python</td>
                <td>C++</td>
            </tr>
            <tr>
                <th>タイプ</th>
                <td>スクリプト型言語</td>
                <td>コンパイラ型言語</td>
            </tr>
        <?php
        for($i = 0; $i < 10; $i++){
            print "<tr><th>".$i."</th>";
            print "<td class='color_row'>";
            print $i;
            print "</td><td>2</td></tr>";
        }
        ?>
        </table>
        <form action="./area.php?area=関東地方&prefecture1=千葉&prefecture2=埼玉&latitude=35.664035&longitude=139.698212" method="post">
            メールアドレス<input type='text' name='email'>
            <input type="submit" value="送信する">
        </form>
    </div>
</body>
</html>
