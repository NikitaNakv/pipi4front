export default class Client{

    points(){
        let result = new Promise((resolve,reject) => {
           let request = new XMLHttpRequest();
           request.open("GET", "СЮДА URL");
           request.onreadystatechange = () => {
               let raw = request.responseText;
               let objectified = JSON.parse(raw);
               resolve(objectified);
           };
           request.send();
        });
        return result;
    }
}