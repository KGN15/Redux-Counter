import React from 'react'

function Btn({ type, chaild, hendeler }) {
    const styles = {
      denger:  "bg-red-900 ",
      Safe: "bg-green-900",
      blue: "bg-blue-900"
    }

    const style = styles[type] || "bg-[#000]"

    return (
        <button className={`${style} hover:bg-indigo-700 text-white py-3 rounded-xl shadow-lg transition duration-300`} onClick={hendeler} >{chaild}</button>

    )
}

export default Btn
