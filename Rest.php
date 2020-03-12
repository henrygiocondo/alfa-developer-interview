
<?php


$Dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);

//var_dump($Dados);

if($Dados['url'] == 'btnTeste1'){
    //$var1 = urlencode('FirstName eq \''.$Dados['Busca'].'\' or LastName eq \''.$Dados['Busca'].'\'');
    $var1 = urlencode('contains(UserName, \''.$Dados['Busca'].'\')');
    $url = 'https://services.odata.org/TripPinRESTierService/(S(2vlqrvbdfscekprur1xnbvwx))/People?$filter=' . $var1;
}

if($Dados['url'] == 'btnTeste2'){
    $url = "https://services.odata.org/TripPinRESTierService/(S(2vlqrvbdfscekprur1xnbvwx))/People('russellwhyte')";
}

if($Dados['url'] == 'btnTeste3'){
    $var1 = urlencode('(\''.$Dados['Busca'].'\')');
    $url = "https://services.odata.org/TripPinRESTierService/(S(2vlqrvbdfscekprur1xnbvwx))/People" . $var1;
}

if($Dados['url'] == 'btnTeste4'){
    $var1 = urlencode('contains(Location/Address, \''.$Dados['Busca'].'\')');
    $url = 'https://services.odata.org/TripPinRESTierService/Airports?$filter=' . $var1;
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url  );
curl_setopt($ch, CURLOPT_TIMEOUT, 500);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($chs,CURLOPT_SSL_VERIFYPEER,2);
curl_setopt($chs,CURLOPT_SSL_VERIFYHOST,2);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $Dados['tipo']);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION , true);
curl_setopt($ch, CURLOPT_HTTP_VERSION , CURL_HTTP_VERSION_1_1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json','key: (S(2vlqrvbdfscekprur1xnbvwx))'));


curl_setopt($ch, CURLOPT_POSTFIELDS, $Dados['Busca']);

$result = curl_exec($ch);

if($Dados['url'] == 'btnTeste3'){
    if($result==''){
      echo '{	"status": "OK" }';
    }
}else{
    Echo $result;
}


?>