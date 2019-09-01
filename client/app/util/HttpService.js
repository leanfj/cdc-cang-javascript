System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      let HttpService = class HttpService {
        _handleErrors(response) {
          if (!response.ok) throw new Error(response.statusText);

          return response;
        }
        get(url) {
          // return new Promise((resolve, reject) => {
          //   const xhr = new XMLHttpRequest();

          //   //Abrindo conexão
          //   xhr.open("GET", url);

          //   //Execução de metodo quando estado da requisição for alterado
          //   xhr.onreadystatechange = () => {
          //     if (xhr.readyState == 4) {
          //       if (xhr.status == 200) {
          //         resolve(JSON.parse(xhr.responseText));
          //       } else {
          //         console.log(xhr.responseText);
          //         reject(xhr.responseText);
          //       }
          //     }
          //   };
          //   xhr.send();
          // });

          return fetch(url).then(response => this._handleErrors(response)).then(response => response.json()).catch(error => console.log("Error fetch: " + error));
        }
      };

      _export("HttpService", HttpService);
    }
  };
});
//# sourceMappingURL=HttpService.js.map