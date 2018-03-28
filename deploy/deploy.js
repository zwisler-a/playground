var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  username: process.argv[2],
  password: process.argv[3],
  host: process.argv[4],
  port: 21,
  localRoot: __dirname + "/../dist",
  remoteRoot: "/projects/playground/"
};

ftpDeploy.deploy(config, function (err) {
  if (err) console.log(err);
  else console.log('finished');
});

