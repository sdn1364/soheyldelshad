import React from 'react';

const Instagram = () => {
    return (
        <svg className="w-full h-auto group" viewBox="0 0 24 24" fill="none">

            <defs>
                <radialGradient id="grad2"
                                r="150%" cx="30%" cy="107%"
                                gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fdf497" offset="0"/>
                    <stop stopColor="#fdf497" offset="0.05"/>
                    <stop stopColor="#fd5949" offset="0.45"/>
                    <stop stopColor="#d6249f" offset="0.6"/>
                    <stop stopColor="#285AEB" offset="0.9"/>
                </radialGradient>
            </defs>
            <g fill="url(#grad2)" >
                <path className="group-hover:fill-inherit fill-current" d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"/>
                <path className="group-hover:fill-inherit fill-current" d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"/>
                <path className="group-hover:fill-inherit fill-current" d="M17 7.4999C16.87 7.4999 16.74 7.4699 16.62 7.4199C16.5 7.3699 16.39 7.2999 16.29 7.2099C16.2 7.1099 16.12 6.9999 16.07 6.8799C16.02 6.7599 16 6.6299 16 6.4999C16 6.3699 16.02 6.2399 16.07 6.1199C16.13 5.9899 16.2 5.8899 16.29 5.7899C16.34 5.7499 16.39 5.6999 16.44 5.6699C16.5 5.6299 16.56 5.5999 16.62 5.5799C16.68 5.5499 16.74 5.5299 16.81 5.5199C17.13 5.4499 17.47 5.5599 17.71 5.7899C17.8 5.8899 17.87 5.9899 17.92 6.1199C17.97 6.2399 18 6.3699 18 6.4999C18 6.6299 17.97 6.7599 17.92 6.8799C17.87 6.9999 17.8 7.1099 17.71 7.2099C17.61 7.2999 17.5 7.3699 17.38 7.4199C17.26 7.4699 17.13 7.4999 17 7.4999Z"/>
            </g>
        </svg>
    )
}
export default Instagram;