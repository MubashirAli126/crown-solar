import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faMobileRetro } from '@fortawesome/free-solid-svg-icons'

function DistributorDetail(props) {
    return (
        <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
           <FontAwesomeIcon className='text-green-700' icon={faStore} /> <h3 class="w-9/12 text-base font-medium text-black ">
                {props.address}
            </h3>
            <FontAwesomeIcon className='text-green-700' icon={faMobileRetro} /> <p class="w-3/12 text-base font-medium text-black sm:text-right">
                {props.phone}
            </p>
        </div>
    )
}

export default DistributorDetail