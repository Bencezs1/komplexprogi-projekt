function check(){
    var kerdes1 = document.kviz.kerdes1.value;
    var kerdes2 = document.kviz.kerdes2.value;
    var kerdes3 = document.kviz.kerdes3.value;
    var kerdes4 = document.kviz.kerdes4.value;
    var jo = 0;
    if (kerdes1 == "1823"){
        jo++;
    }
    if (kerdes2 == "Szendrey Júlia"){
        jo++;
    }
    if (kerdes3 == "A Toldi elolvasása után"){
        jo++;
    }
    if (kerdes4 == "tyúkja"){
        jo++;
    }

    var uzenet = ["Még gyakorolnod kell", "Még gyakorolnod kell", "Már majdnem jó", "Már majdnem jó", "Tökéletes"]

    var pont;
    if (jo == 0){
        pont = 0;
    }
    if (jo == 1){
        pont = 1;
    }
    if (jo == 2){
        pont = 2;
    }
    if (jo == 3){
        pont = 3;
    }
    if (jo == 4){
        pont = 4;
    }

    document.getElementById("uzenet").innerHTML = uzenet[pont];
    document.getElementById("mennyi").innerHTML = "Neked " + pont + " pontod van.";

}