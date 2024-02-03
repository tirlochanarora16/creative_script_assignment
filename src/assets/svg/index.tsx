const Icons = {
  search: () => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.81402 17.1736C13.8786 17.1736 17.1736 13.8786 17.1736 9.81397C17.1736 5.74937 13.8786 2.45436 9.81402 2.45436C5.74942 2.45436 2.45441 5.74937 2.45441 9.81397C2.45441 13.8786 5.74942 17.1736 9.81402 17.1736Z"
        stroke="#292D32"
        stroke-width="1.32805"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.9488 17.9482L16.3994 16.3988"
        stroke="#292D32"
        stroke-width="1.32805"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  home: (color: string = "black") => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.809692 10.4174C0.809692 5.79849 1.31333 6.12085 4.02428 3.60676C5.21037 2.65198 7.05595 0.809685 8.64971 0.809685C10.2427 0.809685 12.1251 2.64296 13.3219 3.60676C16.0329 6.12085 16.5357 5.79849 16.5357 10.4174C16.5357 17.2148 14.9288 17.2148 8.67268 17.2148C2.41658 17.2148 0.809692 17.2148 0.809692 10.4174Z"
        stroke={color}
        stroke-width="1.23039"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.28796 12.4044H11.0578"
        stroke={color}
        stroke-width="1.23039"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  graph: (color: string = "black") => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.1149 1.41435C9.50511 2.1163 9.26223 6.53035 9.97106 7.24005C10.6799 7.94802 14.9389 7.58973 15.9621 6.78443C18.4237 4.84569 12.0614 -0.826694 10.1149 1.41435Z"
        stroke={color}
        stroke-width="1.04722"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.9553 10.4073C14.8889 11.3409 12.4136 16.6636 7.50778 16.6636C3.8439 16.6636 0.874207 13.6939 0.874207 10.0309C0.874207 5.46613 5.37783 2.54639 6.66889 3.83745C7.41218 4.58073 6.57501 8.07839 7.90827 9.41251C9.24153 10.7466 13.0217 9.47366 13.9553 10.4073Z"
        stroke={color}
        stroke-width="1.04722"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  work: (color: string = "black") => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.79654 12.3729V10.1871"
        stroke={color}
        stroke-width="1.05918"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.389 8.18169L16.3648 8.19916C14.3504 9.44011 11.6905 10.1895 8.79273 10.1895C5.89497 10.1895 3.24256 9.44011 1.22893 8.19916L1.20398 8.18169"
        stroke={color}
        stroke-width="1.05918"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.1355 9.73956C1.1355 4.62272 3.05098 2.91683 8.79661 2.91683C14.5431 2.91683 16.4577 4.62272 16.4577 9.73956C16.4577 14.8564 14.5431 16.5623 8.79661 16.5623C3.05098 16.5623 1.1355 14.8564 1.1355 9.73956Z"
        stroke={color}
        stroke-width="1.05918"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.5103 3.10117V2.57718C11.5103 1.52587 10.7426 0.67334 9.79689 0.67334H7.79657C6.85088 0.67334 6.08319 1.52587 6.08319 2.57718V3.10117"
        stroke={color}
        stroke-width="1.05918"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  profile: (color: string = "black") => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 14 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.00002 18.488C3.63046 18.488 0.75293 17.9637 0.75293 15.8637C0.75293 13.7638 3.6122 11.8252 7.00002 11.8252C10.3696 11.8252 13.2471 13.745 13.2471 15.8449C13.2471 17.944 10.3878 18.488 7.00002 18.488Z"
        stroke={color}
        stroke-width="1.04743"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.99341 8.91533C9.20466 8.91533 10.9969 7.12309 10.9969 4.91184C10.9969 2.70059 9.20466 0.907532 6.99341 0.907532C4.78216 0.907532 2.9891 2.70059 2.9891 4.91184C2.98163 7.11563 4.76142 8.90786 6.9652 8.91533C6.97516 8.91533 6.98428 8.91533 6.99341 8.91533Z"
        stroke={color}
        stroke-width="1.04743"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  logout: () => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0151 8.08895H1.14709"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.85968 5.94135L10.0161 8.08894L7.85968 10.2365"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.46771 4.78155C4.71075 2.14493 5.69764 1.1875 9.62312 1.1875C14.8529 1.1875 14.8529 2.88878 14.8529 8C14.8529 13.1112 14.8529 14.8125 9.62312 14.8125C5.69764 14.8125 4.71075 13.8551 4.46771 11.2184"
        stroke="black"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  arrow: () => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7798 4.55415L15.2256 8.9999L10.7798 13.4456"
        stroke="black"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.7746 8.99993L15.1011 8.99993"
        stroke="black"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  location: () => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.67545 8.14476C2.50441 8.14476 0.64505 6.10766 0.64505 3.94179C0.64505 2.2462 2.00159 0.871338 3.67545 0.871338C5.34931 0.871338 6.70624 2.2462 6.70624 3.94179C6.70624 6.10766 4.84688 8.14476 3.67545 8.14476Z"
        stroke="#202020"
        stroke-width="0.875114"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.69108 3.98626C4.69108 3.42811 4.23882 2.97585 3.68068 2.97585C3.12294 2.97585 2.67068 3.42811 2.67068 3.98626C2.67068 4.54399 3.12294 4.99625 3.68068 4.99625C4.23882 4.99625 4.69108 4.54399 4.69108 3.98626Z"
        stroke="#202020"
        stroke-width="0.875114"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  car: () => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4681 0.64563H6.25025C4.40864 0.64563 3.9928 1.56645 3.76508 2.70508L2.92348 6.71501H14.8048L13.9632 2.70508C13.7157 1.56645 13.3097 0.64563 11.4681 0.64563Z"
        stroke="black"
        stroke-width="0.99011"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.2701 13.2597C16.3493 14.131 15.6562 14.8835 14.7651 14.8835H13.369C12.567 14.8835 12.4581 14.537 12.3096 14.1211L12.1611 13.6756C11.9532 13.0716 11.8146 12.6558 10.7452 12.6558H6.94323C5.87391 12.6558 5.71548 13.1212 5.52736 13.6756L5.37885 14.1211C5.24024 14.5469 5.13132 14.8835 4.31943 14.8835H2.92337C2.03227 14.8835 1.3293 14.131 1.41841 13.2597L1.83426 8.73491C1.94317 7.61609 2.15109 6.7052 4.1016 6.7052H13.577C15.5275 6.7052 15.7354 7.61609 15.8443 8.73491L16.2701 13.2597Z"
        stroke="black"
        stroke-width="0.99011"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.91333 4.48718H2.17075"
        stroke="black"
        stroke-width="0.99011"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.5372 4.48718H14.7947"
        stroke="black"
        stroke-width="0.99011"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.39859 9.68524H6.62634"
        stroke="black"
        stroke-width="0.99011"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.0818 9.68524H13.3095"
        stroke="black"
        stroke-width="0.99011"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  thunder: () => (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.0502 10.9288H5.08161V17.585C5.08161 18.5711 6.37083 19.0313 7.0677 18.2917L14.4894 10.3371C15.134 9.64686 14.6114 8.56214 13.6357 8.56214H10.6043V1.90596C10.6043 0.919856 9.31512 0.459675 8.61825 1.19925L1.19653 9.15381C0.551922 9.84408 1.07458 10.9288 2.0502 10.9288Z"
        stroke="black"
        stroke-width="0.99011"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};

export default Icons;
