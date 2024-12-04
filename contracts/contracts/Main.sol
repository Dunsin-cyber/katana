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
        string description;
        string title;
        uint256 contentId;
    }

    mapping(uint256 => Content) public contents;

    address[] public userAddresses;
    uint256 public contentCounter;

    uint256[] public contentIds;                // Array to track all content IDs
    uint256 public nextContentId;               // Auto-incrementing ID for contents

    address public owner;
    address public artist;

    event ContentUploaded(
        uint256 contentId,
        address tokenAddress,
        address artist,
        uint256 totalSupply, 
        string description,
        string title
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
        uint256 _totalSupply,
        string memory _description,
        string memory _title
    ) external {
        require(_totalSupply > 0, "Total supply must be greater than zero");

        // Deploy new fractional token contract
        address tokenAddress = address(new FractionalToken(_tokenName, _tokenSymbol, _totalSupply, msg.sender));

        uint256 _contentId = nextContentId;

        // Store content data
        contents[contentCounter] = Content({
            tokenAddress: tokenAddress,
            artist: msg.sender,
            metadataURI: _metadataURI,
            totalSupply: _totalSupply,
            description : _description,
            title : _title,
            contentId : _contentId
        });

        contentIds.push(_contentId);
        nextContentId++;

        emit ContentUploaded(contentCounter, tokenAddress, msg.sender, _totalSupply, _description, _title);

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
            uint256 totalSupply,
            string memory description,
            string memory title
        )
    {
        require(contentId < contentCounter, "Invalid content ID");

        Content memory content = contents[contentId];
        return (content.tokenAddress, content.artist, content.metadataURI, content.totalSupply, content.description, content.title);
    }

    function withdrawOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner cannot be zero address");
        owner = newOwner;
    }


    function getAllContentshere() external view returns (Content[] memory) {
        Content[] memory  allContents = new Content[](contentCounter);
        for (uint256 i = 0; i < contentCounter; i++) {
            allContents[i - 1] = contents[i];
        }
        return allContents;
    }

    function getAllTheContents() public view returns (Content[] memory) {
        uint256 length = contentIds.length;
        Content[] memory allContents = new Content[](length);

        for (uint256 i = 0; i < length; i++) {
            allContents[i] = contents[contentIds[i]];
        }

        return allContents;
    }
    
    // Function to retrieve all contents
    function getAllContents() public view returns (
        uint256[] memory,
        address[] memory,
        address[] memory,
        string[] memory,
        uint256[] memory,
        string[] memory,
        string[] memory
    ) {
        uint256 length = contentIds.length;

        uint256[] memory ids = new uint256[](length);
        address[] memory tokenAddresses = new address[](length);
        address[] memory artists = new address[](length);
        string[] memory metadataURIs = new string[](length);
        uint256[] memory totalSupplies = new uint256[](length);
        string[] memory descriptions = new string[](length);
        string[] memory titles = new string[](length);

        for (uint256 i = 0; i < length; i++) {
            uint256 id = contentIds[i];
            Content memory content = contents[id];
            ids[i] = id;
            tokenAddresses[i] = content.tokenAddress;
            artists[i] = content.artist;
            metadataURIs[i] = content.metadataURI;
            totalSupplies[i] = content.totalSupply;
            descriptions[i] = content.description;
            titles[i] = content.title;
        }

        return (ids, tokenAddresses, artists, metadataURIs, totalSupplies, descriptions, titles);
    }

    
}
