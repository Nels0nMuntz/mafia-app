import React from 'react'
import { Link } from 'react-router-dom';

const NapitkiSlide = () => {
    return (
        <div className="deliverySlider__item item-deliverySlider">
            <div className="item-deliverySlider__image">
                <Link to="/menu-dostavki/napitki">
                    <svg width="72" height="81" viewBox="0 0 72 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="drink_1">
                            <path id="Vector"
                                d="M53.71 1.40671e-08C48.9637 -0.000187498 44.4094 1.87426 41.0383 5.21538C37.6672 8.55651 35.7522 13.0939 35.71 17.84H15C14.7348 17.84 14.4804 17.9454 14.2929 18.1329C14.1054 18.3204 14 18.5748 14 18.84C14 50.09 15.86 56.52 23.23 65.48C25 67.69 28 72.54 27.41 74.35C27.34 74.55 27.22 74.76 26.76 74.87C19.55 76.67 19 79.28 19 79.78C18.9918 79.9163 19.0116 80.0528 19.0582 80.1811C19.1048 80.3095 19.1771 80.4269 19.2708 80.5262C19.3645 80.6255 19.4775 80.7046 19.6029 80.7586C19.7283 80.8125 19.8635 80.8402 20 80.84H48C48.1365 80.8402 48.2717 80.8125 48.3971 80.7586C48.5225 80.7046 48.6355 80.6255 48.7292 80.5262C48.8229 80.4269 48.8952 80.3095 48.9418 80.1811C48.9884 80.0528 49.0082 79.9163 49 79.78C49 79.28 48.45 76.67 41.24 74.87C40.78 74.76 40.66 74.55 40.59 74.35C40 72.55 42.95 67.69 44.77 65.48C50.54 58.47 52.93 53 53.7 36C58.4739 36 63.0523 34.1036 66.4279 30.7279C69.8036 27.3523 71.7 22.7739 71.7 18C71.7 13.2261 69.8036 8.64773 66.4279 5.27208C63.0523 1.89642 58.4739 1.40671e-08 53.7 1.40671e-08L53.71 1.40671e-08ZM35.81 19.84H52C52 20.09 52 20.32 52 20.56C52 21.28 52 22 52 22.69C52 24.8967 51.97 27 51.91 29H16.09C16 26.2 16 23.18 16 19.84H35.81ZM53 16.84C53.4365 16.8445 53.8595 16.9916 54.2046 17.2589C54.5496 17.5263 54.7977 17.8992 54.911 18.3207C55.0243 18.7422 54.9966 19.1893 54.8321 19.5936C54.6677 19.9979 54.3754 20.3373 54 20.56C54 19.99 54 19.43 54 18.84C54 18.5748 53.8946 18.3204 53.7071 18.1329C53.5196 17.9454 53.2652 17.84 53 17.84H51.28C51.4545 17.5377 51.7051 17.2864 52.0068 17.1109C52.3086 16.9355 52.651 16.8421 53 16.84ZM54 22.7C54.3498 22.6124 54.6862 22.4778 55 22.3L59.53 27.54C57.8529 28.5629 55.9341 29.122 53.97 29.16C54 27.15 54 25 54 22.7ZM61.1 26.35L56.41 20.92C56.6165 20.5851 56.7716 20.221 56.87 19.84H64.72C64.2942 22.3627 63.0122 24.6617 61.09 26.35H61.1ZM56.87 17.84C56.7761 17.4891 56.6348 17.1527 56.45 16.84L61.93 10.47C63.7838 12.481 64.8306 15.1052 64.87 17.84H56.87ZM55 15.41C54.6868 15.2287 54.3503 15.0908 54 15V6.86C56.3309 6.91763 58.5843 7.70842 60.44 9.12L55 15.41ZM52 15C51.6796 15.0815 51.3706 15.2024 51.08 15.36L46.24 9.76C47.8481 8.29554 49.8511 7.3358 52 7V15ZM44.87 11.24L49.63 16.74C49.4102 17.086 49.245 17.4638 49.14 17.86H42.55C42.5831 15.4537 43.3973 13.1233 44.87 11.22V11.24ZM43.23 64.24C43.17 64.31 37.49 71.36 38.69 75.01C38.8405 75.4729 39.1116 75.8874 39.4754 76.2108C39.8392 76.5342 40.2826 76.7548 40.76 76.85C42.5815 77.2173 44.3267 77.8937 45.92 78.85H22.1C23.6877 77.8898 25.4304 77.213 27.25 76.85C27.7267 76.7523 28.1688 76.5295 28.5309 76.2043C28.8929 75.8792 29.1618 75.4635 29.31 75C30.51 71.35 24.83 64.3 24.77 64.23C18.81 57 16.64 51.35 16.13 31H51.87C51.87 32 51.81 32.93 51.78 33.85C51.78 34.5167 51.7533 35.1833 51.7 35.85C51 52.31 48.68 57.58 43.23 64.21V64.24ZM53.78 34C53.78 33.08 53.84 32.14 53.87 31.16C56.4589 31.1283 58.9809 30.3337 61.1204 28.8756C63.2599 27.4175 64.9217 25.3607 65.8978 22.9626C66.874 20.5646 67.1211 17.9319 66.6082 15.3941C66.0954 12.8563 64.8453 10.5262 63.0145 8.69546C61.1838 6.86469 58.8537 5.61463 56.3159 5.10176C53.7781 4.58889 51.1454 4.836 48.7474 5.81215C46.3493 6.78831 44.2925 8.45013 42.8344 10.5896C41.3763 12.7291 40.5817 15.2511 40.55 17.84H37.72C37.7516 14.6851 38.7152 11.6099 40.4898 9.00113C42.2643 6.39237 44.7705 4.36649 47.6933 3.17822C50.6161 1.98995 53.8249 1.69234 56.9164 2.32281C60.0079 2.95328 62.8439 4.48367 65.068 6.72158C67.292 8.95948 68.8048 11.805 69.416 14.9003C70.0273 17.9956 69.7098 21.2026 68.5034 24.1179C67.297 27.0332 65.2556 29.5268 62.6359 31.2852C60.0162 33.0435 56.9351 33.988 53.78 34Z"
                                fill="#D3A874" />
                        </g>
                        <g id="drink_2">
                            <path id="Vector_2"
                                d="M34.1918 73.7803C33.9924 73.7626 33.8028 73.6855 33.6477 73.5589C33.4926 73.4324 33.3791 73.2621 33.3218 73.0703L14.4718 11.2303C14.3587 10.801 14.1517 10.4022 13.8658 10.0627C13.5799 9.72308 13.2223 9.45117 12.8186 9.26654C12.4149 9.08192 11.9753 8.98918 11.5314 8.99502C11.0875 9.00085 10.6505 9.10512 10.2518 9.30029L1.4418 13.6103C1.2031 13.727 0.927829 13.7441 0.67653 13.6578C0.425231 13.5715 0.218494 13.389 0.101799 13.1503C-0.0148962 12.9116 -0.0319907 12.6363 0.054276 12.385C0.140543 12.1337 0.323104 11.927 0.561799 11.8103L9.3718 7.50029C10.0317 7.18058 10.7538 7.00993 11.487 7.00042C12.2202 6.99091 12.9465 7.14279 13.6145 7.44528C14.2825 7.74777 14.8757 8.19347 15.3522 8.7508C15.8287 9.30813 16.1768 9.96344 16.3718 10.6703L35.2318 72.4903C35.2783 72.6432 35.2875 72.8051 35.2585 72.9623C35.2296 73.1196 35.1633 73.2675 35.0654 73.3939C34.9675 73.5202 34.8406 73.6213 34.6956 73.6885C34.5506 73.7557 34.3915 73.7872 34.2318 73.7803H34.1918Z"
                                fill="#D3A874" />
                        </g>
                        <g id="drink_3">
                            <path id="Vector_3"
                                d="M44 32C43.0111 32 42.0444 32.2932 41.2222 32.8427C40.3999 33.3921 39.759 34.173 39.3806 35.0866C39.0022 36.0002 38.9031 37.0055 39.0961 37.9755C39.289 38.9454 39.7652 39.8363 40.4645 40.5355C41.1637 41.2348 42.0546 41.711 43.0246 41.9039C43.9945 42.0968 44.9998 41.9978 45.9134 41.6194C46.827 41.241 47.6079 40.6001 48.1573 39.7778C48.7068 38.9556 49 37.9889 49 37C49 35.6739 48.4732 34.4021 47.5355 33.4645C46.5979 32.5268 45.3261 32 44 32V32ZM44 39.1429C43.5762 39.1429 43.1619 39.0172 42.8095 38.7817C42.4571 38.5463 42.1824 38.2116 42.0203 37.82C41.8581 37.4285 41.8156 36.9976 41.8983 36.5819C41.981 36.1663 42.1851 35.7845 42.4848 35.4848C42.7845 35.1851 43.1663 34.981 43.582 34.8983C43.9976 34.8156 44.4285 34.8581 44.82 35.0203C45.2116 35.1824 45.5463 35.4571 45.7817 35.8095C46.0172 36.1619 46.1429 36.5762 46.1429 37C46.1429 37.5683 45.9171 38.1134 45.5152 38.5152C45.1134 38.9171 44.5683 39.1429 44 39.1429V39.1429Z"
                                fill="#D3A874" />
                        </g>
                        <g id="drink_4">
                            <path id="Vector_4"
                                d="M36 42C35.2089 42 34.4355 42.2346 33.7777 42.6741C33.1199 43.1136 32.6072 43.7384 32.3045 44.4693C32.0017 45.2002 31.9225 46.0044 32.0769 46.7804C32.2312 47.5563 32.6122 48.269 33.1716 48.8284C33.731 49.3878 34.4437 49.7688 35.2196 49.9231C35.9956 50.0775 36.7998 49.9983 37.5307 49.6955C38.2616 49.3928 38.8864 48.8801 39.3259 48.2223C39.7654 47.5645 40 46.7911 40 46C40 44.9391 39.5786 43.9217 38.8284 43.1716C38.0783 42.4214 37.0609 42 36 42V42ZM36 47.7143C35.6609 47.7143 35.3295 47.6137 35.0476 47.4254C34.7657 47.237 34.546 46.9693 34.4162 46.656C34.2865 46.3428 34.2525 45.9981 34.3187 45.6656C34.3848 45.333 34.5481 45.0276 34.7878 44.7878C35.0276 44.5481 35.333 44.3848 35.6656 44.3187C35.9981 44.2525 36.3428 44.2865 36.656 44.4162C36.9693 44.546 37.237 44.7657 37.4254 45.0476C37.6137 45.3295 37.7143 45.6609 37.7143 46C37.7143 46.4547 37.5337 46.8907 37.2122 47.2122C36.8907 47.5337 36.4547 47.7143 36 47.7143V47.7143Z"
                                fill="#D3A874" />
                        </g>
                        <g id="drink_5">
                            <path id="Vector_5"
                                d="M42.5 52C41.8078 52 41.1311 52.2053 40.5555 52.5899C39.9799 52.9744 39.5313 53.5211 39.2664 54.1606C39.0015 54.8001 38.9322 55.5039 39.0673 56.1828C39.2023 56.8617 39.5356 57.4854 40.0251 57.9749C40.5146 58.4644 41.1383 58.7977 41.8172 58.9327C42.4961 59.0678 43.1999 58.9985 43.8394 58.7336C44.4789 58.4687 45.0256 58.0201 45.4101 57.4445C45.7947 56.8689 46 56.1922 46 55.5C46 54.5717 45.6313 53.6815 44.9749 53.0251C44.3185 52.3687 43.4283 52 42.5 52V52ZM42.5 57C42.2033 57 41.9133 56.912 41.6666 56.7472C41.42 56.5824 41.2277 56.3481 41.1142 56.074C41.0007 55.7999 40.9709 55.4983 41.0288 55.2074C41.0867 54.9164 41.2296 54.6491 41.4393 54.4393C41.6491 54.2296 41.9164 54.0867 42.2074 54.0288C42.4983 53.9709 42.7999 54.0006 43.074 54.1142C43.3481 54.2277 43.5824 54.42 43.7472 54.6666C43.912 54.9133 44 55.2033 44 55.5C44 55.8978 43.842 56.2794 43.5607 56.5607C43.2794 56.842 42.8978 57 42.5 57V57Z"
                                fill="#D3A874" />
                        </g>
                    </svg>
                </Link>
            </div>
            <Link to="/menu-dostavki/napitki">
                <h3 className="item-deliverySlider__title">Напитки</h3>
            </Link>
        </div>
    )
}

export default NapitkiSlide