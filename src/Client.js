export default class Client{

    login(name,password){
        let result = new Promise((resolve,reject) => {
            let request = new XMLHttpRequest();
            //let body = 'name=' + encodeURIComponent(name) +
             //'&password=' + encodeURIComponent(password);
             request.open("POST", "http://localhost:8080/pipi4/pip/rest/login");
             request.setRequestHeader('Content-Type', 'application/json');
             //let parsed = JSON.parse(body);
             let notparsed = {
                 name: name,
             password: password
            };
             let parsed = JSON.stringify(notparsed);
            request.onreadystatechange = () => {
                let raw = request.responseText;
                let objectified = JSON.parse(raw);
                resolve(objectified);
            };
            request.send(parsed);
        });
        return result;
    }


    points(...pts){
        let result = new Promise((resolve,reject) => {
            let request = new XMLHttpRequest();
            let body = '';
            pts.map((point,i) => body += 'point'+i+'='+encodeURIComponent(point)+'&');
            body += 'end=' + encodeURIComponent("end");
            request.open("POST", "СЮДА URL");
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.onreadystatechange = () => {
                let raw = request.responseText;
                let objectified = JSON.parse(raw);
                resolve(objectified);
            };
            request.send(body);
        });
        return result;
    }
}