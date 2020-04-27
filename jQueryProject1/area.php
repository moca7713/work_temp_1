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
<script type="text/javascript"  src="./js/jquery-3.4.1.min.js"></script>
<script type="text/javascript" src="./js/graphics_test1.js"></script>
<!-- どちらも可 Leafletの表示にjquery.japan-map.min.js必要
<script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"></script>
-->
<script type="text/javascript" src="./js/jquery.japan-map.min.js"></script>
<script src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js"></script>
<title>jQuery Test Page 2</title>
</head>
<body>
    <?php
    $email = '';
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    if(is_string($email)){
        echo "e-mail: ".$email.'<br/>';
    }
    echo $_GET['area'];
    $latitude = $_GET['latitude'];
    $longitude = $_GET['longitude'];
    ?>
    <table id="table1" class="color_table" border="1" style="border-collapse: collapse">
        <?php
    	if(!is_null($latitude)){
           print "<tr><th>緯度</th>";
           print "<td>".$latitude."</td></tr>";
        }
        if(!is_null($longitude)){
           print "<tr><th>経度</th>";
           print "<td>".$longitude."</td></tr>";
        }else{
        }
        ?>
    </table><br/>
    <table id="table1" class="color_table" border="1" style="border-collapse: collapse">
        <tr>
           <th>県名</th>
           <td>県1</td><td>県2</td>
        </tr>
        <tr>
           <th>名産品</th>
           <td>梨</td>
           <td>なし</td>
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
    <form>
       メールアドレス<input type='text' name='email'>
    </form><br/>
   <hr><br/>
   <div class="container1 container4">
   <pre>
/****** Leafletで地図表示 ******/
var map = L.map('map_leaflet2').setView([35.664035, 139.698212], 15);
   </pre>
       &lt;div id="map_leaflet2"&gt;
       <div id="map_leaflet2" class="container1"></div><br/>
       &lt;/div&gt;
   </div>
</body>
</html>
