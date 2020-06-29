import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoaded: false,
      "po_number": "",
      "company_code": "",
      "document_type": "",
      "vendor": "",
      "purchase_organization": "",
      "purchase_group": "",
      "pp_item": "",
      "material": "",
      "plant": "",
      "quantity": ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.po_number);
    const poList = {
      "po_number": this.state.po_number,
      "company_code": this.state.company_code,
      "document_type": this.state.document_type,
      "vendor": this.state.vendor,
      "purchase_organization": this.state.purchase_organization,
      "purchase_group": this.state.purchase_group,
      "pp_item": this.state.pp_item,
      "material": this.state.material,
      "plant": this.state.plant,
      "quantity": this.state.quantity
    }
    event.preventDefault();
    this.props.history.push({
      pathname: '/view',
      poList: poList,
    });
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/padalavenkataramesh/demo/poData")
      .then(res => res.json())
      .then(poList => {
        console.log(poList);

        this.setState({
          isLoaded: true, list: poList,
          "po_number": poList[0].po_number,
          "company_code": poList[0].company_code,
          "document_type": poList[0].document_type,
          "vendor": poList[0].vendor,
          "purchase_organization": poList[0].purchase_organization,
          "purchase_group": poList[0].purchase_group,
          "pp_item": poList[0].pp_item,
          "material": poList[0].material,
          "plant": poList[0].plant,
          "quantity": poList[0].quantity
        });
      });
  }
  render() {
    var { isLoaded, list } = this.state;
    list = list[0];
    if (!isLoaded) {
      return <div>Please Wait...</div>;
    } else {
      return (

        <div className="bodybg">

          <div className="container-fluid graybg topbg">

            <div className="homeicon">
              <img src={require("../images/home.png")} />
            </div>

            <div className="logo">

              <img src={require("../images/logo.png")} />

            </div>


            <div className="loggedinslot pull-right"> Chalapathi Training 535 </div>

            <div className="search pull-right"><img src={require("../images/search.png")} /> </div>

          </div>

          <div className="containerbg containerpadding">

            <div className="form-header"> Demo to create  PO through React</div>

            <form className="form-container" onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label  className="col-md-3 align-right">PO Number:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="po_number" value={this.state.po_number} onChange={this.handleChange}/>
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Company Code:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="company_code" value={this.state.company_code} onChange={this.handleChange} />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Document Type:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="document_type"  value={this.state.document_type} onChange={this.handleChange} />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Vendor:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="vendor"  value={this.state.vendor} onChange={this.handleChange} />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Puchase Organization:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="purchase_organization"  value={this.state.purchase_organization} onChange={this.handleChange} />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Puchase Group:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="purchase_group"  value={this.state.purchase_group} onChange={this.handleChange} />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">PO Item:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="pp_item"  value={this.state.pp_item} onChange={this.handleChange}  />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Material:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="material"  value={this.state.material} onChange={this.handleChange} />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Plant:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="plant"  value={this.state.plant} onChange={this.handleChange} />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Quantity:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="quantity"  value={this.state.quantity} onChange={this.handleChange} />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="clearfix"></div>

            <div className="form-footer">

              <button type="button" className="btn btn-danger pull-right">Cancel</button>
              <input type="submit" value="Submit" className="btn btn-success pull-right marr-5" />

              <div className="clearfix"></div>
            </div>
            </form>
            <div className="clearfix"></div>
          </div>
        </div>

      );
    }
  }
}
export default Demo;