import {VscTwitter} from 'react-icons/vsc'
import SidebarOptions from '../SidebarOptions/SidebarOptions'
import { useState } from 'react';
import {RiHome7Line , RiHome7Fill ,RiFileList2Fill} from 'react-icons/ri'
import {FiBell , FiMoreHorizontal} from 'react-icons/fi'
import {HiOutlineMail,HiMail} from 'react-icons/hi'
import {FaRegListAlt,FaHashtag,FaBell} from 'react-icons/fa'
import {CgMoreO} from 'react-icons/cg';
import {BiHash} from 'react-icons/bi'
import {BsPersonFill,BsPerson,BsBookmarkFill,BsBookmark} from 'react-icons/bs'

const style = {
  wrapper : `flex-[0.7] px-8 flex flex-col`,
  twitterIconContainer : `text-3xl m-4`,
  tweetButton: `bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer`,
  navContainer : `flex-1`,
  profileButton : `flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-full`,
  profileLeft : `flex items-center justify-center mr-4`,
  profileImage : `height-22 w-12 rounded-full`,
  profileRight : `flex-1 flex`,
  details : `flex-1`,
  name : `text-lg`,
  handle : `text-[#8899a6]`,
  moreContainer : `flex items-center mr-2`
}
 
export default function Sidebar({initialSelectionIcon = 'Home'}) {
  const [selected,setSelected] = useState(initialSelectionIcon);

  return (
    <div className={style.wrapper}>
      <div className={style.twitterIconContainer}>
        <VscTwitter />
      </div>
      <div className={style.navContainer}>
       <SidebarOptions 
        text={'Home'}
        Icon={selected === 'Home' ? RiHome7Fill  : RiHome7Line }
        isActive={Boolean(selected === 'Home')}
        setSelected={setSelected}
        redirect={'/'}
       />
        <SidebarOptions 
        text={'Explore'}
        Icon={selected === 'Explore' ? FaHashtag  : BiHash }
        isActive={Boolean(selected === 'Explore')}
        setSelected={setSelected}
        redirect={'/explore'}
       />
      <SidebarOptions 
        text={'Notification'}
        Icon={selected === 'Notification' ? FaBell  : FiBell }
        isActive={Boolean(selected === 'Notification')}
        setSelected={setSelected}
        redirect={'/notification'}
       />
          <SidebarOptions 
        text={'Messages'}
        Icon={selected === 'Messages' ? HiMail  : HiOutlineMail }
        isActive={Boolean(selected === 'Messages')}
        setSelected={setSelected}
        redirect={'/messages'}
       />
            <SidebarOptions 
        text={'Bookmarks'}
        Icon={selected === 'Bookmarks' ? BsBookmarkFill  : BsBookmark }
        isActive={Boolean(selected === 'Bookmarks')}
        setSelected={setSelected}
        redirect={'/bookmarks'}
       />
          <SidebarOptions 
        text={'Lists'}
        Icon={selected === 'Lists' ? RiFileList2Fill  : FaRegListAlt }
        isActive={Boolean(selected === 'Lists')}
        setSelected={setSelected}
        redirect={'/lists'}
       />
        <SidebarOptions 
        text={'Profile'}
        Icon={selected === 'Profile' ? BsPersonFill  : BsPerson }
        isActive={Boolean(selected === 'Profile')}
        setSelected={setSelected}
        redirect={'/profile'}
       />
       <SidebarOptions text={'More'} Icon={CgMoreO} 
        setSelected={setSelected}
       
       />
      <div className={style.tweetButton}>
        Mint
      </div>
      </div>
      <div className={style.profileButton}>
        <div className={style.profileLeft}>

        </div>
        <div className={style.profileRight}>
          <div className={style.details}>
            <div className={style.name}>sakthi</div>
            <div className={style.handle}>@Ox25F...Jx95f</div>
          </div>
        </div>
        <div className={style.moreContainer}>
          <FiMoreHorizontal />
      </div>
      </div>
     
     
    </div>
  )
}
