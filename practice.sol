//SPDX-License-Identifier: MIT

pragma solidity ^0.8.18; //Solidity version

contract SimpleStorage {
    //Basic types: boolean, uint,int, address, bytes
    
    //Creating a favoriteNumber variable
    uint256 myFavoriteNumber; //Default is 0 when there is no assignment

    // uint256[] listOfFavoriteNumbers;

    struct Person {
        uint256 favoriteNumber;
        string name;
    }

    // Person public myFriend = Person({favoriteNumber: 5, name: "Bob"});
    
    //Dynamic array
    Person[] public listOfPeople;

    //Mapping
    mapping(string => uint256) public nameToFavoriteNumber;


    function store(uint _favoriteNumber) public {
        myFavoriteNumber = _favoriteNumber;
        retrieve();
    }

    //view, pure is like reading state of a variable
    function retrieve() public view returns(uint256) {
        return myFavoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        Person memory newPerson = Person(_favoriteNumber, _name);
        listOfPeople.push(newPerson);
        nameToFavoriteNumber[_name] = _favoriteNumber;
    }
}    