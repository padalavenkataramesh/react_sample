import React, { Component } from "react";

class ViewSap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      //isLoaded: false,
      "po_number": "",
      "comp_code": "",
      "doc_type": "",
      "vendor": "",
      "pur_org": "",
      "pur_grp": "",
      "po_item": "",
      "material": "",
      "plant": "",
      "qty": ""
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
      "comp_code": this.props.location.poList.comp_code,
      "doc_type": this.props.location.poList.doc_type,
      "vendor": this.props.location.poList.vendor,
      "pur_org": this.props.location.poList.pur_org,
      "pur_grp": this.props.location.poList.pur_grp,
      "po_item": this.props.location.poList.po_item,
      "material": this.props.location.poList.material,
      "plant": this.props.location.poList.plant,
      "qty": this.props.location.poList.qty
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
                  {this.state.comp_code}
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Document Type:</label>
                <div className="col-md-6">
                {this.state.doc_type}
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
                {this.state.pur_org}</div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Puchase Group:</label>
                <div className="col-md-6">
                {this.state.pur_grp}
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">PO Item:</label>
                <div className="col-md-6">
                {this.state.po_item}
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
                {this.state.qty}
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
export default ViewSap;