import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react"

export default function useLocoScroll(){
    useEffect(() => {
        const scrollEl = document.querySelector('.App');
        const locoScroll = new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal',
        })
    })
}