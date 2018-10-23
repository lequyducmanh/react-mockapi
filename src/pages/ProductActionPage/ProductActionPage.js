import React from 'react';
import {Link} from 'react-router-dom';
import { actAddProductRequest,actGetProductRequest, actUpdateProductRequest } from './../../actions/index';
import {connect} from 'react-redux';

class ProductActionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id :'',
            txtName: '',
            txtPrice:'',
            chkbStatus:''
        };
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            // callApi(`testapi/${id}`,'GET', null).then(res =>
            //     {
            //         let data = res.data;
            //         // console.log(data);
            //         this.setState({
            //             id: data.id,
            //             txtName: data.name,
            //             txtPrice: data.price,
            //             chkbStatus: data.status

            //         })
            //     }
            // )
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps){
        // console.log(nextProps);
        if(nextProps && nextProps.itemEditing){
            var {itemEditing} = nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus : itemEditing.status
            }); 
        }
    }

    onChange = e =>{
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) =>{
        e.preventDefault();
        const {history} = this.props
        const {id, txtName, txtPrice, chkbStatus} = this.state;
        let product = {
            id: id,
            name: txtName,
            price: txtPrice, 
            status: chkbStatus
        }
        if(id){                                             //update
            // callApi(`testapi/${id}`, 'PUT',{
            //     name:txtName,
            //     price:txtPrice,
            //     status:chkbStatus
            // }).then(res =>{
            //     history.goBack();
            // });
            this.props.onUpdateProduct(product);
        }else{                                              //Addnew
            // callApi('testapi','POST', {
            //     name:txtName,
            //     price:txtPrice,
            //     status:chkbStatus
            // }).then(res =>{
            //     history.goBack();  // sử dụng để quay lại trang vừa rồi
            //     // history.push('/');  //sử dụng để chỉ ra đường dẫn cụ thể muốn chỉ định
            // })
            this.props.onAddProduct(product);
        }
        history.goBack();
    }

    render() {
        const {txtName, txtPrice, chkbStatus} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-5">   
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên sản phẩm:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Tên" 
                            name="txtName" 
                            value={txtName} 
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Giá: </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Giá" 
                            name="txtPrice" 
                            value={txtPrice} 
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trạng thái:</label>
                        <input 
                            type="checkbox" 
                            name="chkbStatus"
                            value={chkbStatus} 
                            onChange={this.onChange}
                            checked={chkbStatus} 
                        /> Còn hàng
                    </div>
                    <Link to="/product-list" className="btn btn-danger mr-2">Trở lại</Link>
                    <button type="submit" className="btn btn-primary mt-3">Lưu lại</button>
                </form>
                
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        onAddProduct: product =>{
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) =>{
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: product =>{
            dispatch(actUpdateProductRequest(product));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);

