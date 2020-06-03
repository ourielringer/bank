class Cliet {
    firstName;
    lastNam;
    id;
}

class Account {
    id;
    clietId;
    balans;
}

class Transaction {
    id;
    accounId;
    type;
    amount;
}

function rnd(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let nams = ["yosi","ouriel", "moshe","slomo","avi"];
let lastnams = ["levi","ringer", "bloy","vardi","sahar"];

let cliets = []
let accounts = []
let transactions = []


for (let i = 1; i < 6; i++) {
    let cliet = new Cliet;
    cliet.id = 1234*i
    cliet.firstName =nams[i-1]
    cliet.lastNam = lastnams[i-1] 
cliets.push(cliet)
}


for (let i = 1; i < 16; i++) {
    let account = new Account;
    account.id = i
    account.clietId = cliets[rnd(5)].id;
accounts.push(account)
}



for (let i = 1; i < 152; i++) {
    let transaction = new Transaction;
    transaction.id = i
    transaction.accounId = accounts[rnd(15)].id
    transaction.type = rnd(2) == 1 ? "Deposit":"Withdraw"
    transaction.amount = rnd(15000) 
    if(transaction.type == "Withdraw"){
        transaction.amount *= -1;
    }
transactions.push(transaction)
}

function getClientById(cliId){
    for (let i = 0; i < cliets.length; i++) {
       if (cliets[i].id == cliId) {
           return cliets[i]
       }
    }
}

function getAccountById(accId) {
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].id == accId) {
            return accounts[i]
        }
        
    }
}

function getTransactionByAccountId(accId) {
    let arrTrasactionAcc =[];
    for (let i = 0; i < transactions.length; i++) {
        if(transactions[i].accounId == accId){
            arrTrasactionAcc.push(transactions[i])
        }
    }
    return arrTrasactionAcc;
}

function getBalans(accid){
    let sum =0;
    let arrtra = getTransactionByAccountId(accid)
    arrtra.forEach(tra => {
    sum += tra.amount
})
    return sum
};

accounts.forEach(acc => {
    acc.balans = getBalans(acc.id)
});






