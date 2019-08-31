System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      class HttpService {
        get(url) {
          return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            //Abrindo conexão
            xhr.open("GET", url);

            //Execução de metodo quando estado da requisição for alterado
            xhr.onreadystatechange = () => {
              if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                  resolve(JSON.parse(xhr.responseText));
                } else {
                  console.log(xhr.responseText);
                  reject(xhr.responseText);
                }
              }
            };
            xhr.send();
          });
        }
      }

      _export("HttpService", HttpService);
    }
  };
});
//# sourceMappingURL=HttpService.js.map