import React from 'react'

function Balance({value}) {
    return (<div className="flex ml-3">
    <div className="font-bold text-lg">
        Your balance
    </div>
    <div className="font-semibold ml-4 text-lg">
        Rs {value}
    </div>
</div>)
}

export default Balance