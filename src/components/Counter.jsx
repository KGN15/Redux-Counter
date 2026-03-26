import Btn from "./Btn"
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {
    decrement,
    increment,
    reset,
    decrementBy5,
    incrementBy5,
    multiplyBy2,
    incrementByAmount,
    decrementByAmount
} from "../Store/modules/counterSlice"

function Counter() {
    const [incValue, setIncValue] = useState('');
    const [decValue, setDecValue] = useState('');
    const [err, setErr] = useState('')

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="min-h-screen  w-full flex items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-700 px-4">

            <div className="w-full max-w-md bg-zinc-800 rounded-2xl shadow-2xl p-8 space-y-6">

                {/* Title */}
                <h1 className="text-2xl font-bold text-center text-white tracking-wide">
                    Redux Counter
                </h1>

                {/* Counter Display */}
                <div className="text-center">
                    <h2 className="text-6xl font-extrabold text-blue-400 drop-shadow-lg">
                        {count}
                    </h2>
                </div>

                {/* Error */}
                {err && (
                    <div className="flex items-center justify-between bg-red-100 text-red-800 px-4 py-2 rounded-lg text-sm shadow">
                        <span>{err}</span>
                        <button
                            className="ml-2 font-bold"
                            onClick={() => setErr('')}
                        >
                            ✕
                        </button>
                    </div>
                )}

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3">

                    <Btn hendeler={() => dispatch(increment())} type="denger" chaild='Increment' />

                    <Btn hendeler={() => {
                        if (count >= 1) {
                            dispatch(decrement())
                        }
                    }} type="Safe" chaild='Decrement' />

                    <Btn hendeler={() => dispatch(reset())} type="blue" chaild='Reset' />

                    <Btn hendeler={() => dispatch(multiplyBy2())} type="blue" chaild='×2 Multiply' />

                    <Btn hendeler={() => dispatch(incrementBy5())} type="blue" chaild='+5' />

                    <Btn hendeler={() => {
                        if (count < 5) {
                            setErr(`You can't decrement 5 from ${count}`)
                            return;
                        }
                        dispatch(decrementBy5())
                    }} type="blue" chaild='-5' />
                </div>

                {/* Increment by Amount */}
                <div className="space-y-2">
                    <input
                        type="number"
                        placeholder="Increment amount"
                        className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        onChange={(e) => setIncValue(e.target.value)}
                    />
                    <Btn
                        hendeler={() => {
                            if (!incValue) return;
                            dispatch(incrementByAmount(Number(incValue)))
                        }}
                        type="blue"
                        chaild='Increment by Amount'
                    />
                </div>

                {/* Decrement by Amount */}
                <div className="space-y-2">
                    <input
                        type="number"
                        placeholder="Decrement amount"
                        className="w-full px-4 py-2 bg-zinc-700 text-white border border-zinc-600 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                        onChange={(e) => setDecValue(e.target.value)}
                    />
                    <Btn
                        hendeler={() => {
                            if (!decValue) return;

                            if (count < decValue) {
                                setErr(`You can't decrement ${decValue} from ${count}`)
                                return;
                            }

                            dispatch(decrementByAmount(Number(decValue)))
                        }}
                        type="blue"
                        chaild='Decrement by Amount'
                    />
                </div>

            </div>
        </div>
    )
}

export default Counter