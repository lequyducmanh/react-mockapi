import React from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {

    onDelete = id =>{
        if(confirm('Bạn có chắc muốn xóa chứ???')){ //eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var {product, index} = this.props;
        // console.log(product)
        var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? 'warning' : 'danger';
        return (  
            <tr>
                <td>{index}</td>
                <td>{product.id}</td> 
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`alert alert-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                <Link 
                    to={`/product/${product.id}/edit`}
                    className="btn btn-success mr-2">Sửa
                </Link>
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={()=>this.onDelete(product.id)}>Xóa
                </button>
                </td>
            </tr>
        ); 
    }
}

export default ProductItem;
