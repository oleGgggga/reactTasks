import React, { Fragment } from "react";
import PropTypes from 'prop-types';
export class Filtred extends React.PureComponent{
    static propTypes = {
        data:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            FIO: PropTypes.object.isRequired,
            balance: PropTypes.number.isRequired,
        })
        ),
    };
    render(){
        console.log('filtred component render');
        return(
            <Fragment>
            <thead className="tableHeader">
              <tr>
              <th>фамилия</th>
              <th>имя</th>
              <th>отчество</th>
              <th>баланс</th>
              </tr>
            </thead>
            <tbody>
                {
                    this.props.data.map(elem=>
                    <tr key={elem.id}>
                        <td>{elem.FIO.name}</td>
                        <td>{elem.FIO.surname}</td>
                        <td>{elem.FIO.fatherName}</td>
                        <td>{elem.balance}</td>
                    </tr>
                    )
                }
            </tbody>
            </Fragment>
        )
    }
}