import * as Popover from '@radix-ui/react-popover';
import Box from '@/design-system/primitives/Box'
import { styled } from 'stitches.config';
import { ReactNode, ReactElement } from 'react';
import Button from '@/design-system/primitives/Button';

const StyledTrigger = styled(Popover.Trigger, {
    border:'1px solid $foreground', 
    color:'$foregroundText', 
    //this is rude, but for some reason simple height:33px doesn't work in Safari 
    height:'auto',
    minHeight:'33px',
    maxHeight:'33px',
    borderRadius:'$round', 
    display:'flex',
    gap:'$0',
    overflow:'hidden',
    alignItems:'center',
    fontSize:'$6',
    boxSizing:'border-box',
    padding:'$1', 
    lineHeight:'$6',
    background:'transparent',
    cursor:'pointer',
    variants:{
        isHighlighted:{
            true:{
                 border:'1px solid $foregroundBronze', 
                 color:'$foregroundTextBronze', 
                '&:hover':{
                    background:'$foregroundBronze',
                    color:'$backgroundBronze'
                },
                "&:disabled": {
                    background:'$foregroundBronze',
                    color:'$backgroundBronze'
                },

            },
            false:{
                  border:'1px solid $foreground', 
                  color:'$foregroundText', 
                  '&:hover':{
                    background:'$foreground',
                    color:'$background'
                },
            }
        },
    },
    defaultVariants:{
      isHighlighted:false
    }
})

const StyledContent = styled(Popover.Content, {
  marginLeft:'$1',
  borderRadius: '$2',
//   padding: '$4',
  position:'relative',
  overflow:'hidden',
  right:'calc(-$4 - $1 - 2px)',
  top:'calc(-$2 - 1px)',
  width: 256,
  backgroundColor: '$background',
  border:'1px solid $foregroundBorder',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { },
      '&[data-side="right"]': { },
      '&[data-side="bottom"]': { },
      '&[data-side="left"]': { },
    },
  },
})

const ButtonPopover = ({icon, children, label='', isHighlighted=true}:{icon:ReactElement, children:ReactNode | ReactNode[], label:string, isHighlighted:boolean}) =>{
    return(
          <Popover.Root modal={true}>    
              <StyledTrigger>
                  {icon}
              </StyledTrigger>
              <StyledContent side='left' align='start'>
                    <Box layout='flexBoxColumn'>
                        {children}
                    </Box>
              </StyledContent>
          </Popover.Root>
    )
}

export default ButtonPopover