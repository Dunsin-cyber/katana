const hre = require("hardhat");

async function main() {
  // Get the contract factory for the Main contract
  const MainContract = await hre.ethers.getContractFactory("Main");
  console.log("Contract Factory Loaded:", MainContract);

  console.log("Deploying Main contract...");

  // Deploy the contract
  const main = await MainContract.deploy();

  // Wait for the deployment to complete
//   await main.deployed();

  // Log the contract address
  console.log(`Main contract deployed to: ${main.target}`);
  console.log(`Main contract deployed to: ${main.address}`);
}

// Run the deploy script and handle errors
main().catch((error) => {
  console.error("Error deploying the contract:", error);
  process.exitCode = 1;
});
