
     (() => {
      var modules = {
        
          "./src/name.js": (module) => {
            module.exports = "fanheer"; //给你的代码加点注释：loader2//给你的代码加点注释：loader1
          }
        ,
          "./src/age.js": (module) => {
            module.exports = "1"; //给你的代码加点注释：loader2//给你的代码加点注释：loader1
          }
        ,
          "./src/index.js": (module) => {
            const name = require("./src/name.js");
const age = require("./src/age.js");
console.log("姓名：", name, "年龄：", age); //给你的代码加点注释：loader2//给你的代码加点注释：loader1
          }
          
      };
      var cache = {};
      function require(moduleId) {
        var cachedModule = cache[moduleId];
        if (cachedModule !== undefined) {
          return cachedModule.exports;
        }
        var module = (cache[moduleId] = {
          exports: {},
        });
        modules[moduleId](module, module.exports, require);
        return module.exports;
      }
      var exports ={};
      const name = require("./src/name.js");
const age = require("./src/age.js");
console.log("姓名：", name, "年龄：", age); //给你的代码加点注释：loader2//给你的代码加点注释：loader1
    })();
     