var os = require('os')

/*
 * GET home page.
 */

var BasicInfo = function(){
	console.log("AVG: ", os.totalmem());
	console.log("AVG: ", os.freemem());
	console.log("AVG: ", os.cpus());
	console.log("AVG: ", os.networkInterfaces());
	console.log("Temp Dir: ", os.tmldir());
}


exports.index = function(req, res){
  var cpu_info = os.cpus();
  var freemem = os.freemem();
  var totalmem = os.totalmem();
  res.render('index', { CPU_NUM: cpu_info.length, CPU: cpu_info, TOTALMEM: totalmem,
  FREEMEM: freemem });
};