import React from 'react';

const Sock = (prop) => {
    return (
        <div className="card" style={{ flex: '1', minWidth: '300px', maxWidth: '45%' }}>
            <div className="card-body">
                <h5 className="card-title">Sock Details</h5>
                <div className="card-text">Size: {prop.data.sockDetails.size}</div>
                <div className="card-text">Color: {prop.data.sockDetails.color}</div>
                <div className="card-text">Pattern: {prop.data.sockDetails.pattern}</div>
                <div className="card-text">Material: {prop.data.sockDetails.material}</div>
                <div className="card-text">Condition: {prop.data.sockDetails.condition}</div>
                <div className="card-text">For Foot: {prop.data.sockDetails.forFoot}</div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Additional Features</h5>
                <div className="card-text">Water Resistant: {prop.data.sockDetails.waterResistant ? "Yes" : "No"}</div>
                <div className="card-text">Padded: {prop.data.sockDetails.padded ? "Yes" : "No"}</div>
                <div className="card-text">Anti Bacterial: {prop.data.sockDetails.antiBacterial ? "Yes" : "No"}</div>
            </div>
            <div className="card-footer" style={{ display: 'flex', justifyContent: 'space-between' }}>
    <small className="text-muted">Added: {props.data.addedTimestamp}</small>
    <button className="btn btn-sm btn-danger" onClick={() => props.handleDelete(props.data._id)}>Delete</button>
</div>

        </div>
    );
};

export default Sock;