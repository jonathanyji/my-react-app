export default function QuickQuoteForm(){
    return <div class="container-fluid pt-4">
        <form>

            <div class="row">
                <div class="form-group col-12 col-md-6">
                    <label for="fnameInput">First Name</label>
                    <input type="text" class="form-control" id="fnameInput" placeholder="First Name" />
                </div>
                <div class="form-group col-12 col-md-6">
                    <label for="lnameInput">Last Name</label>
                    <input type="text" class="form-control" id="lnameInput" placeholder="Last Name" />

                </div>
            </div>

            <div class="row">
                <div class="form-group">
                    <label for="emailInput">Email address</label>
                    <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Email" />
                </div>
            </div>

            <div class="row">
                <div class="form-group">
                    <label for="phoneInput">Phone Number</label>
                    <input type="number" class="form-control" id="phoneInput" placeholder="Phone Number" />
                </div>
            </div>

            <div class="row">
                <div class="form-group col-12 col-md-6">
                    <label for="fromInput">From Currency</label>
                    <select class="form-control" id="fromInput">
                        <option selected value="1">Australian Dollar (AUD)</option>
                        <option value="2">United States Dollar (USD)</option>
                    </select>
                </div>
                <div class="col-12 col-md-6">
                    <label for="toInput">To Currency</label>
                    <select class="form-control" id="toInput">
                        <option value="1">Australian Dollar (AUD)</option>
                        <option selected value="2">United States Dollar (USD)</option>
                    </select>
                </div>
                <div class="col-12 col-md-6">
                    <label for="amountInput">Amount</label>
                    <input type="number" class="form-control" id="amountInput" placeholder="Amount" />
                </div>
            </div>
        
        <div class="row pt-4 justify-content-center">
            <div class="col-2">
                <button type="submit" class="btn btn-primary">Get Quote</button>
            </div>
        </div>

        </form>
    </div>
}