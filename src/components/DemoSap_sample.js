import React, { Component } from "react";

class DemoSap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      isLoaded: false,
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
      "comp_code": this.state.comp_code,
      "doc_type": this.state.doc_type,
      "vendor": this.state.vendor,
      "pur_org": this.state.pur_org,
      "pur_grp": this.state.pur_grp,
      "po_item": this.state.po_item,
      "material": this.state.material,
      "plant": this.state.plant,
      "qty": this.state.qty
    }
    event.preventDefault();
    this.props.history.push({
      pathname: '/viewsap',
      poList: poList,
    });
  }

  componentDidMount() {
    //fetch("http://ssvm07e7c.techmahindra.com:8000/sap/opu/odata/sap/Z_GEPOC_CREATEPO1_SRV/")
    fetch("https://my-json-server.typicode.com/padalavenkataramesh/demo/sap_poData",{
      method: "GET",
      headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      }})   
      .then(res => res.json())
      .then(poList => {
        console.log(poList);
        poList = poList[0];
        this.setState({
          isLoaded: true, list: poList,
          "po_number": poList.po_number,
          "comp_code": poList.comp_code,
          "doc_type": poList.doc_type,
          "vendor": poList.vendor,
          "pur_org": poList.pur_org,
          "pur_grp": poList.pur_grp,
          "po_item": poList.po_item,
          "material": poList.material,
          "plant": poList.plant,
          "qty": poList.qty
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
                  <input type="text" className="form-control" name="comp_code" value={this.state.comp_code} onChange={this.handleChange} />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Document Type:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="doc_type"  value={this.state.doc_type} onChange={this.handleChange} />
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
                  <input type="text" className="form-control" name="pur_org"  value={this.state.pur_org} onChange={this.handleChange} />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">Puchase Group:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="pur_grp"  value={this.state.pur_grp} onChange={this.handleChange} />
                </div>
                <div className="clearfix"></div>
              </div>

              <div className="form-group">
                <label  className="col-md-3 align-right">PO Item:</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" name="po_item"  value={this.state.po_item} onChange={this.handleChange}  />
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
                  <input type="text" className="form-control" name="qty"  value={this.state.qty} onChange={this.handleChange} />
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
export default DemoSap;