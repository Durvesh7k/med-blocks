//SPDX-License-Identifier:MIT
pragma solidity ^0.8.17;

contract meddata{
    uint256 public totalRecord;

    struct Record{
        uint256 id;
        string title;
        string description;
        bool islisted;
        string imageURI;
        address owner;
        uint256 timestamp;
    }

    Record[] public records;
}