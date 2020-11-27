function ButtonGroup({ children, justify = 'center' }) {
  return (
    <>
      <div className='button-group'>{children}</div>
      <style jsx>
        {`
          .button-group {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            justify-content: ${justify};
          }
        `}
      </style>
      <style global jsx>
        {`
            .button-group > *:not(:last-child) {
              margin-right: .5rem;
            }

            .button-group > * {
              margin-bottom: .5rem;
            }
          `}
      </style>
    </>
  )
}

export default ButtonGroup;
