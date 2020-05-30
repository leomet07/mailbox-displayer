window.onload = function () {


    firebase.database().ref().child("openings").child("main").on("value", function (data) {


        console.log("changed")
        let val = data.val()
        let url = val['url']
        let img = document.getElementById('myimg');

        img.src = ""
        img.src = url + "&" + new Date().getTime();


        document.getElementById("date").innerHTML = val.date;


        document.getElementById('display').style.display = 'none';
        document.getElementById('display').style.display = 'block';

    })


}