import localFont from "next/font/local"

const zarid = localFont ({
    src: [
        {
            path: "../assets/fonts/29LTZaridSans-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../assets/fonts/29LTZaridSans-Medium.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/29LTZaridSans-Bold.otf",
            weight: "700",
            style: "normal",
        }
    ],
    variable: "--font-zarid",
});

export {zarid};