import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Pagination() {
    return (
        <div>
            <div className="d-flex">
                <Button variant="primary"><FontAwesomeIcon icon={faArrowLeft} /> </Button>
                <div className="m-auto p-2">1 of 100</div>
                <Button variant="primary"><FontAwesomeIcon icon={faArrowRight} /></Button>
            </div>
        </div>
    )
}
