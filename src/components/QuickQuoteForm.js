export default function QuickQuoteForm(){

    function handleSubmit(event){
        console.log("TEST SUBMIT BUTTON")

        var result = {
            firstName: event.target.fnameInput.value,
            lastName: event.target.lnameInput.value,
            email: event.target.emailInput.value,
            phone: event.target.phoneInput.value,
            fromCurrency: event.target.fromInput.value,
            toCurrency: event.target.toInput.value,
            amount: event.target.amountInput.value
        }

        console.log(result)
        event.preventDefault()
    }

    return <div className="container-fluid pt-4">
        <div className="row mb-4">
            <h1>Quick Quote Form</h1>
        </div>
        
        <form onSubmit={handleSubmit}>

            <div className="row">
                <div className="form-group col-12 col-md-6">
                    <label htmlFor="fnameInput">First Name</label>
                    <input type="text" className="form-control" id="fnameInput" placeholder="First Name" />
                </div>
                <div className="form-group col-12 col-md-6">
                    <label htmlFor="lnameInput">Last Name</label>
                    <input type="text" className="form-control" id="lnameInput" placeholder="Last Name" />

                </div>
            </div>

            <div className="row">
                <div className="form-group">
                    <label htmlFor="emailInput">Email address</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Email" />
                </div>
            </div>

            <div className="row">
                <div className="form-group">
                    <label htmlFor="phoneInput">Phone Number</label>
                    <input type="number" className="form-control" id="phoneInput" placeholder="Phone Number" />
                </div>
            </div>

            <div className="row">
                <div className="form-group col-12 col-md-6">
                    <label htmlFor="fromInput">From Currency</label>
                    <select className="form-control" id="fromInput">
                        <option defaultValue value="1">Australian Dollar (AUD)</option>
                        <option value="2">United States Dollar (USD)</option>
                    </select>
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="toInput">To Currency</label>
                    <select className="form-control" id="toInput">
                        <option value="1">Australian Dollar (AUD)</option>
                        <option defaultValue value="2">United States Dollar (USD)</option>
                    </select>
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="amountInput">Amount</label>
                    <input type="number" className="form-control" id="amountInput" placeholder="Amount" />
                </div>
            </div>
        
        <div className="row pt-4 justify-content-center">
            <div className="col-2">
                <button type="submit" className="btn btn-primary">Get Quote</button>
            </div>
        </div>

        </form>
    </div>
}