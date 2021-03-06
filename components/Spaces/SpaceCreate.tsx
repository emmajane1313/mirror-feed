import {styled} from 'stitches.config'
import Box from '@/design-system/primitives/Box'
import Button from '@/design-system/primitives/Button'
import Input from '@/design-system/primitives/Input'
import AddIcon from '@/design-system/icons/Add'
import React from 'react'
import * as Popover from '@radix-ui/react-popover';
import { CurationList, SubscribedPublication} from 'contexts'
import { useState } from 'react'
import Search from '@/design-system/Spaces/Search'

const StyledContent = styled(Popover.Content, {
  display:'flex',
  flexDirection:'column',
  gap:'$1',
  marginTop:'$1',
  borderRadius: '$2',
  padding: '$2',
  backgroundColor: '$background',
  border:'1px solid $foreground',
  color:'$foregroundText',
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
  variants:{
      size:{
          default:{
              width:128
          },
          large:{
              width:256
          }
      }
  },
  defaultVariants:{
      size:'default'
  }
})


const StyledCurationButton = styled(Popover.Trigger, {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    background:'none',
    borderRadius:'$round',
    border:'1px solid $foreground',
    color:'$foregroundText',
    padding:'$1', 
    transition:'$background',
    cursor:'pointer',
    '&:hover':{
        color:'$background',
        backgroundColor:'$foreground'
    },
    '&[data-state="open"]':{
        color:'$background',
        backgroundColor:'$foreground'
    }
})


const StyledLabel = styled('p', {
    margin:'0',
    marginBottom:'$1',
    fontSize:'$6'
})

const StyledSection = styled('section', {
    width:'100%',
    marginBottom:'$1',
    padding:'0',
    boxSizing:'border-box',
    display:'flex',
    flexDirection:'column'
})



const CreateSpace = ({setCuratedPublications}:{setCuratedPublications:(fn:(prevState:CurationList[]) => CurationList[]) => void;}) => {
    const [searchResult, setSearchResult] = useState<null | any>(null)
    const [list, setList] = useState<SubscribedPublication[]>([])
    const [searchState, setSearchState] = useState<'default' | 'loading' | 'not found' | 'error'>('default')
    const [errorMessage, setErrorMessage] = useState('')
    return(
         <Popover.Root modal={true}>
            <StyledCurationButton css={{transform:'scale(0.94)'}}>
                <AddIcon/>
            </StyledCurationButton> 
                <StyledContent 
                size='large'
                side='right' align="start">
                    <Box as='form' onSubmit={(e:React.SyntheticEvent)=>{
                        e.preventDefault();
                        const target = e.target as typeof e.target & {
                            listname:{
                                value:string
                            }
                        }
                        if(!target.listname.value) {
                                setErrorMessage('Give this space a name :-)')
                                return;
                        }
                        if(!list || list.length<=0){
                              setErrorMessage('Add someone to the list first!')
                              return;
                        }
                           setCuratedPublications((prevState:CurationList[])=>{        
                            const NewList:CurationList = {
                                    title:target.listname.value,
                                    publications:list
                            }
                                return [...prevState, NewList]
                            })
                        }}>
                        <StyledSection css={{paddingBottom:'$1'}}>
                            <StyledLabel>New space</StyledLabel>
                            <Input css={{width:'100%'}} name='listname' type='text' placeholder='Name'/>
                        </StyledSection>
                        <StyledSection>
                            <StyledLabel>Publications</StyledLabel>
                            <Search 
                            current={[]}
                            list={list}
                            setList={setList}
                            searchState={searchState} 
                            searchResult={searchResult} 
                            setSearchResult={setSearchResult}
                            setSearchState={setSearchState}
                            />
                        </StyledSection>
                        
                        <Box layout='flexBoxRow' css={{alignItems:'center', fontSize:'$6'}}>
                            <Button type='submit'>Create</Button> {errorMessage}
                        </Box>
                    </Box>
                </StyledContent>
            </Popover.Root>
    )
}


export default CreateSpace