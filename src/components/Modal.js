import React from 'react'

export default function Modal({action=()=>{console.log('action was done')}, actionText='Do Action', triggerButtonText='click me for modal', modalTitle='default title', modalBody='blah', color='primary'}) {
    return (
        <>
          
            <button type="button" class={`btn btn-${color}`} data-bs-toggle="modal" data-bs-target="#exampleModal">
                {triggerButtonText}
            </button>

          
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{modalTitle}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {modalBody}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className={`btn btn-${color}`} onClick={action}>{actionText}</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
