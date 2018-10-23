import React from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actFetchProductsRequest, actDeleteProductRequest} from './../../actions/index'; 


class ProductListPage extends React.Component {

    componentDidMount(){
        // callApi('testapi','GET', null).then((res)=>{
        //     // this.setState({
        //     //     nhieusanpham : res.data
        //     // })
        //     this.props.fetchAllProducts(res.data);
        // })  
        this.props.fetchAllProducts();
        // console.log(this.props.fetchAllProducts());
    }


    onDelete = (id) =>{
        // console.log(e);
        // const nhieusanpham = this.state.nhieusanpham;
        // callApi(`testapi/${id}`,'DELETE', null).then((res)=>{
        //    if(res.status === 200){
        //        let index = this.findIndex(nhieusanpham, id);
        //        if (index !== -1){
        //         nhieusanpham.splice(index,1);
        //            this.setState({
        //             nhieusanpham: nhieusanpham
        //            })
        //        }
        //    }
        // })  
        this.props.onDeleteProduct(id);

    }

    
    showProducts(e){
        // console.log(e);
        var result = null;
        if(e.length > 0){
            result = e.map((product,index)=>{
                return(
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
        }
        return result;
    }

    render() {
        // var {nhieusanpham} = this.state;
        var {nhieusanpham} = this.props;
        // console.log(nhieusanpham);
        // var nhieusanpham = [];
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">    
                <Link to="/product/add" className="btn btn-info m-5">
                    Thêm Sản Phẩm
                </Link>   
                <div className="panel-heading"><h3>Danh Sách Sản Phẩm</h3></div> 
                <div className="panel-body"> 
                    <ProductList>{this.showProducts(nhieusanpham)}</ProductList>
                </div>
            </div>   
        );
    }
}

const mapStateToProps = e =>{
//   console.log(e)
    return {
        nhieusanpham: e.products
    } 
}

const mapDispatchToProps = (dispatch, props) =>{
    return {
        fetchAllProducts : () =>{
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct: (id) =>{
            dispatch(actDeleteProductRequest(id));

        }

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
