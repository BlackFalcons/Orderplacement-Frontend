const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get("username")
const password = urlParams.get("password")

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
}

if (username === "test" && password === "test") {
    document.cookie = "authenticated=1"
} else {
    document.cookie = "authenticated=0"
}

function Orders() {
    if (getCookie("authenticated") === "0") {
        return (
            <h1>Authentication failed</h1>
        )
    } else {
        return (
            <div className="container border">
                <div className="row">
                    <div className="col-sm border-bottom">
                        <h3>Search for order</h3>

                    </div>

                    <div className="col-sm">
                        <h3>Create new order</h3>
                    </div>

                    <div className="col-sm">
                        <h3>Edit order</h3>
                    </div>

                    <div className="col-sm">
                        <h3>Delete order</h3>
                    </div>
                </div>
            </div>

        )
    }

}

export default Orders