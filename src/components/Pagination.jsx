import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Pagination(props) {
    const { page, totalPages, onLeftClick, onRightClick } = props;
   
    return (
        <div className="container">
            <div className="d-flex text-white">
                <Button className="mx-auto" onClick={onLeftClick}  variant="primary"><FontAwesomeIcon icon={faArrowLeft} /> </Button>
                <div className="m-auto p-2"> {page} of { totalPages }</div>
                <Button className="mx-auto" onClick={onRightClick} variant="primary"><FontAwesomeIcon icon={faArrowRight} /></Button>
            </div>
        </div>
    )
}
