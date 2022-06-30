import React, { useState, useEffect, useRef } from "react";
import Avatar from './Avatar';
import ChatWindow from './chat window/ChatWindow';


const SupportEngine = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            // check if the click is outside of this reference
            if (ref.current && !ref.current.contains(e.target)) {
                setVisible(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        // remove the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])

    return (
        <div ref={ref}>
            <ChatWindow visible={visible} />

            <Avatar
                onClick={() => setVisible(true)}
            />
        </div>
    )
}

export default SupportEngine;

