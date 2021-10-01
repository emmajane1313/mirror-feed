import {atom, AtomEffect} from 'recoil'
import {history} from '@/design-system/Layout'
import {Entry} from '@/design-system/ArticlePreview'



export type IgnoredPublication = {
    ensLabel:string
}

export type PinnedItem = {
    entry:Entry
}

export type ReadingListItem = {
    entryDigest:string
}


const ignoredPublicationEffect = ():AtomEffect<IgnoredPublication[]> => ({setSelf, onSet, trigger}) => {
    const loadPersisted = async() => {
        if(trigger === 'get' && typeof localStorage !== 'undefined'){
            const ignoredList = localStorage.getItem('mirror-ignored-publication')
            if(ignoredList){
                setSelf(JSON.parse(ignoredList))
            }
        }   
    }   

    loadPersisted();
  
    onSet((newValue:IgnoredPublication[], oldValue:any) => {
        if(newValue instanceof Array){
            localStorage.setItem('mirror-ignored-publication', JSON.stringify(newValue))
            history.push({
                label: `${JSON.stringify(oldValue)} -> ${JSON.stringify(newValue)}`,
                undo: () => {
                    setSelf(oldValue);
                },
            });
        }
   
    })   
}

export const ignoredPublication = atom({
    key:'ignoredList',
    default:[] as IgnoredPublication[],
    effects_UNSTABLE: [ignoredPublicationEffect()]
})


const pinnedItemsEffect = ():AtomEffect<PinnedItem[]> => ({setSelf, onSet, trigger}) => {
    const loadPersisted = async() => {
        if(trigger === 'get' && typeof localStorage !== 'undefined'){
            const ignoredList = localStorage.getItem('mirror-pinned-items')
            if(ignoredList){
                setSelf(JSON.parse(ignoredList))
            }
        }   
    }   

    loadPersisted();
  
    onSet((newValue:PinnedItem[], oldValue:any) => {
        if(newValue instanceof Array){
            localStorage.setItem('mirror-pinned-items', JSON.stringify(newValue))
            history.push({
                label: `${JSON.stringify(oldValue)} -> ${JSON.stringify(newValue)}`,
                undo: () => {
                    setSelf(oldValue);
                },
            });
        }
    })   
}

export const pinnedItems = atom({
    key:'pinnedItemsList',
    default:[] as PinnedItem[],
    effects_UNSTABLE: [pinnedItemsEffect()]
})


const readLaterEffect = ():AtomEffect<ReadingListItem[]> => ({setSelf, onSet, trigger}) => {
    const loadPersisted = async() => {
        if(trigger === 'get' && typeof localStorage !== 'undefined'){
            const ignoredList = localStorage.getItem('mirror-read-later-items')
            if(ignoredList){
                setSelf(JSON.parse(ignoredList))
            }
        }   
    }   

    loadPersisted();
  
    onSet((newValue:ReadingListItem[], oldValue:any) => {
        if(newValue instanceof Array){
            localStorage.setItem('mirror-read-later-items', JSON.stringify(newValue))
            history.push({
                label: `${JSON.stringify(oldValue)} -> ${JSON.stringify(newValue)}`,
                undo: () => {
                    setSelf(oldValue);
                },
            });
        }
    })   
}

export const readLaterList = atom({
    key:'readLaterList',
    default:[] as ReadingListItem[],
    effects_UNSTABLE: [readLaterEffect()]
})