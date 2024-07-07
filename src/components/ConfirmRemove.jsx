import React from 'react'

const ConfirmRemove = ({ open, handleClose, handleConfirmRemove }) => {

    return (
        <>
         <div className={`modal modal-sm fade ${open ? 'show' : ''}`} style={{ display: open ? 'block' : 'none' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body text-center" style={{fontSize:"14px"}}>
                        Are you sure you want to remove this item from the cart?
                    </div>
                    <div className="modal-footer d-flex justify-content-center">
                        <button className="btn btn-sm btn-secondary" onClick={handleClose}>Cancel</button>
                        <button className="btn btn-sm btn-danger" onClick={handleConfirmRemove}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
        {open && <div className="modal-backdrop fade show" style={{ display: 'block' }}></div>}
        </>
       
    )
}

export default ConfirmRemove