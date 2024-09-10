

$(document).ready(function(){
    
    var nr_c = '';

    $('.bt-calc').click(function() {

        var nr = $(this).text(); 
        
        nr_c = nr_c.concat(nr);
        
        $('#txt_display').text(nr_c);
        
    });
});<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>calculadora matemática</title>

    <link rel="stylesheet" href="tools/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">

    <script src="tools/jquery/jquery.min.js"></script>
    <script src="js/scripts.js"></script>
</head>
<body>
    <div id="interface">
        <header class="cabecalho">
            <h2>calculadora</h2>
        </header>
        <main>
            <div class="container-tools">
                <table>
                    <tr>
                        <td colspan="5">
                            <div id="painel">
                                <p id="txt_operadores">5 +</p>
                                <input type="text" id="txt_display" placeholder="0" />
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td><button class="bt-calc"><i class="fas fa-long-arrow-alt-left"></i></button></td>
                        <td><button class="bt-calc">MR</button></td>
                        <td><button class="bt-calc">M+</button></td>
                        <td><button class="bt-calc">M-</button></td>
                        <td><button class="bt-calc" id="bt-acce">AC/CE</button></td>
                    </tr>
                   
                    <tr>
                        <td><button class="bt_calc">7</button></td>
                        <td><button class="bt_calc">8</button></td>
                        <td><button class="bt_calc">9</button></td>
                        <td><button class="bt_calc">X</button></td>
                        <td><button class="bt_calc">/</button></td>
                    </tr>

                    <tr>
                        <td><button class="bt_calc">4</button></td>
                        <td><button class="bt_calc">5</button></td>
                        <td><button class="bt_calc">6</button></td>
                        <td><button class="bt_calc">-</button></td>
                        <td><button class="bt_calc">%</button></td>
                    </tr>

                    <tr>
                        <td><button class="bt-calc">1</button></td>
                        <td><button class="bt-calc">2</button></td>
                        <td><button class="bt-calc">3</button></td>
                        <td rowspan="2"><button class="bt-calc" id="bt-plus">+</button></td>
                        <td rowspan="2"><button class="bt-calc" id="bt-equal">=</button></td>
                    </tr>

                    <tr>
                        <td><button class="bt-calc">0</button></td>
                        <td><button class="bt-calc">00</button></td>
                        <td><button class="bt-calc">.</button></td>
                    </tr>
                    
                </table>
            </div>
        </main>
    </div>
</body>
</html>