function setUsername(username){
    // complex DB Calls
    this.username = username;
    console.log("called");
}


// IMP
function createUser(username , email , password){
    setUsername.call(this , username)                            // we are only given the reference not calling username 
                                        // with the help of .call we can explicitly call  those method aslo used to hold the reference 
    this.email = email;
    this.password = password;
}
const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai)           // output : createUser { email: 'chai@fb.com', password: '123' }

