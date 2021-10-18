import Box from '@/design-system/primitives/Box'
import { keyframes } from 'stitches.config'

const textAnimation = keyframes({
//   '0%': { backgroundPosition: '100% center' },
  'to': {  backgroundPosition: '300% center' },
});

const Loader = ({size='default'}:{size:'small' | 'default'}) =>{
    return(
        <Box css={{transition:'$all', 
        fontSize:size === 'small' ? '$6' : '$p',
        color:'$foregroundText',
        background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8))',
        backgroundSize:'300% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation:`${textAnimation} 4s linear infinite`,
        animationDirection:'alternate',
        mixBlendMode:'multiply'
        }}>
            Patience
          </Box>
    )
}

export default Loader