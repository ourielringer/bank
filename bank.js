document.onreadystatechange = function (ev) {
    if (document.readyState == "complete") {
        console.log('i am ready - ready state');
        bankStart();
        init()
    }
}

let templet = {
    accont: `<li class = "account">
    <label>id: </label><span>[id]</span><br>
    <label>clientId: </label><span>[clietId]</span><br>
    <label>balans: </label><span>[balans]</span><br>
    <label>firstname: </label><span>[firstName]</span><br>
    <label>lastName: </label><span>[lastNam]</span><br>
</li>`,
    transaction:
        `<li class = "transaction flex-ol">
    <label>id: </label><span>[id]</span><br>
    <label>accounId: </label><span>[accounId]</span><br>
    <label>type: </label><span>[type]</span><br>
    <label>amount: </label><span>[amount]</span><br>
</li>`}


function bankStart() {
    let arr = []
    for (let i = 0; i < accounts.length; i++) {
        let c = getClientById(accounts[i].clietId)
        arr.push(accounts[i])
        arr[i].firstName = c.firstName
        arr[i].lastNam = c.lastNam
    }
    document.querySelector(".accoun-list").innerHTML = render(templet.accont, arr)
}


function init() {
    let allAccountDiv = document.querySelectorAll(".account")

    

    allAccountDiv.forEach(accDiv => {
        accDiv.onclick = function (ev) {

            let myAccDiv = ev.target.closest('.account')
            let accontid = myAccDiv.querySelector('span').textContent
            let listTra = getTransactionByAccountId(accontid)
            document.querySelector(".details-panel").innerHTML = render(templet.transaction, listTra)
        }
    });
}
