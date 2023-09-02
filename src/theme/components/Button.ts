export const Button = {
  baseStyle: {
    border: '2px dashed',
    borderRadius: 0,
    boxShadow: 'md'
  },
  variants: {
    link: {
      border: 0,
      boxShadow: 'none'
    },
    green: {
      borderColor: 'green.400',
      color: 'green.400',
      bgColor: 'dark.600',
      _hover: {
        bg: 'green.500',
        borderColor: 'dark.500',
        color: 'white',
      }
    },
    orange: {
      borderColor: 'orange.400',
      color: 'orange.400',
      bgColor: 'dark.600',
      _hover: {
        bg: 'orange.500',
        borderColor: 'dark.500',
        color: 'white',
      }
    },
    light: {
      border: '2px solid',
      borderColor: "white",
      borderRadius: '5',
      _hover: {
        bg: "white", 
        color: "orange.800"
      }
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'green',
  },
}

export default Button
