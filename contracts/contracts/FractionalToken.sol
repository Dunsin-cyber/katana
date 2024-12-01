// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FractionalToken is ERC20 {
    address public artist;

    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address _artist
    ) ERC20(name, symbol) {
        artist = _artist;

        // Mint the total supply to the artist
        _mint(_artist, initialSupply);
    }
}
