export function UpArrow(props) {
  return (
    <svg
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22.42c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z" />
        <path d="M8 13.86l2.87-3.06a1.52 1.52 0 012.26 0L16 13.86" />
      </g>
    </svg>
  )
}

export function DownArrow(props) {
  return (
    <svg
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
      {...props}
    >
      <g
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22.42c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z" />
        <path d="M8 13.86l2.87-3.06a1.52 1.52 0 012.26 0L16 13.86" />
      </g>
    </svg>
  )
}

export function DeleteIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 6h16m-4 0l-.27-.812c-.263-.787-.394-1.18-.637-1.471a2 2 0 00-.803-.578C13.938 3 13.524 3 12.694 3h-1.388c-.829 0-1.244 0-1.596.139a2 2 0 00-.803.578c-.243.29-.374.684-.636 1.471L8 6m10 0v10.2c0 1.68 0 2.52-.327 3.162a3 3 0 01-1.311 1.311C15.72 21 14.88 21 13.2 21h-2.4c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.311C6 18.72 6 17.88 6 16.2V6m8 4v7m-4-7v7"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EditIcon(props) {
  return (
    <svg
      viewBox="0 -0.5 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7 5.128l1.566 1.247a.748.748 0 01-.006 1.095l-1.19 1.424-4.049 4.829a.517.517 0 01-.27.163l-2.1.476a.529.529 0 01-.551-.46v-2.158a.464.464 0 01.119-.28l3.974-4.493 1.364-1.63a.868.868 0 011.143-.213z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.033 7.619a.75.75 0 000-1.5v1.5zm-2.8-.75v-.75h-.002l.002.75zM5.5 10.619h.75v-.002l-.75.002zm0 5.625l.75.001v-.001H5.5zm3.733 3.75l-.002.75h.002v-.75zm5.6 0v.75h.002l-.002-.75zm3.733-3.75h-.75v.001l.75-.001zm.75-3.75a.75.75 0 10-1.5 0h1.5zm-3.43-5.81a.75.75 0 00-1.386.573l1.386-.573zm2.346 2.938a.75.75 0 00-.324-1.465l.324 1.465zM8.3 16.432a.75.75 0 100 1.5v-1.5zm7.467 1.5a.75.75 0 000-1.5v1.5zM12.033 6.119h-2.8v1.5h2.8v-1.5zm-2.802 0A4.492 4.492 0 004.75 10.62l1.5-.003a2.992 2.992 0 012.985-2.998l-.004-1.5zm-4.481 4.5v5.625h1.5v-5.625h-1.5zm0 5.623a4.492 4.492 0 004.481 4.502l.004-1.5a2.992 2.992 0 01-2.985-2.999l-1.5-.003zm4.483 4.502h5.6v-1.5h-5.6v1.5zm5.602 0a4.492 4.492 0 004.481-4.502l-1.5.003a2.992 2.992 0 01-2.985 2.999l.004 1.5zm4.481-4.5v-3.75h-1.5v3.75h1.5zM14.5 7.257a4.653 4.653 0 001.187 1.658c.607.53 1.48.942 2.545.707l-.324-1.465c-.465.103-.869-.053-1.237-.373a3.16 3.16 0 01-.785-1.1l-1.386.573zM8.3 17.932h7.467v-1.5H8.3v1.5z"
        fill="#000"
      />
    </svg>
  )
}

export function PlusIcon(props) {
  return (
    <svg viewBox="0 -0.5 21 21" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M374.55 369h3.15v2h-3.15v3h-2.1v-3h-3.15v-2h3.15v-3h2.1v3zm-1.05 9c-4.632 0-8.4-3.589-8.4-8s3.768-8 8.4-8c4.632 0 8.4 3.589 8.4 8s-3.768 8-8.4 8zm0-18c-5.8 0-10.5 4.477-10.5 10s4.7 10 10.5 10 10.5-4.477 10.5-10-4.7-10-10.5-10z"
        transform="translate(-419 -520) translate(56 160)"
        fill="#000"
        stroke="none"
        strokeWidth={1}
        fillRule="evenodd"
      />
    </svg>
  )
}

export function AddImageIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 4H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C4 6.28 4 7.12 4 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C6.28 20 7.12 20 8.8 20h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C20 17.72 20 16.88 20 15.2V11" />
        <path d="M4 16l4.293-4.293a1 1 0 011.414 0L13 15m0 0l2.793-2.793a1 1 0 011.414 0L20 15m-7 0l2.25 2.25M18.5 3v2.5m0 2.5V5.5m0 0H16m2.5 0H21" />
      </g>
    </svg>
  )
}