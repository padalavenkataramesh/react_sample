import React, { Component } from "react";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      //isLoaded: false,
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
    this.handleBack = this.handleBack.bind(this); 
   }
   handleBack(event) {
    event.preventDefault();
    this.props.history.push({
      pathname: '/'
    });
  }
   componentWillMount() {    
    if (this.props.location.poList) {

    this.setState({ isLoaded: true, list: this.props.location.poList,
      "po_number": this.props.location.poList.po_number,
      "company_code": this.props.location.poList.company_code,
      "document_type": this.props.location.poList.document_type,
      "vendor": this.props.location.poList.vendor,
      "purchase_organization": this.props.location.poList.purchase_organization,
      "purchase_group": this.props.location.poList.purchase_group,
      "pp_item": this.props.location.poList.pp_item,
      "material": this.props.location.poList.material,
      "plant": this.props.location.poList.plant,
      "quantity": this.props.location.poList.quantity
    });
  } else {
    this.props.history.push({
      pathname: '/'
    });
  }
  }

  render() {
    var { isLoaded } = this.state;
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

            <div className="form-header"> Demo to View  PO through React</div>

            <form className="form-container">

              <div className="form-group">
                <label  className="col-md-3 align-right">PO Number:</label>
                <div className="col-md-6">
                {this.state.po_number}</div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Company Code:</label>
                <div className="col-md-6">
                  {this.state.company_code}
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Document Type:</label>
                <div className="col-md-6">
                {this.state.document_type}
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Vendor:</label>
                <div className="col-md-6">
                {this.state.vendor} 
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Puchase Organization:</label>
                <div className="col-md-6">
                {this.state.purchase_organization}</div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Puchase Group:</label>
                <div className="col-md-6">
                {this.state.purchase_group}
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">PO Item:</label>
                <div className="col-md-6">
                {this.state.pp_item}
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Material:</label>
                <div className="col-md-6">
                {this.state.material}
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Plant:</label>
                <div className="col-md-6">
                {this.state.plant}
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Quantity:</label>
                <div className="col-md-6">
                {this.state.quantity}
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="clearfix"></div>

            <div className="form-footer">

              <button type="button" className="btn btn-danger pull-right" onClick={this.handleBack}>Back</button>
              
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
export default View;