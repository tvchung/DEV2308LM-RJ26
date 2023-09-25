import React, { useEffect, useState } from 'react'
import data from '../datas/datas'
function ListCategories() {

    const [list, setList] = useState([]);

    useEffect(()=>{
        setList(data);
        console.log(list);
    },[])

  return (
    <div>
        <h2>Danh sách loại sản phẩm</h2>
        <table className='table table-bordered'> 
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>icon</th>
                    <th>metaDescription</th>
                </tr>
            </thead>
            <tbody>
                {/* render */}
                {
                    list.map((item, index)=>{
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.icon}</td>
                                <td>{item.metaDescription}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListCategories
