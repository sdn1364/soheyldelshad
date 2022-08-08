const verticalShapes = {
    0: { path: "M264.448 124.056C264.82 113.52 290.593 108.454 289.94 96.2766C289.551 89.178 280.727 82.7625 274.906 79.9355C263.467 74.3795 253.489 72.8892 252.028 66.8626C251.375 64.1565 252.754 61.4799 253.989 59.6725" },
    1: { path: "M245.656 116.376C302.523 86.6353 226.537 83.5305 237.485 49.7045" },
    2: { path: "M272.739 59.9111C273.67 62.2293 273.749 64.8023 272.961 67.1731C271.265 72.0754 266.445 73.6147 265.918 73.7749" },
    3: { path: "M282.75 61.6335C282.233 63.437 281.076 64.9902 279.496 66.0026C277.917 67.015 276.022 67.4172 274.167 67.1339" },
    4: { path: "M289.286 75.0331C289.515 77.7686 291.512 79.6381 293.208 79.6086C295.169 79.5727 297.414 77.017 296.803 73.7259C298.414 76.1411 301.28 77.1738 303.666 76.3404C305.402 75.7325 307.157 74.0527 307.261 71.7649C307.363 69.5785 305.889 68.0947 305.627 67.8431C306.11 68.1692 306.679 68.3434 307.261 68.3434C307.844 68.3434 308.413 68.1692 308.895 67.8431C309.47 67.3861 309.855 66.7322 309.976 66.0078C310.097 65.2834 309.945 64.5399 309.549 63.9212C309.791 64.6206 314.598 64.5977 315.105 63.9212C315.226 64.1598 316.386 66.3952 319.027 66.8626C319.839 66.9903 320.669 66.9395 321.459 66.7138C322.249 66.488 322.981 66.0927 323.602 65.5553C322.622 68.0653 324.148 70.6701 326.217 71.1113C328.064 71.5035 330.266 70.157 330.792 67.8431C332.387 69.0915 334.476 69.1504 335.695 68.1699C337.273 66.9084 337.469 63.8591 335.368 61.9603C335.607 61.8099 337.764 60.4079 337.983 57.7116C338.224 54.731 335.875 52.94 335.695 52.8093C333.182 50.9595 330.299 52.0903 330.139 52.1556C330.411 51.0175 330.343 49.8244 329.943 48.7247C329.543 47.625 328.828 46.6673 327.887 45.9707C326.947 45.2741 325.822 44.8694 324.654 44.8069C323.485 44.7444 322.324 45.0269 321.315 45.6192C322.062 44.9293 322.555 44.0086 322.717 43.0046C322.869 42.1105 322.721 41.1911 322.295 40.3901C321.429 38.9226 319.301 38.2167 317.066 38.7559C317.275 38.367 318.886 35.2361 317.393 31.8927C316.754 30.5249 315.738 29.3678 314.464 28.5573C313.191 27.7468 311.712 27.3166 310.203 27.3172C310.538 26.4282 310.598 25.4586 310.373 24.5353C310.149 23.6119 309.651 22.7779 308.945 22.1422C308.238 21.5065 307.357 21.0989 306.415 20.9726C305.473 20.8463 304.515 21.0073 303.666 21.4344C304.15 18.6597 302.189 16.3164 300.071 16.2053C298.476 16.117 296.803 17.3001 296.149 19.1466C295.754 18.0382 294.96 17.1166 293.923 16.5611C292.885 16.0057 291.678 15.8561 290.537 16.1415C289.395 16.4269 288.4 17.1269 287.746 18.1053C287.092 19.0836 286.826 20.2703 286.998 21.4344C286.976 20.15 285.904 19.3199 285.037 19.4735C284.384 19.5846 283.825 20.2513 283.73 21.1076C283.586 20.869 281.789 17.9832 278.501 17.8394C275.654 17.7119 272.916 19.7022 271.965 22.7417C271.259 22.0423 267.454 18.4276 261.506 18.493C257.869 18.5589 254.381 19.9539 251.702 22.4149C251.502 22.1436 248.711 18.493 244.512 18.8198C240.426 19.1466 238.067 23.026 237.322 25.6831C236.859 27.3955 236.859 29.1998 237.322 30.9122C236.39 30.598 235.387 30.5627 234.436 30.8107C233.484 31.0587 232.626 31.5791 231.967 32.3081C231.307 33.0371 230.875 33.9429 230.723 34.9142C230.571 35.8855 230.706 36.88 231.112 37.7755C228.788 34.6936 225.059 34.0105 222.941 35.4877C221.098 36.7721 220.98 39.3377 220.98 39.7364C219.196 38.9292 217.173 39.3704 216.078 40.7169C214.862 42.2105 215.372 44.1191 215.424 44.3119C213.545 43.4197 211.401 44.0864 210.522 45.6192C210.199 46.2365 210.058 46.9331 210.115 47.6276C210.173 48.3221 210.428 48.9858 210.849 49.5411C209.857 49.0372 208.713 48.9176 207.638 49.2053C206.564 49.493 205.633 50.1677 205.025 51.0997C204.417 52.0318 204.175 53.1556 204.345 54.2553C204.515 55.355 205.086 56.3531 205.947 57.058C203.96 56.8847 202.25 58.2639 202.025 59.9993C201.822 61.5714 202.888 63.0617 204.313 63.5944C206.202 64.3003 207.839 62.9963 207.908 62.9407C207.76 63.4457 207.804 63.9872 208.031 64.4618C208.258 64.9364 208.652 65.3106 209.137 65.5129C209.623 65.7152 210.166 65.7314 210.663 65.5583C211.159 65.3852 211.575 65.0351 211.829 64.5749C211.911 64.7448 212.986 66.8626 215.424 67.1894C217.941 67.5359 219.569 65.6762 219.673 65.5553C219.96 66.6159 220.597 67.5484 221.481 68.2011C222.365 68.8538 223.444 69.1884 224.542 69.1505C225.64 69.1127 226.693 68.7045 227.53 67.9925C228.366 67.2805 228.938 66.3064 229.151 65.2285C229.492 65.6993 229.932 66.0896 230.44 66.3719C230.949 66.6542 231.512 66.8217 232.092 66.8626C232.849 66.8733 233.593 66.6625 234.232 66.256C234.871 65.8495 235.376 65.2652 235.687 64.5749" },
    5: { path: "M298.764 49.5411C301.261 47.2729 304.791 47.1291 306.934 48.8874C309.176 50.7241 308.922 53.8355 308.895 54.1166C309.528 53.5852 310.298 53.2437 311.117 53.1317C311.935 53.0196 312.769 53.1416 313.521 53.4835C314.273 53.8254 314.913 54.3732 315.367 55.0636C315.821 55.754 316.07 56.5587 316.085 57.3848" },
    6: { path: "M309.222 92.0279L297.934 98.0741L285.753 104.862" },
    7: { path: "M307.261 102.159C306.614 100.705 305.56 99.4679 304.227 98.5981C302.893 97.7283 301.337 97.2626 299.744 97.257" },
    8: { path: "M297.13 88.4328C297.112 87.4758 297.362 86.5328 297.851 85.7101C298.34 84.8873 299.049 84.2174 299.898 83.7758C300.748 83.3342 301.703 83.1384 302.658 83.2106C303.612 83.2827 304.527 83.6199 305.301 84.1842C305.663 82.367 306.961 80.9388 308.569 80.5891C310.706 80.1218 313.144 81.6153 313.798 84.1842C314.54 81.5892 317.22 80.4323 319.027 81.2428C320.403 81.8572 321.285 83.6155 320.988 85.4914C321.282 85.6372 321.535 85.8554 321.721 86.1254C321.908 86.3954 322.023 86.7084 322.056 87.0351C322.089 87.3618 322.038 87.6914 321.908 87.9931C321.778 88.2947 321.574 88.5585 321.315 88.7597C324.619 89.2728 326.609 92.0475 326.217 94.3156C325.916 96.0511 324.224 97.5185 322.472 97.8943C321.768 98.0455 321.041 98.0511 320.334 97.9107C321.936 99.584 321.642 102.238 320.008 103.467C318.458 104.62 316.024 104.264 314.778 102.486C316.785 104.156 316.935 107.062 315.432 108.696C314.203 110.029 312.01 110.356 310.203 109.349" },
    9: { path: "M250.26 80.3538C247.884 79.2393 246.217 79.3407 245.165 79.6086C242.838 80.1969 242.165 81.9324 239.609 82.8769C238.035 83.4293 236.34 83.5423 234.707 83.2037" },
    10: { path: "M235.511 76.4417C235.285 77.0791 235.192 77.7562 235.239 78.4309C235.285 79.1055 235.47 79.7634 235.782 80.3636C236.87 82.3768 239.822 82.0892 240.08 82.1284" },
    11: { path: "M237.962 78.8831C238.45 78.8501 238.913 78.6524 239.275 78.3223C239.636 77.9923 239.875 77.5494 239.952 77.066C240.001 76.494 239.822 75.926 239.455 75.4845C239.088 75.043 238.563 74.7635 237.991 74.7063C238.668 73.4415 238.22 71.997 237.338 71.5002C236.328 70.9381 234.625 71.5002 234.07 73.0722C233.81 72.7314 233.446 72.4837 233.034 72.3659C232.622 72.2482 232.183 72.2666 231.782 72.4186C231.533 72.5512 231.315 72.7371 231.146 72.963C230.977 73.189 230.859 73.4494 230.801 73.7259C230.743 74.0062 230.742 74.2954 230.798 74.5762C230.855 74.857 230.967 75.1235 231.128 75.36C230.148 75.3077 229.252 75.6868 228.916 76.3404C228.425 77.2948 229.066 78.9812 230.801 79.6087C230.432 79.6935 230.101 79.9014 229.865 80.1982C229.629 80.495 229.5 80.8633 229.5 81.2428C229.5 81.6222 229.629 81.9905 229.865 82.2873C230.101 82.5841 230.432 82.792 230.801 82.8769C230.476 83.1626 230.266 83.5576 230.212 83.9873C230.158 84.417 230.264 84.8515 230.508 85.2089C230.753 85.5662 231.12 85.8215 231.54 85.9266C231.96 86.0317 232.404 85.9792 232.788 85.7791C232.778 86.3962 233.002 86.9943 233.416 87.4524C233.652 87.7108 233.944 87.9111 234.27 88.0377C234.596 88.1643 234.946 88.2137 235.295 88.182C235.643 88.1503 235.979 88.0385 236.277 87.8552C236.575 87.6719 236.826 87.4222 237.011 87.1256C237.188 86.84 237.305 86.5217 237.355 86.1898C237.406 85.8579 237.389 85.5192 237.305 85.194" },
    12: { path: "M176.738 56.6705C176.869 58.6299 180.405 58.7605 180.405 55.8868C180.405 54.5806 179.292 53.5904 178.31 53.2743C176.67 52.7518 174.923 53.8621 174.119 55.1031C172.972 56.8691 173.564 59.2307 174.643 60.5892C176.594 63.0397 180.531 62.6949 182.762 61.8955C187.526 60.1869 188.718 54.9019 188.786 54.5806C189.65 50.4346 187.88 45.5493 183.81 43.347C179.999 41.2805 176.11 42.5841 175.429 42.8245C175.209 42.4169 173.431 39.2898 169.667 38.6446C168.259 38.3951 166.809 38.5306 165.472 39.0365C164.135 39.5425 162.96 40.4 162.072 41.5183C160.516 43.5351 159.526 46.9522 161.286 49.6169C162.627 51.6468 165.422 53.0131 167.834 52.2293C169.203 51.7774 170.835 50.4006 170.976 48.5719C171.02 48.2062 170.984 47.8355 170.872 47.4847C170.759 47.134 170.573 46.8114 170.324 46.5389C170.076 46.2665 169.772 46.0504 169.433 45.9053C169.093 45.7603 168.727 45.6896 168.357 45.6982C167.003 45.7165 165.689 47.0619 165.738 48.8331" },
    13: { path: "M162.279 40.3212C160.751 38.7989 158.769 37.8146 156.633 37.5164C154.496 37.2183 152.321 37.6226 150.434 38.6684C146.385 40.9658 144.487 45.9628 146.026 50.5136C142.949 52.7174 141.528 56.4858 142.445 59.8796C143.153 62.4966 145.263 64.9317 148.23 65.6645C151.153 66.3862 154.874 65.4496 156.494 62.6343C157.536 60.8245 157.954 57.8218 156.219 56.023C155.166 54.9211 153.189 54.0947 151.536 54.9211C150.288 55.5327 149.31 56.91 149.47 58.3645C149.497 58.6396 149.58 58.9062 149.715 59.1477C149.849 59.3892 150.032 59.6005 150.252 59.7684C150.471 59.9363 150.723 60.0573 150.991 60.1238C151.26 60.1903 151.539 60.201 151.811 60.1551C152.731 60.0118 153.492 59.0862 153.464 57.9513" },
    14: { path: "M61 60.0743C61.1384 41.4345 76.5395 26.4841 94.4554 27.0136C112.741 27.552 127.409 44.0326 125.892 63" },
    15: { path: "M69 68L38.0866 51.5141C37.4271 51.1632 36.6858 50.9864 35.9355 51.0008C35.1852 51.0153 34.4517 51.2205 33.8068 51.5965L19 61.165" },
    16: { path: "M140 58.6574L139.159 58.1654C138.967 58.0534 138.747 57.9961 138.524 58.0002C138.301 58.0043 138.083 58.0695 137.896 58.1885L124 67" },
    17: { path: "M181.5 81C171.542 75.1421 165.958 71.8579 156 66" },
    18: { path: "M28.4845 15.5868C27.8714 12.1689 30.7729 11.4267 32.1633 11.5537C35.5428 11.8613 36.7643 15.2743 35.2338 18.6872C33.9448 21.5534 30.0536 22.4567 27.2582 21.7926C22.0394 20.5475 19.1958 14.9813 20.2 9.68851C21.2283 4.27365 26.6162 0.899737 31.5502 1.00227C37.276 1.12922 42.437 5.93864 43.2094 12.4814C44.035 11.9931 47.651 9.86917 52.1023 10.9336C56.4474 11.9638 59.8558 15.577 61 20.2399" },
    19: { path: "M53.2565 27.2808C53.2565 30.1043 48.3375 30.1043 48.3375 26.0271C48.3375 22.5718 52.4536 21.091 55.109 22.5718C57.8757 24.1365 58.7946 27.5869 57.2614 30.7262C55.3267 34.6751 50.8043 35.0404 50.19 35.1144C44.7583 35.7907 40.8599 31.595 40.3568 31.0372C39.9554 31.5999 35.9602 37 28.9856 37C21.3193 37 17.2273 30.4794 17 30.0895" },
    20: { path: "M12.6381 26.5993C12.5657 26.7113 11.6389 28.1633 10.181 28.1487C8.52514 28.1487 7.60309 26.5359 7.72861 25.0498C7.78238 24.0305 8.23017 23.0731 8.97578 22.3834C9.72138 21.6938 10.7053 21.3268 11.7161 21.3614C15.0953 21.3614 16.9298 23.5589 17.5428 26.0048C18.5083 29.7712 15.0905 34.6729 10.181 34.9799C5.76867 35.2625 2.36528 32.5437 1.28393 28.48C0.00948066 23.6368 3.21492 18.857 7.11551 17.3368C8.78558 16.7195 10.5985 16.611 12.3292 17.0249C12.392 16.1058 12.6486 15.2109 13.0818 14.4C13.515 13.589 14.1147 12.8808 14.8409 12.3226C15.5671 11.7645 16.403 11.3693 17.2927 11.1635C18.1825 10.9577 19.1055 10.946 20 11.1293" },
    21: { path: "M218.878 103.562C218.537 102.62 216.937 98.513 212.501 96.353C211.464 95.8456 206.445 93.5803 201.687 96.353C197.5 98.7848 196.696 103.324 196.418 104.671C193.923 116.872 211.391 120.476 211.114 110.217C211.045 107.66 209.109 105.919 206.955 106.335C205.341 106.646 204.027 108.229 203.905 110.217" },
    22: { path: "M182 111.881C182.86 111.458 183.816 111.267 184.773 111.326C186.004 111.412 187.172 111.899 188.1 112.712C187.833 111.7 187.875 110.631 188.221 109.642C188.567 108.654 189.201 107.792 190.041 107.167C191.741 105.905 194.325 106.058 196.141 107.167" },
    23: { path: "M212 125C218.152 118.599 222.61 110.681 224.949 102C227.485 109.832 232.415 116.606 239 121.309" },
    24: { path: "M253 94.5L225 102V121" },
    25: { path: "M211 75H194.341C193.72 75 193.125 75.2616 192.686 75.7274C192.247 76.1931 192 76.8247 192 77.4834C192 78.142 192.247 78.7737 192.686 79.2394C193.125 79.7051 193.72 79.9667 194.341 79.9667H204.132C204.402 79.9664 204.67 80.0226 204.92 80.1322C205.17 80.2417 205.397 80.4025 205.588 80.6052C205.779 80.8079 205.93 81.0486 206.034 81.3136C206.137 81.5785 206.19 81.8625 206.19 82.1492C206.19 82.4359 206.137 82.7198 206.034 82.9848C205.93 83.2497 205.779 83.4904 205.588 83.6931C205.397 83.8959 205.17 84.0566 204.92 84.1662C204.67 84.2757 204.402 84.3319 204.132 84.3316H199.591C199.007 84.3323 198.448 84.5785 198.036 85.0162C197.624 85.4539 197.393 86.0472 197.393 86.6658C197.393 87.2844 197.624 87.8777 198.036 88.3154C198.448 88.7531 199.007 88.9993 199.591 89H208.183" },
    26: { path: "M134 112C137.699 112.74 141 112.5 145.5 116C150 119.5 149.732 125.01 157 128" },
    27: { path: "M139 106C145.5 106 147.629 107.647 149.724 109.519C153.5 114 152 115.963 155 119C159.364 123.417 163 124.5 169 124" },
    28: { path: "M179 113.432C178.782 113.713 174.878 118.577 168.501 117.943C166.484 117.73 164.557 117.007 162.906 115.845C161.256 114.683 159.937 113.12 159.078 111.309C156.677 106.227 158.518 100.099 162.309 97.2435C165.27 95.0116 169.699 94.5578 170.116 95.3858C170.385 95.9484 170.385 98.0396 167.424 97.7742C166.215 97.6654 164.732 96.4049 164.463 96.1819" },
    29: { path: "M147 101C149.114 101.21 151.165 101.917 153.024 103.074C155.04 104.33 157.19 106.537 158.5 109.5" },
    30: { path: "M165.5 79C166.881 79 168 78.1046 168 77C168 75.8954 166.881 75 165.5 75C164.119 75 163 75.8954 163 77C163 78.1046 164.119 79 165.5 79Z" },
    31: { path: "M152.5 89C154.433 89 156 87.433 156 85.5C156 83.567 154.433 82 152.5 82C150.567 82 149 83.567 149 85.5C149 87.433 150.567 89 152.5 89Z" },
    32: { path: "M142 87C144.761 87 147 84.7614 147 82C147 79.2386 144.761 77 142 77C139.239 77 137 79.2386 137 82C137 84.7614 139.239 87 142 87Z" },
    33: { path: "M132 99C134.209 99 136 97.2091 136 95C136 92.7909 134.209 91 132 91C129.791 91 128 92.7909 128 95C128 97.2091 129.791 99 132 99Z" },
    34: { path: "M153 99V89" },
    35: { path: "M142 101L142 87" },
    36: { path: "M132 106V99" },
    37: { path: "M142.013 90.7485C141.777 89.7774 144.819 88.7183 146.487 89.0685C146.862 89.1466 147.199 89.2979 147.463 89.5057C147.726 89.7134 147.904 89.9696 147.978 90.2458C148.139 90.9462 147.411 91.6917 146.188 91.9259C144.548 92.2417 142.195 91.4919 142.013 90.7485Z" },
    38: { path: "M141.991 93.7485C142.148 92.7774 140.12 91.7183 139.009 92.0685C138.759 92.1466 138.534 92.2979 138.358 92.5057C138.183 92.7134 138.064 92.9696 138.015 93.2458C137.907 93.9462 138.393 94.6917 139.208 94.9259C140.301 95.2417 141.87 94.4919 141.991 93.7485Z" },
    39: { path: "M131.991 101.749C132.148 100.777 130.122 99.7183 129.009 100.068C128.759 100.147 128.534 100.298 128.358 100.506C128.183 100.713 128.064 100.97 128.015 101.246C127.907 101.946 128.393 102.692 129.208 102.926C130.301 103.242 131.872 102.492 131.991 101.749Z" },
    40: { path: "M114.562 105.498C115.104 105.73 115.612 106.099 116.063 106.587C116.433 106.943 116.751 107.398 117 107.927C115.929 108.016 114.861 107.693 113.907 106.99C113.349 106.573 112.843 106.031 112.406 105.384C111.901 104.637 111.296 104.044 110.627 103.641C109.509 102.893 108.232 102.796 107.065 103.369C106.22 103.851 105.499 104.693 105 105.781C105.179 106.048 106.882 108.444 109.312 107.927C110.526 107.649 111.627 106.744 112.406 105.384C112.858 104.836 113.364 104.384 113.907 104.044C114.47 103.705 115.059 103.465 115.663 103.331C116.105 103.21 116.551 103.127 117 103.08C116.752 103.61 116.434 104.065 116.063 104.42C115.613 104.907 115.104 105.272 114.562 105.498Z" },
    41: { path: "M103.359 95.4982C103.946 95.7298 104.497 96.0988 104.985 96.5874C105.386 96.9433 105.73 97.3982 106 97.9271C104.84 98.0164 103.682 97.6929 102.649 96.9904C102.045 96.5734 101.496 96.031 101.023 95.3838C100.476 94.6367 99.8208 94.0438 99.0956 93.6411C97.8847 92.8935 96.5012 92.7958 95.2368 93.3688C94.3212 93.8508 93.5402 94.6931 93 95.7814C93.194 96.0482 95.0388 98.4445 97.6718 97.9271C98.987 97.6489 100.179 96.7441 101.023 95.3838C101.513 94.8357 102.061 94.3844 102.649 94.0441C103.259 93.7049 103.898 93.4653 104.551 93.3307C105.03 93.2104 105.514 93.1268 106 93.0801C105.731 93.6102 105.386 94.0654 104.985 94.4199C104.497 94.9068 103.946 95.2723 103.359 95.4982V95.4982Z" },
    42: { path: "M80 119L86.45 114V117.081C86.45 117.59 86.6239 118.078 86.9333 118.438C87.2428 118.798 87.6625 119 88.1001 119C88.4253 119.002 88.744 118.894 89.0166 118.687L95.05 114V117.081C95.05 117.333 95.0927 117.583 95.1756 117.815C95.2585 118.048 95.3801 118.26 95.5333 118.438C95.6866 118.616 95.8685 118.757 96.0687 118.854C96.2689 118.95 96.4834 119 96.7001 119V119C97.0253 119.002 97.344 118.894 97.6166 118.687L103.65 114V117.081C103.65 117.333 103.693 117.583 103.776 117.815C103.859 118.048 103.98 118.26 104.133 118.438C104.287 118.616 104.468 118.757 104.669 118.854C104.869 118.95 105.083 119 105.3 119V119C105.625 119.002 105.944 118.894 106.217 118.687L112.25 114V117.081C112.25 117.333 112.293 117.583 112.376 117.815C112.459 118.048 112.58 118.26 112.733 118.438C112.887 118.616 113.068 118.757 113.269 118.854C113.469 118.95 113.683 119 113.9 119C114.225 119.002 114.544 118.894 114.817 118.687L120.85 114V116.5C120.85 117.163 121.077 117.799 121.48 118.268C121.883 118.737 122.43 119 123 119" },
    43: { path: "M60 99L66.6427 94V97.0812C66.6427 97.5901 66.8218 98.0782 67.1405 98.438C67.4592 98.7978 67.8915 99 68.3422 99C68.6771 99.0024 69.0053 98.8937 69.286 98.6875L75.4997 94V97.0812C75.4997 97.3332 75.5437 97.5827 75.6291 97.8155C75.7145 98.0483 75.8397 98.2598 75.9975 98.438C76.1553 98.6162 76.3427 98.7575 76.5488 98.8539C76.755 98.9503 76.976 99 77.1992 99C77.5341 99.0024 77.8623 98.8937 78.143 98.6875L84.3567 94V97.0812C84.3567 97.3332 84.4007 97.5827 84.4861 97.8155C84.5715 98.0483 84.6967 98.2598 84.8545 98.438C85.0123 98.6162 85.1997 98.7575 85.4058 98.8539C85.612 98.9503 85.833 99 86.0562 99C86.3911 99.0024 86.7193 98.8937 87 98.6875" },
    44: { path: "M327.04 118H312.443C310.999 118 309.615 118.579 308.594 119.611C307.573 120.642 307 122.041 307 123.5C307.001 124.958 307.575 126.356 308.596 127.388C309.616 128.419 311 128.999 312.443 129H331" },
    45: { path: "M130.5 75.5L105.5 56.5L78 68.9999" },
    46: { path: "M33.7952 82H20.5843C19.6337 82 18.722 82.3841 18.0498 83.0678C17.3776 83.7516 17 84.6789 17 85.6458C17 86.6128 17.3776 87.5401 18.0498 88.2238C18.722 88.9076 19.6337 89.2917 20.5843 89.2917H47.2108C48.2158 89.2917 49.1796 89.6977 49.8902 90.4205C50.6008 91.1433 51 92.1236 51 93.1458C51 94.168 50.6008 95.1483 49.8902 95.8711C49.1796 96.5939 48.2158 97 47.2108 97H25.1928" },
    47: { path: "M35 75C37.2091 75 39 73.2091 39 71C39 68.7909 37.2091 67 35 67C32.7909 67 31 68.7909 31 71C31 73.2091 32.7909 75 35 75Z" },
    48: { path: "M290 124C292.209 124 294 122.209 294 120C294 117.791 292.209 116 290 116C287.791 116 286 117.791 286 120C286 122.209 287.791 124 290 124Z" },
    49: { path: "M246 390H224.096C223.346 390 222.626 389.701 222.095 389.169C221.564 388.636 221.266 387.914 221.266 387.161C221.266 386.408 221.564 385.686 222.095 385.154C222.626 384.622 223.346 384.322 224.096 384.322H229.637C229.973 384.337 230.307 384.283 230.622 384.164C230.936 384.046 231.223 383.864 231.466 383.631C231.708 383.398 231.901 383.118 232.033 382.809C232.165 382.499 232.233 382.165 232.233 381.829C232.233 381.492 232.165 381.158 232.033 380.849C231.901 380.539 231.708 380.259 231.466 380.026C231.223 379.793 230.936 379.612 230.622 379.493C230.307 379.374 229.973 379.32 229.637 379.335H219.659C218.954 379.335 218.278 379.054 217.779 378.554C217.28 378.053 217 377.375 217 376.667C217 375.96 217.28 375.282 217.779 374.781C218.278 374.281 218.954 374 219.659 374H232.957" },
    50: { path: "M101 357.853C99.9694 357.293 98.813 357 97.6376 357C96.4623 357 95.3059 357.293 94.2753 357.853L61 376" },
    51: { path: "M106 372L100.78 375.785C100.578 375.931 100.344 376.006 100.107 376C99.87 375.994 99.6393 375.908 99.4424 375.753L95.3223 372.521C95.1244 372.365 94.8926 372.28 94.6546 372.275C94.4165 372.27 94.1823 372.346 93.98 372.494L89.4404 375.785C89.2399 375.925 89.0101 375.997 88.777 375.991C88.5439 375.985 88.3168 375.902 88.1215 375.753L84.0014 372.521C83.8044 372.365 83.5733 372.28 83.336 372.275C83.0987 372.27 82.8652 372.346 82.6637 372.494L78.1195 375.785C77.9172 375.931 77.6837 376.006 77.4466 376C77.2095 375.994 76.9788 375.908 76.7819 375.753L72 372" },
    52: { path: "M184 290L178.63 293.77C178.422 293.918 178.181 293.993 177.936 293.989C177.691 293.984 177.453 293.898 177.249 293.743L173.011 290.52C172.808 290.364 172.571 290.279 172.326 290.274C172.082 290.269 171.842 290.345 171.635 290.493L166.96 293.776C166.753 293.923 166.513 293.999 166.269 293.994C166.025 293.989 165.787 293.904 165.584 293.749L161.346 290.525C161.143 290.37 160.906 290.284 160.661 290.28C160.417 290.275 160.177 290.351 159.97 290.498L155.295 293.781C155.088 293.929 154.848 294.005 154.604 294C154.359 293.995 154.122 293.91 153.919 293.754L149 290.011" },
    53: { path: "M222 262.173C221.798 262.055 221.565 261.996 221.328 262C221.091 262.005 220.86 262.074 220.664 262.199L216.547 264.801C216.35 264.927 216.12 264.996 215.882 265C215.645 265.004 215.412 264.943 215.211 264.823L210.671 262.173C210.468 262.055 210.235 261.996 209.998 262C209.761 262.005 209.531 262.074 209.334 262.199L205.218 264.801C205.02 264.927 204.788 264.996 204.551 265C204.313 265.003 204.079 264.942 203.877 264.823L199.341 262.173C199.138 262.056 198.904 261.996 198.666 262C198.429 262.005 198.198 262.074 198 262.199" },
    54: { path: "M4.86414 272.434L5.46186 279.161C5.93914 284.532 10.6802 288.499 16.0514 288.022L22.7779 287.424C28.149 286.947 32.1163 282.206 31.639 276.835L31.0413 270.108C30.564 264.737 25.8229 260.77 20.4518 261.247L13.7253 261.845C8.35413 262.322 4.38686 267.063 4.86414 272.434Z" },
    55: { path: "M309.227 258.224C315.195 263.575 319.885 270.215 322.942 277.643C325.999 285.072 327.345 293.095 326.877 301.11C326.41 309.126 324.142 316.924 320.244 323.919C316.346 330.914 310.919 336.923 304.372 341.495C297.825 346.067 290.328 349.082 282.445 350.314C274.562 351.545 266.498 350.962 258.859 348.606C251.221 346.251 244.207 342.186 238.346 336.716" },
    56: { path: "M201 322C198.097 315.094 193.651 308.938 188 304" },
    57: { path: "M122.007 301C114.503 307.311 108.992 315.712 106.155 325.165C103.319 334.617 103.281 344.704 106.048 354.178C108.815 363.651 114.264 372.095 121.721 378.462C129.178 384.829 138.315 388.841 148 390" },
    58: { path: "M81.5307 254.434C73.1701 252.885 64.4936 253.425 56.3031 256.006C48.1126 258.586 40.6723 263.123 34.6698 269.197" },
    59: { path: "M22.1174 290.964C19.2699 301.369 19.7804 312.397 23.5763 322.481C27.3723 332.566 34.2604 341.192 43.2614 347.135C52.2624 353.078 62.9181 356.034 73.7133 355.584C79.8665 355.327 85.8866 353.97 91.5 351.616" },
    60: { path: "M78.9215 324C78.8224 324.001 78.7257 323.969 78.6467 323.909C78.5677 323.849 78.511 323.765 78.4854 323.669C78.4598 323.574 78.4668 323.472 78.5054 323.381C78.544 323.29 78.6119 323.214 78.6984 323.166L88.9476 317.255C89.6035 316.876 90.1484 316.333 90.5275 315.678C90.9066 315.023 91.1066 314.28 91.1075 313.524V294.747C91.1065 293.991 90.9065 293.247 90.5274 292.592C90.1483 291.936 89.6036 291.391 88.9476 291.012L72.6837 281.626C72.0279 281.248 71.2837 281.048 70.5261 281.048C69.7685 281.048 69.0243 281.248 68.3685 281.626L52.0619 291.003C51.404 291.383 50.8576 291.928 50.4777 292.586C50.0977 293.243 49.8975 293.989 49.8972 294.747V313.524C49.8981 314.28 50.0976 315.022 50.4758 315.677C50.854 316.331 51.3977 316.875 52.0524 317.255L62.1497 323.076C62.2509 323.134 62.325 323.23 62.3561 323.343C62.3871 323.455 62.3727 323.576 62.3159 323.678C62.2751 323.746 62.2176 323.804 62.1487 323.844C62.0798 323.885 62.0018 323.907 61.9218 323.91C61.8435 323.908 61.7669 323.887 61.6987 323.848L51.1505 317.766C50.4974 317.388 49.955 316.846 49.5777 316.193C49.2003 315.54 49.0011 314.799 49 314.045V294.221C49.0016 293.467 49.201 292.727 49.5783 292.074C49.9556 291.421 50.4977 290.879 51.1505 290.5L68.3543 280.574C69.0084 280.198 69.75 280 70.5047 280C71.2595 280 72.0011 280.198 72.6552 280.574L89.8495 290.486C90.503 290.864 91.0456 291.406 91.423 292.059C91.8004 292.712 91.9994 293.453 92 294.207V314.031C91.9998 314.785 91.8011 315.526 91.4236 316.179C91.0461 316.832 90.5033 317.375 89.8495 317.752L79.1446 323.915C79.0806 323.965 79.0028 323.995 78.9215 324Z" },
    61: { path: "M150.184 340.283L139.619 334.182L129.053 340.283V352.48L139.619 358.581L150.184 352.48V340.283Z" },
    62: { path: "M164.333 316.544L153.767 310.448L143.201 316.544V328.746L153.767 334.843L164.333 328.746V316.544Z" },
    63: { path: "M178.026 340.283L167.461 334.182L156.895 340.283V352.48L167.461 358.581L178.026 352.48V340.283Z" },
    64: { path: "M146.404 342.552L139.647 346.797L132.425 342.552L139.647 338.304L146.404 342.552Z" },
    65: { path: "M174.246 342.552L167.493 346.797L160.267 342.552L167.493 338.304L174.246 342.552Z" },
    66: { path: "M160.553 319.273L153.8 323.518L146.573 319.273L153.8 315.025L160.553 319.273Z" },
    67: { path: "M195.5 380C197.985 380 200 374.18 200 367C200 359.82 197.985 354 195.5 354C193.015 354 191 359.82 191 367C191 374.18 193.015 380 195.5 380Z" },
    68: { path: "M198.137 371.184C204.234 367.414 208.063 362.556 206.689 360.333C205.314 358.11 199.257 359.365 193.16 363.135C187.062 366.905 183.233 371.764 184.608 373.986C185.982 376.209 192.039 374.955 198.137 371.184Z" },
    69: { path: "M206.689 373.949C208.064 371.726 204.235 366.868 198.137 363.097C192.04 359.327 185.983 358.072 184.608 360.295C183.234 362.518 187.063 367.376 193.16 371.146C199.258 374.917 205.315 376.171 206.689 373.949Z" },
    70: { path: "M196 369C197.105 369 198 368.105 198 367C198 365.895 197.105 365 196 365C194.895 365 194 365.895 194 367C194 368.105 194.895 369 196 369Z" },
    71: { path: "M263.296 274.379C262.814 274.845 262.387 275.457 261.653 275.293C260.415 275.016 260.773 273.094 259.535 272.817C258.297 272.54 257.94 274.462 256.702 274.185C255.465 273.908 255.826 271.99 254.588 271.713C253.351 271.436 252.989 273.358 251.752 273.081C250.514 272.805 250.875 270.882 249.638 270.606C248.4 270.329 248.038 272.255 246.801 271.978C246.63 271.935 246.472 271.854 246.336 271.742C246.2 271.63 246.091 271.49 246.016 271.331C245.457 269.52 245.383 267.594 245.801 265.745C247.062 260.101 252.451 256.484 257.837 257.689C263.223 258.894 266.555 264.448 265.285 270.092C264.945 271.65 264.266 273.113 263.296 274.379Z" },
    72: { path: "M254.451 270.355C257.842 271.114 259.71 269.465 260.323 266.67C260.936 263.876 259.37 260.822 256.701 260.231C254.032 259.64 251.318 261.71 250.695 264.533C250.072 267.355 251.052 269.6 254.451 270.355Z" },
    73: { path: "M255.594 264.687C255.837 263.591 255.228 262.525 254.235 262.306C253.242 262.086 252.241 262.796 251.998 263.891C251.756 264.987 252.364 266.053 253.357 266.273C254.35 266.492 255.352 265.782 255.594 264.687Z" },
    74: { path: "M254.528 263.926C254.642 263.417 254.328 262.914 253.828 262.802C253.328 262.691 252.831 263.012 252.717 263.521C252.604 264.03 252.917 264.533 253.417 264.645C253.917 264.756 254.415 264.434 254.528 263.926Z" },
    75: { path: "M249.638 270.593C248.763 270.398 248.327 271.303 247.707 271.751L247.189 274.171C247.14 274.354 247.129 274.546 247.156 274.734C247.183 274.922 247.248 275.103 247.346 275.266C247.445 275.428 247.576 275.569 247.73 275.68C247.884 275.791 248.06 275.869 248.245 275.911C248.431 275.952 248.623 275.956 248.81 275.921C248.996 275.887 249.174 275.815 249.333 275.71C249.491 275.605 249.627 275.469 249.732 275.31C249.836 275.151 249.908 274.973 249.942 274.786L250.64 271.666C250.422 271.175 250.186 270.729 249.638 270.593Z" },
    76: { path: "M254.588 271.713C253.681 271.509 253.246 272.466 252.59 272.912L251.483 277.944C251.392 278.35 251.467 278.775 251.69 279.126C251.912 279.477 252.266 279.725 252.671 279.816C253.077 279.906 253.502 279.832 253.853 279.609C254.204 279.386 254.452 279.033 254.543 278.627L255.758 273.189C255.482 272.565 255.294 271.868 254.588 271.713Z" },
    77: { path: "M259.535 272.817C258.785 272.648 258.361 273.288 257.862 273.758L257.108 277.144C257.059 277.328 257.048 277.52 257.075 277.708C257.102 277.896 257.167 278.077 257.266 278.239C257.364 278.402 257.495 278.543 257.649 278.654C257.804 278.764 257.979 278.843 258.164 278.884C258.35 278.926 258.542 278.929 258.729 278.895C258.916 278.86 259.094 278.788 259.252 278.683C259.411 278.578 259.546 278.443 259.651 278.284C259.756 278.125 259.827 277.947 259.861 277.76L260.656 274.204C260.411 273.606 260.212 272.966 259.535 272.817Z" },
    78: { path: "M231.778 291.38C229.387 293.218 228.775 295.507 229.941 298.248C229.956 296.416 230.673 295.185 232.09 294.554C232.901 294.192 233.756 294.29 234.698 294.394C236.239 294.567 238.022 294.773 240.248 293.064C242.647 291.228 243.262 288.939 242.091 286.197C242.076 288.029 241.358 289.261 239.938 289.894C239.129 290.25 238.276 290.156 237.331 290.054C235.783 289.88 233.999 289.68 231.778 291.38ZM231.261 299.968C228.865 301.805 228.253 304.094 229.424 306.836C229.438 305.008 230.154 303.777 231.572 303.142C232.383 302.779 233.238 302.878 234.18 302.982C235.724 303.158 237.505 303.361 239.732 301.656C242.128 299.819 242.74 297.529 241.569 294.787C241.558 296.614 240.842 297.845 239.421 298.482C238.61 298.844 237.755 298.746 236.813 298.642C235.273 298.463 233.486 298.259 231.261 299.968Z" },
    79: { path: "M61 307.327L70 298V330" },
    80: { path: "M80 307L70 298" },
    81: { path: "M166.502 396C166.215 395.997 165.932 395.921 165.682 395.777L162.709 393.998L163.994 393.391L166.259 394.772C166.336 394.82 166.425 394.845 166.516 394.843C166.606 394.844 166.694 394.819 166.77 394.772L175.617 389.597C175.692 389.551 175.754 389.486 175.798 389.409C175.841 389.332 175.865 389.245 175.865 389.156V378.811C175.866 378.721 175.843 378.633 175.799 378.555C175.756 378.477 175.693 378.411 175.617 378.365L166.751 373.191C166.673 373.147 166.586 373.124 166.498 373.124C166.409 373.124 166.322 373.147 166.244 373.191L157.392 378.37C157.315 378.414 157.25 378.479 157.205 378.558C157.161 378.636 157.138 378.725 157.139 378.816V389.165C157.139 389.257 157.163 389.347 157.209 389.425C157.256 389.504 157.322 389.568 157.402 389.611L159.821 391.034C160.145 391.209 160.504 391.305 160.871 391.314C161.054 391.32 161.237 391.288 161.408 391.221C161.578 391.154 161.734 391.053 161.865 390.923C161.996 390.794 162.101 390.639 162.172 390.469C162.243 390.298 162.279 390.114 162.278 389.929V379.693H163.464V389.919C163.464 391.57 162.616 392.485 161.068 392.485C160.383 392.498 159.709 392.31 159.127 391.945L156.816 390.598C156.57 390.452 156.365 390.245 156.222 389.995C156.079 389.746 156.003 389.463 156 389.175V378.811C156.003 378.523 156.079 378.24 156.222 377.991C156.365 377.741 156.57 377.534 156.816 377.388L165.672 372.213C165.924 372.073 166.206 371.999 166.493 372C166.779 371.999 167.06 372.072 167.309 372.213L176.184 377.379C176.431 377.523 176.636 377.731 176.779 377.98C176.922 378.23 176.998 378.513 177 378.802V389.151C176.997 389.439 176.921 389.722 176.778 389.972C176.635 390.221 176.43 390.429 176.184 390.574L167.318 395.763C167.072 395.914 166.79 395.996 166.502 396ZM169.24 388.885C166.277 388.885 164.777 387.847 164.777 385.802L165.949 385.779C166.193 387.273 167.018 387.771 169.231 387.771C170.581 387.771 172.124 387.586 172.124 386.115C172.124 385.304 171.627 384.868 168.79 384.588C166.043 384.313 165.068 383.64 165.068 382.07C165.068 380.405 166.474 379.409 168.879 379.409C171.613 379.409 172.907 380.315 173.076 382.335L171.899 382.368C171.566 380.983 170.811 380.523 168.879 380.523C167.192 380.523 166.376 380.998 166.376 382.013C166.376 382.923 166.985 383.099 169.606 383.436C172.569 383.829 173.427 384.413 173.427 386.021C173.432 387.832 171.904 388.871 169.24 388.876V388.885Z" },
    82: { path: "M213.994 331.977L212.799 345.014C212.766 345.382 212.619 345.731 212.377 346.015C212.134 346.298 211.809 346.503 211.443 346.601L206.506 347.931C206.167 348.023 205.809 348.023 205.471 347.931L200.557 346.601C200.193 346.5 199.868 346.295 199.625 346.012C199.383 345.729 199.233 345.381 199.196 345.014L198.006 331.977C197.986 331.727 198.019 331.475 198.102 331.238C198.186 331 198.319 330.782 198.493 330.597C198.667 330.411 198.878 330.263 199.113 330.16C199.348 330.058 199.602 330.003 199.86 330H212.14C212.398 330.003 212.652 330.058 212.887 330.16C213.122 330.263 213.333 330.411 213.507 330.597C213.681 330.782 213.814 331 213.898 331.238C213.981 331.475 214.014 331.727 213.994 331.977V331.977Z" },
    83: { path: "M206.005 333H206H201L201.184 335.119H206H206.005H208.815L208.631 337.287H206.005H206H201.358L201.537 339.407H206H206.005H208.456L208.227 342.155L206 342.793L203.773 342.16L203.631 340.469H202.552H201.629L201.909 343.792L206 345L206.005 344.995L210.091 343.792L210.123 343.436L210.591 337.857L210.642 337.287L211 333H206.005Z" },
    84: { path: "M242.359 317.48L248.773 319.727L246.499 326.131L240.085 323.884L242.359 317.48Z" },
    85: { path: "M231.497 322.676L244.794 327.334L236.105 331.491L229.222 329.079L231.497 322.676Z" },
    86: { path: "M301.997 291.053C302.001 291.037 302.001 291.021 301.997 291.005L301.973 290.932C301.975 290.922 301.975 290.913 301.973 290.903L301.93 290.839L301.906 290.814L294.374 286.362C294.317 286.331 294.253 286.315 294.188 286.315C294.123 286.315 294.059 286.331 294.002 286.362L286.521 290.766L286.498 290.786C286.478 290.792 286.461 290.805 286.45 290.822L286.426 290.859C286.411 290.871 286.399 290.886 286.391 290.903V290.952C286.387 290.962 286.387 290.974 286.391 290.984C286.385 291.018 286.385 291.052 286.391 291.086V299.557L279.679 303.503V286.779C279.686 286.746 279.686 286.711 279.679 286.678L279.652 286.605C279.653 286.596 279.653 286.586 279.652 286.577L279.62 286.532C279.614 286.521 279.606 286.511 279.596 286.504L272.065 282.052C272.008 282.018 271.944 282 271.878 282C271.813 282 271.748 282.018 271.692 282.052L264.152 286.475L264.101 286.52L264.077 286.54L264.037 286.597C264.035 286.606 264.035 286.616 264.037 286.625C264.037 286.625 264.017 286.682 264.002 286.718C263.999 286.744 263.999 286.77 264.002 286.795V312.865C264.005 312.931 264.023 312.996 264.057 313.053C264.09 313.11 264.136 313.158 264.192 313.193L279.109 321.964L279.212 322H279.283H279.374L279.422 321.98H279.469L294.354 313.189C294.411 313.155 294.458 313.108 294.49 313.05C294.523 312.993 294.54 312.927 294.541 312.861V304.377L301.811 300.103C301.868 300.071 301.915 300.023 301.948 299.965C301.981 299.908 301.998 299.842 301.997 299.775V291.053ZM301.256 299.553L294.541 303.499V295.687L301.256 291.737V299.553ZM300.883 291.081L294.172 295.028L287.461 291.081L294.172 287.135L300.883 291.081ZM287.092 299.557V291.737L293.803 295.683V303.499L287.092 299.557ZM293.803 304.819V312.638L279.636 320.964V313.067L293.803 304.819ZM293.427 304.167L279.263 312.42L272.56 308.546L286.72 300.221L293.427 304.167ZM272.179 307.891V291.381L278.895 287.435V303.94L272.179 307.891ZM271.811 290.729L265.1 286.787L271.811 282.833L278.518 286.771L271.811 290.729ZM278.895 313.075V320.964L264.727 312.638V287.435L271.438 291.381V308.607C271.437 308.619 271.437 308.631 271.438 308.643L271.462 308.7C271.46 308.712 271.46 308.724 271.462 308.736L271.494 308.785C271.502 308.795 271.511 308.805 271.521 308.813L278.895 313.075Z" },
    87: { path: "M318 336V344L325 339.998" },
    88: { path: "M238 361L237.922 353L232 357.073" },
    89: { path: "M302 357L310 352" },
    90: { path: "M258 364L253 361" },
    91: { path: "M186.267 269.117L181.508 272L177 268.873L181.508 266L190.916 272L191 266L189.073 267.267" },
    92: { path: "M209.929 277.117L204.83 280L200 276.873L204.83 274L214.915 280L215 274L212.936 275.267" },
    93: { path: "M20.5912 268.973L25.9697 271.675L23.9157 277.336" },
    94: { path: "M13.157 271.928L10.172 277.955L16.4815 280.291" },
    95: { path: "M15.0155 271.189L22.0571 278.075" },
    96: { path: "M124.002 243L116 247.503L124.002 252L132 247.503L124.002 243Z" },
    97: { path: "M140.5 261L133 265.373L140.5 270L148 265.373L140.5 261Z" },
    98: { path: "M132 248V265" },
    99: { path: "M124 252V262" },
    100: { path: "M116 248V260" },
    101: { path: "M140 266V255" },
    102: { path: "M139.5 255C140.881 255 142 253.881 142 252.5C142 251.119 140.881 250 139.5 250C138.119 250 137 251.119 137 252.5C137 253.881 138.119 255 139.5 255Z" },
    103: { path: "M148 266V277" },
    104: { path: "M140 270V286" },
    105: { path: "M94 279L107.776 271.557C109.666 270.537 111.813 270 114 270C116.187 270 118.334 270.537 120.224 271.557L134 279" },
    106: { path: "M96 279.005L98.5118 280.566C98.8978 280.807 99.3317 280.94 99.7754 280.954C100.219 280.968 100.659 280.861 101.057 280.644L102.949 279.603C103.327 279.396 103.744 279.287 104.167 279.287C104.59 279.287 105.007 279.396 105.385 279.603L107.301 280.675C107.671 280.882 108.079 280.993 108.494 281C108.909 281.006 109.32 280.907 109.694 280.712L111.833 279.593C112.219 279.39 112.644 279.291 113.073 279.303C113.501 279.316 113.921 279.44 114.297 279.666L115.778 280.561C116.177 280.8 116.624 280.926 117.079 280.926C117.533 280.926 117.98 280.8 118.379 280.561L121 279" },
    107: { path: "M193 286C194.105 286 195 285.105 195 284C195 282.895 194.105 282 193 282C191.895 282 191 282.895 191 284C191 285.105 191.895 286 193 286Z" },
    108: { path: "M193 286L193 302" },
    109: { path: "M211.002 304L218 300L211.002 296L204 300L211.002 304Z" },
    110: { path: "M218 300L214.704 305.366L211 307" },
    111: { path: "M204 300L207.294 305.366L211 307" },
    112: { path: "M211 296V300" },
    113: { path: "M211 307V320" },
    114: { path: "M211 314.347L216 311V317L211 314.347Z" },
    115: { path: "M216 293.105L210.878 290L202 296" },
    116: { path: "M280.337 364L276 368.337L280.337 372.675L284.675 368.337L280.337 364Z" },
    117: { path: "M41 357V375" },
    118: { path: "M45 364L40.8969 361L37 364" },
    119: { path: "M45 368L40.8969 365L37 368" },
    120: { path: "M45 360L40.8969 357L37 360" },
    121: { path: "M26 351V375" },
    122: { path: "M30 365L25.8969 363L22 365" },
    123: { path: "M30 361L25.8969 359L22 361" },
    124: { path: "M30 357L25.8969 355L22 357" },
    125: { path: "M30 353L25.8969 351L22 353" },

}
export default verticalShapes;