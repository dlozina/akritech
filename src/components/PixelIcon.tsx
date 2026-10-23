type PixelIconProps = { variant: number };

const PixelIcon = ({ variant }: PixelIconProps) => (
  <svg
    viewBox="0 0 160 96"
    fill="none"
    shapeRendering="crispEdges"
    aria-hidden="true"
    focusable="false"
  >
    {variant === 0 && (
      <>
        <path
          d="M35 48H76V20H120M76 48V76H120"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M42 45H50V51H42M89 17H97V23H89M96 73H104V79H96"
          fill="#03A9F4"
        />
        <path
          d="M12 34H38V62H12zM112 7H140V35H112zM112 62H140V90H112z"
          fill="currentColor"
        />
        <path
          d="M18 40H32V56H18zM118 13H134V29H118zM118 68H134V84H118z"
          fill="#03A9F4"
        />
        <path d="M72 40H82V56H72z" fill="#03A9F4" />
      </>
    )}
    {variant === 1 && (
      <>
        <path
          d="M22 43V55M34 33V65M46 21V77M58 37V61M70 44V54"
          stroke="currentColor"
          strokeWidth="6"
        />
        <path
          d="M88 40V58M100 26V72M112 13V85M124 32V66M136 43V55"
          stroke="#03A9F4"
          strokeWidth="6"
        />
      </>
    )}
    {variant === 2 && (
      <>
        <path d="M10 33H49V64H10zM111 33H150V64H111z" fill="currentColor" />
        <path
          d="M18 41H41V46H18zM18 51H34V56H18zM119 41H142V46H119zM119 51H135V56H119z"
          fill="#C0EAFC"
        />
        <path d="M49 48H65M95 48H111" stroke="#03A9F4" strokeWidth="4" />
        <path d="M69 29H91V35H97V61H91V67H69V61H63V35H69z" fill="#03A9F4" />
        <path d="M71 47V53H77V59H83V53H89V41H83V47H77" fill="#013349" />
      </>
    )}
    {variant === 3 && (
      <>
        <path
          d="M19 17H141V72H19zM60 72H100V80H60zM48 80H112V86H48z"
          fill="currentColor"
        />
        <path d="M25 23H135V66H25z" fill="#013349" />
        <path
          d="M37 35H43V41H49V47H43V53H37M58 51H77"
          stroke="#4FC3F7"
          strokeWidth="4"
        />
        <path d="M96 34H120V39H96zM96 46H112V51H96z" fill="#026592" />
      </>
    )}
    {variant === 4 && (
      <>
        <path d="M28 21H132V75H28z" fill="currentColor" />
        <path d="M34 27H126V69H34z" fill="#013349" />
        <path
          d="M34 27H42V35H50V43H58V51H66V59H94V51H102V43H110V35H118V27"
          stroke="currentColor"
          strokeWidth="5"
        />
      </>
    )}
  </svg>
);

export { PixelIcon };
