var MedicalDao = artifacts.require("./MedicalDao.sol");

module.exports = function(deployer) {
  deployer.deploy(MedicalDao);
};
