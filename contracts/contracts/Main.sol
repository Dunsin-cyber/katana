// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./FractionalToken.sol";

contract Main {


    struct Content {
        address tokenAddress; 
        address artist;       
        string metadataURI;  
        uint256 totalSupply;
    }

    mapping(uint256 => Content) public contents;
    uint256 public contentCounter;
    address public owner;
    address public artist;

    event ContentUploaded(
        uint256 contentId,
        address tokenAddress,
        address artist,
        uint256 totalSupply
    );
    
    event TokensTransferred(
        uint256 indexed contentId,
        address from,
        address to,
        uint256 amount
    );

    event MetadataUpdated(
        uint256 indexed contentId,
        string metadatURI
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    modifier onlyArtist(uint256 contentId) {
        require(msg.sender == contents[contentId].artist, "Not the artist");
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

    function transferTokens(
        uint256 contentId,
        address to,
        uint256 amount
    ) external {
        require(contentId < contentCounter, "Invalid content ID");
        require(to != address(0), "Cannot transfer to zero address");
        require(amount > 0, "Amount must be greater than zero");

        Content memory content = contents[contentId];
        FractionalToken token = FractionalToken(content.tokenAddress);

        // approvalhas to be made via frontend
        token.transferFrom(msg.sender, to, amount);

        emit TokensTransferred(contentId, msg.sender, to, amount);
    }

    function getContent(uint256 contentId)
        external
        view
        returns (
            address tokenAddress,
            address artist,
            string memory metadataURI,
            uint256 totalSupply
        )
    {
        require(contentId < contentCounter, "Invalid content ID");

        Content memory content = contents[contentId];
        return (content.tokenAddress, content.artist, content.metadataURI, content.totalSupply);
    }

    function withdrawOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner cannot be zero address");
        owner = newOwner;
    }
}
