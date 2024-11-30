// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./FractionalToken.sol";

contract ContentManager {
    struct Content {
        address tokenAddress; 
        address artist;       
        string metadataURI;  
        uint256 totalSupply;
    }

    mapping(uint256 => Content) public contents;
    uint256 public contentCounter;
    address public owner;

    event ContentUploaded(
        uint256 contentId,
        address tokenAddress,
        address artist,
        uint256 totalSupply
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // Function to upload new content and fractionalize
    function uploadContent(
        string memory _metadataURI,
        string memory _tokenName,
        string memory _tokenSymbol,
        uint256 _totalSupply
    ) external {
        require(_totalSupply > 0, "Total supply must be greater than zero");

        // Deploy new fractional token contract
        address tokenAddress = address(new FractionalToken(_tokenName, _tokenSymbol, _totalSupply, msg.sender));

        // Store content data
        contents[contentCounter] = Content({
            tokenAddress: tokenAddress,
            artist: msg.sender,
            metadataURI: _metadataURI,
            totalSupply: _totalSupply
        });

        emit ContentUploaded(contentCounter, tokenAddress, msg.sender, _totalSupply);

        contentCounter++;
    }
}
