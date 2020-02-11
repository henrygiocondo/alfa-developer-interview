var btnAirport = document.getElementById("btnAirport");
var btnPeople = document.getElementById("btnPeople");
var panelAirport = document.getElementById("panelAirport");
var panelPeople = document.getElementById("panelPeople");
var url = " https://services.odata.org/TripPinRESTierService/";

btnAirport.onclick = function () { 
    panelAirport.setAttribute('class', 'pb_enable');
    panelPeople.setAttribute('class', 'pb_disable');
    loadAirport();
}

btnPeople.onclick = function () { 
    panelAirport.setAttribute('class', 'pb_disable');
    panelPeople.setAttribute('class', 'pb_enable');
    loadPeople();
};


loadAirport = function() { 
    var tblBody = panelAirport.childNodes[3];
    tblBody.innerHTML = ""

    var tr = document.createElement('tr');
    tr.innerHTML = '<th>Nome</th>' +
        '<th>Endereço</th>' +
        '<th>Pais</th>';
    tblBody.appendChild(tr);

    $.get( url + "Airports", function( data ) {
        data.value.forEach(element => {
            console.log(element);
            tr = document.createElement('tr');
            tr.innerHTML = '<td>' + element.Name + '</td>' +
                '<td>' + element.Location.Address + '</td>' +
                '<td>' + element.Location.City.CountryRegion + '</td>';
            tblBody.appendChild(tr); 
        });
      });
}

function loadPeople() { 
    var tblBody = panelPeople.childNodes[3];
    tblBody.innerHTML = ""

    var tr = document.createElement('tr');
    tr.innerHTML = '<th>Nome</th>' +
        '<th>Sobrenome</th>' +
        '<th>Usuário</th>' +
        '<th>#</th>';
    tblBody.appendChild(tr);

    tr = document.createElement('tr');
    tr.innerHTML = '<th><input type="text" id="txtFirstName"></th>' +
        '<th><input type="text" id="txtLastName"></th>' +
        '<th><input type="text" id="txtUserName"></th>' +
        '<th><span style="cursor:pointer" onclick="addPeople()">Incluir</span></th>';
    tblBody.appendChild(tr);

    $.get( url + "People?$top=5", function( data ) {
        data.value.forEach(element => {
            console.log(element);
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + element.FirstName + '</td>' +
                '<td>' + element.LastName + '</td>' +
                '<td>' + element.UserName + '</td>' +
                '<td><span class="deleteIcon" onclick=deletePeople("' + element.UserName + '")>X</span></td>';
            tblBody.appendChild(tr); 
        });
      });
};

function deletePeople(params) {
    $.ajax({
        url: url + 'People(' + params + ')',
        type: 'DELETE',
        contentType: 'application/json',
        success: function(result) {
            loadPeople();
        }
    });
}

function addPeople() {
    var data = {
        "@odata.type": "Microsoft.OData.Service.Sample.TrippinInMemory.Models.Manager",
        "UserName":document.getElementById("txtUserName").value,
        "FirstName":document.getElementById("txtFirstName").value,
        "LastName":document.getElementById("txtLastName").value,
        "Emails":[
            "lewisblack@example.com"
        ],
        "AddressInfo": [
        {
          "Address": "187 Suffolk Ln.",
          "City": {
            "Name": "Boise",
            "CountryRegion": "United States",
            "Region": "ID"
          }
        }
        ]
    }

    $.ajax({
        url: url + 'People',        
        type: 'POST',
        crossDomain: true,
        data: JSON.stringify(data),
        dataType: "json",
        success: function(result) {
            debugger;
            loadPeople();
        }
    });
}