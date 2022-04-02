pragma solidity 0.5.6;

import "@klaytn/contracts/token/KIP17/KIP17Full.sol";
import "@klaytn/contracts/drafts/Counters.sol";

contract TestNFT is KIP17Full {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // Token name("TestNFT"), Token symbol("TNFT")
    constructor() public KIP17Full("TestNFT", "TNFT") {}

    function mintNFT(string memory tokenURI) public returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}