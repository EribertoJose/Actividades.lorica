var salida='';
function calcular() {
            const Items=document.getElementById("Items").value;
            const cantm = document.getElementById("cantm").value;
            const valorCaja = document.getElementById("valorCaja").value;

            if (Items===""|| cantm === "" || valorCaja === "") {
                alert("Por favor, complete todos los campos.");
                return;
            }
const total = (1*parseFloat(valorCaja))/parseInt(cantm);

            salida += '<tr><td>Items</td>' + 
                      '<td>' + Items + '</td>' +
                      '<td>' + cantm + '</td>' +
                      '<td>' + valorCaja + '</td>' +
                      '<td>' + total.toFixed(2) + '</td></tr>';
            document.getElementById("resultado").innerHTML = salida;
            Limpiar();
}

// Function to clear the input fields
function Limpiar() { document.getElementById("items").value = "";
            document.getElementById("Items").value = "";
            document.getElementById("cantm").value = "";
            document.getElementById("valorCaja").value = ""; 
        } 