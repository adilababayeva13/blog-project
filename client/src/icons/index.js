const LogoIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.84299 8.12534L11.1877 4.86101C11.7049 4.63118 12.2951 4.63118 12.8123 4.86101L20.157 8.12534C20.4817 8.26962 20.4817 8.73038 20.157 8.87466L12.8123 12.139C12.2951 12.3688 11.7049 12.3688 11.1877 12.139L3.84299 8.87466C3.51835 8.73038 3.51835 8.26962 3.84299 8.12534Z"
        stroke="#fcfdf2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5 8.5V12.5"
        stroke="#fcfdf2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.5 10.5V15.5C6.5 15.5 7 17.5 12 17.5C17 17.5 17.5 15.5 17.5 15.5V10.5"
        stroke="#fcfdf2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
const SearchIcon = (props) => {
  return (
    <svg
      {...props}
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.33309 13.1667C10.2786 13.1667 12.6664 10.7789 12.6664 7.83333C12.6664 4.88781 10.2786 2.5 7.33309 2.5C4.38757 2.5 1.99976 4.88781 1.99976 7.83333C1.99976 10.7789 4.38757 13.1667 7.33309 13.1667Z"
        stroke="#ffe9b1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9999 14.5L11.0999 11.6"
        stroke="#ffe9b1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const CloseIcon = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke="#222222"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#222222"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const AddIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 6L12 18" stroke="#222222" strokeLinecap="round" />
      <path d="M18 12L6 12" stroke="#222222" strokeLinecap="round" />
    </svg>
  )
}

export { LogoIcon, SearchIcon, CloseIcon, AddIcon }
